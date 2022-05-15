/*
    El método addEventListener() tiene un tercer párametro que puede ser de tipo boolean, si no se especifica, el valor por defecto es false.

    Si el parámetro es false se ejecuta la fase de burbuja (ir del elemento más interno al más externo).

    Si el parámetro es true se ejecuta la fase de captura (ir del elemento más externo al más interno).
*/

const divsEventos = document.querySelectorAll(".eventos-flujo div");

function flujoEventos(e) {
    console.log(`hola te saluda ${this.className}, el click lo originó ${e.target.className}`); //Se va a imprimir hola dependiendo de la cantidad de divs que hayan acumuladas
}

divsEventos.forEach(div => {
    // fase de burbuja
    // div.addEventListener('click', flujoEventos,false) // imprime desde el element más interno al externo

    // fase de captura
    div.addEventListener('click', flujoEventos, true) // imprime desde el element más externo al interno
})