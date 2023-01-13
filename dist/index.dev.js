"use strict";

var _express = _interopRequireDefault(require("express"));

var _index = _interopRequireDefault(require("./routes/index.js"));

require("dotenv/config.js");

var _db = _interopRequireDefault(require("./config/db.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// REQUIRE SUSTITUIDO X IMPORT
//esto es sustituido x la linea de abajo + "type": "module" o "commonjs", en package.json
var app = (0, _express["default"])(); // Conectar a la base de Datos con Promise (callback moderno/ No espera)

_db["default"].authenticate().then(function () {
  return console.log('Base de Datos Conectada');
})["catch"](function (err) {
  return console.log(err);
}); //definir puerto


var port = process.env.PORT || 4000; //Habilitar PUG

app.set('view engine', 'pug'); // Obtener Año Actual

app.use(function (req, res, next) {
  var year = new Date();
  res.locals.actualYear = year.getFullYear();
  res.locals.nombreSitio = 'Agencia de Viajes';
  next();
}); // Agregar body parser para leer los datos del formulario

app.use(_express["default"].urlencoded({
  extended: true
})); // Definir la carpeta Publica

app.use(_express["default"]["static"]('public')); //Agregar Puerto

app.use('/', _index["default"]);
app.listen(port, function () {
  console.log("El servidor esta funcionando en el puerto ".concat(port));
}); // import express from 'express';
// import router from './routes/index.js';
// import db from './config/db.js';
// const app = express();
// // Conectar la base de datos
// db.authenticate()
//     .then( () => console.log('Base de datos conectada') )
//     .catch( error => console.log(error));
// // Definir puerto
// const port = process.env.PORT || 3000;
// // Habilitar PUG
// app.set('view engine', 'pug');
// // Obtener el año actual
// app.use( (req, res, next) => {
//     const year = new Date();
//     res.locals.actualYear = year.getFullYear();
//     res.locals.nombresitio = "Agencia de Viajes";
//     next();
// });
// // Habilitar express.json
// app.use(express.urlencoded({ extended: false }));
// // Definir la carpeta publica
// app.use(express.static('public'));
// // Agregar Router
// app.use('/', router);
// app.listen(port, () => {
//     console.log(`El Servidor esta funcionando en el puerto ${port}`)
// })
//# sourceMappingURL=index.dev.js.map
