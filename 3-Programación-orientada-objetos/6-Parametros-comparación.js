//Side-effect: Modifica la variable global dentro de una función

// EJEMPLO
var nombre = "Paola"

function nuevaPaola(){
    nombre+=" Hernandez"
}
console.log(nombre) //Paola
nuevaPaola()
console.log(nombre) //Paola Hernandez

//Evitando el side effect

var nombre2 = "Rocio"

function nuevaPersona(persona){
    return persona+= " Jimenez"
}

var nombreCompleto = nuevaPersona(nombre2)
console.log(nombre2) //Rocio 
console.log(nombreCompleto) //Rocio Jimenez
console.log(nombre2) //Rocio

//APLICANDO PARAMETROS CON SIDE-EFFECT A OBJETOS

//EJEMPLO 1
var dato = {
    nombre : "daniel",
    dinero: 500, 
    edad: 18
}
function aumentarDinero(persona){
    persona.dinero += 200
}
aumentarDinero(dato) 
console.log(dato) // { nombre: 'daniel', dinero: 700, edad: 18 }

//EJEMPLO 2
function aumentarEdad(persona){
    persona.edad +=10
}

var dato = {
    nombre : "daniel",
    dinero: 500, 
    edad: 18
}

aumentarEdad(dato)
console.log(dato) // { nombre: 'daniel', dinero: 700, edad: 28 }

//EJEMPLO 3

var dato2 = {
    nombre : "daniel",
    dinero: 500, 
    edad: 18
}

function aumentarDinero2(persona){
    return {
        //Retornará un nuevo objeto
        ...persona, //los tres puntos significa traer los datos del objeto, sin embargo se debe definir cuales son los datos
        dinero:persona.dinero+600
    }
}

var danielAdinerado=aumentarDinero2(dato2)
console.log(danielAdinerado) //{ nombre: 'daniel', dinero: 1100, edad: 18 }

// -------------COMPARACIÓN DE OBJETOS----------------

var persona1 = {
    nombre : "daniel",
    dinero: 500, 
    edad: 28
}
var persona2 = {
    nombre : "daniel",
    dinero: 500, 
    edad: 28
}

console.log(persona1 == persona2)
// false
// En el ejemplo anterior es false ya que se encuentran en otro espacio en memoria. Se tienen en cuenta las referencias, en dicho caso hay un espacio en memoria para persona1 y otro espacio en memoria para persona2.
// En conclusión, cada objeto tendrá una referencia especifica, un espacio en memoria, son únicos.


