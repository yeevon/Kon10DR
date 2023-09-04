FROM php:8.1-fpm-alpine

# Environment arguments
ARG UID
ARG GID
ARG USER

ENV UID=${UID}
ENV GID=${GID}
ENV USER=${USER}

# Remove conflicting dialout group
RUN delgroup dialout

# Create user and group
RUN addgroup -g ${GID} --system ${USER}
RUN adduser -G ${USER} --system -D -s /bin/sh -u ${UID} ${USER}

# Modify php fpm configuration to use the new user's privileges
RUN sed -i "s/user = www-data/user = '${USER}'/g" /usr/local/etc/php-fpm.d/www.conf
RUN sed -i "s/group = www-data/group = '${USER}'/g" /usr/local/etc/php-fpm.d/www.conf
RUN echo "php_admin_flag[log_errors] = on" >> /usr/local/etc/php-fpm.d/www.conf

# Install required packages
RUN apk update && apk upgrade
RUN apk add --no-cache \
    libzip-dev \
    libcurl \
    curl-dev \
    openssl-dev \
    zlib-dev \
    oniguruma-dev \
    libxml2-dev \
    gcc \
    g++ \
    make \
    autoconf \
    php81-pdo_mysql \
    php81-mbstring \
    php81-bcmath \
    php81-fileinfo \
    php81-pdo \
    php81-mysqli \
    php81-zip

# Configure and install php extensions using docker-php-ext-install
RUN docker-php-ext-install pdo pdo_mysql bcmath curl fileinfo mbstring zip mysqli

# Install redis extension
COPY phpredis-5.3.4.tar.gz /usr/src/php/ext/redis/phpredis-5.3.4.tar.gz
RUN tar xvzf /usr/src/php/ext/redis/phpredis-5.3.4.tar.gz -C /usr/src/php/ext/redis --strip 1 \
    && echo 'redis' >> /usr/src/php-available-exts \
    && docker-php-ext-install redis

# Start php-fpm
CMD ["php-fpm", "-y", "/usr/local/etc/php-fpm.conf", "-R"]
