// * Arrow Functions--> Es una nueva forma de definir funciones anonimas(que están expresadas).

// * Ejemplo 1
    const saludar = function () {
        console.log("Hola mundo")
    }
    saludar() // Imprime "hola mundo"

    // Aplicando arrow functions... 
    const saludar2 = () => console.log("Hola mundo") // Se elimina la palabra function y los corchetes (pues hay una línea de código)

    const saludar3 = (nombre) => console.log("Hola mundo " + nombre) //Agregando un parametro a la función
    saludar("Lian")

    const saludar4 = nombre => console.log("Hola mundo " + nombre) // Se elimina el parentesis del parametro nombre ya que solo es uno, si fuesen más de 2 se deben dejar los parentesis.
    saludar("Lian")



// * Ejemplo 2
    const sumar = function(a,b) {
        return a+b
    }
    console.log(sumar(8,9))

    // Aplicando arrow functions
    const sumar2 = (a,b) => a+b //Se agregan los parentesis ya que hay 2 o más parametros, se quitan los corchetes ya que hay una línea de código y no es necesario escribir la palabra return
    console.log(sumar(8,9)) // Imprime 17

// * Ejemplo 3

    const funcionDeVariasLineas = () => {
        console.log("uno")
        console.log("dos")
        console.log("tres")
    }
    funcionDeVariasLineas();

// * Ejemplo 4

    const numero = [1,2,3,4,5];
    numeros.forEach(function (el, index){
        console.log(`El elemento ${el} está en la posición ${index}`)
    })

    const numeros = [1,2,3,4,5];
    numeros.forEach((el, index) =>console.log(`El elemento ${el} está en la posición ${index}`));

// * Ejemplo 5


    const perro = {
        nombre: "Leia",
        ladrar () {
            console.log(this)
        } 
    }

    perro.ladrar() // Imprime { nombre: 'Leia', ladrar: [Function: ladrar] }

// * Ejemplo 6 
    function crearPersona(nombre, apellido) {
        return { nombre, apellido}
    };

    const persona = crearPersona ('Lian', 'Guevara')
    console.log(persona) //{ nombre: 'Lian', apellido: 'Guevara' }

    // * Creandose como función de flecha

    const crearPersona = (nombre, apellido) => ({nombre, apellido});
    const personas = crearPersona ('Lian', 'Guevara')
    console.log(persona) //{ nombre: 'Lian', apellido: 'Guevara' }

// * Ejemplo 7

    function imprimeArgumentos() {
        console.log(arguments)
    }
    imprimeArgumentos(10,"Lian", "Hola", "mundo"); //Imprime: [Arguments] { '0': 10, '1': 'Lian', '2': 'Hola', '3': 'mundo' }

    // * Creandose como función de flecha
    const imprimeArgumentos2 = (... args) => {
        console.log(args)
    }
    imprimeArgumentos2(10,"Lian", "Hola", "mundo"); //Imprime: [ 10, 'Lian', 'Hola', 'mundo' ]
