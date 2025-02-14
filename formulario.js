const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

document.addEventListener("DOMContentLoaded", function () {
    const formulario = document.getElementById("formulario");
    const usuario = document.getElementById("usuario");
    const mail = document.getElementById("mail");
    const celular = document.getElementById("celular");
    const password = document.getElementById("password");
    const rePassword = document.getElementById("re-password");
    const terminos = document.getElementById("terminos");
    const alertGeneral = document.getElementById("alertGeneral");
    
    const mostrarError = (elemento, estado) => {
        const mensajeError = elemento.nextElementSibling;
        if (estado) {
            mensajeError.style.display = "block";
        } else {
            mensajeError.style.display = "none";
        }
    };

    formulario.addEventListener("submit", function (e) {
        e.preventDefault();
        let valido = true;

        // Validar usuario
        const regexUsuario = /^[a-zA-Z0-9_]{4,16}$/;
        if (!regexUsuario.test(usuario.value.trim())) {
            mostrarError(usuario, true);
            valido = false;
        } else {
            mostrarError(usuario, false);
        }

        // Validar email
        const regexEmail = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
        if (!regexEmail.test(mail.value.trim())) {
            mostrarError(mail, true);
            valido = false;
        } else {
            mostrarError(mail, false);
        }

        // Validar celular (10 dígitos)
        const regexCelular = /^[0-9]{10}$/;
        if (!regexCelular.test(celular.value.trim())) {
            mostrarError(celular, true);
            valido = false;
        } else {
            mostrarError(celular, false);
        }

        // Validar password (4 a 12 caracteres)
        if (password.value.length < 4 || password.value.length > 12) {
            mostrarError(password, true);
            valido = false;
        } else {
            mostrarError(password, false);
        }

        // Validar confirmación de password
        if (password.value !== rePassword.value) {
            mostrarError(rePassword, true);
            valido = false;
        } else {
            mostrarError(rePassword, false);
        }

        // Validar checkbox de términos
        if (!terminos.checked) {
            valido = false;
        }

        // Mostrar alerta general si hay errores
        if (!valido) {
            alertGeneral.classList.remove("d-none");
        } else {
            alertGeneral.classList.add("d-none");
            alert("Formulario enviado con éxito!");
            formulario.reset();
        }
    });
});
