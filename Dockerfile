FROM php:8.1-fpm-alpine

RUN docker-php-ext-install pdo pdo_mysql sockets
RUN curl -sS https://getcomposer.org/installer | php -- \
     --install-dir=/usr/local/bin --filename=composer

COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

WORKDIR /app
COPY . .
RUN composer install

# Set the base image.
FROM node:18
WORKDIR /app

# Install the application's dependencies.
COPY package.json ./
COPY package-lock.json ./
CMD [ "sh", "-c", "npm install --force && npm run dev" ]