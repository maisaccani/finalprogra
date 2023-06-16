//boton de busqueda
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

console.log('detalle');
let qs = location.search;
let qsObj= new URLSearchParams(qs);
let id = qsObj.get('id')

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

      



