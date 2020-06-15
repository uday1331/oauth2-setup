FROM node:10.16.0-alpine
WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install
COPY tsconfig*.json ./

ADD . /usr/src/app
RUN npm run tsc

CMD [ "npm", "start" ]

EXPOSE 3001
