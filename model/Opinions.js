import sequelize, { Sequelize } from 'sequelize';
import db from '../config/db.js';

export const Opinions = db.define('opinions', {
    nombre: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    },
    mensaje: {
        type: Sequelize.STRING
    },
})

