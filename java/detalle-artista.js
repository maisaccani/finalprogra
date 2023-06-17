//boton de busqueda
let busqueda = new URLSearchParams(location.search);
let buscar = busqueda.get('buscar');
let resultados = document.querySelector(".results");
let contenido = ''
contenido.innerHTML += `${buscar}`

fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q=${buscar}`)
  .then(function(response){
    return response.json()
  })
  .then(function(data){
    console.log(data);
    let formulario = document.querySelector('form')

formulario.addEventListener("submit", function(e){
  e.preventDefault()
let value=input.value.length
  if(input.value == ""){
      alert("Este campo es obligatorio")
    } else if(input.value.length < 3){
      alert("Este campo tiene que tener al menos 3 caracteres")
    } else {
    window.location = './search-results.html?id=' + input.value
    }
  })
})
fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q=${buscar}`)
  .then(function(response){
    return response.json()
  })
  .then(function(data){
    console.log(data);
  })
// let detalle = document.querySelector(".contenedor_detail_artist");
// let artistas1 = " ";
// const url_artist = "https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/0/artists"
// fetch(url_artist)
// .then(function(response){
//     return response.json()
// })

// .then(function(data){
//   console.log(data);

//   let artistas1= document.querySelector(".artistas1");
//   let arrayArtistas=data.data;
//   let artists="";

//   for(let i=0; i<5;i++){
//       artists += `<article class="contenedor_detail_artist">
//       <img src= ${arrayArtistas[i].picture} alt="${arrayArtistas[i].name}" class="foto_artista">
//       <h2> ${arrayArtistas[i].name}</h2>
//       <h3> ${arrayArtistas[i].id}</h3>`
//   }
//   artistas1.innerHTML= artists;
// })
// .catch(function(error){
//     console.log( "Error: " + error);
// })


let qs = location.search;
let qsToObject = new URLSearchParams(qs);
let artista = qsToObject.get('id');
console.log(artista);

let urlAlbum =`https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/${artista}`;

let nombreArtista = document.querySelector(".nombre_artist");

//nombre
fetch(urlAlbum)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);

    nombreArtista.innerText = data.name;
   
  })
  .catch(function (e) {
    console.log(e);
  })

//imagen
  let img_artista = document.querySelector(".img_foto_artista");


  fetch(urlAlbum)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
  
      img_artista.src= data.picture;
     
    })
    .catch(function (e) {
      console.log(e);
    })

//albumes

  let urlAlbumes =`https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/${artista}/albums`;

  let nombre_discos = document.querySelector(".lista_disco");
  
  
  fetch(urlAlbumes)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
          let albumes="";
          let albumArray= data.data;

          for(i=0; i<albumArray.length; i++){
             albumes+= `<li><a href="./detalledisco.html?id=${albumArray[i].data}">${albumArray[i].title}</a></li>`
          }

          nombre_discos.innerHTML= albumes;
    })
    .catch(function (e) {
      console.log(e);
    })


// boton para aclarar
let botonclaro = document.querySelector('.botonclaro');
let body = document.querySelector('body');
let h2 = document.querySelector('h2');

botonclaro.addEventListener('click', function() {
  if (botonclaro.innerText == 'aclarar fondo') {
    botonclaro.innerText = 'oscurecer fondo';
    body.style.background = '#FFF';
    h2.style.color = '#000';
  } else {
    botonclaro.innerText = 'aclarar fondo';
    body.style.background = '#000';
    h2.style.color = '#FFF';
  }
});