FROM node:16-alpine3.14 as base 

# getting env from build/run
ARG APP_NAME="home"
ENV APP_NAME=${APP_NAME}

# setup metadata
LABEL MAINTAINER="13angs" \
    NAME="Romdon Uma" \
    APP_NAME=${APP_NAME}

WORKDIR /app

# copy package.json first for faster build
COPY ./package*.json ./

RUN npm install

COPY ./ ./

RUN npm run build ${APP_NAME} && \
    npm prune --production

FROM node:16-alpine3.14 as builder

ARG APP_NAME="home"
ENV APP_NAME=${APP_NAME}

WORKDIR /app

COPY --from=base /app/dist/apps/${APP_NAME}/package*.json /app/

RUN npm install && \
    npm prune --production


# final stage
FROM node:16-alpine3.14 as runner

ARG APP_NAME="home"
ENV APP_NAME=${APP_NAME}

WORKDIR /app 

# copy all the the app
COPY --from=base /app/dist/apps/${APP_NAME} /app
COPY --from=builder /app/node_modules /app/node_modules

EXPOSE 3000

CMD [ "npm", "start", "--", "-p", "3000" ]



