'use strict';
module.exports = function(app) {

  var appCtrl = require('../controllers/AppController');

  var planetsCtrl = require('../controllers/PlanetController');

  // Routes

  app.route('/api').get(appCtrl.appIndex);

  app.route('/api/planetas').get(planetsCtrl.listAllPlanets);
  
  app.route('/api/novo-planeta').post(planetsCtrl.addPlanet);

  app.route('/api/selecionar-planeta/:planeta_id').get(planetsCtrl.getPlanet);

  app.route('/api/buscar-planeta/:nome').get(planetsCtrl.searchPlanets);

  app.route('/api/alterar-planeta/:planeta_id').put(planetsCtrl.updatePlanet);

  app.route('/api/apagar-planeta/:planeta_id').delete(planetsCtrl.deletePlanet);
};

