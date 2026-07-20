import { IMAGE_CDN_ORIGIN, R2_PUBLIC_BASE } from "../consts";

const THUMBNAIL_WIDTHS = [400, 600, 900] as const;
const DEFAULT_THUMBNAIL_WIDTH = 600;
const DEFAULT_QUALITY = 75;

export function r2KeyFromUrl(url: string): string | null {
  const normalizedBase = R2_PUBLIC_BASE.replace(/\/$/, "");
  const normalizedUrl = url.replace(/\/$/, "");

  if (!normalizedUrl.startsWith(normalizedBase)) {
    return null;
  }

  return normalizedUrl.slice(normalizedBase.length).replace(/^\//, "");
}

export function getResizedImageUrl(
  originalUrl: string,
  width: number = DEFAULT_THUMBNAIL_WIDTH,
  quality: number = DEFAULT_QUALITY,
): string {
  const key = r2KeyFromUrl(originalUrl);
  if (!key || !IMAGE_CDN_ORIGIN) {
    return originalUrl;
  }

  const params = new URLSearchParams({
    w: String(width),
    q: String(quality),
    f: "auto",
  });

  return `${IMAGE_CDN_ORIGIN}/${key}?${params}`;
}

export function getSrcSet(originalUrl: string): string {
  return THUMBNAIL_WIDTHS.map(
    (width) => `${getResizedImageUrl(originalUrl, width)} ${width}w`,
  ).join(", ");
}

export const GALLERY_IMAGE_SIZES =
  "(max-width: 480px) 100vw, (max-width: 900px) 50vw, 33vw";
