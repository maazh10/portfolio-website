FROM node:lts AS build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

ARG PUBLIC_IMAGE_CDN_ORIGIN
ENV PUBLIC_IMAGE_CDN_ORIGIN=$PUBLIC_IMAGE_CDN_ORIGIN

RUN npm run build

FROM nginx:alpine AS runtime

COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80