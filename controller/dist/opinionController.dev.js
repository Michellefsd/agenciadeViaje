"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.saveOpinion = void 0;

var saveOpinion = function saveOpinion(req, res) {
  var _req$body, nombre, email, mensaje;

  return regeneratorRuntime.async(function saveOpinion$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _req$body = req.body, nombre = _req$body.nombre, email = _req$body.email, mensaje = _req$body.mensaje; // const errores = [];
          // if(nombre.trim === "")  {
          //     errores.push({mensaje: "El Nombre está Vacío"})    
          // };
          // if(email.trim === "")  {
          //     errores.push({mensaje: "El Nombre está Vacío"})    
          // };
          // if(mensaje.trim === "")  {
          //     errores.push({mensaje: "El Nombre está Vacío"})    
          // };
          // if(errores.length > 0) {
          //     res.render('opiniones', {
          //         pagina: 'opiniones',
          //         errores
          //     })
          // }

        case 1:
        case "end":
          return _context.stop();
      }
    }
  });
};

exports.saveOpinion = saveOpinion;
//# sourceMappingURL=opinionController.dev.js.map
