FROM node:20

WORKDIR /usr/src/app

ARG NODE_ENV
ENV NODE_ENV $NODE_ENV

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build

ENV PORT 3000
EXPOSE $PORT

CMD [ "npm", "start" ]
