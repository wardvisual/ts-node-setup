FROM node:8-alpine

WORKDIR /usr/local/sbin

COPY package.json ./

RUN yarn install

COPY prisma/schema.prisma ./prisma/

RUN npx prisma generate 

COPY . .

RUN yarn run build

EXPOSE 5000

CMD ["yarn", "start"]