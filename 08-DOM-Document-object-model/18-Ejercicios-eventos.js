// * Eventos con el mouse

    const nav = document.querySelector(".navegacion");

    // Eventos mouse
    nav.addEventListener("click", () => {
        console.log("click en nav")
    })

    nav.addEventListener("mouseenter", () => {
        console.log("EL mouse pasa por el menú de navegación");
        nav.style.backgroundColor = "red"; 
    });

    nav.addEventListener("mouseout", () => {
        console.log("EL mouse sale de la navegación")
        nav.style.backgroundColor = "transparent";
    });

    nav.addEventListener("dblclick", () => {
        console.log("hago doble click")
        
    });

// * Eventos con el teclado

    const busqueda = document.querySelector(".busqueda");

    // Eventos teclado
    busqueda.addEventListener("keydown", () => {
        console.log("escribiendo...")
    });

    busqueda.addEventListener("keyup", () => {
        console.log("escribiendo...")
    });

    busqueda.addEventListener("blur", () => {
        console.log("escribiendo...")
    });

    busqueda.addEventListener("copy", () => {
        console.log("copiando un texto...")
    });

    busqueda.addEventListener("paste", () => {
        console.log("pegando un texto...")
    });

    busqueda.addEventListener("cut", () => {
        console.log("cortando un texto...")
    });

    busqueda.addEventListener("input", () => {
        console.log("escribiendo...")
    });



// * Eventos en formularios

    const formulario = document.querySelector(".formulario");

    // Eventos formulario

    formulario.addEventListener("submit", (e) => {
        e.preventDefault(); // detiene la acción por defecto

        console.log(e.target);
    });


    window.addEventListener('scroll', () => {
        // console.log('scrolling...');
    
        // Detectar el Scrolling vertical...
    
        // const pxScroll = window.scrollY;
        // console.log(pxScroll);
    
    
// * Eventos en scroll   
        // Detectar un elemento al dar scroll...
    
        const premium = document.querySelector('.premium');
    
        const ubicacion = premium.getBoundingClientRect(); // Este método te da el tamaño de un elemento y su ubicación respecto a la ubicación actual..
            // console.log(ubicacion);
    
        if(ubicacion.top < 100) {
            console.log('Ya esta visible');
        } else {
            console.log('Aún no esta visible..')
        }
    
    
    })

