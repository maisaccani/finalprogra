let busqueda = new URLSearchParams(location.search);
let buscar = busqueda.get('buscar');
let resultados = document.querySelector(".results");
let contenido = ''
titulo.innerHTML += `${buscar}`

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
let cancion = qsToObject.get('id');
console.log(cancion);
let nombreCancion = document.querySelector(".nombre_cancion");


let url = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/${cancion}`;
fetch(url)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);

    nombreCancion.innerText = data.title;
   
  })
  .catch(function (e) {
    console.log(e);
  })
     
  
  
  let artista = document.querySelector(".nombre_artista");

  let url1 = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/${cancion}`;
  fetch(url1)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
  
     artista.innerText=data.artist.name;
      
    })
    .catch(function (e) {
      console.log(e);
    })



    let album = document.querySelector(".nombre_album");

    let url2 = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/${cancion}`;
    fetch(url2)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
    
       album.innerText=data.album.title;
        
      })
      .catch(function (e) {
        console.log(e);
      })


      let bloque_img = document.querySelector(".img-cancion-detalle");

    let url_img = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/${cancion}`;
    fetch(url_img)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
    
       bloque_img.src=data.artist.picture;
        
      })
      .catch(function (e) {
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



botonclaro.addEventListener('click', function () {
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


