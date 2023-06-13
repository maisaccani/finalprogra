
// //boton de busqueda
// let formulario = document.querySelector('.form')

// formulario.addEventListener("submit", function(e){
//   e.preventDefault()
// let value=input.value.length
//   if(input.value == ""){
//       alert("Este campo es obligatorio")
//     } else if(input.value.length < 3){
//       alert("Este campo tiene que tener al menos 3 caracteres")
//     } else {
//     window.location = './search-results.js=' + input.value
//     }
// })

// const url_detalle_can = "https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/0/tracks"
// fetch(url_detalle_can)
// .then(function(response){
//     return response.json();
// })

//NO SE SI ESTO ESTA BIEN
// const url = "https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/0/tracks"
// fetch(url)
// .then(function(response){
//     return response.json();
// })

// .then(function(data){
//     console.log(data);
//     let canciones1= document.querySelector(".canciones1");
//     let arrayCanciones=data.data;
//     let songs="";

//     for(let i=0; i<5;i++){

//         songs+= `<article class="lista_song">
//         <img src="${arrayCanciones[i].artist.picture}" alt="${arrayCanciones[i].title}" class="fotocancion">
//         <h2> ${arrayCanciones[i].artist.name} </h2>
//         <h3> ${arrayCanciones[i].artist.name} </h3>`
//     }
//     canciones1.innerHTML= songs;
// })
// .catch(function(error){
//     console.log( "Error: " + error);
// })

let qs= location.search;
let qsToObject = new URLSearchParams(qs);
let cancion= qsToObject.get('id');
let nombreCancion= document.querySelector(".nombre_cancion")
let titulo= document.querySelector(".titulo_detalle")

let tituloResultados = document.querySelector("h2")
tituloResultados.innerText += `${cancion.title}` 

let url =`https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/${cancion}`
fetch(url)
  .then(function(response){
    return response.json();
  })
  .then(function(data){
    console.log(data);
    let contenedorCancion= document.querySelector(".contenedor_detail_canciones");
    let cancion = `<article class= "bloque-cancion"> <h3> <a class="nombre-cancion" href="./detallecancion.html?id=${data.id}">${data.id.artist.name}</a></h3>
      <img src="${data.data.picture}" alt="${data.name}"> 
      <article class="bloque-cancion-datos">
        <a href="./detalle-album.html?id=${data.album.id}">${data.album.title}</a>
        <a href="./detalle-artista.html?id=${data.artist.id}">${data.artist.name}</a> 
      </article>
      
    </article>`
    contenedorCancion.innerHTML= cancion;
    titulo.innerText= `Detalles de la canción: ${data.title_short}`
  })
  .catch(function(e){
   console.log(e);
  })




// boton para aclarar
//let botonclaro = document.querySelector('.botonclaro');
//let body = document.querySelector('body');
//let h3 = document.querySelector('h3');
let botonclaro = document.querySelector('.botonclaro');
let section = document.querySelector('.detalles1');
let h2 = document.querySelector('.titulo_detalle');
let img = document.querySelector('.img-cancion-detalle');
let h3 = document.querySelector('.nombre_cancion');


botonclaro.addEventListener('click', function() {
  if (botonclaro.innerText === 'aclarar fondo') {
    botonclaro.innerText = 'oscurecer fondo';
    detalles1.style.background = '#FFF';
    h2.style.color = '#000';
    img.style.border = '1px solid #000';
    h3.style.color = '#000';

  } else {
    botonclaro.innerText = 'aclarar fondo';
    detalles1.style.background = '#000';
    h2.style.color = '#FFF';
    img.style.border = '1px solid #FFF';
    h3.style.color = '#FFF';

  }
});

