const { Schema, model } = require("mongoose");
const { type } = require("node:os");

const servicioSchema = new Schema({

    titulo: {
        type: String,
        required: true,
    },
    descripcion: {
        type: String,
        required: true
    },
    fecha: {
        type: Date,
        default: Date.now()
    },
    categoria: {
        type: String,
        enum: ['Animales', 'Cosas']
    }

})

module.exports = model('Servicios', servicioSchema)