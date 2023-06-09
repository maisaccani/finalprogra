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
