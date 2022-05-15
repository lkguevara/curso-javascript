//* #1. Terminología

    /*
        CARACTER            DEFINICIÓN
        - Prototipos        Es un mecanismo por el cual un objeto puede heredar atributos (caracteristicas) y métodos (funciones).
        - Clase             Define las caracteristicas del objeto.
        - Objeto            Es una instacia de una clase, es decir, una copia del modelo de la clase.
                            * Atributos = Caracteristica o propiedad del objeto (son variables dentro del objeto)
                            * Métodos =  Son las acciones que un objeto puede realizar. (Son funciones dentro de un objeto).
        - Constructor       Es un método llamado en el momento de la creación de instancias.
        - Herencia          Una clase puede heredar caracteristicas de otra clase.
        - Encapsulamiento   Una clase solo define las caracteristicas del objeto, un método solo define como se ejecutará.
        - Abstracción       Conjuncción de la herencia comleja, métodos y propiedades que un objeto debe ser capaz de simular en un modelo de la realidad.
        - Polimorfismo      Diferentes clases podrían definiri el mismo método o propiedad.
    */


//* #2. Función constructora 

    /*  Se construye por única vez para luego reutilizarla y crear nuevas instacias, nuevos objetos. Las clases siempre van con inicial mayuscula */

        // Ejemplo 1.
        function Animal (nombre,genero){
            this.nombre = nombre; // Atributos de la función constructora
            this.genero = genero;
            this.sonar = function () {  // Método de la función contructora
                console.log("Hago sonidos porqué estoy vivo")
            }
            this.saludar = function () {   // Método de la función contructora
                console.log(`Hola, me llamo: ${this.nombre}` )
            }
        }

        const snoopy = new  Animal("Snoopy", "Hombre") ,  //new nos permite crear un nuevo objeto del tipo que le especifiquemos, en este caso crear una nueva variable de la funcion constructora
        lolaBunny = new  Animal("Lola Bunny", "Mujer");  

        console.log(snoopy); //Animal {nombre: 'Snoopy', genero: 'Hombre', sonar: ƒ, saludar: ƒ}
        console.log(lolaBunny); //Animal {nombre: 'Lola Bunny', genero: 'Mujer', sonar: ƒ, saludar: ƒ}

        snoopy.saludar() //Hola, me llamo: Snoopy
        snoopy.sonar() //Hago sonidos porqué estoy vivo

        lolaBunny.saludar() //Hola, me llamo: Lola Bunny
        lolaBunny.sonar() //Hago sonidos porqué estoy vivo

        
        // Ejemplo 2. Función constructora dónde asignamos los métodos al prototype y no a la función
        function Animal (nombre,genero){
            this.nombre = nombre; // Atributos de la función constructora
            this.genero = genero;
        }


        Animal.prototype.sonar = function () {  // Métodos agregados al prototipo de la función constructora
            console.log("Hago sonidos porqué estoy vivo")
        }

        Animal.prototype.saludar = function () {  
            console.log(`Hola, me llamo: ${this.nombre}` )
        }

        const snoopy2 = new  Animal("Snoopy", "Hombre") ,  //new nos permite crear un nuevo objeto del tipo que le especifiquemos, en este caso crear una nueva variable de la funcion constructora
        lolaBunny2 = new  Animal("Lola Bunny", "Mujer");  

        console.log(snoopy2); //Animal {nombre: 'Snoopy', genero: 'Hombre', sonar: ƒ, saludar: ƒ}
        console.log(lolaBunny2); //Animal {nombre: 'Lola Bunny', genero: 'Mujer', sonar: ƒ, saludar: ƒ}

        snoopy.saludar() //Hola, me llamo: Snoopy
        snoopy.sonar() //Hago sonidos porqué estoy vivo

        lolaBunny.saludar() //Hola, me llamo: Lola Bunny
        lolaBunny.sonar() //Hago sonidos porqué estoy vivo

