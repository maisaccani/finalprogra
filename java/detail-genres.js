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



let urlParams = new URLSearchParams(window.location.search);
let genero_id = urlParams.get('id');


let urlArtistas = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre/${genero_id}/artists`;
fetch(urlArtistas)
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    console.log(data);
    let artistasContainer = document.querySelector('.artistas-container');
    let artistasContent = '';

    for (let i = 0; i < data.data.length; i++) {
      artistasContent += `
        <article class="lista_artista">
          <h3><a class="nombre_artista" href="./detalle-artista.html?id=${data.data[i].id}">${data.data[i].name}</a></h3>
          <img src="${data.data[i].picture}" alt="${data.data[i].name}" class="foto_artista">
        </article>
      `;
    }

    artistasContainer.innerHTML = artistasContent;
  })
  .catch(function(error) {
    console.log(error);
  });


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
