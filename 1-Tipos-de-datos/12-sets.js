// * #1. Definición
    /*
        Arreglo que admite datos únicos, no se pueden repetir
    */

// * #2. Ejemplos

    // Ejemplo 1    

        const set = new Set([1,2,3,3,4,4,5,true,false,false,{},{},"hola", "HOla"]);
        console.log(set)

        // En el ejemplo anterior no se va a imprimir los valores repetidos

    // Ejemplo 2 definir el tamaño
        console.log(set.size) //imprime 11

    // ejemplo 3
        const set2 = new Set();
        set2.add(1)
        set2.add(2)
        set2.add(3)
        set2.add(3)
        set2.add(true)
        set2.add(true)
        set2.add(false)
        console.log(set2)

    // Ejemplo 4. recorrer con for of

    for (const item of set) {
        console.log(item)
    }

    // Ejemplo 5. recorrer con for each

    set2.forEach(item => {
        console.log(item)
    });