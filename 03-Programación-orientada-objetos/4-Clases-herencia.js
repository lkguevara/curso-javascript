//* #1. Función constructora

        // ejemplo1
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

        
        // ejemplo 2
        function Persona(nombre, edad) {
            console.log('Se ejecutó esta línea');
        
            this.nombre = nombre;
            this.edad   = edad;   
        
            this.imprimir = function() {
                console.log(`Nombre: ${ this.nombre } - edad: ${ this.edad }`);    
            }
        
        }
        
        const maria   = new Persona('María', 18);
        const melissa = new Persona('Melissa', 35);
        // console.log( maria );
        maria.imprimir();
        melissa.imprimir();

//* #2. Clases
        // ejemplo 1
        class Animal {
            //El constructor es un método especial que se ejecuta en el momento de instanciar la clase
            constructor(nombre,genero){
            this.nombre = nombre; 
            this.genero = genero;
        }

        //Definiendo métodos en una clase
            sonar (){  
                console.log("Hago sonidos porqué estoy vivo")
            }
            saludar () {  
                console.log(`Hola, me llamo: ${this.nombre}` )
            }
        }

        // const mimic = new Animal ("Mimi","Hembra"),
        //  scooby = new Animal ("Scooby","Macho")

        // console.log(mimic); //Imprime: Animal { nombre: 'Mimi', genero: 'Hembra' }
        // mimic.saludar();
        // mimic.sonar();

        // console.log(scooby); //Imprime: Animal { nombre: 'Scooby', genero: 'Macho' }
        // scooby.sonar();
        // scooby.saludar();

        

// Aplicando herencia

        class Perro extends Animal {
            constructor(nombre, genero, tamanio){
                // Con el método super() se manda a llamar el constructor de la clase padre
                super(nombre, genero);
                this.tamanio = tamanio;
            }

            sonar(){
                console.log("Soy un perro y mi sonido es un ladrido")
            }

            ladrar(){
                console.log("guauu guauuu")
            }
        }

        const mimic = new Animal ("Mimi","Hembra"),
        scooby = new Perro ("Scooby","Macho")

        console.log(mimic); //Imprime: Animal { nombre: 'Mimi', genero: 'Hembra' }
        mimic.saludar(); //Hola, me llamo: Mimi
        mimic.sonar(); //Hago sonidos porqué estoy vivo

        console.log(scooby); //Imprime: Perro { nombre: 'Scooby', genero: 'Macho', tamanio: undefined }
        scooby.sonar();  //Soy un perro y mi sonido es un ladrido
        scooby.saludar(); //Hola, me llamo: Scooby
