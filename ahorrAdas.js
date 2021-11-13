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

//seccion categorias

const categorias = ["Comida","Servicios","Salidas","Educación","Transporte","Trabajo"]


botonAgregarCategoria.addEventListener ('click',() => {
    valorDelInput = inputAgregarCategoria.value
    categorias.push(valorDelInput)
    console.log(valorDelInput)

    guardarEnLocalStorage()
    agregarCategoriasAlHTML()
})

console.log(categorias)

const guardarEnLocalStorage  = () => {
    const categoriasConvertidoAJSON = JSON.stringify(categorias)
    localStorage.setItem('categorias', categoriasConvertidoAJSON)  
    }

const agregarCategoriasAlHTML = () => {
    
    const nuevoHTML = categorias.reduce ((acc,elemento) => {
    return acc + `
    <div class="columns">
        <div class="column is-8" id="agregar-maquetado-categorias">
            <div class="mb-2">
                <option class="tag is-primary is-light" id="comida-edit-remove" value="${elemento}">${elemento}</option>
            </div>
        </div>
        <div class="column is-1 is-offset-1">
            <button class="button is-ghost is-size-7" id="boton-editar-0">Editar</button>
        </div>
        <div class="column is-1">
            <button class="button is-ghost is-size-7">Eliminar</button>
        </div>
    </div>
    `
    },"")

    const agregarMaquetadoCategorias = document.querySelector("#agregar-maquetado-categorias")
    agregarMaquetadoCategorias.innerHTML = nuevoHTML    
}





// botonAgregarCategoria.addEventListener ('click',() =>{
//     selectCategoria.innerHTML = agregarCategorias
  
// })


