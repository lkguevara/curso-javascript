    class Animal {
        constructor(nombre,genero){
        this.nombre = nombre; 
        this.genero = genero;
    }
        sonar (){  
            console.log("Hago sonidos porqué estoy vivo")
        }
        saludar () {  
            console.log(`Hola, me llamo: ${this.nombre}` )
        }
    }

    class Perro extends Animal {
        constructor(nombre, genero, tamanio){
            // Con el método super() se manda a llamar el constructor de la clase padre
            super(nombre, genero);
            this.tamanio = tamanio;
            this.raza = null; //Al inicio va a ser un valor nulo
        }

        sonar(){
            console.log("Soy un perro y mi sonido es un ladrido")
        }

        ladrar(){
            console.log("guauu guauuu")
        }

        //# Volviendo a método estático, se puede ejecutar sin necesidad de haber creado un objeto.
        static queEres(){
            console.log("Los perros son animales mamiferos ")
        }

        //# Método getters y setters: Son métodos especiales que nos permiten establecer y obtener los valores de atributos de nuestra clase.

        get getRaza(){ //Permite obtener el valor, y nos va a retornar el valor de la propiedad
            return this.raza
        }

        set setRaza(raza){ 
            this.raza = raza
        }
    }

    Perro.queEres(); //Imprime: Los perros son animales mamiferos 

    const scooby = new Perro ("scooby","macho","gigante")
    console.log(scooby)  
    scooby.sonar();  //Imprime: Soy un perro y mi sonido es un ladrido
    scooby.saludar(); //Imprime: Hola, me llamo: scooby
    scooby.ladrar(); //guauu guauuu
    console.log(scooby.getRaza) //imprime null
    scooby.setRaza = "Gran Danés" 
    console.log(scooby.getRaza); //Imprime: Gran Danés