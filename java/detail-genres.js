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

let queryString = location.search
let objetoId = new URLSearchParams(queryString);
let id = objetoId.get("id");

let detalle= document.querySelector(".detalle-artista");
let contenido = "'";

let url = 'https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre'

fetch(url)
.then(function(response){
return response.json()
})
.then(function(data){
console.log(data)
contenido += ''
})