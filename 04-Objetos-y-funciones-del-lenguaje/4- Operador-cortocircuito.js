// * #1. Definición
/* 
  - Funcionan poniendo dos condiciones.
  - Los operadores && y || se llaman operadores en cortocircuito porque si no se cumple la condición de un término no se evalúa el resto de la operación. 
  
  -Cortocircuito OR -> Cuando el valor de la izquierda en la expresión siempre pueda validar a true, es el valor que se cargará por defecto.

  -Cortocircuito AND -> Cuando el valor de la izquierda en la expresión siempre pueda validar a false, es el valor que se cargará por defecto.
*/

// * #2. Ejemplos
  function saludar(nombre) {
    nombre=nombre || "Desconocido"
    console.log(`Hola ${nombre}`)
  }
  // console.log()
  saludar("Lian")
  saludar()
  console.log("cadena" || "valor de la derecha") //Imprime cadena
  console.log(false || "valor de la derecha")//Imprime valor de la derecha
