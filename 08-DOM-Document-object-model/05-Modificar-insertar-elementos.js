//* #1. Reemplazar contenido e imagenes

  //* 1. .textContent
  
   /* Devuelve el contenido de texto del elemento HTML. reemplaza el contenido pero sin html. Es útil cuando se requiere insertar solo texto.*/

    // ejemplo

      const encabezado = document.querySelector(".contenido-hero h1");
      document.querySelector(".contenido-hero h1").textContent = "Hola, estoy agregando un text content";
      
     
  //* 3. .innerHTML
  
   /* Devuelve el contenido HTML del elemento. Se puede usar asignar para modificar. Reemplaza el contenido e inserta contenido html. Es útil cuando se requiere insertar contenido en html.*/

    // ejemplo

      const encabezado2 = document.querySelector(".contenido-hero h1");
      document.querySelector(".contenido-hero h1").innerHTML = "Hola, estoy agregando un innerHTML";

    
  //* 4. .outerHTML
  
      /* Idem a .innerHTML pero incluyendo el HTML del propio elemento HTML. organiza la sintaxis del elemento html. Hace lo mismo que el inner pero lo organiza semanticamente6*/

    // ejemplo

      // const encabezado3 = document.querySelector(".contenido-hero h1");
      // console.log(encabezado3);
      // document.querySelector(".contenido-hero h1").outerHTML = "Hola, estoy agregando contenido";

  //* Añadiendo imagenes
  
    const imagen = document.querySelector(".card img");
    console.log(imagen);
    imagen.src = "img/hacer2.jpg";


//* 2. Eliminar elementos del DOM

    const primerEnlace = document.querySelector("a");
    primerEnlace.remove() //Elimina el primer enlace llamado "vender";

    // Eliminar desde el padre

      const navegacion = document.querySelector(".navegacion");
      navegacion.removeChild(navegacion.children[2]); //Elimina un elemento bajo referencia


//* #3. Insertar elementos

  //* 1. .appendChild(node)
     /*Añade como hijo el nodo node. Devuelve el nodo insertado.*/

        const enlace = document.createElement("A");
        
        // Agregar texto
        enlace.textContent = "Nuevo enlace";

        // Añadir href
        enlace.href = "www.google.com";
        enlace.target = "_blank"
        // console.log(enlace);

        // Insertarlo en el nav

        const nav = document.querySelector(".navegacion");
        nav.appendChild(enlace); //Agrega el nuevo enlace creado al menú de navegación


  //* 2. .insertBefore()
     /* 	Inserta el nodo en una posición especifica. */

     nav.insertBefore(enlace, nav.children[2]);

    
    // Ejemplo: Agregar una nueva card
    
    const parrafo1 = document.createElement('P');
    parrafo1.textContent = "Concierto";
    parrafo1.classList.add('Categoria', "concierto");

    const parrafo2 = document.createElement('P');
    parrafo2.textContent = "Música popular"
    parrafo2.classList.add("titulo");


    const parrafo3 = document.createElement('P');
    parrafo3.textContent = "$800 por persona"
    parrafo3.classList.add("precio");

    // crear div con la clase de info
    const info = document.createElement('div');
    info.classList.add('info');
    info.appendChild(parrafo1)
    info.appendChild(parrafo2)
    info.appendChild(parrafo3)

    // crear la imagen

    const image = document.createElement('img');
    image.src = "img/hacer1.jpg";

    // crear div con la clase de card
    const card = document.createElement('div');
    card.classList.add('card');
    card.appendChild(image)
    card.appendChild(info)
 
    // insertar card en el html

    const contenedor = document.querySelector('.hacer .contenedor-cards')
    contenedor.appendChild(card); //Lo agrega de último

    contenedor.insertBefore(card, contenedor.children[0]) // Lo agrega en el html según la posición indicada



// https://lenguajejs.com/javascript/dom/insertar-elementos-dom/