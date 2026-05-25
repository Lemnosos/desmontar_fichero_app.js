const express = require('express')
const cors = require('cors')
const dbConect = require('./utils/mongoConect')
const app = express()
require('dotenv').config()

const port = process.env.PORT || 3000

// parse de formularios
app.use(express.urlencoded())

// parse de json
app.use(express.json())


dbConect().catch(error => console.log(error))


app.use('/api/v1/servicios', require('./routes/servicios.router'))
app.use('/api/v1/productos', require('./routes/productos.router'))


app.listen(port, () => {
    console.log(`Server on port ${port}`)
})
