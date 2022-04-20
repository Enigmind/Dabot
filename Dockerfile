FROM node:17-alpine

WORKDIR /usr/src/bot

COPY package*.json /usr/src/bot/
RUN npm ci

COPY . /usr/src/bot/

CMD ["node", "dabot.js"]
