//* Definición:
/*Llamada lista enlazada o linked list, es una estructura de datos lineal que se compone de elementos que están autorreferenciados entre sí, es decir, cada elemento de la lista tendrá una referencia o puntero al siguiente elemento. 
    
Las listas enlazadas están compuestas por los siguientes elementos:

    - LinkedList: Estructura gestora de elementos
    - Node: Elemento de almacenamiento y conexión que contiene al menos un dato de interés de cualquier tipo y un puntero al siguiente nodo
    - HEAD: Nodo inicial de la lista */

//* Operaciones a realizar
/*
    - Iterar sobre la lista: Recorrer la lista viendo sus elementos o hasta que econtremos el elemento deseado.
    - Insertar un nodo: La operación va a cambiar según el lugar donde querramos insertar el nodo nuevo:
        - Al principio de la lista.
        - En el medio de la lista.
        Al final de la lista.
    -Sacar un nodo:
        - Del principio de la lista. 
        - Del medio de la lista
*/

// * Tipos de listas
/*  
    - Lista enlazada simple
    - Lista doblemente enlazada
    - Lista enlazada circular
*/

//* EJEMPLO:
    // Forma manual pero no es la forma correcta de hacerlo
    function LinkedList() {
        this.head = null; // el primer nodo 
    }

    function Node(value, next) {
        this.value = value;
        this.next = null;
    }
    // nodo 1
    const miNodo = new Node(5);
    console.log(miNodo);

    // nodo 2
    const miOtroNodo = new Node(7);
    console.log(miOtroNodo);

    // nodo 1 apunta al nodo 2
    miNodo.next = miOtroNodo; 
    console.log(miNodo);

    // Enlazar los nodos en la lista
    const miLista = new LinkedList();
    console.log(miLista);
    miLista.head = miNodo;
    console.log(miLista);


    // Head va a apuntar al primer nodo
    // Pregunta si tiene a alguien adelante
    // Avanza al siguiente nodo y vuelve a preguntar
    // Si no tiene a nadie adelante, entonces es el último nodo y apunta a null
    // [HEAD] -> [5] -> [7] -> [null]

//* Métodos:

    //* add: (Agrega un elemento al final de la lista)
    /** El método add realizará lo siguiente:
        - Instaciar un nodo
        - Si la lista está vacía, el nodo se inserta al Head.
        - Si la lista no está vacía, el nodo se inserta al final de la lista.
     */
    LinkedList.prototype.add = function (value) {
        // instanciar un nodo
        const newNode = new Node(value);
        
        // Si la lista está vacía, el nodo se inserta al Head.
        if (this.head === null) {
            this.head = newNode;
        // caso contrario, se agrega al final
        } else {
            // recorrer la lista
            let currentNode = this.head;
            // mientras haya un nodo adelante
            while (currentNode.next) {
                // avanzar al siguiente nodo
                currentNode = currentNode.next;
            }
            // cuando no haya un nodo adelante, insertar el nuevo nodo
            currentNode.next = newNode;
        }
    }

    // ejemplo
    const listaDemo = new LinkedList();
    console.log(listaDemo);
    listaDemo.add(7);
    console.log(listaDemo);
    listaDemo.add(9);
    console.log(listaDemo);
    listaDemo.add(11);
    console.log(listaDemo);
