/**
 Las funciones o código JavaScript que se definen para cada evento se denominan "manejador de eventos" y como JavaScript es un lenguaje muy flexible, existen varias formas diferentes de indicar los manejadores:

 Hay 3 maneras de definir los Eventos en JS : 
    Manejadores como atributos de los elementos XHTML.
    Manejadores como funciones JavaScript externas.
    Manejadores "semánticos". 

*/

// * 1. Manejadores de eventos como atributos HTML

    /* 
    - Se trata del método más sencillo y a la vez menos profesional de indicar el código JavaScript que se debe ejecutar cuando se produzca un evento. 
    
    - Esta función se va a convertir en el Manejador de Eventos (Event Handler).

    - Cuando una función se convierte en un Event Handler, es decir una función que se ejecuta en un Evento, nosostros podemos acceder a un Objeto especial q es el Evento en sí, y eso lo podemos acceder con la palabra reservada 'event'
    */

    //Ref linea 135: <button onclick="holaMundo()">Evento con atributo HTML</button>
    function holaMundo() {
        alert("manejador de eventos: atributos html");
        console.log(event);
    } 

// * 2. Manejadores de eventos semánticos

    /*
        Se le dice manejador semántico xq va teniendo una coherencia en la manera como la vamos definiendo.

        cuando definamos un evento como semántico igualamos el evento semántico al nombre de la funcion pero sin (), xq los () hacen q cuando se cargue el Navegador se va a ejecutar

    */

    function EventSemantic() {
        alert("manejador de eventos: evento semántico");
        console.log(event);
    } 

    const eventoSemantico = document.getElementById("evento-semantico");
    eventoSemantico.onclick = EventSemantic;
    eventoSemantico.onclick = function () {
        alert("hola de nuevo")
    };

// * 3. Evento con manejador múltiple
        /** 
         * Se le pueden asignar varios valores, a excepción de los anteriores casos
         * Si deseamos asignar varias funciones a un mismo elemento, tenemos el método .addEventListener() que nos perimite levantar un Escuchador de Eventos
        */

    function manejadorMultiple() {
        alert("manejador de eventos: evento manejador múltiple");
        console.log(event);
    } 

    const eventoMultiple = document.getElementById("evento-multiple");
    eventoMultiple.addEventListener("click", manejadorMultiple)
    eventoMultiple.addEventListener("click", (e) => {
        alert("Hola Mundo Manejador de Eventos Múltiple");
        console.log(e);
        console.log(e.type); //es el tipo de evento q se desencadeno
        console.log(e.target); //es el elemento que origino el evento
        console.log(event);
    })






