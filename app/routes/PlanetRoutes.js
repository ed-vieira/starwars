'use strict';
module.exports = function(app) {

  var appCtrl = require('../controllers/AppController');

  var planetsCtrl = require('../controllers/PlanetController');

  var swappiCtrl = require('../controllers/SwappiController');

  
  // Routes
  app.route('/api/swappi/planets').get(swappiCtrl.getPlanets);

  app.route('/api/swappi/planets/:id').get(swappiCtrl.selectPlanet);

  app.route('/api/swappi/films').get(swappiCtrl.getFilms);

  app.route('/api/swappi/planet-films/:name').get(swappiCtrl.getPlanetFilms);

  app.route('/').get(appCtrl.appIndex);

  app.route('/api').get(appCtrl.appIndex);

  app.route('/api/planetas').get(planetsCtrl.listAllPlanets);
  
  app.route('/api/novo-planeta').post(planetsCtrl.addPlanet);

  app.route('/api/selecionar-planeta/:planeta_id').get(planetsCtrl.getPlanet);

  app.route('/api/buscar-planeta/:name').get(planetsCtrl.searchPlanets);

  app.route('/api/alterar-planeta/:planeta_id').post(planetsCtrl.updatePlanet);

  app.route('/api/apagar-planeta/:planeta_id').get(planetsCtrl.deletePlanet);



};

