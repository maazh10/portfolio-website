import { IMAGE_CDN_ORIGIN } from "../consts";

const THUMBNAIL_WIDTHS = [300, 600] as const;
const PREVIEW_WIDTH = 600;
const PREVIEW_QUALITY = 75;
const THUMBNAIL_QUALITY = 60;

export function getImageUrl(path: string | undefined): string {
  const normalizedBase = IMAGE_CDN_ORIGIN.replace(/\/$/, "");
  const normalizedPath = path?.replace(/^\/+/, "") || "";

  return `${normalizedBase}/${normalizedPath}`;
}

export function r2KeyFromUrl(url: string): string | null {
  const normalizedBase = IMAGE_CDN_ORIGIN.replace(/\/$/, "");
  const normalizedUrl = url.replace(/\/$/, "");

  if (!normalizedUrl.startsWith(normalizedBase)) {
    return null;
  }

  return normalizedUrl.slice(normalizedBase.length).replace(/^\//, "");
}

export function getFullSizeImageUrl(originalUrl: string): string {
  const key = r2KeyFromUrl(originalUrl);
  if (!key || !IMAGE_CDN_ORIGIN) {
    return originalUrl;
  }

  return `${IMAGE_CDN_ORIGIN}/${key}`;
}

export function getResizedImageUrl(
  originalUrl: string,
  width: number = PREVIEW_WIDTH,
  quality: number = PREVIEW_QUALITY,
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
  "(max-width: 900px) 50vw, 33vw";

export function getProgressiveImageSources(originalUrl: string): {
  low: string;
  medium: string;
} {
  return {
    low: getResizedImageUrl(originalUrl, 300, THUMBNAIL_QUALITY),
    medium: getResizedImageUrl(originalUrl, 600, PREVIEW_QUALITY),
  };
}
