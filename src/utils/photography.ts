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
  generatedAt: string;
  regions: ManifestRegion[];
}
