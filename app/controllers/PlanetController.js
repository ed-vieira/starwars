'use strict';

var mongoose = require('mongoose'), planet = mongoose.model('Planets');

exports.listAllPlanets = function(req, res) {
  planet.find({}, function(err, _planet) {
    if (err){
      res.send(err);
    }else{
      res.json({planets : _planet});
    }
  });
};


exports.searchPlanets = function(req, res) {
  planet.find({name : req.params.name}, function(err, _planet) {
    if (err){
      res.send(err);
    }else{
      res.json({planet : _planet });
    }
     
    
  });
};


exports.addPlanet = function(req, res) {
  var new_planet = new planet(req.body);
  new_planet.save(function(err, _planet) {
    if(err){
      res.send(err);
    }else{
      res.json(_planet);
    }    
  });
};


exports.getPlanet = function(req, res) {
  planet.findById(req.params.planeta_id, function(err, _planet) {
    if(err){       
        res.send({ 
          message: "Planeta não encontrado",
          errorMessage: "Busca por id= "+req.params.planeta_id+" não retornou nenhum resultado.",
          default:{ err }
        });
        }else{ 
        res.json({planet : _planet});
    }
  });
};


exports.updatePlanet = function(req, res) {
  planet.findOneAndUpdate({_id: req.params.planeta_id}, req.body, {new: true}, function(err, _planet) {
    if(err){
      res.send(err);
    }else{
      res.json(_planet);
    }
  });
};


exports.deletePlanet = function(req, res) {
  planet.deleteOne({_id: req.params.planeta_id}, function(err, _planet) {
      if(err){
        res.send(err);
      }else{
        res.json({ message: 'Dados deletados com sucesso. ID ' + req.params.id });
      } 
  });
};



