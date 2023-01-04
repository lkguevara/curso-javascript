//* Definición
    /* Son estructuras de información capaces de contener variables (llamadas propiedades o atributos) asi como funciones (llamados métodos). Los objetos son colecciones de datos, que se componen de dos argumentos: clave y valor.

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
            El constructor de objetos , que utiliza la newPalabra clave
    */

//* Objetos Literales
    /* Es un objeto que tiene pares de valores. Es una nueva forma de escribir o asignar atributos y metodos. Se denomina objeto literal al objeto cuyas propiedades están declaradas textualmente en el código */

    // Ejemplos

    // ejm 1

        // Objeto literal                   
        let dog = {
            nombre:"Scott",
            color:"Cafe",
            edad: 5,
            macho: true
        };
     
        console.log(dog.nombre); 
        console.log(dog.edad); 

//* Objeto constructor
    /* Es un objeto que tiene pares de valores. Es una nueva forma de escribir o asignar atributos y metodos. Se denomina objeto literal al objeto cuyas propiedades están declaradas textualmente en el código */

    // ejm 1

        function Animal (nombre, color, edad, macho){
            this.nombre = nombre;
            this.color = color;
            this.edad = edad;
            this.macho = macho;
        }

        const perro = new Animal("Scott", "Cafe", 5, true);
        console.log(perro);

//* 2. Acceder - agregar y eliminar objetos

    //* Accediendo a un objeto
        let persona = {
            nombre: "Lian",
            apellido: "Guevara"
        }
        console.log(persona.apellido)

    //* Agregar un elemento 
        persona.edad = 28;
        console.log(persona)

    //* Eliminar un elemento 
        delete persona.edad;
        console.log(persona) 


//* #3. Métodos de los objetos
    
    //* Create(): se usa para crear un nuevo objeto y vincularlo al prototipo de un objeto existente.

        let person = {
            nombre: "Lian",
            apellido: "Guevara"
        }
    // haciendo uso del object.create

        let person2 = Object.create(person)
        person2.nombre = "Luis", person2.apellido = "Rodriguez";
        console.log(person2) 
        console.log(person) 

    //* Keys(): crea una matriz que contiene las claves de un objeto..

        let empleados = {
            nombre: "Michael",
            apellido: "Jim"
        }
        // haciendo uso del object.keys

        let empleado = Object.keys(empleados);
        console.log(empleado) 

    //* values(): crea una matriz que contiene los valores de un objeto.

        let empleados2 = {
            nombre: "Michael",
            apellido: "Jim"
        }

        let empleado2 = Object.values(empleados2);
        console.log(empleado2) 

    //* freeze: Congelar objetos para no modificarlos

        // Se deberá hacer uso de la palabra reservada "use strict";

        // "use strict";
        const product = {
            nombre: "monitor",
            precio: 300,
            disponible: true
        }

        Object.freeze( product ); //congela el objeto y no permite su modificación

        // Validar si el objeto tiene aplicado este método:

        console.log(Object.isFrozen(product));

    //* seal: Sellar objetos - no agrega nuevas propiedades pero puede modificar las existentes

        // Se deberá hacer uso de la palabra reservada "use strict";

        // "use strict";
        const product2 = {
            nombre: "monitor",
            precio: 300,
            disponible: true
        }

        Object.seal( product2 ); // modifica las llaves exitentes de un objeto

        // Validar si el objeto tiene aplicado este método:

        console.log(Object.isSealed(product));

    //* assign: Unir dos objetos (método assing)

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
    
    