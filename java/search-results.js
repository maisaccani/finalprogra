//boton de busqueda
let busqueda = new URLSearchParams(location.search);
let buscar = busqueda.get('id');
let resultados = document.querySelector(".results");
let contenido = ''

let formulario = document.querySelector('form');

formulario.addEventListener("submit", function(e){
  e.preventDefault()
let value=input.value.length
  if(input.value == ""){
      alert("Este campo es obligatorio")
    } else if(input.value.length < 3){
      alert("Este campo tiene que tener al menos 3 caracteres")
    } else {    
    fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q=artist:${buscar}`)
    .then(function(response){
      return response.json()
    })
    .then(function(data){
      console.log(data);
      let resultado = "";
      let resultArray= data.data;
      for(i=0; i<resultArray.length; i++){
        resultado =+ `<li><a href="${resultArray[i].link}">${resultArray[i].title}</a></li>`;
      }
      resultados.innerHTML= resultado;

    })    
    
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