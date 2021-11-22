FROM node:14.18

WORKDIR /app

COPY package.json ./
COPY yarn.lock ./

RUN yarn

COPY . .

RUN npm run build

USER root

RUN mkdir /out

CMD cp -r ./public/. /out/