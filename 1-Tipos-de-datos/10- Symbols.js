// *# 1. Definición
    /*
        Symbol: es un tipo de datos cuyos valores son únicos e immutables. 
        
        Dichos valores pueden ser utilizados como identificadores (claves) de las propiedades de los objetos.  
        
        Cada valor del tipo Symbol tiene asociado un valor del tipo String o Undefined que sirve únicamente como descripción del símbolo.
    */

// *# 2. Ejemplos

    // Ejemplo 1

        let id = "hola";
        let id2 = "hola";

        console.log(id === id2); //Imprime true //Con symbol va a ser false

        let sym = Symbol("id");
        let sym2 = Symbol("id2");

        console.log(sym === sym2); //Imprime false 
        console.log(sym,sym2); //Imprime Symbol(id) Symbol(id2)
        console.log(typeof sym, typeof sym2); //Imprime symbol symbol

    // Ejemplo 1

        const NOMBRE = Symbol();

        const persona = {
            [NOMBRE]: "Lian"
        }

        console.log(persona) // imprime: {Symbol(): 'Lian'}

        persona.NOMBRE = "lian Guevara"
        console.log(persona);
