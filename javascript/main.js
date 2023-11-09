

let botonCerrar = document.getElementById("cerrar-popup");
let popup = document.querySelector(".fondo-popup");


botonCerrar.addEventListener('click', () =>{
    popup.classList.add("close-popup");
})