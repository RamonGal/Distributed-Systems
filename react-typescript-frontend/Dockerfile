FROM node:alpine
WORKDIR /app
COPY package.json ./
COPY package-lock.json ./
COPY ./ ./
# documentation route
COPY ../documenation.html ./public
COPY ../build ./public/
RUN npm i
EXPOSE 3000
CMD ["npm", "run", "dev"]