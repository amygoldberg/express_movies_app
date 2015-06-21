// 1 require express
var express = require('express');

// 2 create an instance of an express application
var app = express();

// 4 create an api router to make get requests more dry
var apiRouter = express.Router();

// 6 create a GET request for '/movies' using apiRouter
apiRouter.get('/movies', function(req, res) {
  Movie.find({}, function(error, movieList) {
    res.json(movieList);
  });
});

// 5 mount the apiRouter defined above onto our instance of express
app.use('/api', apiRouter);

// 3 start the server
// get the internet address the server is listening on
var server = app.listen(3000, function() {
  var host = server.address().address;
  var port = server.address().port;
  console.log("Movie app listening at http://%s:%s", host, port);
});
