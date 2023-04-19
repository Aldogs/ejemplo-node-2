const express = require('express')
const controladorLibros = require('../controladores/libro.js')
const router = express.Router()

router.get('/', (peticion, respuesta) => {
    respuesta.render('index')
})
router.post('/libros/:id/:titulo/:autor/:editorial/:fecha', (peticion, respuesta) => {
    controladorLibros.crearLibro(peticion, respuesta)
})
router.delete('/libros/:id', (peticion, respuesta) => {
    controladorLibros.borrarLibro(peticion, respuesta)
})
router.get('/libros/:id', (peticion, respuesta) => {
    controladorLibros.obtenerLibro(peticion, respuesta)
})

router.get('/registro', (peticion, respuesta) => {
    respuesta.render('registro')
})


module.exports = router
