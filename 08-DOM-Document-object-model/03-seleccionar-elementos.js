//* #1. Seleccionar elementos del DOM 

    //Métodos tradicionales

      /*
          MÉTODO                          DESCRIPCIÓN

        - document.getElementById(id):            Busca el elemento HTML con el id *id*. Si no, devuelve Null.

        - document.getElementByClassName(class):  Busca elementos con la clase *class*. Si no, devuelve [].

        - document.getElementsByTagName(tag):     Busca elementos *tag*. Si no encuentra ninguno, devuelve [].

        - document.getElementsByName(name):       Busca elementos con atributo name (formularios) *name*. Si no, devuelve [].
      */

    //Métodos modernos

      /*
          MÉTODO                          DESCRIPCIÓN
        - document.querySelector(sel):             Busca el primer elemento que coincide con el selector CSS sel. Si no, null.

        - document.querySelectorAll(sel):          Busca todos los elementos que coinciden con el selector CSS sel. Si no, [].
      */

// * Ejemplos: 

  // Seleccionar <header class="header contenedor"> de la línea 16 del documento html

    const header = document.querySelector('.card');
    console.log(header);


// https://lenguajejs.com/javascript/dom/seleccionar-elementos-dom/