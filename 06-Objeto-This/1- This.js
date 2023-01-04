//* #1. Definición
    /* This hace referencia al objeto global (window), es decir, es equivalente al objeto windows. global === globalThis === window. El valor de This va a ir cambiando dependiendo de la asignación dada. No funciona con arrow funtions */ 

//* #2. Ejemplos

    //  ejemplo 1
    const nombre = {
        nombre: 'Juan',
        saludar: function(){
            console.log(`Hola ${this.nombre}`) // Hola Juan
        }
    }

    nombre.saludar()

    // ejemplo 2
        // Declaración de la clase
    function Persona(nombre){
        this.nombre = nombre
    }
        // metodo del prototipo
    Persona.prototype.saludar = function(){
        console.log(`Hola ${this.nombre}`) 
    }
        // instanciar un objeto
    let newPersona = new Persona('Juan')
    newPersona.saludar() 



//* #2. Enlazamiento (Binding)
    /* El enlazamiento (binding) es el proceso por el cual se determina el valor de this. Se puede hacer de forma implícita o explícita. 
    
    Tipos de binding:
        - Lexical binding (arrow functions): El enlazamiento se realiza en el momento de la creación de la función.
        - New binding (instanciar objetos): El enlazamiento se realiza en el momento de la creación del objeto.
        - Explicit binding (invocación directa): Sirve para que nosotros elijamos exáctamente que objetos queremos que sea this cuando se ejecuta la función. Bind, call y apply.
        - Implicit binding ( invocación de método): El enlazamiento se realiza cuando invocamos un método de un objeto.
        - Default binding (invocación directa): El enlazamiento se realiza en el momento de la invocación de la función.
    
    */


    