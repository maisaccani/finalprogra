
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


let qs = location.search;
let qsToObject = new URLSearchParams(qs);
let album = qsToObject.get('id');
console.log(album);
let nombreAlbum = document.querySelector(".nombre_disco");
let n_artista =document.querySelector(".n_artista");
let genero =document.querySelector(".genero");
let date =document.querySelector(".date");
let li =document.querySelector(".li");
let imagen =document.querySelector(".img-album-detalle");
let contenedorDisco =document.querySelector(".contenedor_detail_album");



let img = document.querySelector(".img-album-detalle");
let urlAlbum = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/album/${album}`;
fetch(urlAlbum)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    let canciones="";
let arrayCanciones=data.tracks.data

for(i=0;1<arrayCanciones.lenght;i++){
  canciones+= `<li><a href="./detalle-album.html?id=${arrayCanciones[i].id}">${arrayCanciones[i].title}</a>`
}
console.log(canciones);
let discoDatos=`<article class="detalle-cancion">
    <img class="img-album-detalle" src="${data.cover}" alt="Nombre del disco">
    <a class="nombre_disco" href="./detalle-album.html?id=${data.id}">${data.title}</a> 
    <a href="./detalle-artista.html?id=${data.artist.id}">${data.artist.name}"</a>
    <a href="./detail-genres.html?id=${data.artist.id}">${data.artist.name}"</a>
    <p>Fecha de publicacion:${data.release_date}</p>
    </article>
    <p>Canciones del album:</p>
    <ul>${canciones}</ul>`

    contenedorDisco.innerHTML= discoDatos
    
   
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

let linkFavs = document.querySelector('.agregar_favs');

let playlist = [];
let recuperoStorage = localStorage.getItem('playlist');
let storageToArray= JSON.parse(recuperoStorage);



if (recuperoStorage != null) {
    playlist = storageToArray;
}

if (playlist.includes(id)) {
    botonFavs.innerText = 'Quitar de Favoritos'
}

botonFavs.addEventListener("click", function () {
    if (playlist.includes(id)) {
        let indice = playlist.indexOf(id)
        playlist.splice(indice, 1);
        botonFavs.innerText = 'Agregar a favorito'
    } else {
        playlist.push(id);
        botonFavs.innerText = 'Quitar de favorito'
    }

    let favsToString = JSON.stringify(playlist);
    localStorage.setItem('playlist', favsToString)
})
