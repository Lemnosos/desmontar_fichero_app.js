const bcryptjsc = require('bcryptjs')

const saltRounds = Number(process.env.BCRYPTJS_INT) || 10;

async function encriptarContraseña(password) {
    const salt = await bcryptjsc.genSalt(saltRounds);
    const hash = await bcryptjsc.hash(password, salt);
    return hash;
}

const compararContraseña = (pass, encPass) => {
    return bcryptjsc.compareSync(pass, encPass);
}

module.exports = { encriptarContraseña, compararContraseña }