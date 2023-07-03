FROM node:alpine
WORKDIR /app
COPY package.json ./
COPY yarn.lock ./
COPY ./ ./
RUN apk --no-cache add curl
RUN node --version
RUN yarn
RUN yarn build
EXPOSE 3000
CMD ["yarn", "build:start"]