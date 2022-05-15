//* Crear elementos HTML

  //* 1. .createElement(tag, options)
  
   /*Crea en memoria un elemento HTML definido por el tag (div,img,span... etc)*/

    // ejemplo

    const $div = document.createElement("div");      // Creamos un <div></div>
    const $span = document.createElement("span");    // Creamos un <span></span>
    const $img = document.createElement("img");      // Creamos un <img>

      
  //* 2. .createComment(text) y .createTextNode(text)
  
   /*Crea y devuelve un nodo de comentarios HTML <!-- text --> y un nodo HTML con el texto text.*/

    // ejemplo

    const comment = document.createComment("Comentario"); // <!--Comentario-->
    const text = document.createTextNode("Hola");         // Nodo de texto: 'hola'

  //* 3.  .cloneNode(deep)
  
   /*Clona el nodo HTML y devuelve una copia. deep es false por defecto.*/

    // ejemplo

      /*const div = document.createElement("div");
      div.textContent = "Elemento 1";
      
      const div2 = div;   // NO se está haciendo una copia
      div2.textContent = "Elemento 2";
      
      div.textContent;  // 'Elemento 2'*/

      /*Con esto, quizás pueda parecer que estamos duplicando un elemento para crearlo a imagen y semejanza del original. Sin embargo, lo que se hace es una referencia al elemento original, de modo que si se modifica el div2, también se modifica el elemento original. */

      const div = document.createElement("div");
        div.textContent = "Elemento 1";

      const div2 = document.cloneNode() // Ahora SÍ estamos clonando
        div2.textContent = "Elemento 2";

        div.textContent;  // 'Elemento 1'


    //* 4. .isConnected
  
      /*Indica si el nodo HTML está insertado en el documento HTML.*/

    // ejemplo



// https://lenguajejs.com/javascript/dom/crear-elementos-dom/