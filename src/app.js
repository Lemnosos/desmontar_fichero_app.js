const express = require('express')
const cors = require('cors')
const dbConect = require('./utils/mongoConect')
const app = express()
require('dotenv').config()

const port = process.env.PORT || 3000

// parse de formularios
app.use(express.urlencoded({ extended: true }))

// parse de json
app.use(express.json())


dbConect().catch(error => console.log(error))

//generacion de endpoints
app.use('/api/v1/servicios', require('./routes/servicios.router'))
app.use('/api/v1/productos', require('./routes/productos.router'))
app.use('/api/v1/auth', require('./routes/auth.routes'))


app.listen(port, () => {
    console.log(`Server on port ${port}`)
})
