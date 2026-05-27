const jwt = require('jsonwebtoken');

const SECRET_KEY = process.env.SECRET_KEY;

//Generar token
function generarToken(payload) {
    return jwt.sign(payload, SECRET_KEY, {
        expiresIn: '1h'
    });
}

//Comprobar token
function comprobarToken(token) {
    try {
        return jwt.verify(token, SECRET_KEY);
    } catch (error) {
        return null;
    }
}

module.exports = {
    generarToken,
    comprobarToken
}