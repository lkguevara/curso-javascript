// * 1. Definición
    // Arreglo que admite datos únicos, no se pueden repetir

//*. Ejemplos

    //* Ejemplo 1    

        const set = new Set([1,2,3,3,4,4,5,true,false,false,{},{},"hola", "HOla"]);
        console.log(set)

    //* Ejemplo 2
        console.log(set.size)

    // ejemplo 3
        const set2 = new Set();
        console.log(set2)
        set2.add(1)
        console.log(set2)
        set2.add(2)
        console.log(set2)
        set2.add(3)
        console.log(set2)

    // Ejemplo 4. recorrer con for of

    for (const item of set) {
        console.log(item)
    }

    // Ejemplo 5. recorrer con for each

    set2.forEach(item => {
        console.log(item)
    });