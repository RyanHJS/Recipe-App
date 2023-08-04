# Use official Node.js runtime as the base image
FROM node:14

# Set working directory in the docker image
WORKDIR /usr/src/app

# Install app dependencies by copying package.json files
COPY package*.json ./

# Install all dependencies
RUN npm install

# Bundle app source inside docker image
COPY . .

# Build the React app
RUN npm run build

# Use a lightweight version of Node.js as a second stage build
FROM node:14-alpine

WORKDIR /app

# install serve module globally
RUN npm install -g serve

# Copy build files from the previous stage
COPY --from=0 /usr/src/app/build .

# Expose the port app runs on
EXPOSE 3000

# Start the app
CMD [ "serve", "-s", ".", "-l", "3000" ]
