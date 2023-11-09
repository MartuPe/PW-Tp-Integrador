let cancion = ["Tell My Why", "Something", "Bad", "Killer Queen", "She´s Not Me", "Under Pressure", "Cracked Actor"];
let album = ["A Hard Day´s Night", "Abbey Road", "Bad 25th Anniversary", "Sheer Heart Attack", "Hard Candy", "Hot Space", "Aladdin Sane"];
let reproducciones = ["10000", "20000", "30000", "40000", "50000", "60000", "70000", "80000", "90000", "100000"];
let duracion = ["2:00", "3:00", "4:00", "5:00", "6:00"];

let inicial = document.querySelector("#inicial");
let secundario = document.querySelector("#secundario");

inicial.addEventListener("change", () => {
    secundario.innerHTML = "";
    switch (inicial.value) {
        case "1":
            // recorrer el array colores
            cancion.forEach((i) => {
                //crear un nodo de tipo elemento option
                let nodoOption = document.createElement("option");

                //al option le agregamos un value
                nodoOption.value = i;

                //crear un nodo de tipo texto
                let nodoTexto = document.createTextNode(i);

                //al option agregarle el text node
                nodoOption.appendChild(nodoTexto);

                //al select secundario, agregarle el option
                secundario.appendChild(nodoOption);

            });
            break;
        case "2":
            // recorrer el array colores
            album.forEach((i) => {
                //crear un nodo de tipo elemento option
                let nodoOption = document.createElement("option");

                //al option le agregamos un value
                nodoOption.value = i;

                //crear un nodo de tipo texto
                let nodoTexto = document.createTextNode(i);

                //al option agregarle el text node
                nodoOption.appendChild(nodoTexto);

                //al select secundario, agregarle el option
                secundario.appendChild(nodoOption);
            });
            break;
        case "3":
            // recorrer el array colores
            reproducciones.forEach((i) => {
                //crear un nodo de tipo elemento option
                let nodoOption = document.createElement("option");

                //al option le agregamos un value
                nodoOption.value = i;

                //crear un nodo de tipo texto
                let nodoTexto = document.createTextNode(i);

                //al option agregarle el text node
                nodoOption.appendChild(nodoTexto);

                //al select secundario, agregarle el option
                secundario.appendChild(nodoOption);
            });
            break;
        case "4":
            // recorrer el array colores
            duracion.forEach((i) => {
                //crear un nodo de tipo elemento option
                let nodoOption = document.createElement("option");

                //al option le agregamos un value
                nodoOption.value = i;

                //crear un nodo de tipo texto
                let nodoTexto = document.createTextNode(i);

                //al option agregarle el text node
                nodoOption.appendChild(nodoTexto);

                //al select secundario, agregarle el option
                secundario.appendChild(nodoOption);
            });

    }
    const cards = document.querySelectorAll(".cardMusic"); // Todas las tarjetas de canción
    let filtrarBoton = document.querySelector("#filtrar");

    // Agregar un controlador de eventos al elemento select
    filtrarBoton.addEventListener("click", () => {
        const selectedValue = secundario.value; // Valor seleccionado en el elemento secundario

        // Recorre todas las tarjetas de canción y muestra/oculta según la selección
        switch (inicial.value) {
            case "1":
                cards.forEach((card) => {
                    const songName = card.querySelector(".cancionNombre").textContent; // Nombre de la canción en la tarjeta
                    if (songName === selectedValue) {
                        card.style.display = "block"; // Muestra la tarjeta si coincide

                    } else {
                        card.style.display = "none"; // Oculta la tarjeta si no coincide
                    }
                });
                break;
            case "2":
                cards.forEach((card) => {
                    const albumName = card.querySelector(".cancionAlbum").textContent; // Nombre de la canción en la tarjeta
                    if (albumName === selectedValue) {
                        card.style.display = "block"; // Muestra la tarjeta si coincide

                    } else {
                        card.style.display = "none"; // Oculta la tarjeta si no coincide
                    }
                });
                break;
            case "3":
                cards.forEach((card) => {
                    const cantReproducciones = parseInt(card.querySelector(".cancionFecha").textContent);
                    const valorSeleccionado = parseInt(selectedValue);

                    if (cantReproducciones === valorSeleccionado) {
                        card.style.display = "block"; // Muestra la tarjeta si coincide

                    } else {
                        card.style.display = "none"; // Oculta la tarjeta si no coincide
                    }
                });
                break;
            case "4":
                cards.forEach((card) => {
                    const songDuration = card.querySelector(".cancionDuracion").textContent; // Duración de la canción en la tarjeta
                    if (songDuration === selectedValue) {
                        card.style.display = "block"; // Muestra la tarjeta si coincide

                    } else {
                        card.style.display = "none"; // Oculta la tarjeta si no coincide
                    }
                });
                break;


        }

    });
})