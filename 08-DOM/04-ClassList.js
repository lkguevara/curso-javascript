//* 1. Acceder a clases y estilos 
    // mediante .classList y al número de clases del elemento con .classList.length, podemos acceder a las clases y la longitud de las mismas

    //  ejemplo
    const div = document.querySelector(".button");
    div.classList;              // ["info", "data", "dark"]
    div.classList.length;       // 3


//* 2. Añadir y eliminar clases css
    // mediante .classList.add() y .classList.remove() podemos añadir y eliminar clases css de un elemento html.

    const card = document.querySelector(".card");
    console.log(card.classList);

    // Agregar clases
    card.classList.add("nueva-clase"); 

    // Remover clases
    card.classList.remove("card"); 

//* 3. Comprobar si un elemento tiene una clase
    // Con el método .classList.contains() podemos comprobar si existe una clase en un elemento HTML

    const cards = document.querySelector(".button");
    div.classList;                      // ["info", "data", "dark"]
    div.classList.contains("info");     // Devuelve `true` (existe esa clase)
    div.classList.contains("warning");  // Devuelve `false` (no existe esa clase).

//* 4. Conmutar o alternar clases
    // Con el método .classList.toggle() podemos alternar o conmutar una clase en un elemento HTML

    const card2 = document.querySelector(".button");
    div.classList; // ["info", "data", "dark"]
    div.classList.toggle("info"); // Como "info" existe, lo elimina. Devuelve "false"

    div.classList; // ["data", "dark"]
    div.classList.toggle("info"); // Como "info" no existe, lo añade. Devuelve "true"
    div.classList; // ["info", "data", "dark"]




