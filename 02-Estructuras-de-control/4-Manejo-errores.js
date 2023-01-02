//* #1. try...catch --> señala un bloque de instrucciones a intentar (try), y especifica una respuesta si se produce una excepción (catch).

    try {
    console.log("El el try se agrega el código a evaluar ") 
    noExiste;
    console.log("Segundo mensaje del try")
    } catch (error) {
        console.log("Catch, Captura cualquier error surguido del try")
        console.log(error)
    }finally{
        console.log("El bloque finally Se ejecutará al final de un bloque try-cathc")
    }
    /*
        El el try se agrega el código a evaluar 

        Catch, Captura cualquier error surguido del try

        ReferenceError: noExiste is not defined
        
        El bloque finally Se ejecutará al final de un bloque try-cathc
    */

//* #2. Ejemplo:

    // isNaN--> me indica si es un numero

    try {
        let numero = "a";

        if (isNaN(numero)) {
            throw new Error('El caracter introducido no es un número')
        }

        console.log(numero*numero)
    } catch (error) {
        console.log(`Se produjo el siguiente error: ${error}`)
    }

    // Se produjo el siguiente error: Error: El caracter introducido no es un númer