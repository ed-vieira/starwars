'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var stwSchema = new Schema({
  name: {
    type: String,
    required: 'Nome do planeta'
  },
  climate: {
    type: String,
    required: "Clima do planeta"
  },
  terrain: {
    type: String,
    required: "Terreno do planeta"
  },
    
  });

module.exports = mongoose.model('Planets', stwSchema);