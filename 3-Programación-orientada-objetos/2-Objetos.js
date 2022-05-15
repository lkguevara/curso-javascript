//* #1. Definición
    /*
        Son estructuras de información capaces de contener variables (llamadas propiedades o atributos) asi como funciones (llamados métodos. Los objetos son colecciones de datos, que se componen de dos argumentos: clave y valor.

            const objeto = {
                atributos
            }
    
            Atributos --> son caracteristicas o propiedades del objeto
            Metodos --> Son acciones que puede realizar el objeto 

            Ejemplos...
            Atributos: Genero, Peso, Talla, Color de cabello, Color de piel, Edad, Contextura
            Metodos --> hablar, caminar, cantar, comer, programar, bailar,ver los videos del profesor.

            Hay dos formas de construir un objeto en JavaScript:

            El objeto literal , que usa corchetes:{}
            El constructor de objetos , que utiliza la newpalabra clave
    */

   // Ejemplo 1
    let carro = {
        marca:"mazda",
        modelo:"323",
        motor:1300, 
        color: "blanco"
    }

    console.log(`Tengo un carro de marca: ${carro.marca}, modelo: ${carro.modelo}, motor: ${carro.motor} y color: ${carro.color}`);

    // Ejemplo 2
    const animal ={
        nombre: 'Snoopy', //atributo
        sonar(){ //método
            console.log("Hago sonidos porqué estoy vivo")
        }
    }
    console.log(animal)  // Imprime: { nombre: 'Snoopy', sonar: [Function: sonar] }
    console.log(animal.nombre)  // Imprime: Snoopy

    // Ejemplo 3
        const animal2 ={
            nombre: 'Lola Bunny', //atributo
            sonar(){ //método
                console.log("Hago sonidos porqué estoy vivo")
            }
        }
        console.log(animal2) //Imprime: { nombre: 'Lola Bunny', sonar: [Function: sonar] }

    // Ejemplo 4
        const miObjetos = {
            nombre: "Lian", //atributos
            edad: 30 //atributos
        }
        console.log(`Hola, mi nombre es: ${miObjetos.nombre} y tengo ${miObjetos.edad} años`) //Imprime: Hola, mi nombre es: Lian y tengo 30 años

    // Ejemplo 5
        const miObjeto ={
            nombre: "Lian", 
            edad: 30,
            mostrarDatos: function () { 
                let mensaje = `Nombre: ${miObjeto.nombre}; Edad: ${miObjeto.edad}` 
                console.log (mensaje)
            },
            cambiarNombre: function (nuevoNombre) {
                miObjeto.nombre = nuevoNombre;
            }
        };

        // console.log(miObjeto)
        miObjeto.mostrarDatos() //Nombre: Lian; Edad: 30
        miObjeto.cambiarNombre("maria") // No imprime nada
        miObjeto.mostrarDatos() //Nombre: maria; Edad: 30

    // Ejemplo 6

    const person = {
        nombre: "Martin",
        apellido: "Rodriguez",
        anioNacimiento: 1993,
        trabajo: "Developer",
        amigos: ['Lorena', 'Fernando', 'Laura'],
        LicenciaDeConducir: true,

        // método
        calcularEdad: function(){
            return 2021 - this.anioNacimiento
        }
    }

    console.log(person.calcularEdad()) //imprime: 28

//* 2. Acceder - agregar y eliminar objetos

        // Accediendo a un objeto
        let persona = {
            nombre: "Lian",
            apellido: "Guevara"
        }

        console.log(persona.apellido) // imprime guevara

    // Agregar un elemento 
        persona.edad = 28;
        console.log(persona) //imprime {nombre: 'Lian', apellido: 'Guevara', edad: 28}

    // Eliminar un elemento 
        delete persona.edad;
        console.log(persona) //imprime {nombre: 'Lian', apellido: 'Guevara'}


//* #3. Métodos de los objetos

    

// 1. Create(): se usa para crear un nuevo objeto y vincularlo al prototipo de un objeto existente.

    let personas = {
        nombre: "Lian",
        apellido: "Guevara"
    }

    // haciendo uso del object.create

    let persona3 = Object.create(personas);
    persona3.nombre = "Luis", persona3.apellido = "Rodriguez";
    console.log(persona3) //imprime: { nombre: 'Luis', apellido: 'Rodriguez' }

// 2. Keys(): crea una matriz que contiene las claves de un objeto..

    let empleados = {
        nombre: "Michael",
        apellido: "Jim"
    }

    // haciendo uso del object.create

    let empleado = Object.keys(empleados);
    console.log(empleado) //imprime: [ 'nombre', 'apellido' ]

// 3. values(): crea una matriz que contiene los valores de un objeto.

    let empleados2 = {
        nombre: "Michael",
        apellido: "Jim"
    }

    // haciendo uso del object.create

    let empleado2 = Object.values(empleados2);
    console.log(empleado2) //imprime: [ 'Michael', 'Jim' ]

// 4. freeze: Congelar objetos para no modificarlos

        // Se deberá hacer uso de la palabra reservada "use strict";

        // "use strict";
        const product = {
            nombre: "monitor",
            precio: 300,
            disponible: true
        }

        Object.freeze( product ); //congela el objeto y no permite su modificación

        // Validar si el objeto tiene aplicado este método:

        console.log(Object.isFrozen(product)); //true

// 5. seal: Sellar objetos - no agrega nuevas propiedades pero puede modificar las existentes

        // Se deberá hacer uso de la palabra reservada "use strict";

        // "use strict";
        const product2 = {
            nombre: "monitor",
            precio: 300,
            disponible: true
        }

        Object.seal( product2 ); // modifica las llaves exitentes de un objeto

        // Validar si el objeto tiene aplicado este método:

        console.log(Object.isSealed(product)); //true

// 6. assign: Unir dos objetos (método assing)

        // Se deberá hacer uso de la palabra reservada "use strict";

        const product3 = {
            nombre: "monitor",
            precio: 300,
            disponible: true
        }
        const medidas = {
            peso: "1kg",
            medida: '1m',
        }

        const resultado = Object.assign(product3, medidas)
        console.log(resultado) //{nombre: 'monitor', precio: 300, disponible: true, peso: '1kg', medida: '1m'}

        // método spread

        const resultado2 = {...product3, ...medidas}
        console.log(resultado2) // imprime: {nombre: 'monitor', precio: 300, disponible: true, peso: '1kg', medida: '1m'}

// https://www.digitalocean.com/community/tutorials/understanding-objects-in-javascript   
    
    