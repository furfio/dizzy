FROM node:16-alpine3.15
RUN mkdir -p /home/app/
WORKDIR /home/app/
RUN npm i anywhere -g
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 80
CMD anywhere -p 80 -d ./dist -s