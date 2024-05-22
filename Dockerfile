# # Stage 1: Build the application
# FROM node:14 AS build

# # Set the working directory inside the container
# WORKDIR /app

# # Copy package.json and package-lock.json to the container
# COPY package*.json ./

# # Install dependencies
# RUN npm install

# # Copy the rest of the application code to the container
# COPY . .

# # Install pkg globally and build the executable
# RUN npm install -g pkg
# RUN pkg -t node14-linux-x64 node14-macos-x64 node14-win-x64 -o my-express-app .

# # Stage 2: Create the final image
# FROM node:14

# # Set the working directory inside the container
# WORKDIR /app

# # Copy the executable from the build stage
# COPY --from=build /app/my-express-app /app/my-express-app

# # Expose the port
# EXPOSE 3000

# # Run the executable
# CMD ["./my-express-app"]


# Use a Linux base image
FROM node:16.19.1 AS build

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Install pkg globally
RUN npm install -g pkg

# Run the pkg command to build the executable for Linux
RUN pkg -t node16-linux-x64 -o my-express-app-linux .

# Create the final minimal image
FROM node:16.19.1-slim

# Set the working directory inside the container
WORKDIR /app

# Copy the Linux executable from the build stage
COPY --from=build /app/my-express-app-linux /app/my-express-app

# Expose the port
EXPOSE 3000

# Run the Linux executable
CMD ["./my-express-app"]



