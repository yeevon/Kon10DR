#!/bin/bash
curl -sS https://getcomposer.org/installer | sudo php -- --install-dir=/usr/local/bin --filename=composer
sudo chmod 777 /var/app/current/vendor -R
sudo chmod 777 /var/app/current/storage -R
sudo mkdir /var/app/current/bootstrap/cache
sudo chomd 777 /var/app/current/bootstrap -R
sudo cp /opt/elasticbeanstalk/deployment/env /var/www/html/.env && sudo chown ec2-user:webapp /var/www/html/.env && sudo chmod 644 /var/www/html/.env
sudo chown webapp:webapp /var/app/current -R
php /usr/local/bin/composer install
sudo npm install vite
npm install
sudo npm run build
sudo php artisan cache:clear
sudo php artisan config:cache
sudo php artisan route:cache
sudo php artisan view:cache
