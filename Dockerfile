# etapa de compilación
FROM node:lts-slim as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
# etapa de producción

#Con Nginx
#FROM nginx:latest as production-stage
#COPY --from=build-stage /app/dist /usr/share/nginx/html
#EXPOSE 80
#CMD ["nginx", "-g", "daemon off;"]

#Con apache
FROM httpd:2.4 as production-stage
COPY --from=build-stage /app/dist /usr/local/apache2/htdocs/
EXPOSE 80
