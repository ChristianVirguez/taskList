FROM node:22 AS construccion

# Use a simple, consistent working directory inside the image
WORKDIR /app

# Copy package files first to take advantage of Docker layer caching
COPY package*.json ./

RUN npm install

# Copy the rest of the source
COPY . ./

RUN npm run lint
RUN npm run build

FROM nginx:alpine AS empaquetado

# nginx default web root
WORKDIR /usr/share/nginx/html

# Copy built assets from the builder stage
COPY --from=construccion /app/dist .
