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
canciones1.innerHTML= songs;

})
.catch(function(error){
    console.log( "Error: " + error);
})




//Artistas

const url_artist = "https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/27"

fetch (url_artist)
.then(function(response){
    return response.json();
})
.then(function(data){
    console.log(data);
    let arrayArtistas=data;
    // console.log(arrayCanciones);

    let artistas1= document.querySelector(".artistas1");
    let artists="";
    for(let i=0; i<5;i++){

        artists+= `<article class="lista_artist">
        <h3>
            <a class="nombre_artist" href="./detalle-artista.html?id=${arrayArtistas[i].id}">${arrayArtistas[i].name}</a>
        </h3>
        <img src="${arrayArtistas[i].picture}" alt="${arrayArtistas[i].title}" class="foto_artista">

            <article class="bloque_nombre">
                <a href="./detalle-artista.html?id=${arrayArtistas[i].name}">${arrayCanciones[i].name}</a>
                <a href="./detalle-album.html?">${arrayArtistas[i].nb_album.title}</a>
            </article>
         </article>`
}
canciones1.innerHTML= artists;

})
.catch(function(error){
    console.log( "Error: " + error);
})