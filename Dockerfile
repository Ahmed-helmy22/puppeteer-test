FROM pull ghcr.io/puppeteer/puppeteer:22.6.4 # pulls the image that contains Puppeteer v16.1.0


ENV PUPPETEER_EXECUTABLE_PATH=/usr/bin/google-chrome-stable \
    PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true

WORKDIR /usr/src/app

COPY    package*.json ./

RUN npm ci

COPY . .
CMD ["node" , "index.js"]