//* 1. Terminología

    /*
        CARACTER            DEFINICIÓN
        - Prototipos        Es un mecanismo por el cual un objeto puede heredar atributos (caracteristicas) y métodos (funciones).
        - Clase             Define las caracteristicas del objeto.
        - Objeto            Es una instacia de una clase, es decir, una copia del modelo de la clase. Existen objetos literales y y objetos creados por una función constructora.
                            * Atributos = Caracteristica o propiedad del objeto (son variables dentro del objeto)
                            * Métodos =  Son las acciones que un objeto puede realizar. (Son funciones dentro de un objeto).
        - Constructor       Es un método llamado en el momento de la creación de instancias.
        - Herencia          Una clase puede heredar caracteristicas de otra clase.
        - Encapsulamiento   Una clase solo define las caracteristicas del objeto, un método solo define como se ejecutará.
        - Abstracción       Conjuncción de la herencia comleja, métodos y propiedades que un objeto debe ser capaz de simular en un modelo de la realidad.
        - Polimorfismo      Diferentes clases podrían definiri el mismo método o propiedad.
    */


//* EJEMPLOS 

    //* Ejemplo 1.
    //  fn constructora: Se construye por única vez para luego reutilizarla y crear nuevas instacias, nuevos objetos. Las clases siempre van con inicial mayuscula 

        function Cliente (nombre,saldo){
            this.nombre = nombre; // Atributos de la función constructora
            this.saldo = saldo;
            
            this.saludar = function () {   // Método de la función contructora
                console.log(`Hola, me llamo: ${this.nombre}` )
            }
        }

        const juan = new  Cliente("Juan", 500)
        const lolaBunny = new  Cliente("Lola Bunny", 600);  

        console.log(juan);
        console.log(lolaBunny);

        juan.saludar()
        lolaBunny.saludar() 
        
    //* Ejemplo 2. 
    // Función constructora dónde asignamos los métodos al prototype y no a la función
        function Animal (nombre,genero){
            this.nombre = nombre;
            this.genero = genero;
        }

        Animal.prototype.saludar = function () {  
            console.log(`Hola, me llamo: ${this.nombre}` )
        }

        const snoopy2 = new  Animal("Snoopy", "Hombre") , 
        lolaBunny2 = new  Animal("Lola Bunny", "Mujer");  

        console.log(snoopy2); 
        console.log(lolaBunny2);

        snoopy2.saludar()

        lolaBunny2.saludar()

