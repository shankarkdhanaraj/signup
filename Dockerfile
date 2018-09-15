FROM node:6-alpine

# Some image metadata
LABEL version="0.1"
LABEL description="This is Signup service for Community app, which will allow the user to signup for a new account"



# Environment variables
ENV PORT=3000


# Create signup app directory
RUN mkdir -p /usr/microservice/signup/

# From now one we are working in /usr/microservice/signup/
WORKDIR /usr/microservice/signup/

# Install api dependencies
COPY package*.json ./

# Run build if necessary with devDependencies then clean them up
RUN npm install

# Copy source code
COPY . .


EXPOSE 3000

# The following command will use NODE_ENV to run pm2-docker or pm2-dev
CMD ["npm", "start"]