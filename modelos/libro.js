module.exports = (idLib, tituloLib, autorLib, editorialLib, fechaLib) => {
    let id = idLib.valueOf()
    let titulo = tituloLib.valueOf()
    let autor = autorLib.valueOf()
    let editorial = editorialLib.valueOf()
    let fecha = fechaLib.valueOf()
    return {
        obtenerId: () => {
            return id
        },
        obtenerTitulo: () => {
            return titulo
        },
        obtenerAutor: () => {
            return autor
        },
        obtenerEditorial: () => {
            return editorial
        },
        obtenerFecha: () => {
            return fecha
        },
        toString: () => {
            return `${titulo} ${autor} ${editorial} ${fecha}`
        }
    }
}
