// 1 require express
var express = require('express');

// 7 require body parser in order to create a new movie using the post request
var bodyParser = require('body-parser');

// parse that incoming json data in the HTTP request
var jsonParser = bodyParser.json();

// 2 create an instance of an express application
var app = express();

// 8 require mongoose, to pull in the mongoose module
var mongoose = require('mongoose');

// 9 connect to the imdb database
// this will have the movies collection and reviews collection in it ?
mongoose.connect('mongodb://localhost/imdb');

// 10 require the movie model by pulling it in
var Movie = require('./lib/movies.js');

// 11
var util = require('util');

// 6 create routes using app.get
// GET request to '/contacts'
app.get('/api/v1/movies', function(req, res) {
  Movie.find({}, function(error, movieList) {
    if (error) {
      console.log(error);
      res.sendStatus(404);
    }
    res.json(contactList);
  })
});

// GET request to find a movie by id
app.get('/api/v1/movies/:id', function(req, res) {
  Contact.find({
    _id: req.params.id
  }, function(error, movie) {
    if (error) {
      console.log(error);
      res.sendStatus(404);
    }
    res.json(contact);
  });
});

// POST request to create a new movie
app.post('/api/v1/movies', jsonParser);
app.post('/api/v1/movies', function(req, res) {
  Movie.create(req.body, function(error, movie) {
    if (error) {
      console.log(error);
      res.sendStatus(400);
    }
    res.sendStatus(201);
  });
});

// PATCH request to update a movie
app.patch('/api/v1/movies/:id', jsonParser);
app.patch('/api/v1/movies/:id', function(req, res) {
  Movie.findByIdAndUpdate(req.params.id, req.body, function(error, movie) {
    if (error) {
      console.log(error);
      res.sendStatus(400);
    }
    res.sendStatus(200);
  })
});

// DELETE request to remove a movie
app.delete('/api/v1/movie/:id', function(req, res) {
  Movie.remove({
    _id: req.params.id
  }, function(error) {
    if (error) {
      console.error(error);
      res.sendStatus(400);
    } else {
      res.sendStatus(204);
    }
  });
});

// 3 start the server
// get the internet address the server is listening on
var server = app.listen(3000, function() {
  var host = server.address().address;
  var port = server.address().port;
  console.log("Movie app listening at http://%s:%s", host, port);
});
