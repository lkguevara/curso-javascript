// Ejemplo 1
    // Función constructora original
    function Animal (nombre,genero){
        this.nombre = nombre; 
        this.genero = genero;
    }
    Animal.prototype.sonar = function () {  
        console.log("Hago sonidos porqué estoy vivo")
    }
    Animal.prototype.saludar = function () {  
        console.log(`Hola, me llamo: ${this.nombre}` )
    }

    // Herencia prototipica
    function Perro(nombre, genero, tamanio){
        this.super = Animal; //Elemento padre será la funcion Animal
        this.super(nombre, genero); //Se agregan los parametros iniciales
        this.tamanio = tamanio; //Se debe agregar el método constructor nuevo
    }
    
    //Perro está heredando de Animal
    Perro.prototype = new Animal();
    Perro.prototype.constructor = Animal;

    //Sobreescritura del método del prototype padre en el hijo
    Perro.prototype.sonar = function () {  
        console.log("soy un perro y mi sonido es un ladrido")
    }

    Perro.prototype.ladrar = function () {
        console.log("Guauu Guauuu!!!");
    }

    const Snoopy = new Perro("snoopy", "macho", "mediano");
    console.log( Snoopy)
    Snoopy.sonar() 
    