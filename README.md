# Trojan Website

### How to unpack all files

1. Make sure to install npm and bower
2. In the base directory: `npm install && bower install`

### How to start server

1. Start mongodb
2. In the base directory: `grunt && npm start`
3. The server will start in localhost:9000

### How to deploy to Heroku (first time only)

1. Install heroku toolbelt
2. Run `grunt` in base directory
3. Run `yo angular-fullstack:heroku`
4. Go to /dist folder and run `heroku addons:add mongolab:sandbox`

### How to update and push to heroku

1. Run `grunt` in base directory
2. Go to /dist folder and run `grunt buildcontrol:heroku` 

Thanks to [DaftMonk and his generator](https://github.com/DaftMonk/generator-angular-fullstack)
