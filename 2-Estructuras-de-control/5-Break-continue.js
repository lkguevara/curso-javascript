let numeros = [1,2,3,4,5,6,7,8,9,0]

// Recorriendo el arreglo
for (let i = 0; i < numeros.length; i++) {

    // Aplicando break

    if (i===5) {
        break //Con esto va a parar o romper cuando la condición se cumpla
    }
    console.log(numeros[i]);
    
}

let numeros2 = [1,2,3,4,5,6,7,8,9,0]

for (let i = 0; i < numeros.length; i++) {

    // Aplicando continue

    if (i===5) {
        continue //Cuando llega a la posición 5 omite este valor y continua el recorrido
    }
    console.log(numeros2[i]);
    
}

// Imprimiendo los números pares
let numeros3 = [1,2,3,4,5,6,7,8,9,0]

for (let i = 0; i < numeros.length; i++) {

    if (i%2==0) {
        continue 
    }
    console.log(numeros3[i]);
    
}