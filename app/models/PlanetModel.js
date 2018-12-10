'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var stwSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  climate: {
    type: String,
    required: true
  },
  terrain: {
    type: String,
    required: true
  },
    
  });

module.exports = mongoose.model('Planets', stwSchema);