import { Opinions } from '../model/Opinions.js'

const saveOpinion = async (req, res) => {
    // estos valores son gracias al atributo de "name"
    const { nombre, email, mensaje } = req.body;
    
    const errores = [];
    // Trim quita espacios vacios al principio y al final
    if(nombre.trim() === "")  {
        errores.push({alerta : "El Nombre está Vacío"})    
    };
    if(email.trim() === "")  {
        errores.push({alerta : "El Email está Vacío"})    
    };
    if(mensaje.trim() === "")  {
        errores.push({alerta : "El Mensaje está Vacío"})    
    };
    if(errores.length > 0) {
        // consultar opiniones existen 
        const opiniones = await Opinions.findAll();

        res.render('opiniones', {
            pagina: 'opiniones',
            errores,
            // estos valores aqui permiten q se mantenga el valor previo en caso de error no se borraran
            // agregando el atributo value (!sin comillas! es la variable) en el input (form de opiniones.pug) 
            nombre,
            email, 
            mensaje, 
            opiniones
        })
    } else {
        // Almacenar en la Base de Datos
        try {
            await Opinions.create({
                nombre,
                email,
                mensaje
            });
            res.redirect('/opiniones')
        } catch (error) {
            console.log(error);
        }
    }
    
}
export {saveOpinion};