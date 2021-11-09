//botones de las secciones
const botonCategorias = document.querySelector("#boton-categorias")
const botonBalance = document.querySelector("#boton-balance")
const botonReportes = document.querySelector("#boton-reportes")
//secciones
const seccionCategorias = document.querySelector("#seccion-categorias")
const seccionBalance = document.querySelector("#seccion-balance")
const seccionReportes = document.querySelector("#seccion-reportes")

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
    const gasto = document.querySelector("#gasto")
    const ganancias = document.querySelector("#ganancias")
const selectCategoria = document.querySelector("#select-categoria")
    const comida = document.querySelector("#comida")
    const servicios = document.querySelector("#servicios")
    const salidas = document.querySelector("#salidas")
    const educacion = document.querySelector("#educacion")
    const transporte = document.querySelector("#transporte")
    const trabajo = document.querySelector("#trabajo")
    const fecha = document.querySelector("#fecha")

//*********************************************************************************//

//Darle a las 3 display flex
    seccionCategorias.style.display = 'none'
    seccionBalance.style.display = 'flex'
    seccionReportes.style.display = 'none'
    

botonCategorias.addEventListener('click', () =>{
    seccionCategorias.style.display = 'flex'
    seccionBalance.style.display = 'none'
    seccionReportes.style.display = 'none'
    modalNuevaOperacion.style.display = 'none'
});


botonBalance.addEventListener('click', () =>{
    seccionBalance.style.display = 'flex'
    seccionCategorias.style.display = 'none'
    seccionReportes.style.display = 'none'
    modalNuevaOperacion.style.display = 'none'
});


botonReportes.addEventListener('click', () =>{
    seccionReportes.style.display = 'flex'
    seccionBalance.style.display = 'none'
    seccionCategorias.style.display = 'none'
    modalNuevaOperacion.style.display = 'none'
});

//"+NUEVA OPERACION"

modalNuevaOperacion.style.display = 'none'

agregarNuevaOperacion.addEventListener('click', () =>{
    modalNuevaOperacion.style.display = 'flex'
    seccionBalance.style.display = 'none'
})
