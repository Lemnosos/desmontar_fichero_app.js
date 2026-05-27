//obtener todos los productos
obtenerTodosProductos = "SELECT * FROM PRODUCTO ORDER BY id_producto ASC"

//obtener producto por ID
obtenerProductoPorId = "SELECT * FROM PRODUCTO WHERE ID = $1;"

//crear un producto
crearProducto = "INSERT INTO productos (id_producto, nombre, descripcion, precio) VALUES ((SELECT COALESCE(MAX(id_producto), 0) + 1 FROM productos),$1, $2, $3)RETURNING *`"

//borrar producto por ID
borrarProducto = "DELETE FROM PRODUCTO WHERE ID = $1 RETURNING *;"

//obtener usuario por ID
obtenerUsuarioID = "Select * from usuarios where email = $1;"

//insertar nuevo usuario
crearUsuario = "INSERT INTO usuarios (email,nombre,password) VALUES ( $1, $2, $3) RETURNING *"


module.exports = {
    obtenerTodosProductos,
    obtenerProductoPorId,
    crearProducto,
    borrarProducto,
    obtenerUsuarioID,
    crearUsuario
}