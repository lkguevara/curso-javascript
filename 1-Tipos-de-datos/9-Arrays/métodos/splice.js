//* splice() ---> cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos. Toma dos valores: la posición donde incial y cuantos elementos se eliminarán

let frutas = ["Manzana", "Banana", "Uva", "Granadilla"]
frutas.splice(1,1); // Elimina banana
console.log(frutas) // [ 'Manzana', 'Uva', 'Granadilla' ]


let frutas2 = ["Manzana", "Banana", "Uva", "Granadilla"]
frutas2.splice(1,2); // Elimina banana y uva
console.log(frutas2) // [ 'Manzana', 'Granadilla' ]

