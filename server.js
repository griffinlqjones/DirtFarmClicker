//server.js

/* jslint node: true */
'use strict';

let express = require('express');

// let morgan = require('morgan');

let path = require('path');

let app = express();

let mongoose = require('mongoose');

let bodyParser = require('body-parser');

// Require configuration file defined in app/Config.js
let config = require('./srv/Config.js');

// Connect to database
mongoose.connect(config.DB);

// Sends static files  from the public path directory
app.use(express.static(path.join(__dirname, '/public')));

// Use morgan to log request in dev mode
// app.use(morgan('dev'));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended: true}));

let port = config.APP_PORT || 3000;

app.listen(port, function () {
  console.log('Web server eavesdropping on port ' + port);
}); // Listen on port defined in config file


console.log('App listening on port ' + port);

let dirtFarmRoutes = require('./srv/Routes.js');

//  Use routes defined in Route.js and prefix it with api
app.get('/', function (req, res, next) {
  res.send('THIS IS A TEST!!');
});

app.use('/api', dirtFarmRoutes);


app.use(function (req, res, next) {
    // Website you wish to allow to connect
  // res.header('Access-Control-Allow-Origin', 'localhost:' + port);
  res.header('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');

    // Pass to next layer of middleware
  next();
});

// // Server index.html page when request to the root is made
app.get('/', function (req, res, next) {
  res.sendfile('./srv/index.html');
});
