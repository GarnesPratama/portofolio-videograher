FROM node:22-alpine

WORKDIR /App

COPY package.json .

RUN npm install --legacy-peer-deps

COPY . .

RUN npm run build

EXPOSE 3000

CMD [ "npm","run","start" ]