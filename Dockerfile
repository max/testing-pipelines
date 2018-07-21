FROM node:10.7-alpine as base

RUN apk update && apk upgrade && \
    apk add --no-cache git

RUN mkdir /app
WORKDIR /app

COPY package*.json ./
RUN npm install
COPY . .

FROM base as test
RUN npm test

FROM base as build
RUN npm run build && npm run export -- -o /public
