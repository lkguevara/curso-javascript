// Enfocados a los elementos, etiquedas html

const $cards = document.querySelector(".cards");

console.log($cards); //  me imprime el contenido de la clase cards
console.log($cards.children); //  me imprime el contenido de los hijos de la clase cards
console.log($cards.children[2]); //  me imprime el contenido de los hijos de la clase cards
console.log($cards.parentElement); // retorna el elemento padre: body
console.log($cards.firstElementChild); // primer elemento hijo
console.log($cards.lastElementChild); // último elemento hijo
console.log($cards.previousElementSibling); // hermano anterior
console.log($cards.nextElementSibling); // hermano posterior
console.log($cards.closest("div")); // el div más cercano
console.log($cards.closest("body")); // el body más cercano
console.log($cards.children[3].closest("section")); // el tercer hijo de cards, traiga la section ancestral más cercana