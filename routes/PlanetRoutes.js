'use strict';
module.exports = function(app) {
  var planetsCtrl = require('../controllers/PlanetController');

  // Routes
  app.route('/planetas').get(planetsCtrl.listAllPlanets);
  
  app.route('/novo-planeta').post(planetsCtrl.addPlanet);

  app.route('/selecionar-planeta/:planeta_id').get(planetsCtrl.getPlanet);

  app.route('/alterar-planeta/:planeta_id').put(planetsCtrl.updatePlanet);

  app.route('/apagar-planeta/:planeta_id').delete(planetsCtrl.deletePlanet);
};

