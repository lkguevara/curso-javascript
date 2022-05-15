//* 1. #Definición:
    /*Las expresiones regulares (a menudo llamadas RegExp o RegEx) son un sistema para buscar, capturar o reemplazar texto utilizando patrones. Estos patrones permiten realizar una búsqueda de texto de una forma relativamente sencilla y abstracta, de forma que abarca una gran cantidad de posibilidades que de otra forma sería imposible o muy costosa.

    En JavaScript, las expresiones regulares también son objetos. Estos patrones se utilizan con los métodos exec() y test() de RegExp, y con match(), matchAll(), replace(), replaceAll() (en-US), search() y split() métodos de String. Este capítulo describe las expresiones regulares de JavaScript. 
    
    Sintáxis: new RegExp(r, flags) //Crea una nueva expresión regular a partir de r con los flags indicados.
    
    */

//* 2. #Propiedades 

    /*
         - .source --> Devuelve un string con la expresión regular original al crear el objeto (sin flags).

        - .flags --> Devuelve un string con los flags activados en la expresión regular.

        - .lastIndex --> Devuelve la posición donde se encontró una ocurrencia en la última búsqueda.

        - .global --> Comprueba si el flag *g* está activo en la expresión regular.

        - .ignoreCase --> Comprueba si el flag *i* está activo en la expresión regular.

        - .multiline --> Comprueba si el flag *m* está activo en la expresión regular.

        - .unicode -->	Comprueba si el flag *u* está activo en la expresión regular.

        - .sticky --> Comprueba si el flag *y* está activo en la expresión regular.
    */

//* 3. #Flags (banderas o patrones) 

    /* 
        g	(glablal) Búsqueda global.	
        i	(ignoreCase) Búsqueda que no distingue entre mayúsculas y minúsculas.   
        m	(multiline) Búsqueda multilínea. Permite a ^ y $ tratar los finales de línea 
        s	Permite que el . coincida con caracteres de nueva línea.       
        u	(unicode) tratar un patrón como una secuencia de puntos de código Unicode.        
        y	(sticky) Realiza una búsqueda "pegajosa" que coincida a partir de la posición actual en la cadena de destino. 
    */

//* 4. #Métodos 

    /* 
        - test(str): Boolean
        - exec(str): array
    */

//* 5. Caracteres especiales

    /*
        CARACTER        DESCRIPCIÓN
        .               Comodín, cualquier caracter.
        \               Invierte el significado de un carácter.
        []              Rango de carácteres. Cualquiera de los caracteres del interior de los corchetes.
        [^]             No exista cualquiera de los caracteres del interior de los corchetes.
        |               Establece una alternativa: lo que está a la izquierda o lo que está a la derecha.
        [0-9]           Un dígito del 0 al 9.
        [^0-9]          No exista un dígito del 0 al 9.
        [A-Z]           Letra mayúscula de la A a la Z. 
        [a-z]           Letra minúscula de la a a la z
        [ \t\r\n\f]     Carácter de espacio en blanco

    */

//* 6. Anclas

    /*
        Permiten deliminar los patrones de búsqueda e indicar si empiezan o terminan por carácteres concretos, siendo mucho más específicos al realizar la búsqueda
    
        CARACTER        DESCRIPCIÓN
        ^               Delimina el inicio del patrón. Significa empieza por.
        $               Delimina el final del patrón. Significa acaba en.
        \b              Posición de una palabra limitada por espacios, puntuación o inicio/final.
        \B	            Opuesta al anterior. Posición entre 2 caracteres alfanuméricos o no alfanuméricos.

    */

//* 7. Cuantificadores

    /*
        permiten indicar cuántas veces se puede repetir el carácter inmediatamente anterior.
    
        CARACTER        DESCRIPCIÓN
        *	            El carácter anterior puede aparecer 0 o más veces.
        +	            El carácter anterior puede aparecer 1 o más veces.
        ?	            El carácter anterior puede aparecer o no aparecer.
        {n}	            El carácter anterior aparece n veces.
        {n,}	        El carácter anterior aparece n o más veces.
        {n,m}	        El carácter anterior aparece de n a m veces.

    */

        
//* #Ejemplos

    // Ejemplo 1

        let cadena = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."

        let expReg = new RegExp("lorem","i") //Primer parametro es la palabra y el segundo es la bandera
        let expReg2 = new RegExp(/lorem/,"i") 

        console.log(expReg.test(cadena)) //true
        console.log(expReg2.test(cadena)) // true

    // Ejemplo 2

        const vocales = /[aeiou]/i; // RegExp que acepta vocales (mayús/minús);
        console.log(vocales.test("a")) // true (es vocal)
        console.log(vocales.test("E")) // true (es vocal, y tiene flag «i»)
        console.log(vocales.test("t")) // false (no es vocal)

    // Ejemplo 3

        const noEsVocal = /[^aeiou]/i; // RegExp que acepta lo que no sea vocal (mayús/minús)

            noEsVocal.test("a"); // false
            noEsVocal.test("E"); // false
            noEsVocal.test("T"); // true
            noEsVocal.test("m"); // true

    // Ejemplo 4

        const r = /^mas/i;

            r.test("Formas"); // false  (no empieza por "mas")
            r.test("Master"); // true
            r.test("Masticar"); // true

        const r2 = /do$/i;

        r2.test("Vívido"); // true
        r2.test("Dominó"); // false


// https://lenguajejs.com/javascript/caracteristicas/expresiones-regulares/