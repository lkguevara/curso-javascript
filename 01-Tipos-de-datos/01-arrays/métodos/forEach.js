//* ForEach() ---> permite iterar un arreglo y posterior obtener cada elemento. Funciona similar al ciclo for. ** No crea un nuevo arreglo **

    //* Ejemplo 1
        const frutas = ["Manzana", "Banana", "Uva", "Granadilla"]
        frutas.forEach((elemento, indice, arreglo) => {
            console.log(elemento)
            console.log(indice)
            console.log(arreglo) 
        });


    //* Ejemplo 2
        const numbers = [1,2,3,4,5]

            // aplicando for
        for (let i = 0; i < numbers.length; i++) {
            const element = numbers[i];
            console.log(element);
        }

            // aplicando forEach
        numbers.forEach(element => console.log("ForEach" , element));
        

    //* Ejemplo 3
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
            console.log(carrito[i].nombre, carrito[i].precio);
        }

            // aplicando forEach
        carrito.forEach(element => console.log("forEach:", element.nombre, element.precio));
