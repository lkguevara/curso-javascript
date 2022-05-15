// #1. Definición
    /*
        El objeto Console provee acceso a la consola de depuración de los navegadores. Los detalles de como funciona varían de navegador en navegador, pero hay un conjunto de características que de facto son generalmente proporcionadas.

        Console puede ser accedido desde cualquier método global, Window en el ámbito de navegación, WorkerGlobalScope (en-US), y sus variantes especificas de worker.
    */

// #2. Métodos

    let nombre="lian", apellido="guevara", edad=35;

    console.error("Esto es un error")
    console.warn("Esto es un mensaje informativo")

    console.log(`Hola, mi nombre es: ${nombre}, mi apellido es: ${apellido} y tengo ${edad}`) 
    console.log(`Hola, mi nombre es: %s, mi apellido es: %s y tengo %s`,nombre,apellido,edad) // Imprime lo mismo de arriba.
    console.clear(); //Borra la consola

    console.log(window)  //Muestra las propiedades del window
    console.log(document)  //Muestra el cuerpo html

    console.dir("Muestra un listado interactivo de las propiedades de un objeto JavaScript específico. ")
    console.dir(window) //Muestra las propiedades del window
    console.dir(document) //Muestra las propiedades, objetos, métodos del elemento document

    console.group("Crea un nuevo grupo, indentando todos los mensajes subsecuentes en un nuevo nivel")
    console.group("Cursos de @johnmircha en Youtube")
    console.log("Curso de Javascript")
    console.log("Curso de NodeJS")
    console.log("Curso de React")
    console.log("Curso de figma")
    console.groupEnd()

    console.table("Muestra datos tabulares en forma de una tabla.")
    console.table(Object.entries(console).sort())

    console.time("Cuanto tiempo tarda mi código")
    const arreglo = Array(100000);

    for (let i = 0; i < arreglo.length; i++) {
        arreglo[i] = i
    }
    console.timeEnd("Cuanto tiempo tarda mi código")

    console.count("Registra el numero de veces que esta línea ha sido llamada con etiqueta dada.")
    for (let i = 0; i <=100; i++) {
        console.count("código for")
        console.log(i)
    }

    console.assert("Registra un mensaje y envía una traza de error a la consola si el primer argumento es false.")
    let x=1, y=2, pruebaXY="se espera que x siempre sea menor que y"
    console.assert(x<y,{x,y,pruebaXY}) // No pasa nada porqué la prueba se ejecuta de manera correcta

    


