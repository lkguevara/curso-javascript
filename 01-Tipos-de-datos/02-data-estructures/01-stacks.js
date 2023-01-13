//* Definición:
    /*Llamada pila o stack, es una estructura de datos que funciona bajo una modalidad llamada LIFO (Last In First Out). Esto quiere decir, que siempre el último elemento agregado va a ser el primero que saquemos. Aplica únicamente para objetos.
    
    Una analogía similar, y bastante usada para describir pilas, es pensar en una torre de platos, siempre el plato que ponemos más arriba (el último), es el primero que sacamos.*/

//* Métodos:

    //* push: (Agrega un elemento al final de la pila)

    function Stack() {
        this.arr = [] // se agrega los datos al stack y él los ubica en el array
    }
    Stack.prototype.push = function (valor) { //prototype sirve para agregar métodos
        this.arr.push(valor)
    };
    
    const myStack = new Stack();
    console.log(myStack);
    myStack.push(10);
    console.log(myStack);
    myStack.push(20);
    console.log(myStack);
    myStack.push(30);
    console.log(myStack);

    //* pop: (Elimina el último elemento de la pila)
    Stack.prototype.pop = function () {
        this.arr.pop()
    };

    console.log(myStack);
    myStack.pop();
    console.log(myStack);

    //* peek: (Muestra el último elemento de la pila)
    Stack.prototype.peek = function () {
        return this.arr[this.arr.length - 1]
    }
    console.log(myStack.peek()) ; 
        

    //* size: (Muestra la cantidad de elementos de la pila)
    Stack.prototype.size = function () {
       return this.arr.length
    }
    console.log(myStack.size()) ; 

    //* print (Muestra todos los elementos de la pila)
    Stack.prototype.print = function () {
        return this.arr
    }
    console.log(myStack.print()) ;









