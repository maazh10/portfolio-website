FROM node:lts AS build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

FROM nginx:alpine AS runtime

# Full site at document root: `/` (home) and `/blog/*` (posts), matching Astro `base: ''`.
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80