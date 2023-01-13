
// REQUIRE SUSTITUIDO X IMPORT
//esto es sustituido x la linea de abajo + "type": "module" o "commonjs", en package.json
import express from "express";
import router from './routes/index.js';
import db from './config/db.js';
import "dotenv/config";


const app = express();

// Conectar a la base de Datos con Promise (callback moderno/ No espera)
db.authenticate()
.then( () => console.log('Base de Datos Conectada'))
.catch(err => console.log(err));

//definir puerto
const port = process.env.PORT || 4000;

//Habilitar PUG
app.set('view engine', 'pug');

// Obtener Año Actual
app.use( (req, res, next) => {
    const year = new Date();
    res.locals.actualYear = year.getFullYear();
    res.locals.nombreSitio = 'Agencia de Viajes';
    next();
});

// Agregar body parser para leer los datos del formulario
app.use(express.urlencoded({extended: true}));

// Definir la carpeta Publica
app.use(express.static('public'));

//Agregar Puerto
app.use('/', router);


app.listen(port, () => {
    console.log(`El servidor esta funcionando en el puerto ${port}`)
})















































// import express from 'express';
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