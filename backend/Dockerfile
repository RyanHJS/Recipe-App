# Use latest Node.js runtime as the base image
FROM node:18

# Set working directory in the docker image
WORKDIR /usr/src/app

# Copy application dependency manifests to the container image.
# A wildcard is used to ensure copying both package.json AND package-lock.json (when available).
# Copying this first prevents re-running npm install on every code change.
COPY package*.json ./

# Install production dependencies.
# If you add a package-lock.json, speed your build by switching to 'npm ci'.
# RUN npm ci --only=production
RUN npm install

# Copy local code to the container image.
COPY . .

EXPOSE 8080

# Wait for db to be ready
ADD https://github.com/ufoscout/docker-compose-wait/releases/download/2.2.1/wait /wait
# Execute permissions to the 'wait' script
RUN chmod +x /wait

## Launch the wait tool and then your application
CMD /wait && npm run dev