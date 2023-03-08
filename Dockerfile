FROM node:16-alpine
COPY . /app
WORKDIR /app
ENTRYPOINT ["/usr/local/bin/node", "/app/index.js"]
