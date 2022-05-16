//*. Modificar atributos HTML

  /*     Métodos	                    Descripción 

      - hasAttributes()               Indica si el elemento tiene atributos HTML.

      - getAttributeNames()           Devuelve un array con los atributos del elemento.

      - getAttribute()                Devuelve el valor del atributo del elemento o Null si no existe

      - removeAttribute()             Elimina el atributo del elemento.

      - setAttribute(attr, value)     Añade o cambia el atributo attr al valor value.

      - getAttributeNode()            Idem a getAttribute() pero devuelve el atributo como nodo.

      - removeAttributeNode()         Idem a removeAttribute() pero devuelve el atributo como nodo.

      - setAttributeNode(attr, value) Idem a setAttribute() pero devuelve el atributo como nodo.
  
  
  */

// Ejemplos

// Obtenemos:

  /* <div id="page" class="info data dark" data-number="5">

     </div> */


const div = document.querySelector("#page"); // seleccionamos el id "page"

div.hasAttribute("data-number");     // true (data-number existe)
div.hasAttributes();                // true (tiene 3 atributos)

div.getAttributeNames();         // ["id", "data-number", "class"]
div.getAttribute("id");         // "page"

div.removeAttribute("id");   //elimina el atributo id
div.setAttribute("id", "page"); // Vuelve a añadir id="page"


// * Haciendo uso de fragmentos

  /* 
      Los fragmentos son una especie de documento paralelo, aislado de la página con la que estamos trabajando, que tiene varias características:

      No tiene elemento padre. Está aislado de la página o documento.
      Es mucho más simple y ligero (mejor rendimiento).
      Si necesitamos hacer cambios consecutivos, no afecta al reflow (repintado de un documento).
  */

  /* Método
      document.createDocumentFragment():	Crea un fragmento aislado (sin padre).
  */

    const fragment = document.createDocumentFragment();

    for (let i = 0; i < 5000; i++) {
      const div = document.createElement("div");
      div.textContent = `Item número ${i}`;
      fragment.appendChild(div);
    }

    document.body.appendChild(fragment);

// https://lenguajejs.com/javascript/dom/crear-elementos-dom/