# Docker Image Version
FROM node:6.11.3

# Container working directory
WORKDIR /usr/src/react_app

# Copy package json file
COPY ./react_app/package.json .

# Run dependency install in container
RUN yarn

# Copy application source code
COPY ./react_app .

# Expose container port
EXPOSE 3000

# Start application
CMD ["yarn", "start"]