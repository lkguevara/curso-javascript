//* some() ---> comprueba si al menos un elemento de un objeto o arreglo cumple con la condición implementada por la función proporcionada. Retorna true o false

// arr.some(callback(element[, index[, array]])[, thisArg])

// Ejemplo 1
    const carrito = [
        {nombre: "monitor", precio: 500},
        {nombre: "Televisor", precio: 500},
        {nombre: "Celular", precio: 500},
        {nombre: "Audifonos", precio: 500},
        {nombre: "Teclado", precio: 500},
        {nombre: "Mouse", precio: 500},
    ]

    // aplicando forEach

    carrito.forEach(element => {
        (element.nombre === "Celular") ? console.log("Existe") : console.log("No existe")
    });

    // aplicando some()

    const existe = carrito.some(element => element.nombre === "Celular");
    console.log(existe); //true
