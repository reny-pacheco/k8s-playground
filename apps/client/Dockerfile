FROM node:16-alpine

WORKDIR /app

# change this based on your api url before building the image
ENV VITE_API_URL=http://localhost:8000/api/tech

COPY package.json .
COPY package-lock.json .

RUN npm ci
RUN npm install serve -g --production

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "serve"]
