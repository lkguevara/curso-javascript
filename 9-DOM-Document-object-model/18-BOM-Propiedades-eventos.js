//* 1. Definición
    /*
        El Modelo de Objetos del Navegador es un API que permite acceder y modificar las propiedades de las ventanas del propio navegador.

        Mediante el BOM, es posible redimensionar y mover la ventana del navegador y realizar muchas otras manipulaciones no relacionadas con el contenido de la página HTML.

        El mayor inconveniente del BOM es que, a diferencia del DOM, no es un API estándar, cada navegador lo puede interpretar de diferente manera, sin embargo, en los últimos años los navegadores están más estandarizados entre sí.

        Métodos u objetos que cuelgan del objeto window
    */

//* 2. Propiedades y eventos de BOM

window.addEventListener('resize', (e) => { //Evento de tipo resize, aplica cuando se cambie el tamaño
    console.clear();

    console.log("********** Evento Resize **********");

    console.log(window.innerWidth); //Tamaño del ancho del vh
    console.log(window.innerHeight);//Tamaño del alto del vh
    console.log(window.outerWidth); // Tamaño del ancho de la ventana del navegador
    console.log(window.outerHeight); // Tamaño del alto de la ventana del navegador

    console.log(e)
});

window.addEventListener("scroll", (e) => {
    console.clear();
    console.log("********** Evento Scroll **********");
    console.log(window.scrollX);
    console.log(window.scrollY);

    console.log(e);
})

window.addEventListener("load", (e) => { //Aplica cuando cargue la página
  console.log("********** Evento Load **********");
  console.log(window.screenX);
  console.log(window.screenY);
  console.log(e);
});
