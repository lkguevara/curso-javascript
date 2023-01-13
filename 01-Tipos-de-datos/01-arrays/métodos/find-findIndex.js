//* find() ---> devuelve el valor del primer elemento del array que cumple la función de prueba proporcionada.

    let frutas = ["Manzana", "Banana", "Uva", "Granadilla"]
    const search = frutas.find(frutas => frutas == "Manzana")
    console.log(search) // True

//* findIndex() ---> devuelve el índice del primer elemento de un array que cumpla con la función de prueba proporcionada

    // Ejemplo 1

        let findI = ["Manzana", "Banana", "Uva", "Granadilla"]
        // Aplicando forEach
        
        findI.forEach((element, index) => {
            if (element === "Banana") {
                console.log(`La fruta ${element} se encuentra en la posición ${index}`)
            }
            
        });

        // Aplicando findIndex
        const busqueda = findI.findIndex(element => element == "Manzana")
        console.log(busqueda) // 0

    // Ejemplo 2

    const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'];

    // aplicando forEach
        meses.forEach((element, index) => {
            if (element === 'Enero'){
                console.log(`El mes ${element} se encuentra en la posición ${index}`)
            } 
        });

    // aplicando findIndex
        
        const resultado = meses.findIndex(element => element === 'Enero')
        console.log(resultado);

    // Ejemplo 3

        const carrito = [
            {nombre: "monitor", precio: 500},
            {nombre: "Televisor", precio: 500},
            {nombre: "Celular", precio: 500},
            {nombre: "Audifonos", precio: 500},
            {nombre: "Teclado", precio: 500},
            {nombre: "Mouse", precio: 500},
        ]

    // aplicando forEach

    carrito.forEach((element, index) => {
        if (element.nombre === 'monitor'){
            console.log(`El producto ${element.nombre} se encuentra en la posición ${index}`)
        } 
    });

    // aplicando findIndex
    const resultado2 = carrito.findIndex(element => element.nombre === 'monitor');

    console.log(resultado2);