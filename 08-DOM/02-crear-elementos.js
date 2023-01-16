//* 1. createElement(tag, options)
/*Crea en memoria un elemento HTML definido por el tag (div,img,span... etc)*/

    // ejemplo
    const $div = document.createElement("div");      // Creamos un <div></div>
    const $span = document.createElement("span");    // Creamos un <span></span>
    const $img = document.createElement("img");      // Creamos un <img>

      
//* 2. createComment(text) y .createTextNode(text)
/*Crea y devuelve un nodo de comentarios HTML <!-- text --> y un nodo HTML con el texto text.*/

    // ejemplo
    const comment = document.createComment("Comentario"); // <!--Comentario-->
    const text = document.createTextNode("Hola");         // Nodo de texto: 'hola'




// https://lenguajejs.com/javascript/dom/crear-elementos-dom/