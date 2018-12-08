'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var stwSchema = new Schema({
  nome: {
    type: String,
    required: 'Nome do planeta'
  },
  clima: {
    type: String,
    required: "Clima do planeta"
  },
  terreno: {
    type: String,
    required: "Terreno do planeta"
  },
    
  });

module.exports = mongoose.model('Planets', stwSchema);