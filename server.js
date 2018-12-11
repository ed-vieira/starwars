var express = require('express'),
  app = express(),
  port = process.env.PORT || 3300,
  mongoose = require('mongoose'),
  Planets = require('./app/models/PlanetModel'), 
  bodyParser = require('body-parser');
  
// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/starwars_db', { useNewUrlParser: true }); 

//headers
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./app/routes/PlanetRoutes'); 

routes(app); 

app.use(function(req, res) {
    res.status(404).send({url: 'URL: '+ req.originalUrl + ' não encontrada'})
  });

  app.listen(port);

console.log('Star Wars API server iniciado em: http://localhost:' + port);
