const Productos = require('../models/producto.model')

//GET ALL PRODUCTS
const traerTodosLosProductos = async (req, res) => {
    try {
        const productos = await Productos.find()
        console.log(productos)

        if (!productos) {
            res.status(404).json(
                {
                    ok: false,
                    msg: 'No existen productos actualmente',
                }
            )
            return
        }

        res.status(200).json(
            {
                ok: true,
                msg: 'obteniendo un producto',
                productos
            }
        )
    } catch (error) {
        console.log(error)
        res.status(500).json(
            {
                ok: false,
                msg: 'Error obteniendo todos los productos'
            }
        )

    }
}


//GET A PRODUCT  BY ID
const traerUnProductoPorId = async (req, res) => {
    try {
        const { id } = req.params

        const productos = await Productos.findById({ _id: id })
        console.log(productos)

        if (!productos) {
            res.status(404).json(
                {
                    ok: false,
                    msg: 'No existe producto con ese id',
                }
            )
            return
        }

        res.status(200).json(
            {
                ok: true,
                msg: 'obteniendo un producto',
                productos
            }
        )

    } catch (error) {
        console.log(error)
        res.status(500).json(
            {
                ok: false,
                msg: 'Error obteniendo un producto'
            }
        )

    }

}


//CREATE A PRODUCT
const crearUnProductos = async (req, res) => {

    try {

        const body = req.body

        const productoInstanciado = new Productos(body)

        const resp = await productoInstanciado.save()

        return res.status(201).json(
            {
                ok: true,
                msg: 'Producto creado',
                resp
            }
        )

    } catch (error) {

        console.log(error)

        res.status(500).json(
            {
                ok: false,
                msg: 'Error al Crear un Producto'
            }
        )

    }

}


//UPDATE A PRODUCT BY ID
const actualizarUnProductoPorId = async (req, res) => {
    try {
        const { id } = req.params

        const body = req.body

        let productos = await Productos.findByIdAndUpdate({ _id: id }, body)

        if (!productos)
            return res.status(404).json(
                {
                    ok: false,
                    msg: 'No existe producto con ese id para poder actualizarlo',
                }
            )

        return res.status(201).json(
            {
                ok: true,
                msg: 'Producto actualizado',
                productos
            }
        )

    } catch (error) {

        console.log(error)

        res.status(500).json(
            {
                ok: false,
                msg: 'Error al actualizar el Producto'
            }
        )

    }


}


//DELETE A PRODUCT BY ID
const eliminarUnProductoPorId = async (req, res) => {
    try {
        const { id } = req.params

        let productos = await Productos.findByIdAndDelete({ _id: id })

        if (!productos)
            return res.status(404).json(
                {
                    ok: false,
                    msg: 'No existe producto con ese id para poder eliminar',
                }
            )

        return res.status(201).json(
            {
                ok: true,
                msg: 'Producto eliminado',
                productos
            }
        )

    } catch (error) {

        console.log(error)

        res.status(500).json(
            {
                ok: false,
                msg: 'Error al actualizar el Producto'
            }
        )

    }

}



module.exports = {
    traerTodosLosProductos,
    traerUnProductoPorId,
    crearUnProductos,
    actualizarUnProductoPorId,
    eliminarUnProductoPorId
}