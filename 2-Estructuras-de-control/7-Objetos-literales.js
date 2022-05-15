// * #1. Definición

    /**
        * Es un objeto que tiene pares de valores. Es una nueva forma de escribir o asignar atributos y metodos.
        * Se denomina objeto literal al objeto cuyas propiedades están declaradas textualmente en el código.
    */

// * #2. Ejemplos

    // * Ejemplo 1

        // Objeto literal
        let perro = {
            nombre:"Scott",
            color:"Cafe",
            edad: 5,
            macho: true
        };
     
        console.info(perro.nombre); // Scott
        console.info(perro.edad);  // 5

        // Objeto

        let perro = {
            nombre,
            color,
            edad,
            macho
        };
    // * Ejemplo 2  

        const gato = {
            nombre: "mimi", 
            edad:25,
            ladrar:function(){
                console.log("guau guau")
            }
        }
        console.log(gato) //imprime: { nombre: 'Lian', edad: 28 }
        gato.ladrar() // guau guau

// * #3. Inserción de nuevos campos a un objeto

        /*Para agregar nuevos campos al objeto solo basta con mencionar el nombre del objeto seguido de la propiedad nueva y el valor nuevo a insertar */

        let perro = {
            nombre:"Scott",
            color:"Cafe",
            edad: 5,
            macho: true
        };
     
        perro.tamaño = "Grande";
        console.log(perro); // Imprime {nombre: 'Scott', color: 'Cafe',edad: 5,macho: true, 'tamaño': 'Grande'}

// * #4. Actualizar campos del objeto

        let perro = {
            nombre:"Scott",
            color:"Cafe",
            edad: 5,
            macho: true
        };
     
        perro.edad = 8;
        console.log(perro); // Imprime {nombre: 'Scott', color: 'Cafe',edad: 8,macho: true, 'tamaño': 'Grande'}
            
// * #5. Eliminación de campos

        let perro = {
            nombre:"Scott",
            color:"Cafe",
            edad: 5,
            macho: true
        };
     
        delete perro.color;
        console.log(perro); // Imprime {nombre: 'Scott', edad: 8,macho: true, 'tamaño': 'Grande'}
            
            
            
           
          
        