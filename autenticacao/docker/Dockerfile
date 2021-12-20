FROM node:14.15.4-alpine3.12 AS development

RUN apk add --no-cache bash

WORKDIR /home/node/app

COPY package*.json .

# Here we install all the deps
RUN npm install

# Bundle app source / copy all other files
COPY . .

# Build the app to the /dist folder
RUN npm run build

################
## PRODUCTION ##
################
# Build another image named production
FROM node:14.15.4-alpine3.12 AS production

# Set node env to prod
ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

# Set Working Directory
WORKDIR /home/node/app

# Copy all from development stage
COPY --from=development /home/node/app .

EXPOSE 8080

# Run app
CMD [ "node", "dist/main" ]

# Example Commands to build and run the dockerfile
# docker build -t thomas-nest .
# docker run thomas-nest