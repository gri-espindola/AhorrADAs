//botones de las secciones
const botonCategorias = document.querySelector("#boton-categorias")
const botonBalance = document.querySelector("#boton-balance")
const botonReportes = document.querySelector("#boton-reportes")
//secciones
const seccionCategorias = document.querySelector("#seccion-categorias")
const seccionBalance = document.querySelector("#seccion-balance")
const seccionReportes = document.querySelector("#seccion-reportes")
const seccionOperaciones = document.querySelector("seccion-operaciones-center")

//BOTON DE MODALES
const agregarNuevaOperacion = document.querySelector("#agregar-nueva-operacion")
const botonCancelar = document.querySelector("#boton-cancelar")
const botonAgregar = document.querySelector("#boton-agregar")

// MODALES
const modalNuevaOperacion = document.querySelector("#modal-nueva-operacion")

// INPUTS DE MI MODAL "+Nueva operacion"
const descripcion = document.querySelector("#descripcion")
const monto = document.querySelector("#monto")
const tipo = document.querySelector("#tipo")
const selectCategoria = document.querySelector("#select-categoria")


//SECCION CATEGORIAS
const botonAgregarCategoria = document.querySelector("#boton-agregar-categoria")
const inputAgregarCategoria = document.querySelector("#input-agregar-categoria")
const editarEliminarComida = document.querySelector("#comida-edit-remove")
const editarEliminarServicios = document.querySelector("#servicios-edit-remove")
const editarEliminarSalidas = document.querySelector("#salidas-edit-remove")
const editarEliminarEducacion = document.querySelector("#educacion-edit-remove")
const editarEliminarTransporte = document.querySelector("#transporte-edit-remove")
const editarEliminarTrabajo = document.querySelector("#trabajo-edit-remove")

//OPERACIONES DETALLADAS
const modalOperacionDetallada = document.querySelector("#modal-operaciones-detalladas")
const operacionBoxCenter = document.querySelector("operaciones-center")


//*********************************************************************************//

//Darle a las 3 display flex
seccionCategorias.style.display = 'none'
seccionBalance.style.display = 'flex'
seccionReportes.style.display = 'none'


botonCategorias.addEventListener('click', () => {
    seccionCategorias.style.display = 'flex'
    seccionBalance.style.display = 'none'
    seccionReportes.style.display = 'none'
    modalNuevaOperacion.style.display = 'none'
});


botonBalance.addEventListener('click', () => {
    seccionBalance.style.display = 'flex'
    seccionCategorias.style.display = 'none'
    seccionReportes.style.display = 'none'
    modalNuevaOperacion.style.display = 'none'
});


botonReportes.addEventListener('click', () => {
    seccionReportes.style.display = 'flex'
    seccionBalance.style.display = 'none'
    seccionCategorias.style.display = 'none'
    modalNuevaOperacion.style.display = 'none'
});

//"+NUEVA OPERACION"

modalNuevaOperacion.style.display = 'none'

agregarNuevaOperacion.addEventListener('click', () => {
    modalNuevaOperacion.style.display = 'flex'
    seccionBalance.style.display = 'none'
})

//"OPERACION DETALLADA"



//modalOperacionDetallada.style.display = 'none'

<<<<<<< HEAD
botonAgregar.addEventListener('click', () => {
    modalOperacionDetallada.style.display = 'flex'
    modalNuevaOperacion.style.display = 'none'
    seccionOperaciones.style.display = 'flex'
=======
botonAgregar.addEventListener('click', () =>{
    modalOperacionDetallada.style.display ='flex'
    modalNuevaOperacion.style.display = 'none'
    seccionOperaciones.style.display='none'
>>>>>>> 0e28028c0a5a55ad38afb490c1e3eacc7192be79

})

modalNuevaOperacion.addEventListener("submit", (e) => {
e.preventDefault()


})

//seccion categorias

const categorias = ["Comida", "Servicios", "Salidas", "Educación", "Transporte", "Trabajo"]


//botonAgregarCategoria.addEventListener ('click',() => {
//     valorDelInput = inputAgregarCategoria.value
//    categorias.push(valorDelInput)
//     console.log(valorDelInput)
// })

//console.log(categorias)

const inputAgregado = () => {
    valorDelInput = inputAgregarCategoria.value
    categorias.push(valorDelInput)
    console.log(valorDelInput)
}

botonAgregarCategoria.addEventListener('click', () => {
    inputAgregado
})

console.log(categorias)


const categoriasConvertidoAJSON = JSON.stringify(inputAgregado)
localStorage.setItem('categorias', categoriasConvertidoAJSON)
const infoGuardadaEnLocalCategorias = localStorage.getItem('categorias')
const datosConvertidos = JSON.parse(infoGuardadaEnLocalCategorias)

console.log(datosConvertidos)

//const datosQueNoExistenLocalStorage = infoGuardadaEnLocalCategorias.getItem('datos')


/* const agregarCategorias = categorias.reduce ((acc,elemento) => {
    return acc + `<option value ="${elemento}">${elemento}</option>`
},"")

inputAgregarCategoria = agregarCategorias

botonAgregarCategoria.addEventListener ('click',() =>{
    selectCategoria.innerHTML = agregarCategorias
    categorias.push(inputAgregarCategoria)

})
 */

