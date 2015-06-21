// 1 require express
var express = require('express');

// 2 create an instance of an express application
var app = express();


// 3 start the server
// get the internet address the server is listening on
var server = app.listen(3000, function() {
  var host = server.address().address;
  var port = server.address().port;
  console.log("Movie app listening at http://%s:%s", host, port);
});
