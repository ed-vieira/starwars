'use strict';


exports.appIndex = function(req, res){

   var routes={
       urls : {
        planetas : "/api/planetas",
        novo : "/api/novo-planeta",
        selecionar: "/api/selecionar-planeta/:planeta_id",
        buscar: "/api/buscar-planeta/:nome",
        alterar: "/api/alterar-planeta/:planeta_id",
        apagar:  "/api/apagar-planeta/:planeta_id"
       }
    };

    res.json(routes);
};