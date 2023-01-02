# Definición
    Utilizar async/await no es más que lo que se denomina azúcar sintáctico, es decir, utilizar algo visualmente más agradable, pero que por debajo realiza la misma tarea. Para ello, lo que debemos tener siempre presente es que un await sólo se puede ejecutar si esta dentro de una función definida como async.

    En este caso, lo que hacemos es lo siguiente:

        Creamos una función request(url) que definimos con async
        Llamamos a fetch utilizando await para esperar y resolver la promesa
        Comprobamos si todo ha ido bien usando response.ok
        Llamamos a response.text() utilizando await y devolvemos el resultado

# Sintaxis
    const request = async (url) => {
    const response = await fetch(url);
    if (!response.ok)
        throw new Error("WARN", response.status);
    const data = await response.text();
    return data;
    }

    const resultOk = await request("/robots.txt");
    const resultError = await request("/nonExistentFile.txt");
