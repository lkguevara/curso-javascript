// * Eventos con parámetros

function saludar(nombre ="Desconocid@") {
    alert(`Hola ${nombre}`)
}

const eventoMultiple = document.getElementById("evento-multiple");
/*eventoMultiple.addEventListener("click",saludar) // No va a funcionar, nos arroja:Hola [object PointerEvent] */

eventoMultiple.addEventListener("click",() => {
    saludar(); //Hola Desconocid@
    saludar("Lian"); //Hola Lian
}) //Hola Desconocid@


// * Remover eventos

const eventoRemover = document.getElementById("evento-remover");

const removerDobleClick = (e) => {
    alert(`Removiendo el evento de tipo ${e.type}`); //Removiendo el evento de tipo dblclick
    console.log(e);

    // removiendo
    eventoRemover.removeEventListener("dblclick", removerDobleClick); //Remueve el evento
    eventoRemover.disabled = true //Desabilita el botón

}

eventoRemover.addEventListener("dblclick", removerDobleClick)