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


const url_artist = "https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/0/artists"
fetch(url_artist)
.then(function(response){
    return response.json()
})

.then(function(data){
    console.log(data);

    let artistas1= document.querySelector(".artistas1");
    let arrayArtistas=data.data;
    let artists="";

    for(let i=0; i<5;i++){
        artists += `<article class="lista_artist">
        <img src= ${arrayArtistas[i].picture} alt="${arrayArtistas[i].name}" class="foto_artista">
        <h2> ${arrayArtistas[i].name}</h2>
        <h3> ${arrayArtistas[i].id}</h3>`
    }
    artistas1.innerHTML= artists;
})
.catch(function(error){
    console.log( "Error: " + error);
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