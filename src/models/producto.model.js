const { Pool } = require('pg');

const pool = new Pool({
    user: process.env.SQL_USER,
    host: process.env.SQL_HOST,
    database: process.env.SQL_DATABASE,
    password: process.env.SQL_PASS
});


// =======================
// GET ALL
// =======================
const getAllEntries = async () => {
    let client;

    try {
        client = await pool.connect();

        const data = await client.query("SELECT * FROM productos ORDER BY id_producto ASC");

        return data.rows;

    } catch (error) {
        console.log(error);
        throw error;

    } finally {
        if (client) client.release();
    }
};


// =======================
// GET BY ID
// =======================
const getOneEntryByID = async (id) => {
    let client;

    try {
        client = await pool.connect();

        const data = await client.query(
            "SELECT * FROM productos WHERE id_producto = $1",
            [id]
        );

        if (data.rowCount === 0) return null;

        return data.rows[0];

    } catch (error) {
        console.log(error);
        throw error;

    } finally {
        if (client) client.release();
    }
};


// =======================
// CREATE
// =======================
const createEntry = async (body) => {
    let client;

    try {
        client = await pool.connect();

        const data = await client.query(
            `INSERT INTO productos (id_producto, nombre, descripcion, precio)
             VALUES (
                (SELECT COALESCE(MAX(id_producto), 0) + 1 FROM productos),
                $1, $2, $3
             )
             RETURNING *`,
            [body.nombre, body.descripcion, body.precio]
        );

        return data.rows[0];

    } catch (error) {
        console.log(error);
        throw error;

    } finally {
        if (client) client.release();
    }
};


// =======================
// UPDATE (dinámico)
// =======================
const updateEntry = async (id, body) => {
    let client;

    try {
        client = await pool.connect();

        // comprobar existencia
        const exists = await client.query(
            "SELECT 1 FROM productos WHERE id_producto = $1",
            [id]
        );

        if (exists.rowCount === 0) return null;

        let query = "UPDATE productos SET ";
        let values = [];
        let i = 1;

        const columnas = ["nombre", "descripcion", "precio"];
        let actualizar = false;

        for (const columna of columnas) {
            if (body[columna] !== undefined) {
                query += `${columna} = $${i}, `;
                values.push(body[columna]);
                i++;
                actualizar = true;
            }
        }

        if (!actualizar) {
            throw new Error("No hay campos para actualizar");
        }

        query = query.slice(0, -2);
        query += ` WHERE id_producto = $${i} RETURNING *`;
        values.push(id);

        const data = await client.query(query, values);

        return data.rows[0];

    } catch (error) {
        console.log(error);
        throw error;

    } finally {
        if (client) client.release();
    }
};


// =======================
// DELETE
// =======================
const deleteEntry = async (id) => {
    let client;

    try {
        client = await pool.connect();

        const data = await client.query(
            "DELETE FROM productos WHERE id_producto = $1 RETURNING *",
            [id]
        );

        if (data.rowCount === 0) return null;

        return data.rows[0];

    } catch (error) {
        console.log(error);
        throw error;

    } finally {
        if (client) client.release();
    }
};


// =======================
// EXPORTS
// =======================
module.exports = {
    getAllEntries,
    getOneEntryByID,
    createEntry,
    updateEntry,
    deleteEntry
};