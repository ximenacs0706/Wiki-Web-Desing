document.addEventListener("DOMContentLoaded", function () {

    const formulario = document.getElementById("formBuscador");
    const buscador = document.getElementById("inputBuscador");

    formulario.addEventListener("submit", function (e) {

        e.preventDefault();

        const texto = buscador.value.toLowerCase().trim();

        if (texto === "") {
            return;
        }

        const secciones = document.querySelectorAll(".bloque-contenido");

        let encontrado = false;

        secciones.forEach(function (seccion) {

            if (encontrado) return;

            if (seccion.innerText.toLowerCase().includes(texto)) {

                seccion.scrollIntoView({

                    behavior: "smooth",

                    block: "start"

                });

                encontrado = true;

            }

        });

        if (!encontrado) {

            alert("No se encontró el tema: " + buscador.value);

        }

    });

const usuarioBtn = document.querySelector(".usuario-btn");
const dropdown = document.querySelector(".dropdown");

usuarioBtn.addEventListener("click", function(e){

    e.stopPropagation();

    dropdown.classList.toggle("mostrar");

});

