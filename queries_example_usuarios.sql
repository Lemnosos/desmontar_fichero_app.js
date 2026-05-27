--generar los campos de prueba para hacer los ejercicios

DROP TABLE IF EXISTS usuarios;

CREATE TABLE usuarios (
    email VARCHAR(25) PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    password VARCHAR(250) NOT NULL
);

INSERT INTO usuarios (email, nombre, password)
VALUES
('antoñito@correo.es','antoñito','$2b$10$OOKvbdWmULUq7Ken7aEbiuQRyVchI4SuquHPqzT6R8J8mdBGL9uLq'),
('damisa@correo.es','damisa','$2b$10$8u6Rkl65MDi.i2wncJv/MOC.kJf5J7bsfVvlfIdMiHXs8pYcG9BLW'),
('lemnos@correo.es','lemnos','$2b$10$WLOqIsjOW0UVu5fdT5ysW.uZfYJfPuEHMQunOVWzrCsMamAZGNbUW')
;