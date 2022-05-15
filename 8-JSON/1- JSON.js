// * #1. Definición
    /*
        JSON: JavaScript Object Notation:
        JavaScript Object Notation o Notación de Objetos de JavaScript, es un formato ligero de intercambio de datos. Leerlo y escribirlo es simple para humanos, mientras que para las máquinas es fácil de interpretar y generar. Todos los lenguajes de programación lo soportan.
    */

// * #2. Sintáxis 
    /*
        - Los datos se encuentran en pares de nombre / valor.
        - Los datos están separados por comas.
        - Las llaves {} contienen objetos.
        - Los corchetes [] contienen arreglos.
        - Los datos tienen un nombre y un valor.
        - Los datos se escriben como pares de nombre / valor "nombre" : "valor".
    

        {
            "name": "Manz",
            "life": 99,
            "dead": false,
            "props": ["invisibility", "coding", "happymood"],
            "senses": {
              "vision": 50,
              "audition": 75,
              "taste": 40,
              "smell": 50,
              "touch": 80
            }
          }

    */

// * #3. Valores JSON: 
    /*
        - Un número (entero o de coma flotante).
        - Una cadena (entre comillas dobles).
        - Un booleano (verdadero o falso).
        - Un arreglo (entre corchetes).
        - Un objeto (entre llaves).
        - Un valor nulo (null).
    */

// * #4. Métodos JavaScript para JSON: 

   //* JSON.parse(): Analiza una notación JSON y la convierte en un tipo de dato JS. JSON.parse(text[, reviver])
    
    // ejemplo:

        console.log("*** JSON.parse ***");
        console.log(JSON.parse("{}"));  //imprime objeto: {}
        console.log(JSON.parse("[1,2,3]"));
        console.log(JSON.parse("true"));
        console.log(JSON.parse("false"));
        console.log(JSON.parse("19"));
        console.log(JSON.parse('"Hola Mundo"'));
        console.log(JSON.parse("null"));
        // console.log(JSON.parse("undefined"));
        console.log(JSON.parse('{ "x": 2, "y": 3 }'));

    //* JSON.stringify(): Convierte un tipo de dato JS a notación JSON. 

        console.log("*** JSON.stringify ***");
        console.log(JSON.stringify({}));
        console.log(JSON.stringify([1, 2, 3]));
        console.log(JSON.stringify(true));
        console.log(JSON.stringify(false));
        console.log(JSON.stringify(19));
        console.log(JSON.stringify("Hola Mundo"));
        console.log(JSON.stringify(null));
        console.log(JSON.stringify(undefined));
        console.log(JSON.stringify({ x: 2, y: 3 }));