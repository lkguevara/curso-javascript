// *#1. definición
    /*
        Las promesas fueron una gran mejora respecto a las callbacks para controlar la asincronía en JavaScript, sin embargo pueden llegar a ser muy verbosas a medida que se requieran más y más métodos .then().

        Las funciones asíncronas (async / await) surgen para simplificar el manejo de las promesas.
        La palabra async declara una función como asíncrona e indica que una promesa será automáticamente devuelta.
        Podemos declarar como async funciones con nombre, anónimas o funciones flecha.

        La palabra await debe ser usado siempre dentro de una función declarada como async y esperará de forma asíncrona y no bloqueante a que una promesa se resuelva o rechace.
    */

// *#2. Ejemplos

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

    async function funcionAsincronaDeclarada() {
        try {
            console.log("inicio función Async");

            let obj = await cuadradoPromise(0); //Esperar el resultado de esta ejecución antes de pasar a la siguiente
            console.log(`Async function: ${obj.value}, ${obj.result}`);

            obj = await cuadradoPromise(1);
            console.log(`Async function: ${obj.value}, ${obj.result}`);

            obj = await cuadradoPromise(2);
            console.log(`Async function: ${obj.value}, ${obj.result}`);

            obj = await cuadradoPromise(3);
            console.log(`Async function: ${obj.value}, ${obj.result}`);

            obj = await cuadradoPromise(4);
            console.log(`Async function: ${obj.value}, ${obj.result}`);

            console.log("Fin async function")
            
        } catch (error) {
            console.error(error);
        }
    }

    funcionAsincronaDeclarada();

    // Con arrow function

    const funcionAsincronaExpresada = async () => {
        try {
          console.log("Inicio Async Function");
      
          let obj = await cuadradoPromise(6);
          console.log(`Async Function: ${obj.value}, ${obj.result}`);
      
          obj = await cuadradoPromise(7);
          console.log(`Async Function: ${obj.value}, ${obj.result}`);
      
          obj = await cuadradoPromise(8);
          console.log(`Async Function: ${obj.value}, ${obj.result}`);
      
          obj = await cuadradoPromise(9);
          console.log(`Async Function: ${obj.value}, ${obj.result}`);
      
          obj = await cuadradoPromise(10);
          console.log(`Async Function: ${obj.value}, ${obj.result}`);
      
          console.log("Fin Async Function");
        } catch (err) {
          console.error(err);
        }
      };
      
      funcionAsincronaExpresada();