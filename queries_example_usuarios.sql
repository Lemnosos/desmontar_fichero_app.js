--generar los campos de prueba para hacer los ejercicios

DROP TABLE IF EXISTS usuarios;

CREATE TABLE usuarios (
    id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    nombre VARCHAR(100) NOT NULL,
    password TEXT NOT NULL
);

INSERT INTO usuarios (email, nombre, password)
VALUES
('antoñito@correo.es','antoñito','$2b$10$OOKvbdWmULUq7Ken7aEbiuQRyVchI4SuquHPqzT6R8J8mdBGL9uLq'),
('damisa@correo.es','damisa','$2b$10$8u6Rkl65MDi.i2wncJv/MOC.kJf5J7bsfVvlfIdMiHXs8pYcG9BLW'),
('lemnos@correo.es','lemnos','$2b$10$WLOqIsjOW0UVu5fdT5ysW.uZfYJfPuEHMQunOVWzrCsMamAZGNbUW')
;