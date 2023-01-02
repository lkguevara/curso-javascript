//* #1. Concatenación
    let name = "Lian";
    let lastname = " Guevara"
    let greeting = "hola mi name es: " + nombre + " y mi lastname: " + apellido
    console.log(greeting) //hola mi nombre es: Lian y mi apellido:  Guevara


//* #2. Interpolación 
// (Introducir dentro de una cadena de texto el valor de una variable, **template string** ${nombreVariable})

    let nombre = "Lian";
    let apellido = " Guevara"
    let saludo = `Hola, mi nombre es: ${nombre + apellido}`

    console.log(saludo)// Hola, mi nombre es: Lian Guevara

    let name2 = 'Jonathan';
    console.log(`Hola ${nombre}`); //Imprime Hola Jonathan