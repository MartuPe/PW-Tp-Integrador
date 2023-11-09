let nombreDeUsuarioIngresado;
let contrasenaIngresada;
let iniciarSesion = document.querySelector("#Iniciar_sesion");

iniciarSesion.addEventListener("click", ()=>{
    nombreDeUsuarioIngresado = document.getElementById('name').value;
    contrasenaIngresada = document.getElementById('pass').value;
    
    localStorage.setItem('nombreDeUsuarioIngresado', nombreDeUsuarioIngresado);
    localStorage.setItem('contrasenaIngresada', contrasenaIngresada);

    // alert(`Datos almacenados en localStorage. Nombre: ${nombreDeUsuarioIngresado}, Contrasena: ${contrasenaIngresada}`);
} );
