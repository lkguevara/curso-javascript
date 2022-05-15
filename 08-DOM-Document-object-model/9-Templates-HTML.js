const $cards = document.querySelector(".cards"), 
    $template = document.getElementById("template-card").content, //selecciona el id template-card y selecciona su contenido
    $fragment = document.createDocumentFragment(), //fragmento para que lo almacene dinámicamente

    cardsContent = [
        {
          title: "Tecnología",
          img: "https://placeimg.com/200/200/tech",
        },
        {
          title: "Animales",
          img: "https://placeimg.com/200/200/animals",
        },
        {
          title: "Arquitectura",
          img: "https://placeimg.com/200/200/arch",
        },
        {
          title: "Gente",
          img: "https://placeimg.com/200/200/people",
        },
        {
          title: "Naturaleza",
          img: "https://placeimg.com/200/200/nature",
        },
      ]; // Se agregan etiquetas

// iterar los elementos para insertarlos

cardsContent.forEach((el) => {
    $template.querySelector("img").setAttribute("src", el.img);
    $template.querySelector("img").setAttribute("alt", el.title);
    $template.querySelector("figcaption").textContent = el.title;
  
    let $clone = document.importNode($template, true);
    $fragment.appendChild($clone);
});

$cards.appendChild($fragment);