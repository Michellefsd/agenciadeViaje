import { Viaje } from '../model/Viaje.js';
import { Opinions } from '../model/Opinions.js';

const getHome = async (req, res) => {
    // consultar 3 viajes del modelo >Viaje
   
   const promiseDB = [];

   try {
    promiseDB.push( Viaje.findAll({limit: 3}));
    promiseDB.push( Opinions.findAll({limit: 3}));
    const resultado = await Promise.all(promiseDB);

       res.render("inicio", {
            pagina: 'Inicio',
            clase: 'home',
            viajes: resultado[0],
            opiniones: resultado[1] 
        })
    } catch(error) {
        console.log(error)
    }
}
const getUs = (req, res) => {
    res.render("nosotros", {
        pagina: 'Nosotros'
    });
}
const getOpinions = async (req, res) => {
    try {
        const opiniones = await Opinions.findAll();
        res.render("opiniones", {
            pagina: 'Opinion',
            opiniones
        });
    } catch(err) {
        console.log(error)
    }
}
const getTravels =  async (req, res) => {  
// Consultar BD
    const viajes = await Viaje.findAll();
    console.log(viajes)

    res.render("viajes", {
        pagina: 'Próximos Viajes',
        viajes
    });
}

// Muestra un viaje x su slug
const detailTravelPage = async (req, res) => {
    const { slug } = req.params;
    try {
        const resultado = await Viaje.findOne({ where : { slug }});
        res.render('viaje', {
            pagina: 'Información del Viaje',
            resultado
        })
    } catch(error) {
        console.log(error);
    }
    }

export { 
    getHome, 
    getUs, 
    getOpinions, 
    getTravels,
    detailTravelPage,
};