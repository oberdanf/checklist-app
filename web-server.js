'use strict';

// Module dependencies.
var express = require('express'),
    path = require('path'),
    fs = require('fs'),
    mongoose = require('mongoose');

var app = express();

// Connect to database
mongoose.connect("mongodb://localhost/checklistApp");

// Bootstrap models
var modelsPath = path.join(__dirname, 'lib/models');
fs.readdirSync(modelsPath).forEach(function (file) {
  if(!RegExp('^.+?\.sw.?$', 'i').test(file)) {
    require(modelsPath + '/' + file);
  }
});

// Populate empty DB with uummy data
// require('./lib/db/dummydata');

// Controllers
// var api = require('./lib/controllers/api');

// Express Configuration
app.configure(function(){
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'app')));
});

// app.configure('development', function(){
//   app.use(express.static(path.join(__dirname, '.tmp')));
//   app.use(express.static(path.join(__dirname, 'app')));
//   app.use(express.errorHandler());
// });

// app.configure('production', function(){
//   app.use(express.favicon(path.join(__dirname, 'public/favicon.ico')));
//   app.use(express.static(path.join(__dirname, 'public')));
// });

// Routes
// app.get('/edit', '/Edit.html');
// app.get('/api/houses', api.houses);
// app.get('/api/general-result', api.generalResult);

// Start server
var port = process.env.PORT || 8888;
app.listen(port, function () {
  console.log('Express server listening on port %d in %s mode', port, app.get('env'));
});