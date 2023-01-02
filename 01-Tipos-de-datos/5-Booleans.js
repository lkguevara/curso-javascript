//* #1 Definición.
    // El Booleano es un contenedor de objetos para un valor true o false.

    let verdadero = true;
    let falso = false;

    console.log(verdadero, falso); //true false
    console.log(typeof verdadero, typeof falso); //boolean boolean

//* #2. Truthy 
    // es un valor que se considera verdadero cuando se encuentra en un contexto booleano.

    if (true)
    if ({})
    if ([])
    if (42)
    if ("0")
    if ("false")
    if (new Date())
    if (-42)
    if (12n)
    if (3.14)
    if (-3.14)
    if (Infinity)
    if (-Infinity)

//* #3. Falsy 
    // a veces escrito falsey) es un valor que se considera falso cuando se encuentra en un contexto booleano.

    if (false)
    if (null)
    if (undefined)
    if (0)
    if (-0)
    if (0n)
    if (NaN)
    if ("");