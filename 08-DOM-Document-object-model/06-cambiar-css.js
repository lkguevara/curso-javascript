//* Básico

    const encabezado = document.querySelector("h1");
    console.log(encabezado.style);

    // Cambiar el color del encabezado h1 a negro
        encabezado.style.backgroundColor = "black";

    // Cambiar el tipo de letra
    encabezado.style.fontFamily = "Arial";

//* Agregando clases

    const card = document.querySelector(".card");
    console.log(card.classList); // Me genera los atributos de dicha clase;

        // Método add
        card.classList.add("nueva-clase", "segunda-clase"); // Puedo agregar una nueva clase
        console.log(card.classList);

        // Método remove
        card.classList.remove("card"); // Elimina una clase
        console.log(card.classList);


