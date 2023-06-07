const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const tripSchema = new Schema({
  title: { 
    type: String,
    required: false
  },
  location: {
    type: String,
    required: false
  },
  date: {
    type: Date,
    required: false
  },
  accomodation: {
    type: String,
    required: false,
  },
  itinerary: {
    type: String,
    required: false
  },
  packing: {
    type: String,
    required: false
  }
}, { timestamps: true } );

module.exports = mongoose.model('Trip', tripSchema);