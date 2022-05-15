//* #1. Reemplazar contenido

  //* 1. .nodeName
  
   /*Devuelve el nombre del nodo (etiqueta si es un elemento HTML). Sólo lectura.*/

  //* 2. .textContent
  
   /* Devuelve el contenido de texto del elemento HTML. Se puede asignar para modificar. Es útil para obtener (o modificar) sólo el texto dentro de un elemento, obviando el etiquetado HTML*/

    // ejemplo

      const $div = document.querySelector(".div");
      $div.textContent = "Hola, estoy agregando un text content";
      $div.textContent;

  //* 3. .innerHTML
  
   /* Devuelve el contenido HTML del elemento. Se puede usar asignar para modificar.*/

    // ejemplo

        const div = document.querySelector(".info"); // <div class="info"></div>

        div.innerHTML = "<strong>Importante</strong>"; // Interpreta el HTML
        div.innerHTML;    // "<strong>Importante</strong>"
        div.textContent;  // "Importante"
        
        div.textContent = "<strong>Importante</strong>";  // No interpreta el HTML  

    

      

  //* 4. .outerHTML
  
      /* Idem a .innerHTML pero incluyendo el HTML del propio elemento HTML.*/

    // ejemplo

      const data = document.querySelector(".data");
      data.innerHTML = "<h1>Tema 1</h1>";

      data.textContent;   // "Tema 1"
      data.innerHTML;     // "<h1>Tema 1</h1>"
      data.outerHTML;     // "<div class="data"><h1>Tema 1</h1></div>"

  //* 5. .innerText
  
      /* Versión no estándar de .textContent de Internet Explorer con diferencias. Evitar.*/


  //* 6. .outerHTML
  
      /* Versión no estándar de .textContent/.outerHTML de Internet Explorer. Evitar.*/

//* #2. Insertar elementos

  //* 1. .appendChild(node)
  
   /*Añade como hijo el nodo node. Devuelve el nodo insertado.*/

      // ejemplo1

        const img = document.createElement("img");
        img.src = "https://lenguajejs.com/assets/logo.svg";
        img.alt = "Logo Javascript";

        document.body.appendChild(img);

      // ejemplo2

        const div = document.createElement("div");
        div.textContent = "Esto es un div insertado con JS.";
        const app = document.createElement("div"); // <div></div>
        app.id = "app";       // <div id="app"></div>
        app.appendChild(div); // <div id="app"><div>Esto es un div insertado con JS</div></div>

  //* 2. .insertAdjacentElement(pos, elem)
  
   /*Inserta el elemento elem en la posición pos. Si falla,Null . insertamos un objeto*/
  //* 3. .insertAdjacentHTML(pos, str)
  
   /*Inserta el código HTML str en la posición pos. insertamos código HTML*/
  //* 4. .insertAdjacentText(pos, text)
  
   /*Inserta el texto text en la posición pos. no insertamos elementos HTML, sino un Node con texto*/

  //* Posiciones
  
    /* 
    beforebegin: El elemento se inserta antes de la etiqueta HTML de apertura.
    afterbegin: El elemento se inserta dentro de la etiqueta HTML, antes de su primer hijo.
    beforeend: El elemento se inserta dentro de la etiqueta HTML, después de su último hijo. Es el equivalente a usar el método .appendChild().
    afterend: El elemento se inserta después de la etiqueta HTML de cierre. */

  //* 5. .insertBefore(new, node)
  
   /* 	Inserta el nodo new antes de node y como hijo del nodo actual. */


// https://lenguajejs.com/javascript/dom/insertar-elementos-dom/