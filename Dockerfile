FROM node:16-alpine 

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install --legacy-peer-deps

COPY . .

CMD ["npm", "run", "dev"]