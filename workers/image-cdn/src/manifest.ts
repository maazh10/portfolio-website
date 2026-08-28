import { getImageDimensions } from "./image-dimensions";

const IMAGE_EXTENSIONS = new Set([".jpg", ".jpeg", ".png", ".webp", ".avif"]);
const MANIFEST_KEY = "photography/manifest.json";
const PHOTOGRAPHY_PREFIX = "photography/";

export interface ManifestImage {
  path: string;
  uploadedAt: string;
  width?: number;
  height?: number;
}

export interface ManifestRegion {
  id: string;
  images: ManifestImage[];
}

export interface Manifest {
  version: 3;
  generatedAt: string;
  regions: ManifestRegion[];
}

function isImageFile(filename: string): boolean {
  const dot = filename.lastIndexOf(".");
  if (dot === -1) return false;
  return IMAGE_EXTENSIONS.has(filename.slice(dot).toLowerCase());
}

async function listAllObjects(
  bucket: R2Bucket,
  prefix: string,
): Promise<R2Object[]> {
  const objects: R2Object[] = [];
  let cursor: string | undefined;

  do {
    const result = await bucket.list({ prefix, cursor });
    for (const obj of result.objects) {
      objects.push(obj);
    }
    cursor = result.truncated ? result.cursor : undefined;
  } while (cursor);

  return objects;
}

export async function buildManifest(bucket: R2Bucket): Promise<Manifest> {
  const topLevel = await bucket.list({
    prefix: PHOTOGRAPHY_PREFIX,
    delimiter: "/",
  });

  const regions: ManifestRegion[] = [];

  for (const prefix of topLevel.delimitedPrefixes ?? []) {
    const regionId = prefix
      .slice(PHOTOGRAPHY_PREFIX.length)
      .replace(/\/$/, "");

    if (regionId.startsWith(".") || regionId.startsWith("_")) continue;

    const allObjects = await listAllObjects(bucket, prefix);

    const images: ManifestImage[] = [];
    for (const obj of allObjects) {
      const filename = obj.key.slice(prefix.length);
      if (filename.includes("/")) continue;
      if (filename.startsWith(".") || filename.startsWith("_")) continue;
      if (!isImageFile(filename)) continue;

      const dimensions = await getImageDimensions(bucket, obj.key);
      images.push({
        path: obj.key,
        uploadedAt: obj.uploaded.toISOString(),
        ...dimensions,
      });
    }

    images.sort((a, b) => b.uploadedAt.localeCompare(a.uploadedAt));

    if (images.length > 0) {
      regions.push({ id: regionId, images });
    }
  }

  regions.sort((a, b) => a.id.localeCompare(b.id));

  return {
    version: 3,
    generatedAt: new Date().toISOString(),
    regions,
  };
}

export async function writeManifest(
  bucket: R2Bucket,
  manifest: Manifest,
): Promise<void> {
  await bucket.put(MANIFEST_KEY, JSON.stringify(manifest), {
    httpMetadata: { contentType: "application/json" },
  });
}

export async function readCachedManifest(
  bucket: R2Bucket,
): Promise<Manifest | null> {
  const obj = await bucket.get(MANIFEST_KEY);
  if (!obj) return null;

  try {
    return JSON.parse(await obj.text()) as Manifest;
  } catch {
    return null;
  }
}
