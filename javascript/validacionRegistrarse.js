let formularioRegistrarse = document.querySelector(".formulario");

formularioRegistrarse.addEventListener("submit", (e) => {
    e.preventDefault();
    validacion();
});

function validacion() {
    let nombre = document.querySelector("#Usuario").value;
    let contraseniaRegistrar = document.querySelector("#Contraseña").value;
    let repeatPass = document.querySelector("#repeat-pass").value;
    let email = document.querySelector("#Email").value;
    let fecha = document.querySelector("#Nacimiento").value;
    const VALIDACIONFECHA = /^\d{2}\/\d{2}\/\d{4}$/;
    const VALIDACIONEMAIL = /^[a-zA-Z0-9]{3,10}@(gmail|hotmail)\.[a-zA-Z]{2,}$/;
    //la barra invertida se usa para escapar de los caracteres que en las expresiones regulares tienen valor propio, por ej: el punto
    //marty4009@gmail.com
    let error = false;
    // Limpia todos los mensajes de error antes de realizar nuevas validaciones
    document.querySelectorAll('.mensajeRegistrarse').forEach(function (element) {
        element.textContent = '';
    });

    if (nombre.length < 4 || nombre.length > 8) {
        document.querySelector("#Usuario + .mensajeRegistrarse").textContent = "Ingrese un usuario que contenga entre 4 y 8 caracteres";
        //el text content selecciona el primer elemento y le asigna el contenido al segundo
        error = true;
    }

    if (contraseniaRegistrar !== repeatPass) {
        document.querySelector("#Contraseña + .mensajeRegistrarse").textContent = "Contraseñas ingresadas no coinciden";
        document.querySelector("#repeat-pass + .mensajeRegistrarse").textContent = "Contraseñas ingresadas no coinciden";
        error = true;
    }

    if (!VALIDACIONEMAIL.test(email) || email == "") {
        document.querySelector("#Email + .mensajeRegistrarse").textContent = "Debe ser formato: 'usuario@gmail.com' o parecido";
        error = true;
    }

    if (!VALIDACIONFECHA.test(fecha) || fecha == "") {
        document.querySelector("#Nacimiento + .mensajeRegistrarse").textContent = "Debe ser formato 'dd/mm/yyyy'";
        error = true;
    }
    if (!error) {
        formularioRegistrarse.submit();
    }

}