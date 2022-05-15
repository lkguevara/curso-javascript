const $card = document.querySelector(".card");

// accediendo
console.log($card); // imprime el elemento con dicha clase
console.log($card.className); // imprime devuelve la cadena de texto 
console.log($card.classList);// imprime un tokenlist
console.log($card.classList.contains("rotate-45")); //Evalua si un elemento que tenga una clase particular, en este caso imprime false


$card.classList.add("rotate-45"); // agrega una clase llamada rotate-45
console.log($card.classList.contains("rotate-45")); //imrpime true
console.log($card.className);
console.log($card.classList);

$card.classList.remove("rotate-45"); //elimina la clase el element
console.log($card.classList.contains("rotate-45"));

$card.classList.toggle("rotate-45"); //si tiene la clase la quita, de lo contrrio la agrega 
console.log($card.classList.contains("rotate-45"));

$card.classList.toggle("rotate-45");
console.log($card.classList.contains("rotate-45"));
$card.classList.toggle("rotate-45");

$card.classList.replace("rotate-45", "rotate-135"); //reemplaza la clase

$card.classList.add("opacity-80", "sepia");
$card.classList.remove("opacity-80", "sepia");
$card.classList.toggle("opacity-80", "sepia");