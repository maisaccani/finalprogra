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




const url = "https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/0/tracks"
fetch (url)
.then(function(response){
    return response.json();
})
.then(function(data){
    console.log(data);
    let arrayCanciones=data.data;
    // console.log(arrayCanciones);

    let canciones1= document.querySelector(".canciones1");
    let songs="";
    for(let i=0; i<5;i++){

        songs+= `<article class="lista_song">
        <h3>
            <a class="nombre_song" href="./detalle-cancion.html?id=${arrayCanciones[i].id}">${arrayCanciones[i].title}</a>
        </h3>
        <img src="${arrayCanciones[i].artist.picture}" alt="${arrayCanciones[i].title}" class="fotocancion">

            <article class="bloque_nombre">
                <a href="./detalle-artista.html?id=${arrayCanciones[i].artist.id}">${arrayCanciones[i].artist.name}</a>
            </article>
         </article>`
}
canciones1.innerHTML= songs;

})
.catch(function(error){
    console.log( "Error: " + error);
})




//Artistas

const url_artist = "https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/0/artists"

fetch (url_artist)
.then(function(response){
    return response.json();
})
.then(function(data){
    console.log(data);
    let arrayArtistas=data.data;
    // console.log(arrayCanciones);

    let artistas1= document.querySelector(".artistas1");
    let artists="";
    for(let i=0; i<5;i++){

        artists+= `<article class="lista_artist">
        <h3>
            <a class="nombre_artist" href="./detalle-artista.html?id=${arrayArtistas[i].id}">${arrayArtistas[i].name}</a>
        </h3>
        <img src="${arrayArtistas[i].picture}" alt="${arrayArtistas[i].name}" class="foto_artista">

            <article class="bloque_artista">
                <a href="./detalle-artista.html?id=${arrayArtistas[i].id}">${arrayArtistas[i].name}</a>
                <a href="./detalle-album.html?">${arrayArtistas[i].type}</a>
            </article>
         </article>`
}
artistas1.innerHTML= artists;

})
.catch(function(error){
    console.log( "Error: " + error);
})

//ALBUMES

const url_album = "https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/0/albums"

fetch (url_album)
.then(function(response){
    return response.json();
})
.then(function(data){
    console.log(data);
    let arrayAlbum=data.data;
    

    let album1= document.querySelector(".album1");
    let album="";
    for(let i=0; i<5;i++){

        album+= `<article class="lista_album">
        <h3>
            <a class="nombre_album" href="./detalle-album.html?id=${arrayAlbum[i].artist.id}">${arrayAlbum[i].artist.name}</a>
        </h3>
        <img src="${arrayAlbum[i].artist.picture}" alt="${arrayAlbum[i].artist.name}" class="foto_album">

            <article class="bloque_album">
                <a href="./detalle-artista.html?id=${arrayAlbum[i].artist.id}">${arrayAlbum[i].artist.name}</a>
                <a href="./detalle-album.html?">${arrayAlbum[i].artist.type}</a>
            </article>
         </article>`
}
album1.innerHTML= album;

})
.catch(function(error){
    console.log( "Error: " + error);
})

// boton para aclarar
let botonclaro = document.querySelector('.botonclaro');
let body = document.querySelector('body');
let h2 = document.querySelectorAll('h2');

botonclaro.addEventListener('click', function() {
    if (botonclaro.innerText == 'aclarar fondo') {
      botonclaro.innerText = 'oscurecer fondo';
      body.style.background = '#FFF';
      h2.forEach(function(elemento) {
        elemento.style.color = '#000';
      });
    } else {
      botonclaro.innerText = 'aclarar fondo';
      body.style.background = '#000';
      h2.forEach(function(elemento) {
        elemento.style.color = '#FFF';
      });
    }
  });


  //url para playlist q no hay todavia

  let favoritos1 = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/playlist/${id}`
  fetch (favoritos1)
  .then(function(response){
      return response.json();
  })
  .then(function(data){
      console.log(data);
      letfavoritos1 =data.data;
      
  
      let favoritos1= document.querySelector(".favoritos1");
      let album="";
      for(let i=0; i<5;i++){
  
          favoritos1+= `<article class="lista_favoritos">
          <h3>
              <a class="nombre_album" href="./detalle-album.html?id=${arrayAlbum[i].artist.id}">${arrayAlbum[i].artist.name}</a>
          </h3>
          <img src="${arrayAlbum[i].artist.picture}" alt="${arrayAlbum[i].artist.name}" class="foto_album">
  
              <article class="bloque_album">
                  <a href="./detalle-artista.html?id=${arrayAlbum[i].artist.name}">${arrayAlbum[i].artist.name}</a>
                  <a href="./detalle-album.html?">${arrayAlbum[i].artist.type}</a>
              </article>
           </article>`
  }
  listaContainer.innerHTML = favoritos1
  })
  .catch(function(error){
      console.log( "Error: " + error);
  })