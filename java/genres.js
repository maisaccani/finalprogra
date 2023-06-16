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


let recuperoFavCancion = localStorage.getItem("cancionesFavs");
let favoritoscancion = JSON.parse(recuperoFavCancion);
console.log(favoritoscancion);
let seccioncanciones = document.getElementById("seccioncanciones");
let canciont = document.getElementById('cancion')


if (favoritoscancion == null || favoritoscancion.length == 0) {
  peliculasTitle.innerHTML = "No agregaste canciones a la sección de favoritos";
} else {
  let allcanciones = "";


  for (let i = 0; i < favoritoscancion.length; i++) {
    let urlcancion =


    fetch(urlcancion)
      .then(function(res) {
        return res.json();
      })
      .then(function(data) {
        console.log(data);


        let cancion = `<article class="lista_song">
                            <h3>
                                <a class="nombre_song" href="./detalle-cancion.html?id=${arrayCanciones[i].id}">${arrayCanciones[i].title}</a>
                            </h3>
                            <img src="${arrayCanciones[i].artist.picture}" alt="${arrayCanciones[i].title}" class="fotocancion">


                                <article class="bloque_nombre">
                                    <a href="./detalle-artista.html?id=${arrayCanciones[i].artist.name}">${arrayCanciones[i].artist.name}</a>
                                </article>
                            </article>`;
        allcanciones += cancion;


        seccioncanciones.innerHTML = allcanciones;
      })
      .catch(function(e) {
        console.log(e);
      });
  }
}






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