<<<<<<< HEAD
=======
let formulario = document.querySelector('.form')

formulario.addEventListener("submit", function(event){
  event.preventDefault()

  if(input.value == ""){
      alert("Este campo es obligatorio")
    } else if(input.value.length < 3){
      alert("Este campo tiene que tener al menos 3 caracteres")
    } else {
      location.search = './search-results?search=' + input.value
    }
})
const url = "https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/0/tracks"
fetch(url)
.then(function(response){
    return response.json();
})

.then(function(data){
    console.log(data);
    let canciones1= document.querySelector(".canciones1");
    let arrayCanciones=data.data;
    let songs="";

    for(let i=0; i<5;i++){

        songs+= `<article class="lista_song">
        <img src="${arrayCanciones[i].artist.picture}" alt="${arrayCanciones[i].title}" class="fotocancion">
        <h2> ${arrayCanciones[i].artist.name} </h2>
        <h3> ${arrayCanciones[i].artist.name} </h3>`
    }
    canciones1.innerHTML= songs;
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
>>>>>>> 8371eb67b6bc7cfcd4d5492297fe15d6c7db35e0
