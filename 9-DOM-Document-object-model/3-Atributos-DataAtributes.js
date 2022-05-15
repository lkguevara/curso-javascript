//* obteniendo datos
    console.log(document.documentElement.lang); // Selecciona el atributo lang e imprime: es

    console.log(document.querySelector(".link-dom").href); //Selecciona la clase link-dom y nos trae el href. imprime: http://127.0.0.1:5500/9-DOM-Document-object-model/dom.html

    console.log(document.querySelector(".link-dom").getAttribute("href")); //Selecciona la clase link-dom y nos el valor que está escrito en el atributo href. imprime: dom.html

//* Establecer nuevos valores al atributo
    document.documentElement.lang = "en"; //cambia el atributo lang a *en*

    document.documentElement.setAttribute("lang", "es-MX");

//* guardando elementos en variables

    const $linkDOM = document.querySelector(".link-dom"); //Se antepone el signo dolar para identificar que es un elemento del DOM

    $linkDOM.setAttribute("target", "_blank"); // me agregar un target blank

//* Data-Attributes (empiezan con data-***)

    console.log($linkDOM.getAttribute("data-description")); //imprime Document object model, ya que en la línea 103 del html tenemos data-description="Document Object Model"

    console.log($linkDOM.dataset); // relaciona todos los data-attribute que se tengan

    console.log($linkDOM.dataset.description); // imprime el data-attribute llamado description

    $linkDOM.setAttribute("data-description", "Modelo de Objeto del Documento");