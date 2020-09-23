FROM node:lts-alpine
WORKDIR /app
COPY  package*.json ./package-lock.json ./
RUN npm install
RUN npm install -g http-server
COPY . .
RUN npm run build
EXPOSE 8081 
CMD [ "http-server", "dist/" ]