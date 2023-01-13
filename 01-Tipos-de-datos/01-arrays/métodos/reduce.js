//* reduce() ---> Coge una arreglo y lo reduce en otro valor. Toma una gran cantidad de datos, unirlos y entregar un resultado.

//* ejemplo 1. Hacer una suma del siguiente arreglo
    let arrReduce = [1,2,3,4]

    // aplicando for
    let sum = 0
    for (let i = 0; i < arrReduce.length; i++) {
        sum+= arrReduce[i];
    }
    console.log(sum) 

    // aplicando reduce

    const resultado = arrReduce.reduce((sum, item) =>  sum + item)
    console.log(resultado)


//* ejemplo 2. Sumar el costo total del siguiente objeto.

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

//* ejemplo 3. Indicar cuántas veces se repite un número en un arreglo.

    let number = [1,3,2,3]
    const repetidos = number.reduce((obj, item) => {
        if (!obj[item]){ //si no existe el elemento, lo inicializa en 1
            obj[item] = 1
        } else{
            obj[item]+=1
        }
        return obj
    }, {});

    console.log(repetidos);
