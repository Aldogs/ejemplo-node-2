const express = require('express')
const ejs = require('ejs')
const mysql = require('mysql');

const middleware = require('./middleware/errores.js')
const rutasWeb = require('./rutas/web.js')
const rutasWs = require('./rutas/socket.js')

const app = express()
app.set('view engine', 'ejs')
app.set('views', './vistas')
app.use(express.static(__dirname + '/public'))

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'Libros'
  });

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to database: ' + err.stack);
    return;
  }
  
  console.log('Connected to database with ID ' + connection.threadId);
});  

app.use('/', rutasWeb)
rutasWs(app)
middleware(app)

app.listen(8000, () => {
    console.log('Iniciada app en el puerto 8000')
})
