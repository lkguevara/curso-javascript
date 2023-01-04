//* 1. Clousure: 
    /* Una función que retorna otra función. La función interna puede acceder al valor de la variable que se encuntra en el contexto exterior. */

    // ejm 1
    function crearSaludo(saludo) {
        //let saludo = "Hola"
        return function(nombre) {
            console.log(saludo, nombre );
        }
    }
    let saludar = crearSaludo("Hola"); 
    saludar("Jeisson");

    // ejm 2
    function crearContador(count) {
        count = 0;
        return function(){
            count++
            return count;
        }
    }

    let contador1 = crearContador();
    console.log(contador1());
    console.log(contador1());
    console.log(contador1());
    console.log(contador1());
    console.log(contador1());
    console.log(contador1());

// * BIND

var  persona = {
    nombre: "Fidel",
    apellido: "Marin" ,
    edad: 26
}
let persona2 = {
    nombre: "Maxi",
    apellido: "Viand",

}

let edad 
var logNombre = function() {
    console.log(this.nombre);
}

logNombre.bind(persona)
let logNombrePersona2 = logNombre.bind(persona2)
logNombre();
// logNombrePersona2()


//* CALL

var persona = {
    nombre: "Fidel",
    apellido: "Marin",
    //edad: 23
}

var logNombre = function (edad, mascota) {
    console.log(this.nombre + " tiene " + edad + " tiene un "+ mascota);
}

//let LogNombrePersona = LogNombre.bind(persona)
//logNombre.call(persona, 23)
logNombre.apply(persona, ["perro", 22])
//LogNombrePersona(23)

// let persona = {
//     nombre: "Fidel",
//     apellido: "Marin" 
// }

// let persona2 = {
//     nombre: "Maxi",
//     apellido: "Viand"
// }

// let logNombre = function() {
//     console.log(this.nombre + " " + this.apellido);
// }

// logNombre.call(persona2);

//-----------------------------------------------

//* Callback:Es una función que es llamada como parametro dentro de una funcion
function callback() {
	console.log("Yo soy un callback")
}

//Dicho parametro corresponde a la funcion callback
function mensaje(fn) {
fn()
}
//ejecutamos la funcion mensaje y como parametro le pasamos el callback
mensaje(callback);

//OTRO EJEMPLO:
// Una función
function saludo() {
    console.log('Hola!');
}

// Función que acepta otra función como parámetro
function hablar(callback) {
    callback(); // A esta llamada se le denomina callback
}

// Pasamos una función a otra
hablar(saludo);

Contraer