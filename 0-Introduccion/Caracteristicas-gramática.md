# Definición
    Javascript es un lenguaje de programación multi-paradigma orientado a objetos de alto nivel.

# Isomorfismo
    ## Hoy JavaScript, es el único lenguaje capaz de ejecutarse en las 3 capas de una aplicación:

        1. Frontend (con JavaScript).
        2. Backend (con Node.js).
        2. Persistencia de Datos (con MongoDB, Couch DB, Firebase, etc).
    
    ## Con JavaScript puedes:

        * Diseño y Desarrollo Web.
        * Hacer Videojuegos.
        * Experiencias 3D, Realidad Aumentada, Realidad Virtual.
        * Controlar Hardware (drones, robots, electrodomésticos, wearables, etc).
        * Aplicaciones Híbridas y Móviles.
        * Aprendizaje Automático.
        * etc.

# Características
    * Lenguaje de Alto Nivel.  (se caracteriza por expresar los algoritmos de una manera adecuada a la capacidad cognitiva humana, en lugar de la capacidad con que los ejecutan las máquinas.)

    * Interpretado. (No se necesita entrar a una fase de compilación) 

    * Dinámico. (Las operaciones realizadas en tiempo de compilación pueden realizarse en tiempo de ejecución.)

    * Débilmente Tipado. (no les tienes que asignar un tipo de variable (como String, entero entre otros )

    * Multi paradigma.(es el cual soporta más de un Paradigma de Programación)

    * Sensible a MAYÚSCULAS y minúsculas. 

    * No necesitas los puntos y comas al final de cada línea.


# Escritura de código

    ## Los identificadores (nombre que se le asigna a una variable, funcion, clase.. etc) deben comenzar con: 
    
      *  Una letra
      *  Un signo de dolar $
      *  Un guión bajo _
      *  Nunca con números o caracteres especiales.

    ## Usa snake_case en: Nombre de archivos: **mi_archivo_javascript.js**

    ## Usa UPPER_CASE en: Constantes:
        const UNA_CONSTANTE = "Soy una constante",
            PI = 3.141592653589793;

    ## Usa UpperCamelCase en: Clases: 
        class SerHumano {
            constructor(nombre, genero) {
                this.nombre = nombre;
                this.genero = genero;
            }

        miNombreEs() {
            return `Mi nombre es ${this.nombre}`;
        }
        }

    ## Usa lowerCamelCase en: 
        *Objetos
        *Primitivos
        *Funciones
        *Instancias

## Palabras reservadas

    A: abstract
    B: boolean, break, byte
    C: case, catch, char, class, const, continue
    D: debugger, default, delete, do, double
    E: else, enum, export, extends
    F: false, final, finally, float, for, function
    G: goto
    I: if, implements, import, in, instanceof, int, interface
    L: let, long
    N: native, new, null
    P: package, private, protected, public
    R: return
    S: short, static, super, switch, synchronized
    T: this, throw, throws, transient, true, try, typeof
    V: var, volatile, void
    W: while, with

## Ordenamiento de código

    * IMPORTACIÓN DE MÓDULOS. (Definir los modulos a importar)
    * DECLARACIÓN DE VARIABLES.
    * DECLARACIÓN DE FUNCIONES.
    * EJECUCIÓN DE CÓDIGO.

## Tipos de datos en JavaScript

    Primitivos: Se accede directamente al valor.

       * string
       * number
       * boolean
       * null
       * undefined
       * NaN

    Compuestos: Se accede a la referencia del valor.

       * object = {}
       * array = []
       * function () { }
       * Class {}
       * etc.


https://jonmircha.com/javascript