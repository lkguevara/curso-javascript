// constantes
const add = document.querySelector('.button');
const container = document.querySelector('.container');
const reset = document.querySelector('#reset');

// funcion para agregar una card
function clickHandler () {
    // crear un div
    const card = document.createElement('div');
    // agregar una clase
    card.classList.add('card');
    // agregar un texto
    card.textContent = 'Agregando un elemento DIV';
    // agregar el div al container
    container.appendChild(card);

    console.log(card.classList.length) // accede a las clases y la longitud de las mismas
}

// evento click para agregar una card
add.addEventListener('click', clickHandler);
// evento click para resetear el container
reset.addEventListener('click', () => {
    container.textContent = '';
});

