//* filter() ---> filtra elementos en un array con base en una condicion. No cambia el array original sino que crea uno nuevo

    // ejemplo 1
        let arrFilter = ["Manzana", "Banana", "Uva", "Granadilla"];

        // aplicando for
        const newfilter = [];

        for (let i = 0; i < arrFilter.length; i++) {
        const item = arrFilter[i];
        if (item.length > 6) {
            newfilter.push(item);
        }
        }
        console.log(`Original : ${arrFilter} nuevo: ${newfilter}`);

        // aplicando filter
        const newFilterr = arrFilter.filter((e) => e.length > 6);
        console.log(`Original : ${arrFilter} nuevo: ${newFilterr}`);
    
    // ejemplo 2

        const carrito = [
            {nombre: "monitor", precio: 500},
            {nombre: "Televisor", precio: 140},
            {nombre: "Celular", precio: 200},
            {nombre: "Audifonos", precio: 100},
            {nombre: "Teclado", precio: 650},
            {nombre: "Mouse", precio: 850},
        ]

        // Filtrar los productor mayores a 400

        let resultado = carrito.filter(element => element.precio > 400);
        console.log(resultado)
