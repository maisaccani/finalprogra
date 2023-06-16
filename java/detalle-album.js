
//boton de busqueda

let formulario = document.querySelector('form')

formulario.addEventListener("submit", function(e){
  e.preventDefault()
let value=input.value.length
  if(input.value == ""){
      alert("Este campo es obligatorio")
    } else if(input.value.length < 3){
      alert("Este campo tiene que tener al menos 3 caracteres")
    } else {
    window.location = './search-results.js=' + input.value
    }
})



let qs = location.search;
let qsToObject = new URLSearchParams(qs);
let album = qsToObject.get('id');
console.log(album);
let nombreAlbum = document.querySelector(".nombre_disco");
let n_artista =document.querySelector(".n_artista");
let genero =document.querySelector(".genero");
let date =document.querySelector(".date");
let li =document.querySelector(".li");


let urlAlbum = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/album/${album}`;
fetch(urlAlbum)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
let albumDatos= `<article class="detalle-cancion">
<img class="img-album-detalle" src="" alt="Nombre del disco">
<h3 class="nombre_disco" href="./detalle-album.html?id=${data.id}">${data.title}</h3>

    <p class="n_artista">Nombre artista</p>
    <p class="genero">Genero del artista</p>
    <p class="date">Fecha de publicacion</p>
  </article>`
    

    nombreAlbum.innerHTML = data.title;
   
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

{}