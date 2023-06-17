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
    
    let urlAlbum = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/album/${album}`;
    
    let nombreArtista = document.querySelector(".nombre_artist");
    let nombreAlbum = document.querySelector(".nombre_disco");
    let generoAlbum = document.querySelector(".genero_disco");
    let listaCanciones = document.querySelector(".lista_canciones");
    let imgAlbum = document.querySelector(".img-album");
    
    fetch(urlAlbum)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
    
        nombreArtista.innerText = data.artist.name;
        nombreAlbum.innerText = data.title;
        generoAlbum.innerText = data.genres.data[0].name;
    
        let canciones = "";
        let cancionesArray = data.tracks.data;
    
        for (let i = 0; i < cancionesArray.length; i++) {
          canciones += `<li onclick="mostrarDetalleCancion(${cancionesArray[i].id})">-${cancionesArray[i].title}</li>`;
        }
    
        listaCanciones.innerHTML = canciones;
        imgAlbum.src = data.cover_medium;
        imgAlbum.alt = data.title;
      })
      .catch(function (e) {
        console.log(e);
      });
    
    function mostrarDetalleCancion(cancionId) {
      window.location.href = `detalle-cancion.html?id=${cancionId}`;
    }
    