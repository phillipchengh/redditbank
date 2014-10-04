var express = require('express');
var app = express();

var env = process.env.NODE_ENV || 'development';
var port = 1234;

if (env === 'development') {
  app.set('port', port);
}

app.use(express.static(__dirname + '/static'));

app.get('/', function(req, res) {
  res.sendfile('static/index.html');
});

app.listen(app.get('port'));
