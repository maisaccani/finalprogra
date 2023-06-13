//boton de busqueda
let formulario = document.querySelector('form')

formulario.addEventListener("submit", function(event){
  event.preventDefault()
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

botonclaro.addEventListener('click', function() {
  if (botonclaro.innerText == 'aclarar fondo') {
    botonclaro.innerText = 'oscurecer fondo';
    body.style.background = '#FFF';
  } else {
    botonclaro.innerText = 'aclarar fondo';
    body.style.background = '#000';
  }
});