//* #Definición
    // El objeto Proxy permite crear un intermediario para otro objeto, el cual puede interceptar y redefinir operaciones fundamentales para dicho objeto. Permite crear un objeto basado en un objeto literal inicial. Un Proxy se crea con dos parámetros:

        // target: el objeto original que se quiere envolver.
        // handler: un objeto que define cuáles operaciones serán interceptadas y cómo redefinir dichas operaciones.

// *#Ejemplos

    // ejemplo 1

    const persona = {
        nombre: "",
        apellido: "",
        edad: 0
    };

    const manejador = {
        set(obj, prop, value){
            obj[prop] = value
        }
    }

    const lian = new Proxy(persona, manejador);
    lian.nombre= "lian";
    lian.apellido= "guevara";
    lian.edad= 28;
    lian.twitter= "@lkguevara";
    console.log(lian)
    console.log(persona)