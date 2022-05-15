//* reduce() ---> Coge una arreglo y lo reduce en otro valor. Toma una gran cantidad de datos, unirlos y entregar un resultado.

// ejemplo 1. Hacer una suma del siguiente arreglo
    let arrReduce = [1,2,3,4]

    // aplicando for
    let sum = 0
    for (let i = 0; i < arrReduce.length; i++) {
        const element = arrReduce[i];
        sum+= element
    }
    console.log(sum) // la suma es 10

    // aplicando reduce

    const resultado = arrReduce.reduce((acumulador,element) =>  acumulador + element, 0)
    console.log(resultado) // 10


// ejemplo 2. Sumar el costo total del siguiente objeto.

    const carrito = [
        {nombre: "monitor", precio: 500},
        {nombre: "Televisor", precio: 500},
        {nombre: "Celular", precio: 500},
        {nombre: "Audifonos", precio: 500},
        {nombre: "Teclado", precio: 500},
        {nombre: "Mouse", precio: 500},
    ]
    let sumaProductos = 0;

    // Aplicando forEach
    carrito.forEach(element => {
        sumaProductos += element.precio
    });

    console.log(sumaProductos);
    
    // Aplicando reduce()

    const resultado2 = carrito.reduce((acumulador, elemento) => acumulador + elemento.precio)
    console.log(sumaProductos)