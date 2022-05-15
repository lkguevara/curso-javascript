//* #1. Parámetro REST

    /*nos permiten representar un número indefinido de argumentos como un array. Son una forma de ir agregando virtualmente parametros infinitos en una función o variable. Se definen anteponiendo tres puntos ... antes del nombre de los posibles valores infinitos. */

    // ejemplo1
        // sin rest
        function nombres(a,b,c,d) {
            console.log(a,b,c,d);
        }
        nombres("alberto","orlando", "ricardo", "jorge") //imprime: alberto orlando ricardo jorge


        // con rest
        function nombres(...nombres) {
            console.log(nombres);
        }
        nombres("alberto","orlando", "ricardo", "jorge") //imprime: [ 'alberto', 'orlando', 'ricardo', 'jorge' ]

    // ejemplo2
        function sumar(a,b,...c) {
            let resultado = a+b;

            c.forEach(function(n){
                resultado +=n
            })

            return resultado;
        }

    console.log(sumar(1,2)) //imprime 3
    console.log(sumar(1,2,3)) //imprime 6

    // ejemplo3
        
        const carrito = [];

        const product1 = {
            nombre: 'Celular',
            precio: 500
        }
        const product2 = {
            nombre: 'Monitor',
            precio: 800
        }
        const product3 = {
            nombre: 'Teclado',
            precio: 800
        }

        resultado = [...carrito, product1, product2]
        console.log(resultado);

        resultado = [product3, ...resultado];
        console.log(resultado); //imprime el objeto de: teclado primero y ahi si celular y monitor



//* #2. Operador Spread (operador de propagación):
    /* 
        permite a un elemento iterable tal como un arreglo o cadena ser expandido. Se puede ejecutar en cualquier sentencia del código 
    */

    const arr1 = [1,2,3,4,5], arr2 = [6,7,8,9,0];

    // sin spread
    console.log(arr1,arr2); //[ 1, 2, 3, 4, 5 ] [ 6, 7, 8, 9, 0 ]
    
    // sin spread   
    const arr3 = [...arr1,...arr2]
    console.log(arr3) // Imprime [1, 2, 3, 4, 5, 6, 7, 8, 9, 0 ]


