const $whatIsDOM = document.getElementById("que-es");

let text = `
    <p>
      El Modelo de Objetos del Documento (<b><i>DOM - Document Object Model</i></b>) es un API para documentos HTML y XML.
    </p>
    <p>
      Éste proveé una representación estructural del documento, permitiendo modificar su contenido y presentación visual mediante código JS.
    </p>
    <p>
      <mark>El DOM no es parte de la especificación de JavaScript, es una API para los navegadores.</mark>
    </p>
  `;

// reemplazar el texto

// $whatIsDOM.innerText = text //lo sustituye sin embargo no es bueno usarlo. No forma parte del estandar

$whatIsDOM.textContent = text  // reemplaza el contenido pero sin html. Es útil cuando se requiere insertar solo texto.
$whatIsDOM.innerHTML = text;  // Reemplaza el contenido e inserta contenido html. Es útil cuando se requiere insertar contenido en html.
$whatIsDOM.outerHTML = text; // organiza la sintaxis del elemento html. Hace lo mismo que el inner pero lo organiza semanticamente6