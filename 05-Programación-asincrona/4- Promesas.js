// * #1. Definición
    /*
        Una promesa es un objeto que representa el resultado de una operación asíncrona y tiene 3 estados posibles:

        - Pendiente.
        - Resuelta.
        - Rechazada.
        
        Tienen la particularidad de que se pueden encadenar (then), siendo el resultado de una promesa, los datos de entrada de otra posible función.

        Las promesas mantienen un código más legible y mantenible que las callbacks, además tienen un mecanismo para la detección de errores (catch) que es posible usar en cualquier parte del flujo de datos.

        Si la promesa se cumple se ejecuta el resolve, si falla se ejecuta el reject
        
        new Promise(  ejecutor  function(resolver, rechazar) { ... } );
    */

// * #2. Ejemplos

    // Ejemplo 1   
        
    function cuadradoPromise(value) {
        if (typeof value !== "number") {
            return Promise.reject("Error el valor ingresado no es un número");
        }
        return new Promise(function(resolver, rechazar) {
            setTimeout(() => {
                resolver ({
                    value,
                    result: value*value
                });
            }, 0 || Math.random()*100);
        });
        
    }

    cuadradoPromise(0)
        .then((obj) => {
            console.log("inicio de promise");
            console.log(`promise: ${obj.value}, ${obj.result}`);
            return cuadradoPromise(1)
        }) 
        .then((obj) => {
            console.log(`promise: ${obj.value}, ${obj.result}`);
            return cuadradoPromise(2)
        }) 
        .then((obj) => {
            console.log(`promise: ${obj.value}, ${obj.result}`);
            return cuadradoPromise(3)
        }) 
        .then((obj) => {
            console.log(`promise: ${obj.value}, ${obj.result}`);
            return cuadradoPromise("4")
        }) 
        .then((obj) => {
            console.log(`promise: ${obj.value}, ${obj.result}`);
            return cuadradoPromise(5)
        }) 
        .then((obj) => {
            console.log(`promise: ${obj.value}, ${obj.result}`);
            console.log("fin promise")
        }) 
        .catch(err => console.error(err));