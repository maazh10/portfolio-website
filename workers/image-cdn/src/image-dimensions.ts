interface ImageDimensions {
  width: number;
  height: number;
}

const HEADER_BYTES = 1048576;

function readUint16(bytes: Uint8Array, offset: number): number {
  return (bytes[offset] << 8) | bytes[offset + 1];
}

function readUint32(bytes: Uint8Array, offset: number): number {
  return (
    bytes[offset] * 0x1000000 +
    ((bytes[offset + 1] << 16) | (bytes[offset + 2] << 8) | bytes[offset + 3])
  );
}

function jpegDimensions(bytes: Uint8Array): ImageDimensions | null {
  if (bytes.length < 4 || bytes[0] !== 0xff || bytes[1] !== 0xd8) return null;

  let offset = 2;
  while (offset + 9 < bytes.length) {
    if (bytes[offset] !== 0xff) {
      offset++;
      continue;
    }

    const marker = bytes[offset + 1];
    offset += 2;
    if (marker === 0xd8 || marker === 0xd9) continue;
    if (marker === 0xda) break;
    if (offset + 2 > bytes.length) break;

    const segmentLength = readUint16(bytes, offset);
    if (segmentLength < 2 || offset + segmentLength > bytes.length) break;

    const isStartOfFrame =
      marker >= 0xc0 &&
      marker <= 0xcf &&
      ![0xc4, 0xc8, 0xcc].includes(marker);
    if (isStartOfFrame && segmentLength >= 7) {
      return {
        height: readUint16(bytes, offset + 3),
        width: readUint16(bytes, offset + 5),
      };
    }

    offset += segmentLength;
  }

  return null;
}

function pngDimensions(bytes: Uint8Array): ImageDimensions | null {
  if (
    bytes.length < 24 ||
    readUint32(bytes, 0) !== 0x89504e47 ||
    readUint32(bytes, 4) !== 0x0d0a1a0a
  ) {
    return null;
  }

  return {
    width: readUint32(bytes, 16),
    height: readUint32(bytes, 20),
  };
}

function webpDimensions(bytes: Uint8Array): ImageDimensions | null {
  if (
    bytes.length < 30 ||
    String.fromCharCode(...bytes.slice(0, 4)) !== "RIFF" ||
    String.fromCharCode(...bytes.slice(8, 12)) !== "WEBP"
  ) {
    return null;
  }

  const chunk = String.fromCharCode(...bytes.slice(12, 16));
  if (chunk === "VP8X") {
    return {
      width: 1 + bytes[24] + (bytes[25] << 8) + (bytes[26] << 16),
      height: 1 + bytes[27] + (bytes[28] << 8) + (bytes[29] << 16),
    };
  }

  if (chunk === "VP8 " && bytes.length >= 30) {
    return {
      width: readUint16(bytes, 26) & 0x3fff,
      height: readUint16(bytes, 28) & 0x3fff,
    };
  }

  if (chunk === "VP8L" && bytes.length >= 25) {
    return {
      width: 1 + bytes[21] + ((bytes[22] & 0x3f) << 8),
      height:
        1 + ((bytes[22] >> 6) & 0x03) + (bytes[23] << 2) + ((bytes[24] & 0x0f) << 10),
    };
  }

  return null;
}

function avifDimensions(bytes: Uint8Array): ImageDimensions | null {
  if (bytes.length < 12 || String.fromCharCode(...bytes.slice(4, 8)) !== "ftyp") {
    return null;
  }

  for (let offset = 0; offset + 20 <= bytes.length; offset++) {
    if (String.fromCharCode(...bytes.slice(offset + 4, offset + 8)) !== "ispe") {
      continue;
    }

    return {
      width: readUint32(bytes, offset + 12),
      height: readUint32(bytes, offset + 16),
    };
  }

  return null;
}

export function parseImageDimensions(bytes: Uint8Array): ImageDimensions | null {
  return (
    jpegDimensions(bytes) ??
    pngDimensions(bytes) ??
    webpDimensions(bytes) ??
    avifDimensions(bytes)
  );
}

export async function getImageDimensions(
  bucket: R2Bucket,
  key: string,
): Promise<ImageDimensions | null> {
  const object = await bucket.get(key, {
    range: { offset: 0, length: HEADER_BYTES },
  });
  if (!object) return null;

  return parseImageDimensions(new Uint8Array(await object.arrayBuffer()));
}