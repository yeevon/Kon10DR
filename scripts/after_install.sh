#!/bin/bash
sudo cp /opt/elasticbeanstalk/deployment/env /var/www/html/.env && sudo chown ec2-user:webapp /var/www/html/.env && sudo chmod 644 /var/www/html/.env
sudo chown webapp:webapp /var/app/current -R
php composer install
sudo npm install vite
npm install
sudo npm run build
sudo php artisan cache:clear
sudo php artisan config:cache
sudo php artisan route:cache
sudo php artisan view:cache
