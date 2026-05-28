const { encriptarContraseña, compararContraseña } = require('../utils/gestionarContraseñas')
const { generarToken, comprobarToken } = require('../utils/gestionarTokens')
const Usuario = require('../models/user.model')

const createUser = async (req, res) => {
    try {

        let data = await Usuario.getUserByEmail(req.body.email)

        if (data != null)
            return res.status(403).json({
                ok: false,
                msg: 'El email ya esta asignado a otro usuario'
            })

        req.body.password = await encriptarContraseña(req.body.password)

        data = await Usuario.createUser(req.body)

        console.log("usuario despues de la creacion", data)

        const token = await generarToken({ id: data.id })

        return res.status(200).json({
            ok: true,
            msg: 'Creando usuario',
            token
        });

    } catch (error) {
        return res.status(500).json({
            ok: false,
            msg: 'Fallo del servidor'
        })
    }

}

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body

        const data = await Usuario.getUserByEmail(email)

        if (!compararContraseña(password, data.password)) {

            return res.status(403).json({
                ok: true,
                msg: 'contraseña incorrecta'
            });

        }

        const token = await generarToken({ id: data.id });

        return res.status(200).json({
            ok: true,
            msg: 'Logueando usuario',
            token
        });

    } catch (error) {
        console.log(error)
        return res.status(500).json({
            ok: false,
            msg: 'Error al loguear'
        });
    }

}

const renewToken = async (req, res) => {

    const nuevoToken = await generarToken({ id: req.id })

    return res.status(200).json({
        ok: true,
        msg: 'Renovando token',
        nuevoToken
    });
}


module.exports = {
    createUser,
    loginUser,
    renewToken
}