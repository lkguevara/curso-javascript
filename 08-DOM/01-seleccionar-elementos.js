//* 1. Métodos tradicionales

  //* MÉTODOS                                  
  
    document.getElementById("id") //Busca el elemento HTML con el id *id*. Si no, devuelve Null.
    
    document.getElementByClassName("clase") //Busca elementos con la clase *class*. Si no, devuelve [].

    document.getElementsByTagName("tag") //Busca elementos *tag*. Si no encuentra ninguno, devuelve [].

    document.getElementsByName("name") //Busca elementos con atributo name (formularios) *name*. Si no, devuelve [].*/

//* 2. Métodos modernos

  // * MÉTODO                          
    
    document.querySelector(selector("id, clase o tag")) // Busca el primer elemento que coincide con el selector CSS seleccionado. Si no, null.

    document.querySelectorAll("id, clase o tag") // Busca todos los elementos que coinciden con el selector CSS seleccionado. Si no, [].


// https://lenguajejs.com/javascript/dom/seleccionar-elementos-dom/