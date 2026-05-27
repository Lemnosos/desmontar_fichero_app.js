# 🚀 API REST con MongoDB

---
## ⚠️ Información importante

Los servicios se gestionan con una base de datos Mongo no realcional.  
Los productos se gestionan con una base de datos SQL relacional.
---


## 📥 Instalación del proyecto

### 1. Clonar el repositorio
git clone https://github.com/Lemnosos/desmontar_fichero_app.js.git

### 2. Entrar en el proyecto
cd desmontar_fichero_app.js

---
### 3. Instalar dependencias
npm install

## 📦 Dependencias utilizadas

- cors → Limita el acceso a la API por seguridad.
- dotenv → Gestión de variables de entorno.
- ejs → Generación de HTML por partes.
- express → Framework para crear el servidor.
- express-validator → Middleware de validación de datos.
- jsonwebtoken → Autenticación con tokens JWT.
- mongoose → Conexión y gestión de MongoDB.
- pg → Conexión y gestión de PostgreSQL.

---

## 🗄️ Inicializar datos base
Hay una carga de datos de productos pequeña almacenada en el fichero "queries_example_productos.sql".  
Con el siguiente comando lanzamos dicha carga de informacion

npm run sql_productos


Hay una carga de datos de usuario pequeña almacenada en el fichero "queries_example_usuarios.sql".  
Con el siguiente comando lanzamos dicha carga de informacion

npm run sql_usuarios

---

## 🔐 Variables de entorno

Renombra:
.env.template → .env

Configura:
PORT=puerto a usar en el entorno de trabajo
USER_MONGO=usuario de la BBDD de mongo
PASS_MONGO=contraseña de la BBDD de mongo
DB_URI=url de la BBDD de mongo

SQL_USER=usuario de la BBDD SQL
SQL_HOST=host de la BBDD SQL
SQL_DATABASE=nombre de la BBDD SQL
SQL_PASS=contraseña de la BBDD SQL

---

## ▶️ Ejecutar el servidor

Modo desarrollo:
npm run dev

Modo producción:
npm start

---

## 🌐 Repositorio

https://github.com/Lemnosos/desmontar_fichero_app.js.git

