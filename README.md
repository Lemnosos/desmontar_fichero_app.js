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

npm run sql

---

## 🔐 Variables de entorno

Renombra:
.env.template → .env

Configura:
DB_URI=cadena_de_conexion_a_mongodb
PORT=puerto_del_servidor

---

## ▶️ Ejecutar el servidor

Modo desarrollo:
npm run dev

Modo producción:
npm start

---

## 🌐 Repositorio

https://github.com/Lemnosos/desmontar_fichero_app.js.git

