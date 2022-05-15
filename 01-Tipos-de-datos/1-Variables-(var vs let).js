//* #1. Caracteristicas
    /*
        - Definición= Espacio en memoria, especificamente en la memoria RAM. Esta misma puede cambiar en el tiempo
        - En ES6 se agrega una nueva forma de definir variables usando la palabra let. 
        - Al usar la palabra reservada *var* se quedará de manera global.
        - Al usar la palabra reservada *let* se quedará de manera local, de bloque. Es decir, quedará en el - bloque que se ha definido.
        - Un bloque es aquel que se separa con {} 

    */

//* #2. EJEMPLOS var - let

    // 1. Usando palabra reservada var

        var musica = "Rock"
        console.log(`Variable musica antes del bloque ${musica}`) //Variable musica antes de imprimir Rock

        {
            var musica ="pop"
            console.log(`Variable musica dentro del bloque ${musica}`) //Variable musica dentro del bloque pop
        }

        console.log(`Variable musica después del bloque ${musica}`) //Variable musica después del bloque pop

        console.log("**************************************************")

    // 2. Usando palabra reservada let

        // # Ejemplo 1
            let musica2 = "Rock"
            console.log(`Variable musica antes del bloque ${musica2}`) //Variable musica antes de imprimir Rock

            {
                let musica2 ="pop"
                console.log(`Variable musica dentro del bloque ${musica2}`) //Variable musica dentro del bloque pop
            }

            console.log(`Variable musica después del bloque ${musica2}`) //Variable musica después del bloque rock

                /*
                UTILIZANDOD VAR

                Variable musica antes del bloque Rock
                Variable musica dentro del bloque pop
                Variable musica después del bloque pop

                **************************************************

                UTILIZANDO LET

                letiable musica antes del bloque Rock
                Variable musica dentro del bloque pop
                Variable musica después del bloque Rock
                */

        // # Ejemplo 2
            let nombre = "lian Guevara"
            console.log(nombre)

            /* Cambiando el nombre */

            nombre = "Katherin Guevara"
            console.log(nombre)



//* #3 Constantes
    /*
    Una constantes es un tipo INMUTABLE, NO puede cambiar una vez definida, se usa la palabra const en lugar de var, al igual que let su scope es de bloque, son tipos de sólo lectura y se le debe asignar un valor en el momento de su declaración. Son referencias inmutables, pero sus valores no necesariamente. 
    */

    // Ejemplos

    const DIEZ = 10;
    DIEZ = 5;
    console.log(DIEZ); 
    // Imprime Uncaught TypeError: Assignment to constant variable, ya que a la variable se le debe asignar un valor

    const hola = 'hola mundo';
    hola = 'hola mundo'; // Imprime Uncaught TypeError: Assignment to constant variable

    const PI;
    PI = 3.141592653589793; //Imprime Missing initializer in const declaration

    //Declaración correcta
    const D = document;
    console.log(D); //Imprime el objeto document

    const PICorrecta = 3.14              
    console.log(PI) //Imprime 3.14