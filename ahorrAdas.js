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
const agregarNuevaOperacion = document.querySelector('#agregar-nueva-operacion');
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

// --------------------------------------ALTERNAR FILTROS----------------------------------------------------
const botonOcultarfiltros = document.querySelector('#boton-ocultar');
const filtrosGenerales = document.querySelector('#filtrosGenerales');
// ----------------------------------FUNCIONES FILTROS--------------------------------------------------------
const filtroTipo = document.querySelector("#filtro-tipo");
const filtroCategoria = document.querySelector("#filtro-categoria");
const filtroFecha = document.querySelector("#filtro-fecha");
const filtroOrdenar= document.querySelector("#filtro-ordenar");

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

let operaciones = JSON.parse(localStorage.getItem("operaciones")) || [];

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
  mostrarListadoOperaciones(operaciones);
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
  mostrarListadoOperaciones(operaciones);
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



const mostrarListadoOperaciones = (arrayFiltrado) => {

  if (operaciones.length > 0) {
    seccionImagenSinResultado.style.display = 'none';
    agregarMaquetadoOperaciones.style.display = 'block';
    modalOperacionDetallada.style.display = 'block';
    htmlInicial = arrayFiltrado.reduce((acc, elemento, index) => {
      return (
        acc +
        `
      <div class="columns is-multiline is-mobile is-vcentered">
      <div class="column is-3-tablet is-6-mobile">
          <h3 class="has-text-weight-semibold" id="textoOperacion">${elemento.descripcion}</h3>
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
              <a href="#" class="mr-3 is-size-7 edit-link" id="boton-editar-${index}">Editar</a>
              <a href="#" class="is-size-7 delete-link" id="boton-eliminar-${index}">Eliminar</a>
          </p>
      </div>
  </div>
    `
      );
    }, '');
    agregarMaquetadoOperaciones.innerHTML = htmlInicial;
  } else {
    seccionImagenSinResultado.style.display = 'block';
    agregarMaquetadoOperaciones.style.display = 'none';
    modalOperacionDetallada.style.display = 'none';
  }


};
// -------------------------------------BOTÓN EDITAR Y ELIMINAR OPERACIONES------------------------------------
agregarMaquetadoOperaciones.addEventListener('click', (e) => {
  e.preventDefault();
  if (e.target.innerHTML === 'Editar' || e.target.innerHTML === 'Eliminar') {
    const texto = document.querySelector('#textoOperacion').innerText;
    if (e.target.innerHTML === 'Editar') {
      //FUNCIÓN EDITAR
    }
    if (e.target.innerHTML === 'Eliminar') {
      eliminarOperacion(texto);
    }
  }
}
);

const eliminarOperacion = (texto) => {
  const indexArray = operaciones.findIndex(
    (operacion) => operacion.descripcion === texto
  );
  operaciones.splice(indexArray, 1);
  guardarEnLocalStorageGenerica('operaciones', operaciones);
};

// ------------------------------------------BOTÓN EDITAR Y ELIMINAR CATEGORIAS------------------------------

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

//-----------------------------------------BOTÓN OCULTAR FILTROS-------------------------------------------------------------

botonOcultarfiltros.addEventListener('click', (e) => {
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

//-------------------------------------------------------FUNCIÓN DE FILTROS-----------------------------------------------------------------
const mostrarOperacionesEnHTML = (array) => {
  let acc = ""

  array.map((operacion) => {
    acc = acc + `
    <div class="columns has-text-weight-semibold is-hidden-mobile">
      <div class="column is-3">${operacion.Descripción}</div>
      <div class="column is-3">${operacion.Categoría}</div>
      <div class="column is-2 has-text-right">${operacion.Fecha}</div>
      <div class="column is-2 has-text-right">${operacion.Monto}</div>
      <div class="column is-2 has-text-right">${operacion.Acciones}</div>
    </div>
    `
  })

  agregarMaquetadoOperaciones.innerHTML = acc
}

mostrarOperacionesEnHTML(operaciones)



filtroTipo.onchange = () => {
  const operacionesFiltradasporTipo = operaciones.filter((operaciones) => {
    if (filtroTipo.value === "Todos") {
      return operaciones
    }
    return operaciones.tipo === filtroTipo.value


  })
 mostrarListadoOperaciones(operacionesFiltradasporTipo);
  console.log(filtroTipo.value)

}

filtroCategoria.onchange = () => {
  const operacionesFiltradasporCategoria = operaciones.filter((operaciones) => {
    if (filtroCategoria.value === "Todas") {
      return operaciones
    }
    return operaciones.categoria === filtroCategoria.value
  })


  mostrarListadoOperaciones(operacionesFiltradasporCategoria);

  console.log(filtroCategoria.value)


}

filtroFecha.onchange = () => {
  const operacionesFiltradasporTipo = operaciones.filter((operaciones) => {
    if (filtroFecha.value === "Todos") {
      return operaciones
    }
    return operaciones.fecha === filtroFecha.value


  })
 mostrarListadoOperaciones(operacionesFiltradasporTipo);
  console.log(filtroFecha.value)

}

// ----------------------------------------------FUNCIÓN DE FILTRO "ORDENAR POR"--------------------------------
 filtroOrdenar.onchange = () => {
 
debugger
  switch (filtroOrdenar.value) {
    case 'mas-recientes':
      operaciones = ordernarFecha(operaciones, 'descendente')
      break
    case 'menos-recientes':
      operaciones = ordernarFecha(operaciones, 'ascendente')
      break
    case 'mayor-monto':
      operaciones = ordernarMonto(operaciones, 'descendente')
      break
    case 'menor-monto':
      operaciones = ordernarMonto(operaciones, 'ascendente')
      break
    case 'creciente':
      operaciones = ordernarDescripcion(operaciones, 'ascendente')
      break
    case 'decreciente':
      operaciones = ordernarDescripcion(operaciones, 'descendente')
      break
    default:
  }

 mostrarListadoOperaciones(operaciones)
}

const ordernarFecha = (operaciones, orden) => {
  debugger
  return [...operaciones].sort((a, b) => {
    const fechaA = new Date(a.fecha)
    const fechaB = new Date(b.fecha)
    return orden === 'ascendente'
      ? fechaA.getTime() - fechaB.getTime()
      : fechaB.getTime() - fechaA.getTime()
  })
}

const ordernarMonto = (operaciones, orden) => {
  return [...operaciones].sort((a, b) => {
    return orden === 'ascendente' ? a.monto - b.monto : b.monto - a.monto
  })
}

const ordernarDescripcion = (operaciones, orden) => {
  debugger
  if (orden === 'ascendente') {
  
    operaciones.sort((a, b) => (a.descripcion > b.descripcion) ? 1 : -1)
  } else {
    operaciones.sort((a, b) => (a.descripcion < b.descripcion) ? 1 : -1)
  }
  return [...operaciones].sort((a, b) => {
  })
}

