//boton de busqueda
let busqueda = new URLSearchParams(location.search);
let buscar = busqueda.get('buscar');
let resultados = document.querySelector(".results");
let contenido = ''
contenido.innerHTML += `${buscar}`;

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

let urlGenerosCanciones = "https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre";
fetch(urlGenerosCanciones)
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    let generoCancionesSection = document.getElementById("generoCanciones");
    let generoCancionesContent = "";

    for (let i = 0; i < 8; i++) {
      generoCancionesContent += `<article class="lista_genres">
        <h3 class="nombregenero"><a class="generos" href="./detail-Genres.html?id=${data.data[i].id}"> ${data.data[i].name}</a></h3>
        </article>`;
    }


    generoCancionesSection.innerHTML = generoCancionesContent;
  })
  .catch(function(error) {
    console.log(error);
  });








// boton para aclarar
let botonclaro = document.querySelector('.botonclaro');
let body = document.querySelector('body');
let h2 = document.querySelector('.titulos'); 

botonclaro.addEventListener('click', function () {
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