# maazh.tech

Personal site built with [Astro](https://astro.build): portfolio home page at `/` and blog posts at `/blog`.

**Live:** https://maazh.tech  

## Development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

## Docker

Static site is built in the `Dockerfile` and served with nginx. For local proxy testing:

```bash
docker compose -f docker-compose.local.yml up --build
```

Production deploy uses `docker-compose.yml` on a VM behind `jwilder/nginx-proxy` (see `.github/workflows/build.yml`).
