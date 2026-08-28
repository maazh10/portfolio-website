import {
  buildManifest,
  readCachedManifest,
  writeManifest,
} from "./manifest";

interface R2EventNotification {
  account: string;
  bucket: string;
  eventTime: string;
  action: "PutObject" | "DeleteObject" | "CopyObject" | "LifecycleDeletion";
  object: {
    key: string;
    size: number;
    eTag: string;
  };
}

interface Env {
  BUCKET: R2Bucket;
  IMAGES: ImagesBinding;
  ALLOWED_ORIGIN?: string;
}

const CACHE_CONTROL = "public, max-age=31536000, immutable";
const MANIFEST_CACHE_CONTROL = "no-cache";
const MANIFEST_KEY = "photography/manifest.json";

function outputFormat(
  request: Request,
  formatParam: string,
): "image/avif" | "image/webp" | "image/jpeg" {
  if (formatParam === "jpeg" || formatParam === "jpg") {
    return "image/jpeg";
  }

  if (formatParam === "webp") {
    return "image/webp";
  }

  if (formatParam === "avif") {
    return "image/avif";
  }

  const accept = request.headers.get("Accept") ?? "";
  if (accept.includes("image/avif")) {
    return "image/avif";
  }

  if (accept.includes("image/webp")) {
    return "image/webp";
  }

  return "image/jpeg";
}

async function handleManifest(
  request: Request,
  env: Env,
): Promise<Response> {
  let manifest = await readCachedManifest(env.BUCKET);

  if (!manifest || manifest.version !== 3) {
    manifest = await buildManifest(env.BUCKET);
    await writeManifest(env.BUCKET, manifest);
  }

  const body =
    request.method === "HEAD" ? null : JSON.stringify(manifest);

  return cors(
    new Response(body, {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": MANIFEST_CACHE_CONTROL,
      },
    }),
    env,
    request,
  );
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    if (request.method === "OPTIONS") {
      return cors(new Response(null, { status: 204 }), env, request);
    }

    if (request.method !== "GET" && request.method !== "HEAD") {
      return new Response("Method not allowed", { status: 405 });
    }

    const url = new URL(request.url);
    const key = decodeURIComponent(url.pathname.replace(/^\/+/, ""));

    if (!key || key.includes("..")) {
      return new Response("Not found", { status: 404 });
    }

    if (key === MANIFEST_KEY) {
      return handleManifest(request, env);
    }

    const formatParam = url.searchParams.get("f") ?? "auto";

    const object = await env.BUCKET.get(key);
    if (!object) {
      return new Response("Not found", { status: 404 });
    }

    const widthParam = url.searchParams.get("w");
    const qualityParam = url.searchParams.get("q");

    if (!widthParam && !qualityParam) {
      const response = new Response(
        request.method === "HEAD" ? null : object.body,
        {
          status: 200,
          headers: {
            "Content-Type":
              object.httpMetadata?.contentType ?? "image/jpeg",
            "Cache-Control": CACHE_CONTROL,
            Vary: "Accept",
          },
        },
      );
      return cors(response, env, request);
    }

    const transformedWidth = parseInt(widthParam ?? "600", 10);
    const transformedQuality = parseInt(qualityParam ?? "75", 10);

    if (
      !Number.isFinite(transformedWidth) ||
      transformedWidth < 1 ||
      transformedWidth > 4096
    ) {
      return new Response('Invalid "w" parameter', { status: 400 });
    }

    const transformed = (
      await env.IMAGES.input(object.body)
        .transform({ width: transformedWidth, fit: "scale-down" })
        .output({
          format: outputFormat(request, formatParam),
          quality: transformedQuality,
        })
    ).response();

    const response = new Response(
      request.method === "HEAD" ? null : transformed.body,
      {
        status: transformed.status,
        headers: {
          "Content-Type":
            transformed.headers.get("Content-Type") ?? "image/jpeg",
          "Cache-Control": CACHE_CONTROL,
          Vary: "Accept",
        },
      },
    );

    return cors(response, env, request);
  },

  async queue(
    batch: MessageBatch<R2EventNotification>,
    env: Env,
  ): Promise<void> {
    const hasPhotographyChange = batch.messages.some(
      (msg) =>
        msg.body.object.key.startsWith("photography/") &&
        msg.body.object.key !== MANIFEST_KEY,
    );

    if (hasPhotographyChange) {
      const manifest = await buildManifest(env.BUCKET);
      await writeManifest(env.BUCKET, manifest);
    }

    batch.ackAll();
  },
};

function cors(response: Response, env: Env, request?: Request): Response {
  const headers = new Headers(response.headers);
  const allowedOrigin = env.ALLOWED_ORIGIN ?? "*";

  // Reflect localhost origins so local Astro dev can fetch the CDN without
  // widening production CORS.
  const requestOrigin = request?.headers.get("Origin") ?? "";
  const isLocalhost = /^https?:\/\/localhost(:\d+)?$/.test(requestOrigin);
  const origin = isLocalhost ? requestOrigin : allowedOrigin;

  headers.set("Access-Control-Allow-Origin", origin);
  headers.set("Access-Control-Allow-Methods", "GET, HEAD, OPTIONS");
  headers.set("Access-Control-Max-Age", "86400");
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers,
  });
}
