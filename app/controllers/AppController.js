'use strict';


exports.appIndex = function(req, res){
   var server= "http://localhost:3000"
   var routes={
       urls : {
        planetas : server+"/api/planetas",
        swappi : server+"/api/swappi/planets",
        novo : server+"/api/novo-planeta",
        selecionar: server+"/api/selecionar-planeta/:planeta_id",
        buscar: server+"/api/buscar-planeta/:nome",
        alterar: server+"/api/alterar-planeta/:planeta_id",
        apagar:  server+"/api/apagar-planeta/:planeta_id"
       }
    };

    res.json(routes);
};