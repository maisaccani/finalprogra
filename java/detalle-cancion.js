
let formulario = document.querySelector('form')

formulario.addEventListener("submit", function(e){
  e.preventDefault()
  let value = input.value.length
  if (input.value == "") {
    alert("Este campo es obligatorio")
  } else if (input.value.length < 3) {
    alert("Este campo tiene que tener al menos 3 caracteres")
  } else {
    window.location = './search-results.js=' + input.value
  }
})


// preguntar a ale que esta mal aca porque no me lee el titulo resultaods.innertext
let qs = location.search;
let qsToObject = new URLSearchParams(qs);
let cancion = qsToObject.get('id');
console.log(cancion);
let nombreCancion = document.querySelector(".nombre_cancion");
// let artista = document.querySelector(".nombre_artista");
// let album = document.querySelector(".nombre_album");


let url = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/${cancion}`;
fetch(url)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);

    nombreCancion.innerText = data.title;
    // artista.innerText=
    
    
  // let cancion1="";
  // let contenedorCancion= document.querySelector(".contenedor_detail_canciones");
  // cancion1 = `<article class= "bloque-cancion"> <h3> <a class="nombre_cancion" href="./detallecancion.html?id=${data.id.artist.name}">${data.artist.name}</a></h3>
  // <img src="${data.id.cover}" alt="${data.title}"> 
    
  //     <article class="detalle-cancion">
  //       <a href="./detalle-album.html?id=${data.album.id}">${data.album.title}</a>
  //       <a href="./detalle-artista.html?id=${data.artist.id}">${data.artist.name}</a> 
  //     </article>
      
  //   </article>`
  //   contenedorCancion.innerHTML="hgfhjdgfghj";
  //   titulo.innerText= `Detalles de la canción: ${data.title}`
    // contenedorCancion.innerHTML = cancion;
    // titulo.innerText = `Detalles de la canción: ${data.title}`
  })
  .catch(function (e) {
    console.log(e);
  })
     
  
  
  let artista = document.querySelector(".nombre_artista");

  let url1 = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/${cancion}`;
  fetch(url1)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
  
     artista.innerText=data.artist.name;
      
    })
    .catch(function (e) {
      console.log(e);
    })



    let album = document.querySelector(".nombre_album");

    let url2 = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/${cancion}`;
    fetch(url2)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
    
       album.innerText=data.album.title;
        
      })
      .catch(function (e) {
        console.log(e);
      })


      let bloque_img = document.querySelector(".img-cancion-detalle");

    let url_img = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/${cancion}`;
    fetch(url_img)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
    
       bloque_img.innerHTML=data.artist.picture;
        
      })
      .catch(function (e) {
        console.log(e);
      })







// boton para aclarar
//let botonclaro = document.querySelector('.botonclaro');
//let body = document.querySelector('body');
//let h3 = document.querySelector('h3');
let botonclaro = document.querySelector('.botonclaro');
let section = document.querySelector('.detalles1');
let h2 = document.querySelector('.titulo_detalle');
let img = document.querySelector('.img-cancion-detalle');
let h3 = document.querySelector('.nombre_cancion');



botonclaro.addEventListener('click', function () {
  if (botonclaro.innerText === 'aclarar fondo') {
    botonclaro.innerText = 'oscurecer fondo';
    detalles1.style.background = '#FFF';
    h2.style.color = '#000';
    img.style.border = '1px solid #000';
    h3.style.color = '#000';

  } else {
    botonclaro.innerText = 'aclarar fondo';
    detalles1.style.background = '#000';
    h2.style.color = '#FFF';
    img.style.border = '1px solid #FFF';
    h3.style.color = '#FFF';

  }
});

