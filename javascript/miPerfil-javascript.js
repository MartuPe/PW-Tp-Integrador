let elementoNombreUsuario = document.querySelector("#nombreUsuario");
let nombreUsuarioLocalStorage = localStorage.getItem('nombreDeUsuarioIngresado');
let cerrarSesion = document.querySelector("#cerrarSesion");
let eliminarUsuario = document.querySelector("#eliminarUsuario");
// Obtiene la fecha de nacimiento desde el localStorage
const fechaNacimiento = localStorage.getItem('fecha-nacimiento');
const inputFechaNacimiento = document.getElementById('fecha-nacimiento');;
let guardarCambios = document.querySelector("#guardarCambios");

// Toma el nombre de usuario desde el localStorage
if (nombreUsuarioLocalStorage){
    elementoNombreUsuario.innerHTML = nombreUsuarioLocalStorage;
}

// Input de fecha de nacimiento deshabilitado. La fecha la cargo desde el localStorage
inputFechaNacimiento.value = fechaNacimiento;

// Elimina el nombre de usuario del localStorage
cerrarSesion.addEventListener("click", ()=>{
    localStorage.removeItem('nombreDeUsuarioIngresado');
});

// Si hace click en eliminar usuario, se debe eliminar el usuario del localstorage
eliminarUsuario.addEventListener("click", ()=> {
    localStorage.removeItem('nombreDeUsuarioIngresado');
    // Redirige a la pagina de inicio de sesion
    window.location.href = 'inicio-sesion'.html;
});

document.addEventListener("DOMContentLoaded", function(){

    // Agarra los datos del formulario
    let nombreInput = document.querySelector("#nombre");
    let contrasenaInput = document.querySelector("#contrasena");
    let repetirContrasenaInput = document.querySelector("#repetir-contrasena");
    let email = document.querySelector("#e-mail");

    guardarCambios.addEventListener("click", ()=> {
    // En caso de que los datos estén vacios, no los guarda. El trim() elimina espacios en blanco

    if (!nombreInput.value){
        localStorage.setItem("nombre", nombreInput.value.trim());
    }
    // Valida que los input repetir contraseña y contraseña no estén vacíos y tengan el mismo valor
    if ((!contrasenaInput.value) && (!repetirContrasenaInput.value) && (contrasenaInput.value == repetirContrasenaInput.value)){
        localStorage.setItem("contrasena", contrasenaInput.value.trim());
        localStorage.setItem("repetirContrasena", repetirContrasenaInput.value.trim());
    }

    if (!email.value){
        localStorage.setItem("email", email.trim());
    }
    });

    alert ("Datos guardados correctamente")
});