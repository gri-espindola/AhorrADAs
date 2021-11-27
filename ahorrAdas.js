//botones de las secciones
const botonCategorias = document.querySelector('#boton-categorias');
const botonBalance = document.querySelector('#boton-balance');
const botonReportes = document.querySelector('#boton-reportes');
//secciones
const seccionCategorias = document.querySelector('#seccion-categorias');
const seccionBalance = document.querySelector('#seccion-balance');
const seccionReportes = document.querySelector('#seccion-reportes');
const seccionOperaciones = document.querySelector('#seccion-operaciones-center');
const seccionImagenSinResultado = document.querySelector('#imagen-sin-resultado');
const seccionBalanceYFiltro = document.querySelector('#seccion-balance-filtro')
//BOTON DE MODALES
const agregarNuevaOperacion = document.querySelector(
  '#agregar-nueva-operacion'
);
const botonCancelar = document.querySelector('#boton-cancelar');
const botonAgregar = document.querySelector('#boton-agregar');


// MODALES
const modalNuevaOperacion = document.querySelector('#modal-nueva-operacion');

// INPUTS DE MI MODAL "+Nueva operacion"
const descripcion = document.querySelector('#descripcion');
const monto = document.querySelector('#monto');
const tipo = document.querySelector('#tipo');
const selectCategoria = document.querySelector('#select-categoria');
const seleccionarFecha = document.querySelector('#fecha');



//SECCION CATEGORIAS
const botonAgregarCategoria = document.querySelector(
  '#boton-agregar-categoria'
);
const inputAgregarCategoria = document.querySelector(
  '#input-agregar-categoria'
);
const editarEliminarComida = document.querySelector('#comida-edit-remove');
const editarEliminarServicios = document.querySelector(
  '#servicios-edit-remove'
);
const editarEliminarSalidas = document.querySelector('#salidas-edit-remove');
const editarEliminarEducacion = document.querySelector(
  '#educacion-edit-remove'
);
const editarEliminarTransporte = document.querySelector(
  '#transporte-edit-remove'
);
const editarEliminarTrabajo = document.querySelector('#trabajo-edit-remove');

//OPERACIONES DETALLADAS
const modalOperacionDetallada = document.querySelector(
  '#modal-operaciones-detalladas'
);
const operacionBoxCenter = document.querySelector('operaciones-center');

//*********************************************************************************//

//Darle a las 3 display flex
seccionCategorias.style.display = 'none';
seccionBalance.style.display = 'flex';
seccionReportes.style.display = 'none';


botonCategorias.addEventListener('click', () => {
  categorias = obtenerLocalStorage();
  mostrarListadoCategorias(categorias);

  seccionCategorias.style.display = 'flex';
  seccionBalance.style.display = 'none';
  seccionReportes.style.display = 'none';
  modalNuevaOperacion.style.display = 'none';
});

botonBalance.addEventListener('click', () => {
  categorias = obtenerLocalStorage();
  seccionBalance.style.display = 'flex';
  seccionCategorias.style.display = 'none';
  seccionReportes.style.display = 'none';
  modalNuevaOperacion.style.display = 'none';
});

botonReportes.addEventListener('click', () => {
  categorias = obtenerLocalStorage();
  seccionReportes.style.display = 'flex';
  seccionBalance.style.display = 'none';
  seccionCategorias.style.display = 'none';
  modalNuevaOperacion.style.display = 'none';
});

//"+NUEVA OPERACION"

modalNuevaOperacion.style.display = 'none';

agregarNuevaOperacion.addEventListener('click', () => {
  modalNuevaOperacion.style.display = 'flex';
  seccionBalance.style.display = 'none';
});

//"OPERACION DETALLADA"

let operaciones = [];

modalOperacionDetallada.style.display = 'none';
botonAgregar.addEventListener('click', () => {
  modalOperacionDetallada.style.display = 'flex';
  modalNuevaOperacion.style.display = 'none';
});

modalNuevaOperacion.addEventListener('submit', (e) => {
  e.preventDefault();

  const OperacionNuevaObjeto = {
    categoria: selectCategoria.value,
    descripcion: descripcion.value,
    fecha: fecha.value,
    id: '',
    monto: monto.value,
    tipo: tipo.value,
  };
  
  operaciones.push(OperacionNuevaObjeto);
  guardarEnLocalStorageGenerica('operaciones', operaciones)
  mostrarListadoOperaciones();
  seccionImagenSinResultado.style.display = 'none';
  seccionBalance.style.display = 'flex';

});



//seccion categorias

const agregarMaquetadoCategorias = document.querySelector(
  '#agregar-maquetado-categorias'
);
const agregarMaquetadoOperaciones = document.querySelector(
  '#grilla-operaciones'
);


let categorias = [
  'Comida',
  'Servicios',
  'Salidas',
  'Educación',
  'Transporte',
  'Trabajo',
];

botonAgregarCategoria.addEventListener('click', (e) => {
  e.preventDefault();
  valorDelInput = inputAgregarCategoria.value;
  if (!valorDelInput) {
    return;
  }
  inputAgregarCategoria.value = '';
  crearCategoria(valorDelInput);
  guardarEnLocalStorage();
});

const crearCategoria = (categoria) => {
  return categorias.push(categoria);
};

const guardarEnLocalStorage = () => {
  localStorage.setItem('categorias', JSON.stringify(categorias));
  mostrarListadoCategorias();
};


const guardarEnLocalStorageGenerica = (nombreJSON, objetoJson) => {
  localStorage.setItem(nombreJSON, JSON.stringify(objetoJson));
};


const obtenerLocalStorage = () => {
  categoriasLocalStorage = JSON.parse(localStorage.getItem('categorias'));
  if (categoriasLocalStorage) {
    categorias = categoriasLocalStorage;
  }
  return categorias;
};

mostrarListadoCategorias = () => {
  htmlInicial = categorias.reduce((acc, elemento, index) => {
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
  agregarMaquetadoCategorias.innerHTML = htmlInicial;
};



const mostrarListadoOperaciones = () => {
  htmlInicial = operaciones.reduce((acc, elemento, index) => {
    return (
      acc +
      `
      <div class="columns is-multiline is-mobile is-vcentered">
      <div class="column is-3-tablet is-6-mobile">
          <h3 class="has-text-weight-semibold">${elemento.descripcion}</h3>
      </div>
      <div class="column is-3-tablet is-6-mobile has-text-right-mobile">
          <span class="tag is-primary is-light">${elemento.categoria}</span>
      </div>
      <div
          class="column is-2-tablet has-text-grey is-hidden-mobile has-text-right-tablet">
          ${elemento.fecha}
      </div>
      <div
          class="column is-2-tablet is-6-mobile has-text-weight-bold has-text-right-tablet is-size-4-mobile has-text-danger">
          ${elemento.monto}
      </div>
      <div class="column is-2-tablet is-6-mobile has-text-right">
          <p class="is-fullwidth">
              <a href="#" class="mr-3 is-size-7 edit-link">Editar</a>
              <a href="#" class="is-size-7 delete-link">Eliminar</a>
          </p>
      </div>
  </div>
    `
    );
  }, '');
  agregarMaquetadoOperaciones.innerHTML = htmlInicial;
};













agregarMaquetadoCategorias.addEventListener('click', (e) => {
  e.preventDefault();

  if (e.target.innerHTML === 'Editar' || e.target.innerHTML === 'Eliminar') {
    let textoCategoria = e.path[2].childNodes[1].innerText;
    if (e.target.innerHTML === 'Editar') {
      // aca va la funcion de editar
    }
    if (e.target.innerHTML === 'Eliminar') {
      eliminarCategoria(textoCategoria);
    }
  }
}
);

const eliminarCategoria = (categoriaAEliminar) => {
  const indexArray = categorias.findIndex(
    (categoria) => categoria === categoriaAEliminar
  );
  categorias.splice(indexArray, 1);
  guardarEnLocalStorage();
};

  //Seccion filtros

  //Alternar filtros
  
  
    const botonOcultarfiltros = document.querySelector('#boton-ocultar')
    const filtrosGenerales = document.querySelector('#filtrosGenerales')

    botonOcultarfiltros.addEventListener ('click', (e) => {
      e.preventDefault();

    if (botonOcultarfiltros.innerText === 'Ocultar Filtros') {
        botonOcultarfiltros.innerText = 'Mostrar Filtros'
        filtrosGenerales.classList.add('is-hidden')
    } else {
        botonOcultarfiltros.innerText = 'Ocultar Filtros'
        filtrosGenerales.classList.remove('is-hidden')
    }
    }
    )



//Funciones filtros





    
  

  

  
  