const $cards = document.querySelector(".cards"),
  $newCard = document.createElement("figure"),
  $cloneCards = $cards.cloneNode(true); //Clona diversas tarjetas

$newCard.innerHTML = `
  <img src="https://placeimg.com/200/200/any" alt="Any">
  <figcaption>Any</figcaption>
`;
$newCard.classList.add("card");

//$cards.replaceChild($newCard, $cards.children[2]); //Reemplaza un nodo
//$cards.removeChild($cards.lastElementChild); // Elimina un nodo
$cards.insertBefore($newCard, $cards.firstElementChild); //Va a tomar como referencia el nodo hijo y lo inserta antes de este
document.body.appendChild($cloneCards); // inserta la tarjeta clonada