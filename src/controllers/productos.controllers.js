const producto = require('../models/producto.model');


// OBTENER TODOS LOS PRODUCTOS
const traerTodosLosProductos = async (req, res) => {
    try {
        const productos = await producto.getAllEntries();

        // Si no hay productos en la base de datos
        if (!productos || productos.length === 0) {
            return res.status(404).json({
                ok: false,
                msg: 'No existen productos actualmente'
            });
        }

        // Respuesta correcta
        return res.status(200).json({
            ok: true,
            msg: 'Productos obtenidos correctamente',
            data: productos
        });

    } catch (error) {
        console.log(error);

        // Error interno del servidor
        return res.status(500).json({
            ok: false,
            msg: 'Error obteniendo todos los productos'
        });
    }
};


// OBTENER UN PRODUCTO POR ID
const traerUnProductoPorId = async (req, res) => {
    try {
        const { id } = req.params;

        const productoEncontrado = await producto.getOneEntryByID(id);

        // Si no existe el producto
        if (!productoEncontrado) {
            return res.status(404).json({
                ok: false,
                msg: 'No existe producto con ese id'
            });
        }

        // Respuesta correcta
        return res.status(200).json({
            ok: true,
            msg: 'Producto obtenido correctamente',
            data: productoEncontrado
        });

    } catch (error) {
        console.log(error);

        // Error interno del servidor
        return res.status(500).json({
            ok: false,
            msg: 'Error obteniendo un producto'
        });
    }
};


// CREAR UN PRODUCTO
const crearUnProducto = async (req, res) => {
    try {
        const body = req.body;

        const productoCreado = await producto.createEntry(body);

        // Producto creado correctamente
        return res.status(201).json({
            ok: true,
            msg: 'Producto creado correctamente',
            data: productoCreado
        });

    } catch (error) {
        console.log(error);

        // Error interno del servidor
        return res.status(500).json({
            ok: false,
            msg: 'Error al crear un producto'
        });
    }
};


// ACTUALIZAR UN PRODUCTO POR ID
const actualizarUnProductoPorId = async (req, res) => {
    try {
        const { id } = req.params;
        const body = req.body;

        const productoActualizado = await producto.updateEntry(id, body);

        // Si no existe el producto
        if (!productoActualizado) {
            return res.status(404).json({
                ok: false,
                msg: 'No existe producto con ese id para poder actualizarlo'
            });
        }

        // Actualización correcta
        return res.status(200).json({
            ok: true,
            msg: 'Producto actualizado correctamente',
            data: productoActualizado
        });

    } catch (error) {
        console.log(error);

        // Error interno del servidor
        return res.status(500).json({
            ok: false,
            msg: 'Error al actualizar el producto'
        });
    }
};


// ELIMINAR UN PRODUCTO POR ID
const eliminarUnProductoPorId = async (req, res) => {
    try {
        const { id } = req.params;

        const productoEliminado = await producto.deleteEntry(id);

        // Si no existe el producto
        if (!productoEliminado) {
            return res.status(404).json({
                ok: false,
                msg: 'No existe producto con ese id para poder eliminar'
            });
        }

        // Eliminación correcta
        return res.status(200).json({
            ok: true,
            msg: 'Producto eliminado correctamente',
            data: productoEliminado
        });

    } catch (error) {
        console.log(error);

        // Error interno del servidor
        return res.status(500).json({
            ok: false,
            msg: 'Error al eliminar el producto'
        });
    }
};


// EXPORTACIÓN DE CONTROLADORES
module.exports = {
    traerTodosLosProductos,
    traerUnProductoPorId,
    crearUnProducto,
    actualizarUnProductoPorId,
    eliminarUnProductoPorId
};