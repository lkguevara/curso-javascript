//* ForEach() ---> permite iterar un arreglo y posterior obtener cada elemento. Funciona similar al ciclo for. ** No crea un nuevo arreglo **

    // Ejemplo 1
        const arregloFrutas = ["Manzana", "Banana", "Uva", "Granadilla"]
        arregloFrutas.forEach((elemento, indice, arreglo) => {
            console.log(elemento) // Imprime cada elemento del arreglo como string, en este caso: manzana, banana, uva y granadilla

            console.log(indice) // Imprime el indice o posición de cada elemento: 0 1 2 3

            console.log(arreglo) // Imprime el arreglo ["Manzana", "Banana", "Uva", "Granadilla"]
        });

    // Ejemplo 2
        const numbers = [1,2,3,4,5]

            // aplicando for
        for (let i = 0; i < numbers.length; i++) {
            console.log(`Imprimendo con for: ${numbers[i]}`);
        }

            // aplicando forEach
        numbers.forEach(element => {
            console.log(`Imprimendo con forEach: ${element}`);
        });
    // Ejemplo 3
        const carrito = [
            {nombre: "monitor", precio: 500},
            {nombre: "Televisor", precio: 500},
            {nombre: "Celular", precio: 500},
            {nombre: "Audifonos", precio: 500},
            {nombre: "Teclado", precio: 500},
            {nombre: "Mouse", precio: 500},
        ]

           // aplicando for
        for (let i = 0; i < carrito.length; i++) {
            console.log(`Imprimendo con for: ${carrito[i].nombre} ${carrito[i].precio}`);
        }

            // aplicando forEach
        carrito.forEach(element => {
            console.log(`Imprimendo con forEach: ${element.nombre} ${element.precio}`);
        });
