const { encriptarContraseña, compararContraseña } = require('../utils/gestionarContraseñas')
const { generarToken, comprobarToken } = require('../utils/gestionarTokens')
const Usuario = require('../models/user.model')

const createUser = async (req, res) => {

    let data = await Usuario.getUserByEmail(req.body.email)
    console.log("data despues de buscar usuario a crear", data)

    if (data != null)
        return res.status(400).json({
            ok: false,
            msg: 'El email ya esta asignado a otro usuario'
        })

    req.body.contraseña = await encriptarContraseña(req.body.contraseña)

    data = await Usuario.createUser(req.body)

    return res.status(200).json({
        ok: true,
        msg: 'Creando usuario'
    });
}

const loginUser = async (req, res) => {

    const { email, password } = req.body

    const data = await Usuario.getUserByEmail(email)

    if (!compararContraseña(password, data.password)) {

        return res.status(403).json({
            ok: true,
            msg: 'contraseña incorrecta'
        });

    }

    const token = generarToken({ email: data.email });

    return res.status(200).json({
        ok: true,
        msg: 'Logueando usuario',
        token
    });
}

const renewToken = (req, res) => {

    const header = req.rawHeaders[1]

    const token = header.split(" ")

    const objeto = comprobarToken(token[1])

    const nuevoToken = generarToken({ email: objeto.email })

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