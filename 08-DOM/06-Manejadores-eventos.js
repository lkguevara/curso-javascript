//* #1. Definición
    // Un evento en javascript es una acción que se produce en el navegador, como por ejemplo: hacer click en un botón, mover el mouse, presionar una tecla, etc. 


//* #2. Formas de manejar eventos en javascript

    // * 1. Mediante atributos HTML    
        // Se trata del método más sencillo y a la vez menos profesional de indicar el código JavaScript que se debe ejecutar cuando se produzca un evento. Esta función se va a convertir en el Manejador de Eventos (Event Handler). Cuando una función se convierte en un Event Handler, es decir una función que se ejecuta en un Evento, nosostros podemos acceder a un Objeto especial q es el Evento en sí, y eso lo podemos acceder con la palabra reservada 'event'
        // <button onClick="..."></button>
        


    // * 2. Mediante propiedades de javascript
    // .onclick = function() { ... }


// * 3. Medianre addEventListener()
    // Es la forma más profesional de manejar eventos en javascript. 

    // .addEventListener("click", ...) // El primer parámetro es el tipo de evento, el segundo es la función que se va a ejecutar cuando se produzca el evento. 

    // Con .addEventListener() se pueden añadir fácilmente varias funcionalidades.
    // Con .removeEventListener() se puede eliminar una funcionalidad previamente añadida.
    // Con .addEventListener() se pueden indicar ciertos comportamientos especiales.

    const button = document.querySelector("button");
    button.addEventListener("click", function() {
    alert("Hello!");
    });

    const eventoRemover = document.getElementById("evento-remover");

    const removerDobleClick = (e) => {
    alert(`Removiendo el evento de tipo ${e.type}`);

    // removiendo
    eventoRemover.removeEventListener("dblclick", removerDobleClick); 
    eventoRemover.disabled = true //Desabilita el botón

    }

    eventoRemover.addEventListener("dblclick", removerDobleClick)






