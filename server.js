const express = require('express')

const app = express()

const swaggerUi = require('swagger-ui-express')
const swaggerDocument = require('./openapi.json')
// const   require  * as bodyParser require('body-parser')

app.use('/documentation', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

app.listen(3030)

console.log('server rum 3030 ')
