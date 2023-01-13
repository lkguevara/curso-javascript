//* Definición:
/*Llamada cola o queues, es una estructura de datos que funciona bajo una modalidad llamada FIFO (First In, First Out). Esto quiere decir, que siempre el primer elemento agregado va a ser el primero que saquemos. Aplica únicamente para objetos. */

//* Métodos:

//* enqueue: (Agrega un elemento al final de la cola)
    function Queue() {
        this.arr = []; // se agrega los datos al stack y él los ubica en el array
    }

    Queue.prototype.enqueue = function (valor) {
        this.arr.push(valor); 
    }

    const myQueue = new Queue();
    console.log(myQueue);
    myQueue.enqueue(1);
    console.log(myQueue);
    myQueue.enqueue(2);
    console.log(myQueue);
    myQueue.enqueue(3);
    console.log(myQueue);

//* dequeue: (Elimina el primer elemento de la cola)

    Queue.prototype.dequeue = function () {
        return this.arr.shift(); 
    }
    console.log(myQueue.dequeue());
    console.log(myQueue);

//* peek: (Muestra el primer elemento de la cola)
    Queue.prototype.peek = function () {
        return this.arr[0]; 
    }
    console.log(myQueue.peek());

//* size: (Muestra el tamaño de la cola)
    Queue.prototype.size = function () {
        return this.arr.length;
    }
    console.log(myQueue.size());

//* print (Muestra el contenido de la cola)
    Queue.prototype.print = function () {
        return this.arr
    }

    console.log(myQueue.print())




