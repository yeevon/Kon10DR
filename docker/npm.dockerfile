# Set the base image.
FROM node:18

# Install the application's dependencies.
COPY ../package.json ./
COPY ../vite.config.js ./

WORKDIR /var/www/html

#COPY package-lock.json ./
CMD [ "sh", "-c", "npm install --force && npm run build && npm run dev" ]