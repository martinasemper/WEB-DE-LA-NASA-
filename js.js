

let imagenDeldia= document.querySelector('#imagenDeldia')
let boton = document.querySelector('#boton')
let titulo =document.querySelector('h1')
boton.onclick=function () {
    fetch('https://api.nasa.gov/planetary/apod?api_key=ODpC2hzlukHNuJrBnBF022adtR8fP1F9jX81e0qO')
    .then(res=>res.json())
    .then(fotoDeldia=>{
imagenDeldia.src = fotoDeldia.hdurl
titulo.textContent = fotoDeldia.title
    }

    )
}
let imagenFecha=document.querySelector('#imagenFecha')
let botonFecha= document.querySelector('#botonFecha')
let fechaUsuario= document.querySelector('#fecha')
boton.onclick=function () {
    console.log(fechaUsuario)
  fetch ('https://api.nasa.gov/planetary/apod?api_key=${key}&date={fechaUsuario.value}')
  .then(res=>json())
  .then(fotoFecha.src = fotoFecha.hdurl)
}
 let contenedorImagen = document.querySelector('.contenedorImagen')
 let botonCantidad= document.querySelector('#botonCantidad')
 let cantidadUsuario=document.querySelector('#cantidad')
 botonCantidad.onclick=function () {
    console.log(cantidadUsuario.value)
    fetch('https://api.nasa.gov/planetary/apod?api_key=${key}&count=${catidadUsuario}')
    .then(res=json())
    .then(fotos=>
        contenedorImagen.innerHTML= ""
        for (let i = 0; i < fotos.length; i++) {
       contenedorImagen.innerHTML=${contenedorImagen.innerHTML} <img src="${fotos[i].url}"alt="${fotos[i].title}"
            
        }
        
    )
 }
