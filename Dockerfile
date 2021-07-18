# syntax=docker/dockerfile:1
FROM node:12-alpine

WORKDIR /app
COPY . .

ENV PORT="80"
ENV HOST="0.0.0.0"

EXPOSE 80
CMD ["node", "index.js"]