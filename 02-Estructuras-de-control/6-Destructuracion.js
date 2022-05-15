//* #1. Definición

    /*Es una nueva forma de asignar valor a los arreglos u objetos en una nueva variable.*/

//* #2. Ejemplos

    const number = [1,2,3]
    //Necesito guardar cada valor en una nueva variable, se hace lo siguiente:

    //Sin desestructuracion
    let uno = number[0], dos =number[1], tres =number[2]
    console.log(uno, dos, tres) //Imprime 1 2 3

    //Con desestructuracion:
    const [a,b,c] = number;
    console.log(a,b,c) //Imprime 1 2 3

    // Ejemplo 2
    const persona = {
        nombre : "Lian",
        apellido : "Guevara",
    }

    //Sin desestructuracion
    let nombre = persona.nombre, apellido = persona.apellido;
    
    //Con desestructuracion:
    const {d, e} = persona;
    console.log(d,e);
   