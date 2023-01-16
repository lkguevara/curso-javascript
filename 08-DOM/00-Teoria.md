# 1. Definición
Las siglas DOM significan Document Object Model, o lo que es lo mismo, la estructura del documento HTML. Una página HTML está formada por múltiples etiquetas HTML, anidadas una dentro de otra, formando un árbol de etiquetas relacionadas entre sí, que se denomina árbol DOM (o simplemente DOM).

cuando nos referimos al DOM nos referimos a esta estructura, que podemos modificar de forma dinámica desde Javascript, añadiendo nuevas etiquetas, modificando o eliminando otras, cambiando sus atributos HTML, añadiendo clases, cambiando el contenido de texto, etc...
    
# 2. El objeto document 

En Javascript, la forma de acceder al DOM es a través de un objeto llamado document, que representa el árbol DOM de la página o pestaña del navegador donde nos encontramos. En su interior pueden existir varios tipos de elementos, pero principalmente serán  Element o Node:

    - Element: Es la representación genérica de una etiqueta: HTMLElement.
    - Node:    es una unidad más básica, la cuál puede ser  Element o un nodo de texto.

# 3. Elementos del document

  console.log(window.document);  //imprime todo el mapeo del DOM - doctype 
  console.log(document);  //imprime todo el mapeo del DOM - doctype
  console.log(document.head);  //imprime solo el head del html
  console.log(document.body);  //imprime solo el body del html
  console.log(document.documentElement);  //imprime la etiqueta html
  console.log(document.doctype);  // imprime Tipo de document
  console.log(document.charset);  //imprime Tipo de caracteres
  console.log(document.title);  //imprime Titulo del document
  console.log(document.links);  //imprime los enlaces que hayan
  console.log(document.images);  //imprime las imagenes que hayan
  console.log(document.forms);  //imprime los formularios que hayan
  console.log(document.styleSheets);  //imprime los estilos que hayan
  console.log(document.scripts);  //imprime los .js que hayan
  setTimeout(() => {
    console.log(document.getSelection().toString());
  }, 2000);
  document.write("<h2>Hola Mundo desde el DOM</h2>");