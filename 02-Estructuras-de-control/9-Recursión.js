//* Recursión: Función que se llama a si misma y necesita un caso de base o corte.

// * Ejemplos

// Factorial
function factorial(x){
    if(x===0 || x===1) return 1
    else if (x<0) return 0
    return x * factorial (x-1)
    
  }
  
console.log(factorial(4))

// cuenta regresiva

function cuentaRegresiva(x){
    console.log(x)
    if(x===0) return "Fin"
    cuentaRegresiva(x-1)
}

console.log(cuentaRegresiva(15))
