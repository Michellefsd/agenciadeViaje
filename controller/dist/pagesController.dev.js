"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.detailTravelPage = exports.getTravels = exports.getOpinions = exports.getUs = exports.getHome = void 0;

var _Viaje = require("../model/Viaje.js");

var _Opinions = require("../model/Opinions.js");

var getHome = function getHome(req, res) {
  var promiseDB, viajes, opiniones;
  return regeneratorRuntime.async(function getHome$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          // consultar 3 viajes del modelo >Viaje
          promiseDB = [];
          _context.prev = 1;
          _context.next = 4;
          return regeneratorRuntime.awrap(_Viaje.Viaje.findAll({
            limit: 3
          }));

        case 4:
          viajes = _context.sent;
          _context.next = 7;
          return regeneratorRuntime.awrap(_Opinions.Opinions.findAll({
            limit: 3
          }));

        case 7:
          opiniones = _context.sent;
          res.render("inicio", {
            pagina: 'Inicio',
            clase: 'home',
            viajes: viajes,
            opiniones: opiniones
          });
          _context.next = 14;
          break;

        case 11:
          _context.prev = 11;
          _context.t0 = _context["catch"](1);
          console.log(_context.t0);

        case 14:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[1, 11]]);
};

exports.getHome = getHome;

var getUs = function getUs(req, res) {
  res.render("nosotros", {
    pagina: 'Nosotros'
  });
};

exports.getUs = getUs;

var getOpinions = function getOpinions(req, res) {
  var opiniones;
  return regeneratorRuntime.async(function getOpinions$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return regeneratorRuntime.awrap(_Opinions.Opinions.findAll());

        case 3:
          opiniones = _context2.sent;
          res.render("opiniones", {
            pagina: 'Opinion',
            opiniones: opiniones
          });
          _context2.next = 10;
          break;

        case 7:
          _context2.prev = 7;
          _context2.t0 = _context2["catch"](0);
          console.log(error);

        case 10:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 7]]);
};

exports.getOpinions = getOpinions;

var getTravels = function getTravels(req, res) {
  var viajes;
  return regeneratorRuntime.async(function getTravels$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return regeneratorRuntime.awrap(_Viaje.Viaje.findAll());

        case 2:
          viajes = _context3.sent;
          console.log(viajes);
          res.render("viajes", {
            pagina: 'Próximos Viajes',
            viajes: viajes
          });

        case 5:
        case "end":
          return _context3.stop();
      }
    }
  });
}; // Muestra un viaje x su slug


exports.getTravels = getTravels;

var detailTravelPage = function detailTravelPage(req, res) {
  var slug, resultado;
  return regeneratorRuntime.async(function detailTravelPage$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          slug = req.params.slug;
          _context4.prev = 1;
          _context4.next = 4;
          return regeneratorRuntime.awrap(_Viaje.Viaje.findOne({
            where: {
              slug: slug
            }
          }));

        case 4:
          resultado = _context4.sent;
          res.render('viaje', {
            pagina: 'Información del Viaje',
            resultado: resultado
          });
          _context4.next = 11;
          break;

        case 8:
          _context4.prev = 8;
          _context4.t0 = _context4["catch"](1);
          console.log(_context4.t0);

        case 11:
        case "end":
          return _context4.stop();
      }
    }
  }, null, null, [[1, 8]]);
};

exports.detailTravelPage = detailTravelPage;
//# sourceMappingURL=pagesController.dev.js.map
