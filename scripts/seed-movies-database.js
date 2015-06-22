// 1 require modules
var async = require('async');
var mongoose = require('mongoose');

// 2 connect to our database
mongoose.connect('mongodb://localhost/imdb');

// 3 require our movies model from our movies file
var Movie = require('../lib/movies.js');

// remove all the contacts ?
// var removeContacts = function(done) {
//   Contact.remove({}, done);
// };

// 4 start seeding data for the movies collection - create a movie for 'mean girls'
var createMeanGirls = function(done) {
  Movie.create({
    title: 'Mean Girls',
    productionYear: '2004',
    director: 'Mark Waters',
    actor: 'Lindsay Lohan',
    genre: 'comedy',
    rating: 'pg13',
    reviews: [{
      title: 'Favorite movie',
      reviewer: 'Amy Goldberg',
      starRating: '5',
      publicationDate: '06-21-15',
      body: 'One of my favorite movies even after 11 years'
    }]
  }, done);
};

var createGoodWillHunting = function(done) {
  Movie.create({
    title: 'Good Will Hunting',
    productionYear: '1997',
    director: 'Gus Van Sant',
    actor: 'Matt Damon',
    // genre: 'drama',
    // rating: 'r',
    reviews: [{
      title: 'Classic movie',
      reviewer: 'Lindsey Cashman',
      starRating: '5',
      publicationDate: '06-20-15',
      body: 'I love this movie especially since Matt Damon is one of my favorite actors'
    }]
  }, done);
};

var createBigDaddy = function(done) {
  Movie.create({
    title: 'Big Daddy',
    productionYear: '1999',
    director: 'Dennis Dugan',
    actor: 'Adam Sandler',
    // genre: 'comedy',
    // rating: 'pg13',
    reviews: [{
      title: 'Hilarious movie',
      reviewer: 'Dennis Quackenbush',
      starRating: '5',
      publicationDate: '06-19-15',
      body: 'Could quote every line Ive watch it so many times'
    }]
  }, done);
};

// 5 use the async series method
async.series([
    createMeanGirls,
    createGoodWillHunting,
    createBigDaddy
  ],

  // 6 fire the function that will be invoked when the above functions are done
  function(error) {
    if (error) {
      console.error(error);
    }

    // 7 drop the connection
    mongoose.disconnect();
  }
);
