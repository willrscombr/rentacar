FROM node:14.15.4-alpine3.12 AS development

RUN apk add --no-cache bash ca-certificates \
  curl \
  openjdk8-jre

ENV SONAR_SCANNER_VERSION=4.6.2.2472



# RUN mkdir -p /opt \
#     && curl -fSL https://binaries.sonarsource.com/Distribution/sonar-scanner-cli/sonar-scanner-cli-${SONAR_SCANNER_VERSION}.zip -o /opt/sonar-scanner.zip \
#     && unzip /opt/sonar-scanner.zip -d /opt \
#     && rm /opt/sonar-scanner.zip \
#     && ln -s /opt/sonar-scanner-${SONAR_SCANNER_VERSION}/bin/sonar-scanner /usr/bin/sonar-scanner



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