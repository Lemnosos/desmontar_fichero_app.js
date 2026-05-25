const Servicios = require('../models/servicio.model')

//GET ALL SERVICES
const traerTodosLosServicios = async (req, res) => {
    try {
        const servicios = await Servicios.find()
        console.log(servicios)

        if (!servicios) {
            res.status(404).json(
                {
                    ok: false,
                    msg: 'No existen servicios actualmente',
                }
            )
            return
        }

        res.status(200).json(
            {
                ok: true,
                msg: 'obteniendo un servicio',
                servicios
            }
        )
    } catch (error) {
        console.log(error)
        res.status(500).json(
            {
                ok: false,
                msg: 'Error obteniendo todos los servicios'
            }
        )

    }
}


//GET A SERVICE BY ID
const traerUnServicioPorId = async (req, res) => {
    try {
        const { id } = req.params

        const servicios = await Servicios.findById({ _id: id })
        console.log(servicios)
        // TODO: comprobar si hay respuesta  // TODO: si no existe 404  { ok: false, msg: 'no se encontro'}

        if (!servicios) {
            res.status(404).json(
                {
                    ok: false,
                    msg: 'No existe servicio con ese id',
                }
            )
            return
        }

        res.status(200).json(
            {
                ok: true,
                msg: 'obteniendo un servicio',
                servicios
            }
        )

    } catch (error) {
        console.log(error)
        res.status(500).json(
            {
                ok: false,
                msg: 'Error obteniendo un servicio'
            }
        )

    }

}


//CREATE A SERVICE
const crearUnServicios = async (req, res) => {

    try {

        const body = req.body
        console.log("controlador de crear servicios", body)

        const servicioInstanciado = new Servicios(body)

        const resp = await servicioInstanciado.save()

        res.status(201).json(
            {
                ok: true,
                msg: 'Servicio creado',
                resp
            }
        )

    } catch (error) {

        console.log(error)

        res.status(500).json(
            {
                ok: false,
                msg: 'Error al Crear un Servicio'
            }
        )

    }

}


//UPDATE A SERVICE BY ID
const actualizarUnServicioPorId = async (req, res) => {
    try {
        const { id } = req.params

        const body = req.body

        let servicios = await Servicios.findByIdAndUpdate({ _id: id }, body)

        if (!servicios)
            return res.status(404).json(
                {
                    ok: false,
                    msg: 'No existe servicio con ese id para poder actualizarlo',
                }
            )

        return res.status(201).json(
            {
                ok: true,
                msg: 'Servicio actualizado',
                servicios
            }
        )

    } catch (error) {

        console.log(error)

        res.status(500).json(
            {
                ok: false,
                msg: 'Error al actualizar el Servicio'
            }
        )

    }


}


//DELETE A SERVICE BY ID
const eliminarUnServicioPorId = async (req, res) => {
    try {
        const { id } = req.params

        let servicios = await Servicios.findByIdAndDelete({ _id: id })

        if (!servicios)
            return res.status(404).json(
                {
                    ok: false,
                    msg: 'No existe servicio con ese id para poder eliminar',
                }
            )

        return res.status(201).json(
            {
                ok: true,
                msg: 'Servicio eliminado',
                servicios
            }
        )

    } catch (error) {

        console.log(error)

        res.status(500).json(
            {
                ok: false,
                msg: 'Error al actualizar el Servicio'
            }
        )

    }

}



module.exports = {
    traerTodosLosServicios,
    traerUnServicioPorId,
    crearUnServicios,
    actualizarUnServicioPorId,
    eliminarUnServicioPorId
}