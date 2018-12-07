'use strict';

var Request = require("request");



exports.listPlanets= function(req, res){

    Request.get("http://swapi.co/api/planets/", (err, response, body) => {
      if(err) {
        res.send(err);
      }
      
      res.json(JSON.parse(body));
      
     });
  
  }