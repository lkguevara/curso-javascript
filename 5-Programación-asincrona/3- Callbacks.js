// * #1. Definición

/*
    Una callback (llamada de vuelta), es una función que se ejecutará después de que otra lo haga. 
    Es un mecanismo para asegurar que cierto código no se ejecute hasta que otro haya terminado.
    Al ser JavaScript un lenguaje orientado a eventos, las callbacks son una buena técnica para controlar la asíncronía.
*/

// * #2. Ejemplos

    // Ejemplo 1   
        
        function cuadradoCallback(value,callback) {
            setTimeout(() => {
                callback(value, value*value);
            }, 0 || Math.random()*100);
        }

        cuadradoCallback(0, (value, result) => {
            console.log("Inicia Callback");
            console.log(`Callback: ${value}, ${result}`);
            cuadradoCallback(1, (value, result) => {
              console.log(`Callback: ${value}, ${result}`);
              cuadradoCallback(2, (value, result) => {
                console.log(`Callback: ${value}, ${result}`);
                cuadradoCallback(3, (value, result) => {
                  console.log(`Callback: ${value}, ${result}`);
                  cuadradoCallback(4, (value, result) => {
                    console.log(`Callback: ${value}, ${result}`);
                    cuadradoCallback(5, (value, result) => {
                      console.log(`Callback: ${value}, ${result}`);
                      console.log("Fin Callback");
                      console.log("Callback Hell !!!!!😈🤘");
                      console.log("http://callbackhell.com/");
                    });
                  });
                });
              });
            });
          });

    // Ejemplo 2

        function mensaje() {
            console.log("mensaje 1");
            setTimeout(() => {
                mensaje2()
            }, 3000);
        }
        function mensaje2() {
            console.log("mensaje 2")
        }

        mensaje();
        
    // Ejemplo 3

        function mensaje() {
            console.log("mensaje 1");
            setTimeout(() => {
                mensaje2()
            }, 3000);
        }
        function mensaje2() {
            console.log("mensaje 2")
        }

        mensaje();
     


