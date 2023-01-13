//* Map: permite generar un nuevo arreglo a partir de uno original, pudiendose hacer diversas modificaciones.

//* ejemplo 1

    let arrMap = ["Manzana", "Banana", "Uva", "Granadilla"]
    // aplicando for
    const newArray = []
    for (let i = 0; i < arrMap.length; i++) {
        newArray.push(arrMap[i] + " FOR " );
    }
    console.log(`Original : ${arrMap} nuevo: ${newArray}`)

    // aplicando MAP
    const newArr2= arrMap.map(e => e + " MAP ");
    console.log(`Original : ${arrMap} nuevo: ${newArr2}`)

//* ejemplo 2

    let multiplyElements = [2,4,6,8]
    // aplicando for
    const newArray2 = []
    for (let i = 0; i < multiplyElements.length; i++) {
        newArray2.push(multiplyElements[i] * 2);
    }
    console.log(`Original FOR : ${multiplyElements} nuevo FOR: ${newArray2}`)

    // aplicando MAP
    const newArr3 = multiplyElements.map(e => e * 2);
    console.log(`Original : ${multiplyElements} nuevo: ${newArr3}`)
    

        