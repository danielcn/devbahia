FROM node:11-alpine

WORKDIR /app

COPY package.json ./
COPY package-lock.json ./

RUN yarn install

EXPOSE 8000

CMD [ "yarn", "start" ]