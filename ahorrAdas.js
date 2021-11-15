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
    

/* botonCategorias.addEventListener('click', () =>{
    seccionCategorias.style.display = 'flex'
    seccionBalance.style.display = 'none'
    seccionReportes.style.display = 'none'
    modalNuevaOperacion.style.display = 'none'
}); */
botonCategorias.addEventListener('click', () => {
    const data = obtenerLocalStorage();
    if (data) {
      mostrarListadoCategorias(data);
    } else {
      mostrarListadoCategorias(categorias);
    }
  
    seccionCategorias.style.display = 'flex';
    seccionBalance.style.display = 'none';
    seccionReportes.style.display = 'none';
    modalNuevaOperacion.style.display = 'none';
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


botonAgregarCategoria.addEventListener('click', () => {
    valorDelInput = inputAgregarCategoria.value;
    const data = obtenerLocalStorage();
    if (data) {
      data.push(valorDelInput);
      guardarEnLocalStorage(data);
      mostrarListadoCategorias(data);
    } else {
      categorias.push(valorDelInput);
      guardarEnLocalStorage(categorias);
      mostrarListadoCategorias(categorias);
    }
  });


const guardarEnLocalStorage = (nuevoArrayCategorias) => {
    const categoriasConvertidoAJSON = JSON.stringify(nuevoArrayCategorias);
    localStorage.setItem('categorias', categoriasConvertidoAJSON);
  };

  const obtenerLocalStorage = () => {
    const data = localStorage.getItem('categorias');
    if (data) {
      const dataJs = JSON.parse(data);
      return dataJs;
    }
  };



mostrarListadoCategorias = (dataJs) => {
  const htmlInicial = dataJs.reduce((acc, elemento, index) => {
    return (
      acc +
      `
    <div class="columns">
        <div class="column is-8" id="agregar-maquetado-categorias" >
            <div class="mb-2">
                <option class="tag is-primary is-light" value="${elemento}">${elemento}</option>
            </div>
        </div>
        <div class="column is-1 is-offset-1">
            <button class="button is-ghost is-size-7" id="boton-editar-${index}">Editar</button>
        </div>
        <div class="column is-1">
            <button class="button is-ghost is-size-7" id="boton-eliminar-${index}">Eliminar</button>
        </div>
    </div>
    `
    );
  }, '');

  const agregarMaquetadoCategorias = document.querySelector(
    '#agregar-maquetado-categorias'
  );
  agregarMaquetadoCategorias.innerHTML = htmlInicial;
};

