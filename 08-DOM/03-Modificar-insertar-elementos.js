//* #1. Insertar elementos

  //* 1. .appendChild(node)
  /*este método realiza un «append», es decir, inserta el elemento como un hijo al final de todos los elementos hijos que existan.*/

    // ejemplo
      const img = document.createElement("img");
      img.src = "https://lenguajejs.com/assets/logo.svg";
      img.alt = "Logo Javascript";
      document.body.appendChild(img);

      const div = document.createElement("div");
      div.textContent = "Esto es un div insertado con JS.";
      const app = document.createElement("div");
      app.id = "app";       
      app.appendChild(div); 


//* #2. Reemplazar contenido

  //* 1. textContent
    // Devuelve el contenido de texto del elemento HTML. reemplaza el contenido pero sin html.Es útil cuando se requiere insertar solo texto.
      
     
  //* 2. innerHTML
  
    // Devuelve el contenido HTML del elemento. Se puede usar asignar para modificar. Reemplaza el contenido e inserta contenido html. Es útil cuando se requiere insertar contenido en html
    
  //* 4. outerHTML
  
  // Identico a innerHTML pero incluyendo el HTML del propio elemento HTML. organiza la sintaxis del elemento html. Hace lo mismo que el inner pero lo organiza semanticamente


//* 2. Eliminar elementos

    const primerEnlace = document.querySelector("a");
    primerEnlace.remove() //Elimina el primer enlace llamado "vender";

    // Eliminar desde el padre

      const navegacion = document.querySelector(".navegacion");
      navegacion.removeChild(navegacion.children[2]); //Elimina un elemento bajo referencia

// https://lenguajejs.com/javascript/dom/insertar-elementos-dom/