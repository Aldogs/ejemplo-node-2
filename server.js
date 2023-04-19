const express = require('express')
const ejs = require('ejs')

const middleware = require('./middleware/errores.js')
const rutasWeb = require('./rutas/web.js')
const rutasWs = require('./rutas/socket.js')

const app = express()
app.set('view engine', 'ejs')
app.set('views', './vistas')
app.use(express.static(__dirname + '/public'))

app.use('/', rutasWeb)
rutasWs(app)
middleware(app)

app.listen(8000, () => {
    console.log('Iniciada app en el puerto 8000')
})
