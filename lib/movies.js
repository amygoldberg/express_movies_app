// Your mission is to set up a movie review database.

// Movies have a lot of data associated with them!They have a title, a year of production, a director, and at least one actor.They also have a genre(which fr our purposes is limited to action, comedy, crime, drama, suspense, horror, romance, science fiction, fantasy, war, and western) and a rating(G, PG, PG - 13, R, NC - 17, Foreign, Unrated, or Other).

// Most movies will have at least one review.Some will have several, and a few will have many.Reviews have a title, an reviewer, a star rating, a publication date, and a body.

// In the first phase of this project, you should create a Mongoose schema and model object according to this description, and some database seed data to verify that the schema and validation work.

// 1 require mongoose in order to connect to our database
var mongoose = require('mongoose');

// 2 create an array listing the types of genre one movie can have
var enumeratedGenreTypes = ['action', 'comedy', 'crime', 'drama', 'suspense', 'horror', 'romance', 'scifi', 'fantasy', 'war', 'western']

// 3 create an array listing the types of rating one movie can have
var enumeratedRatingTypes = ['G', 'PG', 'PG-13', 'R', 'NC-17', 'Foreign', 'Unrated', 'Other']


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
  };
});

// create a virtual attribute for the contact, named fullname
// like a serializer
// this is a getter
contactSchema.virtual('fullName').get(function() {
  return this.firstName + ' ' + this.lastName;
});

// setter method/function
// tomContact.fullName = "Tom Dye"
contactSchema.virtual('fullName').set(function(name) {

  // given "Tom Dyer"
  // names will equal ['Tom', 'Dyer']
  var names = name.split(' ');

  this.firstName = names[0]; // Tom
  this.lastName = names[1]; // Dyer
});

// create a contact model
var Contact = mongoose.model('Contact', contactSchema);

// make it available outside of this file by exporting it
module.exports = Contact;
