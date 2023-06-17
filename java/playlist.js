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

// console.log('detalle');
// let qs = location.search;
// let qsObj= new URLSearchParams(qs);
// let id = qsObj.get('id')

// let favoritos1 = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/playlist/${id}`
// fetch(favoritos1)
// .then(function(response){
//   return response.json();
// })
// .then(function(data){
//   console.log(data)

//   let imagen = document.querySelector('img');
//   imagen.src = data.artists.picture
// })
//   .catch(function(error){
//     console.log(error)
// })
// //Quiero guardar info en local storage
// let linkFavs = document.querySelector('a');

// let recuperoStorage = localStorage.getItem('listaFavoritos');
// let storageToArray = JSON.parse(recuperoStorage);

// let Favoritos = [];
// if(recuperoStorage !== null){
//   Favoritos = storageToArray
// }
// //Cambiar agregar por quitar
// if(Favoritos.includes(id)){
//   linkFavs.innerText = "Quitar de favoritos" 
// }
// linkFavs.addEventListener('click', function(e){
//   e.preventDefault();
//   //Preguintar si un elemento está en el array
//   if(Favoritos.includes(id)){
//      //Si el elemento ya está entonces que lo saque.
//      let posicion = Favoritos.indexOf(id);
//      Favoritos.splice(posicion, 1);
//      linkFavs.innerText = "Agregar a favoritos";
//     } else {
//       //Cambiar agregar por quitar
//       Favoritos.push(id);
//       linkFavs.innerText = "Quitar defavoritos";
//   }

//   favoritos1AJson = JSON.stringify(Favoritos);
//   localStorage.setItem("listaFavoritos", gifsAJson)

//   console.log(localStorage);
// })

let recuperoStorage= localStorage.getItem("playlist");
let storageToArray= JSON.parse(recuperoStorage); 
let favoritos= storageToArray

let contenedorFavs= document.querySelector(".contenedor-canciones-playlist");
let miPlaylist="";

if(recuperoStorage !== undefined|| favoritos.length !==0){
    for (let i=0; i<favoritos.length; i++){
        console.log(favoritos[i]);

        let urlFavs=  `https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/${favoritos[i]}`
        fetch(urlFavs)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
             miPlaylist += `<article class= "bloque-cancion"> <h3> <a class="nombre-cancion" href="./detallecancion.html?id=${data.id}">${data.title}</a></h3>
            <a class="nombre-cancion" href="./detallecancion.html?id=${data.id}"><img src="${data.album.cover}" alt="${data.title}"></a> 
                    <article class="bloque-cancion-datos">
                       <a href="./detalledisco.html?id=${data.album.id}">${data.album.title}</a>
                       <a href="./detallesartista.html?id=${data.artist.id}">${data.artist.name}</a> 
                    </article>
            </article>`
            contenedorFavs.innerHTML = miPlaylist
    
        })
        .catch(function (e) {
            console.log(e);
        })
    }
}

if(favoritos.length ==0){
    contenedorFavs.innerHTML= "<h2> No se encontraron favoritos</h2>" 
}
      



