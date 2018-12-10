'use strict';


exports.appIndex = function(req, res){

   var routes={
       urls : {
        planetas : "http://localhos:3000/api/planetas",
        novo : "http://localhos:3000/api/novo-planeta",
        selecionar: "http://localhos:3000/api/selecionar-planeta/:planeta_id",
        buscar: "http://localhos:3000/api/buscar-planeta/:nome",
        alterar: "http://localhos:3000/api/alterar-planeta/:planeta_id",
        apagar:  "http://localhos:3000/api/apagar-planeta/:planeta_id"
       }
    };

    res.json(routes);
};