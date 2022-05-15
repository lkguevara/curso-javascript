//* #1. Definición
    /*
    Una función es un bloque de código, autocontenido, que se puede definir una vez y ejecutar en cualquier momento. Opcionalmente, una función puede aceptar parámetros y devolver un valor.

    Las funciones en JavaScript son objetos, un tipo especial de objetos:

    Se dice que las funciones son ciudadanos de primera clase porque pueden asignarse a un valor, y pueden pasarse como argumentos y usarse como un valor de retorno.
    */

    /*
        function miFuncion("parametros") {
            // Instrucciones
        }

        miFuncion("Atributos");

    */
//* #2. Funciones declaradas

        // Ejemplo 1
            function estoEsUnaFuncion() {
                console.log("uno")
                console.log("dos")
                console.log("tres")
            }
            //Invocando la función
            estoEsUnaFuncion(); // Imprime: uno dos tres

        // Ejemplo 2
            function unaFuncionQueDevuelveValor(){
                console.log("uno")
                console.log("dos")
                console.log("tres")

                return "La funcion ha retornado una cadena de texto"
            }

            let valorDeFuncion = unaFuncionQueDevuelveValor(); //imprime uno dos tres
            console.log(valorDeFuncion); //imprime: La funcion ha retornado una cadena de texto

            /* Es de resaltar que si se añade la palabra reservada return, el código para dicho momento y lo demás se ignora */

        // Ejemplo 3

            let num = 5; // Se declara una variable en 5
            function calcularValor(){
                total *=2;
            }

            for (let i = 0; i < 10; i++) { //Se hace un llamado a la función y se ejecutará 10 veces
                calcularValor();
                
            }
 
            console.log(`El valor total es: ${total}`) //El valor total es: 5120

        // Ejemplo 4

            let variableGlobal=5;
            function miFuncion() {
                let variableLocal= "El valor es: "
                console.log(variableLocal + variableGlobal)
            }

            miFuncion(); // Imprime El valor es: 5
            // console.log(variableLocal) //Me arroja un error ya que dicho valor solo está dentro de la función
            console.log(variableGlobal) // Imprime 5

        // Ejemplo 5
        let miVariable = 5
        function miFuncion() {
            let miVariable= "Esta es una varibale local "
            console.log(miVariable)
        }

        miFuncion(); //Imprime: Esta es una varibale local 
        console.log(miVariable); //Imprime 5 ya que es el valor inicial 


//* #3. Funciones con parametros

        // Ejemplo 1
        function saludar(nombre,edad){
             console.log(`Hola, mi nombre es: ${nombre} y tengo ${edad}`)
        }

        saludar("Lian",28); //imprime: Hola, mi nombre es: Lian y tengo 28

        // Ejemplo 2
        function otraFuncion(valor) {
            console.log(valor)
        }
        otraFuncion(15) // Imprime 15

       // Ejemplo 3
       let contador = 133;
       function newFunction(valor) {
           console.log(valor);
       }
       newFunction(contador) //Imprime 133 que es el valor de la variable

       //Ejemplo 4
       let num1 = 100;
       let num2 = 125;

       function sumar(valor1,valor2) {
           console.log(valor1+valor2)
       }
       sumar(n1,n2) //Imprime 225

       // Ejemplo 5 (Aplicando return)

        function saludar(nombre,edad){
            return `Hola, mi nombre es: ${nombre} y tengo ${edad}`
        }
        console.log(saludar("Lian",28)); //imprime: Hola, mi nombre es: Lian y tengo 28

        //Ejemplo 6 
        let n1 = 100;
        let n2 = 125;

        function sumar(valor1,valor2) {
            return valor1+valor2
        }

        let total = sumar(n1,n2);
        console.log(total) //Imprime 225

//* #4. Funciones expresadas (Funcion anónima)

        /*
             - Son funciones sin un nombre o identificador. Debido a esto se pueden pasar a otras funciones o asignar a variables
             - Cuando una función anonima se asigna a una variable, el nomrbe de la variable es el que usamos para llamar a la función.

        */

        // Ejemplo 1.
        const funcionExpresada = function (saludar) {
            console.log("Esto es una función expresada, es decir, una función que se le ha asignado como valor a una variable, si invocamos esta función antes de su definición JS nos dirá 'Cannot access 'funcionExpresada' before initialization'")
        }
        funcionExpresada()

        // Ejemplo 2
        let miFuncionAnonima = function(valor) {
            return valor*=2;
        }
        console.log(miFuncionAnonima(15)) // imprime 30

//* #4. Funciones expresadas vs declaradas
    
        sumar();
        function sumar() {
            console.log(2+2)
        }

        sumar2();
        const sumar2 = function (){
            console.log(3+3)
        }

    // En lo anterior va a imprimir en consola 4, ya que aplica el hoistin y registra la función declarada.

       