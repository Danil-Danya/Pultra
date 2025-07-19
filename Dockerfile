# Этап 1: билд с поддержкой sharp
FROM node:20-slim AS builder

WORKDIR /app

RUN apt-get update && apt-get install -y \
    build-essential \
    python3 \
    libcairo2-dev \
    libjpeg-dev \
    libpango1.0-dev \
    libgif-dev \
    librsvg2-dev \
    && rm -rf /var/lib/apt/lists/*

COPY package*.json ./
RUN npm install && \
    npm install --platform=linux --arch=x64 sharp

COPY . .
RUN npm run build

# Этап 2: чистый продовый образ
FROM node:20-slim

WORKDIR /app

COPY --from=builder /app /app

ENV NITRO_PORT=7000
ENV NITRO_HOST=0.0.0.0

EXPOSE 7000
CMD ["npm", "run", "start"]
