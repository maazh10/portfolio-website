/// <reference path="../.astro/types.d.ts" />

interface ImportMetaEnv {
  readonly PUBLIC_IMAGE_CDN_ORIGIN?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
