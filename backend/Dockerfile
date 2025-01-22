# Dockerfile for Backend

# Use Node.js 18 as the base image
FROM node:18

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package.json ./

RUN apt-get update && apt-get install -y wait-for-it

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . ./

# Expose the port the app runs on
EXPOSE 3000

# Start the application with wait-for-it
CMD ["sh", "-c", "wait-for-it db:1433 -- npm start"]