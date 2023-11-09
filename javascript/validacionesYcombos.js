const paginaActualElement = document.querySelector("#pagina-actual");
let form = document.querySelector("form");

if (paginaActualElement) {
    const paginaActual = paginaActualElement.value;
    let nombreUsuario = "";


    if (paginaActual === "login") {
        let mensajeDeError = document.querySelector("#mensajeError");


        form.addEventListener("submit", (e) => {
            e.preventDefault();
            validarNombreYcontrasenia();
        });

        function validarNombreYcontrasenia() {
            nombreUsuario = document.querySelector("#name").value;
            let contrasenia = document.querySelector("#pass").value;
            let mensaje = "";
            let error = false;

            if (nombreUsuario == "") {
                error = true;
                mensaje += "Debe completar el campo usuario" + "<br>";
            }
            if (contrasenia == "") {
                error = true;
                mensaje += "Debe completar el campo contrasenia";
            }

            if (error) {
                mensajeDeError.innerHTML = mensaje;
            } else {
                form.submit();

            }
        }


    }


    if (paginaActual === "home") {
        asignarNombre();
    }
    function asignarNombre() {
        let usuarioAasignar = document.querySelector("#nombreDeUsuarioDinamico");
        localStorage.setItem("usuarioDinamico", nombreUsuario);
        let usuarioAsignado = localStorage.getItem("usuarioDinamico");
    
        usuarioAasignar.textContent = usuarioAsignado;
      
    }
}


