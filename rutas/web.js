const express = require('express')
const controladorLibros = require('../controladores/libro.js')
const router = express.Router()

router.get('/', (peticion, respuesta) => {
    respuesta.render('index')
})
router.post('/libros/:id/:titulo/:autor/:editorial/:fecha', (peticion, respuesta) => {

    var reqBody = peticion.body;

    const id = reqBody.id
    const titulo = reqBody.titulo;
    const autor = reqBody.autor;
    const editorial = reqBody.editorial;
    const fecha = reqBody.fecha;

    const queryString = `INSERT INTO libros (id, titulo, autor, editorial, fecha) VALUES ('"+id+"', '"+titulo+"', '"+autor+"', '"+editorial+"', '"+fecha+"')`;
    connection.query(queryString, function (err, result) {
        if (err) {
            console.log("Ocurrio un error");
        } else {
            console.log("Se insertó correctamente el libro");
        }
    });
    controladorLibros.crearLibro(peticion, respuesta)
})
router.delete('/libros/:id', (peticion, respuesta) => {
    controladorLibros.borrarLibro(peticion, respuesta)
    var reqBody = peticion.body;

    const id = reqBody.id

    connection.query('DELETE FROM libros WHERE id = ?', id, (err, result) => {
        if (err) {
            console.error('Error borrrando datos de MySQL:', err);
            return;
        }
        console.log(`Datos de ${id} borrados correctamente`);
    });


})
router.get('/libros/:id', (peticion, respuesta) => {
    controladorLibros.obtenerLibro(peticion, respuesta)
})

router.get('/registro', (peticion, respuesta) => {
    respuesta.render('registro')
})


router.get('/libros', (req, res) => {
    var param = req.query.text;
    console.log(param)
    connection.query('SELECT * FROM libros WHERE titulo LIKE "%' + param + '%" OR autor LIKE "%' + param + '%"', (error, results, fields) => {
        if (error) throw error;

        res.json(results);
    });
});

module.exports = router
