//* #1. Definición 
    // Es una colección de elementos. Los arrays son objetos similares a una lista, cuyo prototipo proporciona métodos para efectuar operaciones de recorrido y de mutación.El array siempre va a empezar en la posición cero.

//* #2. Crear un arreglo
        let frutas = ["Manzana", "Banana", "Manzana", "Banana"]
        console.log(frutas) //[ 'Manzana', 'Banana' ]

//* #3. Conocer la longitud (length)

        let frutas2 = ["Manzana", "Banana", "Uva", "Granadilla"]
        console.log(frutas.length) //2

//* #4. Acceder a un elemento de Array mediante su índice [subindiceArrglo]

        let frutas3 = ["Manzana", "Banana", "Uva", "Granadilla"]
                    //   0          1        2          3     //
        console.log(frutas[2]) //Uva

        //Acceder al último elemento
        let frutas4 = ["Manzana", "Banana", "Uva", "Granadilla"]
        console.log(frutas[frutas.length-1]) // Granadilla

//* #5. Arrays multidimensionales: Arreglo dentro de otro arreglo

        let categorias = ["accion","terror","Comedia"], peliculas = ["La verdad duele", "La vida es bella", "Gran torino"], cine = [categorias,peliculas];
        console.log(cine) 
        /*
            Imprime:
            [
                [ 'accion', 'terror', 'Comedia' ],
                [ 'La verdad duele', 'La vida es bella', 'Gran torino' ]
            ]
        */








    






















    // # Crea un nuevo arreglo --> Array.of()  

        /*La diferencia entre #Array.of()# y el constructor #Array# reside en como maneja los parámetros de tipo entero: Array.of(7) crea un array con un solo elemento, 7, mientras que Array(7) crea un array vacío con una propiedad length de 7 */

        // #Sintaxis: Array.of(elemento0[, elemento1[, ...[, elementoN]]])

        const c = Array.of(7) 
        console.log(c); // [7] 

        const c = Array(7)
        console.log(c); // (7) [vacío × 7]


        Array.of(1, 2, 3); // [1, 2, 3]
        Array(1, 2, 3);    // [1, 2, 3]


    // # fill() --> cambia todos los elementos en un arreglo por un valor estático, desde el índice start (por defecto 0) hasta el índice end (por defecto array.length). Devuelve el arreglo modificado.

        /* Sintaxis: arr.fill(value[, start = 0[, end = this.length]])

        Value ---> Valor con el que se va a rellenar el arreglo
        start y end son valores opcionales.

        */

        const d = Array(20).fill("Hello")
        console.log(d)
        /* Imprime:
                [
                    'Hello', 'Hello', 'Hello',
                    'Hello', 'Hello', 'Hello',
                    'Hello', 'Hello', 'Hello',
                    'Hello', 'Hello', 'Hello',
                    'Hello', 'Hello', 'Hello',
                    'Hello', 'Hello', 'Hello',
                    'Hello', 'Hello'
                ]
        */



