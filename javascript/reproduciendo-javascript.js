let elementoNombreUsuario = document.querySelector("#nombreUsuario");
let nombreUsuarioLocalStorage = localStorage.getItem('nombreUsuario');
let cerrarSesion = document.querySelector("#cerrarSesion");
let cancionSonando;
let albumSonando;
let imagenCancionSonando;
let estrellas = document.querySelectorAll(".estrella i");
let favoritos;
let tarjetasCancion = document.querySelectorAll('.card');
let imagenTarjeta;


// Almacena la informacion de la cancion sonando

// La guarda en el localStorage




// Al hacer click en una canción se debe actualizar la imagen de la canción sonando y su texto
tarjetasCancion.forEach((tarjeta) => {
    tarjeta.addEventListener("click", ()=> {
        let imagenTarjeta = tarjeta.querySelector('.image-container img');
        let tituloTarjeta = tarjeta.querySelector('.titulo').textContent;
        let albumTarjeta = tarjeta.querySelector('.album').textContent;
        let artistaTarjeta = tarjeta.querySelector('.artista').textContent;
        cancionSonando = document.querySelector("#cancionSonando");
        albumSonando = document.querySelector("#albumSonando");
        artistaSonando = document.querySelector("#artistaSonando");
        imagenCancionSonando = document.querySelector("#imagenCancionSonando");


        imagenCancionSonando.src = imagenTarjeta.src;
        cancionSonando.innerHTML = tituloTarjeta;
        albumSonando.innerHTML =albumTarjeta;
        artistaSonando.innerHTML = artistaTarjeta;

        localStorage.setItem('tituloActual', tituloTarjeta);
        localStorage.setItem('albumActual', albumTarjeta);
        localStorage.setItem('ArtistaActual',artistaTarjeta);
        localStorage.setItem('ImagenActual',imagenTarjeta.src);
    });

});