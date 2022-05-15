// * # Iterables

    /*
        Es una estructura de datos líneal, que hace que sus elementos sean públicos y se puedan recorrer. Ejemplo: arrays, string, map, elementos del DOM... entre otros.

        Elemento que su contenido se puede recorrer.
    */
   
// * # Iterador

    /*
        Apuntador que va recorriendo los elementos de la misma estructura de dato.

        Mecanismo para recorrer el elemento
    */


//* Ejemplos

    // Ejemplo 1

        const iterable = [1,2,3,4,5,6,6];

        // accedemos al iterador del iterable
        const iterador = iterable[Symbol.iterator]();

        console.log(iterable); // imrpime: (5) [1, 2, 3, 4, 5]
        console.log(iterador); // imrpime: Array Iterator {}
        // console.log(iterador.next()); // imrpime: {value: 1, done: false}
        // console.log(iterador.next()); // imrpime: {value: 1, done: false}
        // console.log(iterador.next()); // imrpime: {value: 1, done: false}
        // console.log(iterador.next()); // imrpime: {value: 1, done: false}
        // console.log(iterador.next()); // imrpime: {value: 1, done: false}
        // console.log(iterador.next()); // imrpime: {value: undefined, done: true}

        // Creando lo anterior a través de un ciclo
        let next = iterador.next();

        while (!next.done) {
            console.log(next.value);
            next = iterador.next();
        }
        
