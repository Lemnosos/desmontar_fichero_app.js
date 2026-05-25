const { Schema, model } = require("mongoose");
const { type } = require("node:os");


const productoSchema = new Schema({

    nombre: {
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
        enum: ['Ropa', 'Accesorios', 'Cosas']
    }

})

module.exports = model('Productos', productoSchema)