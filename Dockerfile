# Use the official Node.js image as the base image
# Choose the LTS version of Node.js for better compatibility and stability
FROM node:14

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files into the container
COPY . .

# Build the React application
RUN npm run build

# Use a lightweight web server like nginx to serve the static files
# Here, using the official Nginx image
FROM nginx:alpine

# Copy the built files from the previous stage to the Nginx web root
COPY --from=0 /app/dist /usr/share/nginx/html

# Expose the port that Nginx will serve on
EXPOSE 80

# Start the Nginx server
CMD ["nginx", "-g", "daemon off;"]