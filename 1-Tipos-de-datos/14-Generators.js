//* #Definición

    /*
        El objeto Generator es retornado por una función generator y es conformado tanto el protocolo iterable como el protocolo iterador.

        Es una función que permite trabajar de una manera más amigable con los iteradores.

        yield es como un return.
    */

// *#Ejemplos

    // ejemplo 1

    function* iterable() {
        let index = 0;
        while (true) {
            yield index++
        }
    }

    let gen = iterable();

    console.log(gen.next().value);   // 0
	console.log(gen.next().value);  // 1
	console.log(gen.next().value); // 2