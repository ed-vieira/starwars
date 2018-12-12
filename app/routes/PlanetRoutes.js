'use strict';
module.exports = function(app) {

  var appCtrl = require('../controllers/AppController');

  var planetsCtrl = require('../controllers/PlanetController');

  var swappiCtrl = require('../controllers/SwappiController');

  
  // Routes
  //listar os dados da SWAPI
  app.route('/api/swappi/planets').get(swappiCtrl.getPlanets);

  app.route('/api/swappi/planets/:id').get(swappiCtrl.selectPlanet);

  app.route('/api/swappi/films').get(swappiCtrl.getFilms);

  //pega os dados da SWAPI selecionando o planeta por nome recebe a a quantidade e a url dos filmes
  app.route('/api/swappi/planet-films/:name').get(swappiCtrl.getPlanetFilms);

  //inicio do app listando as rotas
  app.route('/').get(appCtrl.appIndex);

  //Rotas para Gerênciar os planetas criados no banco de dados local
  app.route('/api').get(appCtrl.appIndex);
  app.route('/api/planetas').get(planetsCtrl.listAllPlanets);
  app.route('/api/novo-planeta').post(planetsCtrl.addPlanet);
  app.route('/api/buscar-planeta/:name').get(planetsCtrl.searchPlanets);

  //Rotas para selecionar, alterar e apagar dados do banco de dados local 
  app.route('/api/planeta/:planeta_id')
   .get(planetsCtrl.getPlanet)
    .put(planetsCtrl.updatePlanet)
     .delete(planetsCtrl.deletePlanet);

};

