'use strict';

const swapi = require('swapi-node');

var Request = require("request");



exports.listPlanets= function(req, res){

    Request.get("http://swapi.co/api/planets/", (err, response, body) => {
      if(err) {
        res.send(err);
      }
      
      res.json(JSON.parse(body));
      
     });
  
  }


  exports.selectPlanet= function(req, res){

    Request.get("http://swapi.co/api/planets/"+req.params.id, (err, response, body) => {
      if(err) {
        res.send(err);
      }
      
      res.json(JSON.parse(body));
      
     });
  
  }




  exports.getPlanetFilms= function(req, res){

    Request.get("https://swapi.co/api/planets/?search="+req.params.name, (err, response, body) => {
      if(err) {
        res.send(err);
      }
      
      res.json(JSON.parse(body));
      
     });
  
  }






  exports.getFilms= function(req, res){
    swapi.getFilm().then((result) => {
      res.json(result);
  });
  }

  exports.getPlanets= function(req, res){
    swapi.getPlanets().then((result) => {
      res.json(result);
  });
  }

  exports.getPlanet= function(req, res){
    swapi.getPlanets(req.params.id).then((result) => {
      res.json(result);
  });
  }