'use strict';


exports.appIndex = function(req, res){
   var server= "http://localhost:3300"
   var routes={
       urls : {
        planetas : server+"/api/planetas",
        swappi : server+"/api/swappi/planets",
        novo : server+"/api/novo-planeta",  
        buscar: server+"/api/buscar-planeta/:nome",
        planeta: server+"/api/planeta/:planeta_id",      
       }
    };

    res.json(routes);
};