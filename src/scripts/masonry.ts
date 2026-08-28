export interface MasonryOptions {
  columns?: number;
  shuffle?: boolean;
}

const SKELETON_HEIGHTS = [200, 260, 220, 300, 240, 280, 210, 270, 230, 250];

export function createMasonryItem(
  fullSizeUrl: string,
  resizedUrl: string,
  srcset: string,
  sizes: string,
  alt: string,
  index: number,
  dimensions?: { width: number; height: number },
): HTMLElement {
  const a = document.createElement("a");
  a.href = fullSizeUrl;
  a.target = "_blank";
  a.rel = "noopener noreferrer";
  a.className = "masonry-item";
  a.dataset.originalIndex = String(index);
  a.style.setProperty("--delay", `${Math.min(index, 12) * 0.04}s`);
  if (dimensions) {
    a.style.setProperty(
      "--skeleton-aspect-ratio",
      `${dimensions.width} / ${dimensions.height}`,
    );
  } else {
    a.style.setProperty(
      "--skeleton-height",
      `${SKELETON_HEIGHTS[index % SKELETON_HEIGHTS.length]}px`,
    );
  }

  const skeleton = document.createElement("div");
  skeleton.className = "skeleton";
  skeleton.setAttribute("aria-hidden", "true");

  const img = document.createElement("img");
  img.dataset.src = resizedUrl;
  img.dataset.srcset = srcset;
  img.sizes = sizes;
  img.alt = alt;
  img.decoding = "async";

  a.appendChild(skeleton);
  a.appendChild(img);
  return a;
}

export function setupMasonryGallery(
  galleryId: string,
  options: MasonryOptions = {},
): void {
  const el = document.getElementById(galleryId);
  if (!el) return;

  const defaultColumns =
    options.columns ?? parseInt(el.dataset.columns ?? "3", 10);
  const shuffle = options.shuffle ?? el.dataset.shuffle === "true";

  let resizeTimer: ReturnType<typeof setTimeout> | null = null;
  let resizeHandler: (() => void) | null = null;
  let loadComplete = false;

  function startImageLoad(img: HTMLImageElement) {
    if (!img || img.src) return;
    const src = img.dataset.src;
    if (!src) return;
    img.src = src;
    const srcset = img.dataset.srcset;
    if (srcset) img.srcset = srcset;
  }

  function relayout() {
    const gallery = document.getElementById(galleryId);
    if (!gallery) return;

    gallery.querySelectorAll<HTMLElement>(".masonry-item").forEach((item) => {
      const img = item.querySelector("img");
      if (
        !item.classList.contains("visible") &&
        img?.complete &&
        img.naturalWidth > 0
      ) {
        item.classList.remove("loading");
        item.classList.add("visible");
      }
    });

    layout();
  }

  function shuffleItems() {
    const gallery = document.getElementById(galleryId);
    if (!gallery) return;

    const items = Array.from(
      gallery.querySelectorAll<HTMLElement>(".masonry-item"),
    );
    for (let i = items.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [items[i], items[j]] = [items[j], items[i]];
    }

    items.forEach((item, index) => {
      gallery.appendChild(item);
      item.style.setProperty("--delay", `${Math.min(index, 12) * 0.04}s`);
    });

    layout();
  }

  function getColumnCount() {
    return window.innerWidth <= 900 ? 2 : defaultColumns;
  }

  function layout() {
    const gallery = document.getElementById(galleryId);
    if (!gallery) return;

    const items = Array.from(
      gallery.querySelectorAll<HTMLElement>(
        ".masonry-item:not(.filtered-out)",
      ),
    );
    const gap = window.innerWidth <= 900 ? 8 : 12;
    const cols = getColumnCount();
    const totalWidth = gallery.clientWidth;
    const colWidth = (totalWidth - gap * (cols - 1)) / cols;

    const colHeights = Array<number>(cols).fill(0);
    const colLastItems = Array<HTMLElement | null>(cols).fill(null);

    items.forEach((item) => {
      item.style.height = "";
      const img = item.querySelector("img");
      if (img) {
        img.style.height = "";
        img.style.objectFit = "";
        img.style.objectPosition = "";
      }
      const skeleton = item.querySelector<HTMLElement>(".skeleton");
      if (skeleton) {
        skeleton.style.height = "";
        skeleton.style.aspectRatio = "";
      }
    });

    items.forEach((item) => {
      const minHeight = Math.min(...colHeights);
      const colIndex = colHeights.indexOf(minHeight);

      item.style.width = `${colWidth}px`;
      item.style.left = `${colIndex * (colWidth + gap)}px`;
      item.style.top = `${colHeights[colIndex]}px`;

      colHeights[colIndex] += item.offsetHeight + gap;
      colLastItems[colIndex] = item;
    });

    if (!items.length) {
      gallery.style.height = "0";
      return;
    }

    const maxH = Math.max(...colHeights);
    gallery.style.height = `${maxH}px`;

    if (!loadComplete) {
      const currentMin = parseInt(gallery.style.minHeight, 10) || 0;
      gallery.style.minHeight = `${Math.max(maxH, currentMin)}px`;
      return;
    }

    colLastItems.forEach((item, col) => {
      if (!item) return;
      const shortfall = maxH - colHeights[col];
      if (shortfall <= 0) return;

      item.style.height = `${item.offsetHeight + shortfall}px`;
      const img = item.querySelector("img");
      if (img) {
        img.style.height = "100%";
        img.style.objectFit = "cover";
        img.style.objectPosition = "center";
      }
      if (item.classList.contains("loading")) {
        const skeleton = item.querySelector<HTMLElement>(".skeleton");
        if (skeleton) {
          skeleton.style.height = "100%";
          skeleton.style.aspectRatio = "auto";
        }
      }
    });
  }

  function init() {
    const gallery = document.getElementById(galleryId);
    if (!gallery) return;

    if (shuffle) shuffleItems();

    const items = Array.from(
      gallery.querySelectorAll<HTMLElement>(".masonry-item"),
    );
    const images = items.map((item) => item.querySelector("img")!);

    items.forEach((item) => {
      item.classList.remove("visible");
      item.classList.add("loading");
    });

    layout();
    images.forEach((img) => startImageLoad(img));

    let loaded = 0;
    const total = images.length;

    function onLoad(item: HTMLElement) {
      loaded++;
      item.classList.remove("loading");
      item.classList.add("visible");

      if (loaded === total) {
        loadComplete = true;
        const gallery = document.getElementById(galleryId);
        if (gallery) gallery.style.minHeight = "";
      }

      layout();
    }

    images.forEach((img, index) => {
      const item = items[index];
      if (img.complete && img.naturalWidth > 0) {
        onLoad(item);
      } else {
        img.addEventListener("load", () => onLoad(item), { once: true });
        img.addEventListener("error", () => onLoad(item), { once: true });
      }
    });

    if (resizeHandler) {
      window.removeEventListener("resize", resizeHandler);
    }
    resizeHandler = () => {
      if (resizeTimer !== null) clearTimeout(resizeTimer);
      resizeTimer = setTimeout(layout, 100);
    };
    window.addEventListener("resize", resizeHandler);
  }

  function scheduleInit() {
    const gallery = document.getElementById(galleryId);
    if (!gallery) return;

    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          io.disconnect();
          init();
        }
      },
      { rootMargin: "200px 0px" },
    );

    io.observe(gallery);
  }

  if (shuffle) {
    const registerShuffle = () => {
      document
        .getElementById(galleryId)
        ?.addEventListener("masonry-shuffle", shuffleItems);
    };
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", registerShuffle);
    } else {
      registerShuffle();
    }
  }

  const registerRelayout = () => {
    document
      .getElementById(galleryId)
      ?.addEventListener("masonry-relayout", relayout);
  };
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", registerRelayout);
  } else {
    registerRelayout();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", scheduleInit);
  } else {
    scheduleInit();
  }
}
