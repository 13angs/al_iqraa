FROM node:18-alpine3.14 as base

# commands
# remove all unused container
# docker container prune
LABEL MAINTAINER="13angs" \
      NAME="Romdon Uma" \
      REF="https://github.com/benawad/graphql-typescript-stripe-example/tree/docker"

# Create app directory
WORKDIR /app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm install --only=production

# Bundle app source
COPY . .

# for typescript
RUN npm run build

FROM node:18-alpine3.14

WORKDIR /app

COPY --from=base /app ./

EXPOSE 5003

CMD node src/index.js