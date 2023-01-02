//* # 1. WHILE
    // Crea un bucle que ejecuta una sentencia especificada mientras cierta condición se evalúe como verdadera. Dicha condición es evaluada antes de ejecutar la sentencia. Este se ejecutará siempre y cuando la condición sea verdadera. SE UTILIZA CUANDO NO CONOCEMOS LA CANTIDAD DE VECES QUE QUEREMOS QUE SE REPITA SE UTILIZA WHILE

    /* Sintaxis
        while (condicion)
    sentencia
    */

    // imprimir los números del 0 al 100

        let contador1 = 0;

        while (contador1 < 10) {
            console.log(contador1) //Imprime Los números de 1-9  /* 0 1 2 3 4 5 6 7 8 9 */
            contador1++;
        }

        console.log(`El valor final de contador es: ${contador1}`) //Imprime 10 porqué es el valor que tiene como final para parar el ciclo, 

//* #2. DO... WHILE 

        /*La sentencia (hacer mientras) crea un bucle que ejecuta una sentencia especificada, hasta que la condición de comprobación se evalúa como falsa.Haga algo mientras... El do while al menos se ejecutará la primera vez sin importar que sea la condición verdadera*/
        
        
            let contador = 150;
            do{                         //Incremente en 1 mientras contador sea menor que 100
                contador++;
            }while(contador < 100);

            console.log(contador); //Imprime 151

        /*
            1. Contador incia con valor de 150
            2. Se suma 1 y queda en 151
            3. Se cierra el ciclo porqué es mayor que 100 pero el valor final será 151
        */ 


//* # 3. FOR (ciclo más utilizado)

    // SE USA CUANDO CONOCEMOS LA CANTIDAD DE VECES QUE EL BUCLE SE VA A EJECUTAR. Dicha estructura  consta de tres partes: 

    /*  for ([inicialización de la variable]; [condicion]; [decremento o incremento]){
        sentencia
        }
    */   

        // Ejemplo 1
            for (let i = 0; i < 10; i++) {
                console.log(i) // Imprime los números del /* 0 1 2 3 4 5 6 7 8 9 */
            }

         // Ejemplo 2    
            let numero = [1,2,3,4,5,6,7,8,9,10,11,12,13];

            for (let i = 0; i < numero.length; i++) {
                console.log(numero[i]); //Imprime /* 1 2 3 4 5 6 7 8 9 10 11 12 13 */
            }

         // Ejemplo 3    
        let total = 0;
        for (let i = 0; i < 5; i++) {
            total +=10;
        }

        console.log(total) // imprime 50 porqué se repite 5 veces

//* # 4. for in --> Recorre las propiedades de un objeto primitivo.

        const lian = {
            nombre: "Lian",
            apellido: "Guevara",
            edad: 28
        } 

        for (const propiedad in lian) {
            console.log(`key:${propiedad}, value:${lian[propiedad]}`)
        }

        /*
        key:nombre, value:Lian
        key:apellido, value:Guevara
        key:edad, value:28
        */

//* # 5. For of ---> permite recorrer todos los elementos de un arreglo o objeto iterable (que se pueda partir en pequeños elementos).


        let numeros = [1,2,3,4,5,6,7,8,9,10,11,12,13];

        for (const elemento of numeros) {
            console.log(elemento) //Imprime /* 1 2 3 4 5 6 7 8 9 10 11 12 13 */
        }



        let cadena = "Hola mundo"
        for (const caracter of cadena) {
            console.log(caracter) 
        }
