const modeloLibro = require('../modelos/libro.js')
var libros = {}

function generarUrl(idLib) {
    return `/libros/${idLib}`
}

module.exports = {

    crearLibro: (peticion, respuesta) => {
        if (libros[peticion.params.id]) {
            respuesta.status(409).json({
                name: 'ID de libro repetido',
                message: `Ya existe un libro con el ID ${peticion.params.id}`
            })
            return
        }
        libros[peticion.params.id] = modeloLibro(
            peticion.params.id, peticion.params.titulo, peticion.params.autor, peticion.params.editorial, peticion.params.fecha
        )
        let urlNuevoLibro = generarUrl(peticion.params.id)
        respuesta.status(201).send(urlNuevoLibro)
    },

    borrarLibro: (peticion, respuesta) => {
        delete libros[peticion.params.id]
        let urlLibroBorrado = generarUrl(peticion.params.id)
        respuesta.send(urlLibroBorrado)
    },

    obtenerLibro: (peticion, respuesta) => {
        if (!libros[peticion.params.id]) {
            respuesta.status(404).json({
                name: 'Libro inexistente',
                message: `No existe ningún libro con ID ${peticion.params.id}`
            })
        }
        let lib = libros[peticion.params.id]
        respuesta.render('libro', {libro: lib})
    }

}
