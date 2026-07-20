interface Env {
  BUCKET: R2Bucket;
  IMAGES: ImagesBinding;
  ALLOWED_ORIGIN?: string;
}

const CACHE_CONTROL = "public, max-age=31536000, immutable";

function outputFormat(request: Request, formatParam: string): "image/avif" | "image/webp" | "image/jpeg" {
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

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    if (request.method === "OPTIONS") {
      return cors(new Response(null, { status: 204 }), env);
    }

    if (request.method !== "GET" && request.method !== "HEAD") {
      return new Response("Method not allowed", { status: 405 });
    }

    const url = new URL(request.url);
    const key = decodeURIComponent(url.pathname.replace(/^\/+/, ""));

    if (!key || key.includes("..")) {
      return new Response("Not found", { status: 404 });
    }

    const width = parseInt(url.searchParams.get("w") ?? "600", 10);
    const quality = parseInt(url.searchParams.get("q") ?? "75", 10);
    const formatParam = url.searchParams.get("f") ?? "auto";

    if (!Number.isFinite(width) || width < 1 || width > 4096) {
      return new Response('Invalid "w" parameter', { status: 400 });
    }

    const object = await env.BUCKET.get(key);
    if (!object) {
      return new Response("Not found", { status: 404 });
    }

    const transformed = (
      await env.IMAGES.input(object.body)
        .transform({ width, fit: "scale-down" })
        .output({
          format: outputFormat(request, formatParam),
          quality,
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

    return cors(response, env);
  },
};

function cors(response: Response, env: Env): Response {
  const headers = new Headers(response.headers);
  const origin = env.ALLOWED_ORIGIN ?? "*";
  headers.set("Access-Control-Allow-Origin", origin);
  headers.set("Access-Control-Allow-Methods", "GET, HEAD, OPTIONS");
  headers.set("Access-Control-Max-Age", "86400");
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers,
  });
}
