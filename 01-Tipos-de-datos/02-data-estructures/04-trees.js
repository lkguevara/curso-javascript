// * Definición
/** Los árboles son estructuras de datos en los que los nodos tienen jerarquía. Cada nodo puede tener uno o más árboles hijos y así recursivamente hasta llegar a los nodos hojas, que no tienen hijos.
 
El ejemplo típico es un árbol genealógico o árbol familiar en los que se ve claramente que los nodos padres pueden tener nodos hijos y éstos a su vez más nodos hijos.

Las listas enlazadas son árboles de un hijo
las listas doblemente enlazadas no entraría como un árbol
*/

// * Ejemplo

    function BinaryTree(value) {
        // propiedades del árbol
        this.value = value;
        this.left = null;
        this.right = null;
    }
