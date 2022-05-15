//* 1 CREAR UNA TARJETA POR NODOS

const $figure = document.createElement("figure"), //crea un elemento figure
    $img = document.createElement("img"), // crear un elemento image 
    $figcaption = document.createElement("figcaption"), // crea un elemento figcaption
    $figcaptionText = document.createTextNode("Animals"), //Texto en la figcaption

    $cards = document.querySelector(".cards"); // selecciona a la clase cards
    $figure2 = document.querySelector("figure")
// insertar los elementos anteriores

$figcaption.appendChild($figcaptionText); //agrega el texto a la img
$cards.appendChild($figure) // Inserta un elemento figure
$figure.appendChild($img) // al elemento figure se le inserta el elemento img
$figure.appendChild($figcaption) // al elemento figure se le inserta el elemento figcaption

/* Lo anterior queda insertado así: 
    <figure class="card">
      <img>
      <figcaption></figcaption>
    </figure>
*/

// Agregando información al elemento img
$img.setAttribute("src", "https://placeimg.com/200/200/animals"); // <img src="https://placeimg.com/200/200/animals">
$img.setAttribute("alt", "Animals"); //<img src="https://placeimg.com/200/200/animals" alt="Animals">

//Agregando Clases
$figure.classList.add("card"); 


//*2 OTRA MANERA DE AGREGARLO DINÁMICAMENTE
$figure2.innerHTML = `
    <img src="https://placeimg.com/200/200/people" alt="People">
    <figcaption>People</figcaption>
`;
$figure2.classList.add("card");
$cards.appendChild($figure2);

// *3 AGREGANDO VARIOS ELEMENTOS

const estaciones = ["Primavera", "Verano", "Otoño", "Invierno"],
  $ul = document.createElement("ul");

document.write("<h3>Estaciones del Año</h3>");
document.body.appendChild($ul);

estaciones.forEach((el) => {
    const $li = document.createElement("li");
    $li.textContent = el;
    $ul.appendChild($li);
});

// otro ejemplo
const continentes = ["África", "América", "Asia", "Europa", "Oceanía"],
  $ul2 = document.createElement("ul");

document.write("<h3>Continentes del Mundo</h3>");
document.body.appendChild($ul2);
$ul2.innerHTML = "";
continentes.forEach((el) => ($ul2.innerHTML += `<li>${el}</li>`));

//* ejemplo 3 ***LA MEJOR MANERA
const meses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ],
  $ul3 = document.createElement("ul"),
  $fragment = document.createDocumentFragment();

meses.forEach((el) => {
  const $li = document.createElement("li");
  $li.textContent = el;
  $fragment.appendChild($li);
});

document.write("<h3>Meses del Año</h3>");
$ul3.appendChild($fragment);
document.body.appendChild($ul3);