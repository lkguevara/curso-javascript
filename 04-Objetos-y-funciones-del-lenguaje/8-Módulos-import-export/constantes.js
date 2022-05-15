export const PI = Math.PI //Se exporta para poderlo importa en otros archivos

export let usuario = "lian", password = "qwerty";

export default function saludar() {
    console.log("Hola modulos ES6")
}

//Notas:
/*
    * No se pueden tener dos export default (exportación por defecto) 
    * No se puede generar export default a una expresion declarada.. let, const
    * Export default aplicará para funciones y clases o una variable, pero se declara primero y debajo se escibr: 
        const password = qwerty
        export default password.
*/