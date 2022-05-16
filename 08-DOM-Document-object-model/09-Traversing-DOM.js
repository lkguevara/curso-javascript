// Recorre el DOM. 

const navegacion = document.querySelector(".navegacion"); //línea 14

console.log(navegacion); //  imprime el contenido de la clase cards
console.log(navegacion.children); //  imprime los nodos de la clase cards
console.log(navegacion.children[2]); //  imprime el nodo de la posición 2
console.log(navegacion.parentElement); // retorna el elemento padre
console.log(navegacion.firstElementChild); // primer elemento hijo
console.log(navegacion.lastElementChild); // último elemento hijo
console.log(navegacion.previousElementSibling); // hermano anterior
console.log(navegacion.nextElementSibling); // hermano posterior
console.log(navegacion.closest("div")); // el div más cercano
console.log(navegacion.closest("body")); // el body más cercano
console.log(navegacion.children[3].closest("section")); // el tercer hijo de cards, traiga la section ancestral más cercana