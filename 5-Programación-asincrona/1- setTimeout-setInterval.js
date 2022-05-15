//* #1. setTimeout() --> permite ejecutar un fragmento de código, una vez transcurrido un tiempo determinado.
    
    // ejemplo 1
    
    console.log("setTimeout() ejemplo...")
    setTimeout(function () {
        console.log("Ejecutando setTimeout, esto se ejecuta una sola vez")
    },1000)

    /*El código anterior imprimirá primero "setTimeout() ejemplo..." en la consola, luego imprimirá "Ejecutando setTimeout, esto se ejecuta una sola vez" una vez que hayan pasado dos segundos desde que el código haya sido ejecutado por JavaScript.*/

    // Ejemplo 2
    let temporizador = setTimeout(() => {
        console.log(new Date().toLocaleTimeString());
    }, 1001);

    clearTimeout(temporizador);
    console.log("Después del clear");

    // ejemplo 3
    function saludar(nombre, apellido) {
        console.log(`Hola ${nombre} ${apellido}`);
    }

    setTimeout(saludar("Lian", "Guevara"), 1002);
    
//* #2. setTinterval() --> se utiliza para hacer que una función se repita con un tiempo de retraso entre cada ejecución.
    
   // Ejemplo 1
    setInterval(function () {
        console.log("Ejecutando setInterval, esto se ejecuta indefinidamente cada cierto intervalo de tiempo")
    },2000); 

    // Ejemplo 2
    setInterval(function() {
        console.log(new Date().toLocaleTimeString());
    },1000);

    // Ejemplo 3
    let temporizador2 = setInterval(() => {
        console.log(new Date().toLocaleTimeString());
    }, 1000);

    clearInterval(temporizador2);
    console.log("Después del clearTimeout"); 
