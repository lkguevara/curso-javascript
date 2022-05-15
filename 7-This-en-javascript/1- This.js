//* #1. Definición
    /*
        La palabra clave this de una función se comporta un poco diferente en Javascript en comparación con otros lenguajes. Además tiene algunas diferencias entre el modo estricto y el modo no estricto.

        This hace referencia al objeto global (window), es decir, es equivalente al objeto windows

        
    */ 

//* #2. Ejemplos

    console.log(this) // imprime: Window {window: Window, self: Window, document: document, name: '', location: Location, …}

    console.log(window) // imprime: Window {window: Window, self: Window, document: document, name: '', location: Location, …}

    console.log(this === window) // imprime: true

    this.nombre = "contexto global";
    console.log(this.nombre);

    function imprimir () {
        console.log(this.nombre);
    }

    imprimir();

