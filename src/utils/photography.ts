export interface ManifestImage {
  path: string;
  uploadedAt: string;
}

export interface ManifestRegion {
  id: string;
  images: ManifestImage[];
}

export interface Manifest {
  generatedAt: string;
  regions: ManifestRegion[];
}
