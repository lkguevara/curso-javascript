//* #1. Definición
/* 
    permite generar un nuevo arreglo a partir de uno original, pudiendose hacer diversas modificaciones.
*/

//* #2. Ejemplos

    // ejemplo 1

        let arrMap = ["Manzana", "Banana", "Uva", "Granadilla"]

        // aplicando for

        const newArray = []
        for (let i = 0; i < arrMap.length; i++) {
            newArray.push(arrMap[i] + "trasnformado");
        }
        console.log(`Original : ${arrMap} nuevo: ${newArray}`)

        // aplicando map
        let arrMap2 = ["Manzana", "Banana", "Uva", "Granadilla"]
        const newArreglo2= arrMap2.map(e => e + "map");
        console.log(`Original : ${arrMap} nuevo: ${newArreglo2}`)
        console.log(arrMap2)


        