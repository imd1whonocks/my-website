# build environment
FROM node:12.18.1-alpine3.11 AS build
WORKDIR /my-website
ENV PATH /my-website/node_modules/.bin:$PATH
COPY package.json ./
COPY package-lock.json ./
RUN npm ci
COPY . ./
RUN npm run build

# production environment
FROM nginx:stable-alpine
COPY --from=build /my-website/out /apps/my-website
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
