FROM node:12.18.1-alpine3.11 as build
RUN mkdir -p /my-website
WORKDIR /my-website
COPY package.json ./
COPY package-lock.json ./
RUN npm install
COPY . .
CMD ["npm", "run", "build"]

FROM nginx:stable-alpine
COPY --from=build /my-website/out /apps/my-website
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
