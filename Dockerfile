FROM node:latest as builder
WORKDIR /firstApp
COPY . .
RUN npm i
RUN npm run build --prod

FROM nginx:1.15.8-alpine
COPY --from=builder /firstApp/dist/firstApp/ user/share/nginx/html