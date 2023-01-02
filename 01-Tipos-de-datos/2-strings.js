//* #1. Definición
    // Es uno de los valores primitivos, es una secuencia de caracteres usado para representar el texto.
  

//* #2. Ejemplos

    let string = "Una cadena primitiva";
    console.log(string1);
    console.log("*********")
    let string2 = 'También una cadena primitiva';
    console.log(string2);
    console.log("*********")
    let string3 = `Otra cadena primitiva más`;
    console.log(string3);

//* #3. PROPIEDADES
    //* 1. length
    let string1 = "Una cadena primitiva";
    console.log(string1.length);

//* #4. MÉTODOS (Acción que hace el objeto cadena)

    //* charAt(): 
    // devuelve la letra según la posición dada.
        
        let text = "hello world";
        console.log(text.charAt(0)); //H
        console.log(text.charAt(2)); //L

    //* concat(): 
    // combina dos o más cadenas de texto y devuelve una cadena de texto nueva.
        
    let text2 = "hello world";
    console.log(text.concat(" ", "I'm learning JS")); //hello world I'm learning JS

    //* includes(): 
    // determina si una cadena de texto puede ser encontrada dentro de otra cadena de texto, devolviendo true o false según corresponda.

        let cadena = "Hola mundo, me encuentro aprendiendo programación"
        console.log(cadena.includes("encuentro")); //true
        console.log(cadena.includes("hello")); // false

    //* indexOf(): 
    // devuelve el índice de donde aparece una palabra en especifico. Permite hacer búsqueda de textos.

        let cadena2 = "Hola mundo, me encuentro aprendiendo programación"
        console.log(cadena.indexOf("encuentro")); //15

    //* replace(): 
    // Reemplaza un texto por otro.

        let cadena3 = "Hola mundo, me encuentro aprendiendo programación"
        console.log(cadena.replace("mundo","compañeros")); //Imprime: Hola compañeros, me encuentro aprendiendo programación
        console.log(cadena)

    //* slice(): 
    // extrae una sección de una cadena y devuelve una cadena nueva.

        let cadena4 = "Hola mundo, me encuentro aprendiendo programación"
        console.log(cadena.slice(14)); // Imprime: encuentro aprendiendo programación
        console.log(cadena.slice(14, 22)); // Imprime: encuent
        
    //* split(): 
    // divide un objeto de tipo String en un array (vector) de cadenas mediante la separación de la cadena en subcadenas. 

        let cadena5 = "Hola mundo, me encuentro aprendiendo programación"
        console.log(cadena5.split(",")); // [ 'Hola mundo', ' me encuentro aprendiendo programación' ]

    //* toLowerCase (): 
    // devuelve el valor en minúsculas.
        let nombre = "LIAN"
        console.log(nombre.toLowerCase()); //lian

    //* toString (): 
    // Convierte el valor a string.
        let numero = 44
        console.log(numero.toString()); //lian

    //* toUpperCase (): 
    // método que devuelve el valor convertido en mayúsculas
        let nombre2 = "lian"
        console.log(nombre2.toUpperCase()); //LIAN

    //* trim (): 
    // elimina los espacios en blanco en ambos extremos del string.
        let cadena6 = "   Hola mundo, me encuentro aprendiendo programación   "
        console.log(cadena.trim()); // Hola mundo, me encuentro aprendiendo programación

// #5. Webgrafía: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String


