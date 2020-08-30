FROM node:12.14.0-alpine3.11

RUN apk add --no-cache bash git

RUN touch /home/node/.bashrc | echo "PS1='\w\$ '" >> /home/node/.bashrc

RUN npm config set cache /home/node/nest_backend_api/.npm-cache --global

COPY . /home/node/nest_backend_api
RUN npm install
RUN npm i -g @nestjs/cli ts-node
RUN npm install @nestjs/typeorm typeorm sqlite3 @nestjs/config @nestjs/swagger swagger-ui-express class-validator class-transformer --save

USER node

WORKDIR /home/node/nest_backend_api

EXPOSE 3000

CMD ["npm", "run", "start:dev"]