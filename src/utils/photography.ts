import photographyData from "../data/photography.json";
import { getImageUrl } from "./images";

interface SequentialImages {
  folder: string;
  count: number;
  ext: string;
}

interface ExplicitImage {
  file: string;
}

type PhotoEntry = SequentialImages | ExplicitImage;

interface PhotoShoot {
  id: string;
  region: string;
  pubDate: string;
  images: PhotoEntry[];
}

export interface GalleryImage {
  src: string;
  alt: string;
  region: string;
}

function isSequential(entry: PhotoEntry): entry is SequentialImages {
  return "folder" in entry;
}

function expandShoot(shoot: PhotoShoot): GalleryImage[] {
  return shoot.images.flatMap((entry) => {
    if (isSequential(entry)) {
      return Array.from({ length: entry.count }, (_, i) => ({
        src: getImageUrl(`${entry.folder}/${i + 1}.${entry.ext}`),
        alt: `Photo from ${shoot.id}`,
        region: shoot.region,
      }));
    }

    return [
      {
        src: getImageUrl(entry.file),
        alt: `Photo from ${shoot.id}`,
        region: shoot.region,
      },
    ];
  });
}

export function getPhotographyImages(): {
  images: GalleryImage[];
  regions: string[];
} {
  const shoots = (photographyData as PhotoShoot[])
    .slice()
    .sort((a, b) => new Date(b.pubDate).valueOf() - new Date(a.pubDate).valueOf());

  const images = shoots.flatMap(expandShoot);
  const regions = [...new Set(shoots.map((shoot) => shoot.region))];

  return { images, regions };
}
