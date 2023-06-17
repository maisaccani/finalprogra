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

let urlAlbumes = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/${artista}/albums`;
let nombre_discos = document.querySelector(".lista_disco");

fetch(urlAlbumes)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    let albumes = "";
    let albumArray = data.data;

    for (let i = 0; i < albumArray.length; i++) {
      albumes += `<li><a href="./detalle-album.html?id=${albumArray[i].id}">${albumArray[i].title}</a></li>`;
    }

    nombre_discos.innerHTML = albumes;
  })
  .catch(function (e) {
    console.log(e);
  });



// boton para aclarar
let botonclaro = document.querySelector('.botonclaro');
let body = document.querySelector('body');
let textos = document.querySelectorAll('h2, h3');

botonclaro.addEventListener('click', function() {
  if (botonclaro.innerText === 'aclarar fondo') {
    botonclaro.innerText = 'oscurecer fondo';
    body.style.background = '#FFF';
    textos.forEach(function(texto) {
      texto.style.color = '#000';
    });
  } else {
    botonclaro.innerText = 'aclarar fondo';
    body.style.background = '#000';
    textos.forEach(function(texto) {
      texto.style.color = '#FFF';
    });
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
