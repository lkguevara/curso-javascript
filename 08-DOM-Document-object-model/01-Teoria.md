# 1. WEB APIs

    #1. Definición
        Las Interfaces de Programacion de Aplicaciones (APIs por sus siglas en inglés) son construcciones disponibles en los lenguajes de programación que permiten a los desarrolladores crear funcionalidades complejas de una manera simple. Estas abstraen el código más complejo para proveer una sintaxis más fácil de usar en su lugar.

        DOM + JavaScript = Web API. Es un puente que nos permite manipular el dom desde javascript
    
    

    #2. APIs en JavaScript del lado cliente
   
        se dividen en dos categorías:

            - Las APIs de navegador: Están integradas en tu navegador web y pueden exponer datos del navegador y del entorno informático circundante y hacer cosas complejas y útiles con él. Por ejemplo, la API de Geolocalización proporciona algunas construcciones simples de JavaScript para obtener datos de ubicación con los que, por ejemplo, trazar tu ubicación en un mapa de Google. 


            - Las APIs de terceros: No están incluídas por defecto en el navegador, y por lo general es necesario obtener el código e información desde algún lugar de la Web. Por ejemplo, la API de Twitter permite hacer cosas como mostrar tus últimos tweets en un sitio web. 
    
# 2. Atributos y data-atributos

    # obteniendo datos
        console.log(document.documentElement.lang); // Selecciona el atributo lang e imprime: es

        console.log(document.querySelector(".link-dom").href); //Selecciona la clase link-dom y nos trae el href. imprime: http://127.0.0.1:5500/9-DOM-Document-object-model/dom.html

        console.log(document.querySelector(".link-dom").getAttribute("href")); //Selecciona la clase link-dom y nos el valor que está escrito en el atributo href. imprime: dom.html

    # Establecer nuevos valores al atributo
        document.documentElement.lang = "en"; //cambia el atributo lang a *en*

        document.documentElement.setAttribute("lang", "es-MX");

    # guardando elementos en variables

        const $linkDOM = document.querySelector(".link-dom"); //Se antepone el signo dolar para identificar que es un elemento del DOM

        $linkDOM.setAttribute("target", "_blank"); // me agregar un target blank

    # Data-Attributes (empiezan con data-***)

        console.log($linkDOM.getAttribute("data-description")); //imprime Document object model, ya que en la línea 103 del html tenemos data-description="Document Object Model"

        console.log($linkDOM.dataset); // relaciona todos los data-attribute que se tengan

        console.log($linkDOM.dataset.description); // imprime el data-attribute llamado description

        $linkDOM.setAttribute("data-description", "Modelo de Objeto del Documento");