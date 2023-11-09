
let cancionSonando1 = localStorage.getItem('tituloActual');
let albumSonando1 = localStorage.getItem('albumActual');
let imagenCancionSonando1 = localStorage.getItem('ImagenActual');
let artistaSonando1 = localStorage.getItem('ArtistaActual');

let imagenTarjeta1 = document.querySelector("#imagenCancionSonando");
let tituloTarjeta1 = document.querySelector("#cancionSonando");
let albumTarjeta1 = document.querySelector("#albumSonando");
let artistaTarjeta1 = document.querySelector("#artistaSonando");

imagenTarjeta1.src = imagenCancionSonando1;
tituloTarjeta1.innerHTML = cancionSonando1;
albumTarjeta1.innerHTML = albumSonando1;
artistaTarjeta1.innerHTML =  artistaSonando1;
