// * includes: determina si una matriz incluye un determinado elemento, devuelve true o false según corresponda.

// método includes aplica únicamente para arreglos NUNCA OBJETOS. para objetos aplica some.

/**arr.includes(searchElement[, fromIndex]) */

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'];

// comprobar si un "mes" existe en el arreglo

    // aplicando con forEach

    meses.forEach(element => {
        (element === 'Enero') ? console.log("Existe") : console.log("No existe")
    });

    const resultado = meses.includes('Enero') //true
    console.log(resultado) //true