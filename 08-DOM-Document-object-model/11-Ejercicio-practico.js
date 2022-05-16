// Seleccionar el boton idioma y moneda, en donde dando un click mostrará el footer.

// seleccionar clase btn-flotante

const btnFlotante = document.querySelector('.btn-flotante');
const footer = document.querySelector('.footer');

btnFlotante.addEventListener('click', e => {
    if (footer.classList.contains("activo")) { // Si la footer contiene la clase activo ejecutará dicha función
        footer.classList.remove("activo"); // elimina la clase activo
        btnFlotante.classList.remove("activo"); // elimina la clase activo del btn
        btnFlotante.textContent = "Idioma y moneda" // Agrega un texto
    }
    else {
        footer.classList.add("activo"); 
        btnFlotante.classList.add("activo"); // Cambia de color 
        btnFlotante.textContent = "X Cerrar"
    }
}); 