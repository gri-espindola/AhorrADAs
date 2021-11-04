//guardando cambios de la rama para crear funcionalidades para las secciones que me permitan cambiarme de modal entre categoria, balance y reporte

//DOM

//botones
const botonCategorias = document.querySelector("#boton-categorias")
const botonBalance = document.querySelector("#boton-balance")
const botonReportes = document.querySelector("#boton-reportes")
//secciones
const seccionCategorias = document.querySelector("#seccion-categorias")
const seccionBalance = document.querySelector("#seccion-balance")
const seccionReportes = document.querySelector("#seccion-reportes")

//Darle a las 3 display flex
    seccionCategorias.style.display = 'none'
    seccionBalance.style.display = 'flex'
    seccionReportes.style.display = 'none'
    

botonCategorias.addEventListener('click', () =>{
    seccionCategorias.style.display = 'flex'
    seccionBalance.style.display = 'none'
    seccionReportes.style.display = 'none'
    
});


botonBalance.addEventListener('click', () =>{
    seccionBalance.style.display = 'flex'
    seccionCategorias.style.display = 'none'
    seccionReportes.style.display = 'none'
    
});


botonReportes.addEventListener('click', () =>{
    seccionReportes.style.display = 'flex'
    seccionBalance.style.display = 'none'
    seccionCategorias.style.display = 'none'
    
});
