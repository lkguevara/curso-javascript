//* #1. Definición:
    /*
        Las expresiones de función ejecutadas inmediatamente (IIFE por su sigla en inglés) son funciones que se ejecutan tan pronto como se definen.
        
        Se compone por dos partes. La primera es la función anónima con alcance léxico encerrado por el  Operador de Agrupación (). Esto impide accesar variables fuera del IIFE, así cómo contaminar el alcance (scope) global.  La segunda parte crea la expresión de función cuya ejecución es inmediata (), siendo interpretado directamente en el engine de JavaScript.

        (function () {
            statements
        })();
    */

//* #2. Ejemplos 


    (function () {
        console.log("mi primer función anonima autoejecutable (IIFE)");
    })();


    (function (d ,w, c) {
        console.log("mi segunda función anonima autoejecutable (IIFE)");
        console.log(d) //imprime #document
        console.log(w) //imprime #window
        c.log(c) //imprime #console
    })(document,window,console);



//* #3. Formas de escribir las funciones anonimas autoejecutables
    
    // 1. Clasica

        (function () {
            console.log("versión clásica");
        })();

    // 2. Crockford

        ((function () {
            console.log("versión Crockford");
        })());

    // 3. Unaria

        +function () {
            console.log("versión Unaria");
        }();

    // 1. Facebook

        !function () {
            console.log("versión Facebook");
        }();