var express = require('express');
var app = express();

// app.configure('development', function() {
//   app.use(express.compress());
//   app.set('port', 1234);
// });

app.get('/', function(req, res) {
  res.send('Hello World');
});

var server = app.listen(1234, function() {
  
});
