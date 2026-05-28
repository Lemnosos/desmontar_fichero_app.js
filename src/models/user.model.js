const { Pool } = require('pg');
const queries = require('../utils/queries')


const pool = new Pool({
    user: process.env.SQL_USER,
    host: process.env.SQL_HOST,
    database: process.env.SQL_DB,
    password: process.env.SQL_PASS,
    port: process.env.PORT
});

/*
nombre: tipo string y obligatorio
email: tipo string, obligatório y único,
password: tipo string y obligatório
*/

//getUserByEmail
const getUserByEmail = async (email) => {

    let client;

    try {
        client = await pool.connect();

        const data = await client.query(queries.obtenerUsuarioID, [email]);

        if (data.rowCount === 1)
            return data.rows[0];

        return null;

    } catch (error) {
        console.log(error);
        throw error;

    } finally {
        if (client) client.release();
    }
}


const createUser = async (body) => {
    let client;

    try {
        client = await pool.connect();

        const data = await client.query(queries.crearUsuario, [body.email, body.nombre, body.password]);

        return data.rows[0];

    } catch (error) {
        console.log(error);
        throw error;

    } finally {
        if (client) client.release();
    }
};

// EXPORTS
module.exports = {
    getUserByEmail,
    createUser
};