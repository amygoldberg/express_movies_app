// 1 require mongoose in order to connect to our database
var mongoose = require('mongoose');

// 2 create an array listing the types of genre one movie can have
var enumeratedGenreTypes = ['action', 'comedy', 'crime', 'drama', 'suspense', 'horror', 'romance', 'scifi', 'fantasy', 'war', 'western']

// 3 create an array listing the types of rating one movie can have
var enumeratedRatingTypes = ['G', 'PG', 'PG-13', 'R', 'NC-17', 'Foreign', 'Unrated', 'Other']

// 7 create a review schema within the movie schema?
var reviewSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  reviewer: {
    type: String,
    required: true
  },
  starRating: {
    type: String,
    required: true
  },
  publicationDate: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true
  }
});

// 4 create a movie schema
var movieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  productionYear: {
    type: String,
    required: true
  },
  director: {
    type: String,
    required: true
  },
  actor: {
    type: String,
    required: true
  },
  genre: {
    type: String,
    required: true,
    enum: {
      values: enumeratedGenreTypes
    }
  },
  rating: {
    type: String,
    required: true,
    enum: {
      values: enumeratedRatingTypes
    }
  },
  reviews: [reviewSchema]
});

// 5 create a movie model
var Movie = mongoose.model('Movie', movieSchema);

// 6 make the movie model available outside of this file by exporting it
module.exports = Movie;
