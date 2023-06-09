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