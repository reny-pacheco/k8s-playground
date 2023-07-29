FROM node:16.13.2-alpine3.15

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci --only=production

COPY . .

EXPOSE 8000

USER node

CMD [ "npm", "start" ]