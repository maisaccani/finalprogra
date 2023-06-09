// const url= "https://api.allorigins.win/raw?url=https://api.deezer.com/chart/0/tracks";
const url = "https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/0/tracks"
fetch (url)
.then(function(response){
    return response.json();
})
.then(function(data){
    console.log(data);
    let arrayCanciones=data.data;
    // console.log(arrayCanciones);

    let canciones1= document.querySelector(".canciones1");
    let songs="";
    for(let i=0; i<5;i++){

        songs+= `<article class="lista_song">
        <h3>
            <a class="nombre_song" href="./detalle-cancion.html?id=${arrayCanciones[i].id}">${arrayCanciones[i].title}</a>
        </h3>
        <img src="${arrayCanciones[i].artist.picture}" alt="${arrayCanciones[i].title}" class="fotocancion">

            <article class="bloque_nombre">
                <a href="./detalle-artista.html?id=${arrayCanciones[i].artist.name}">${arrayCanciones[i].artist.name}</a>
                <a href="./detalle-album.html?">${arrayCanciones[i].album.title}</a>
            </article>
         </article>`
}
canciones1.innerHTML= songs

})
.catch(function(error){
    console.log( "Error: " + error);
})