//* Definición

/*
    Son objetos que permiten almacenar conjunto de valores asociados a manera de objetos.
    Colección de datos como objeto primitivo. Trabaja muy similar a los getter y setters

    método set - obtenedores
    método get - 
*/


    let mapa = new Map(); 
    mapa.set("nombre","Lian");
    mapa.set("apellido","Guevara");
    mapa.set("edad",28);

    console.log(mapa);

    /* imprime: 
        Map(3)
        [[Entries]]
            0: {"nombre" => "Lian"}
            1: {"apellido" => "Guevara"}
            2: {"edad" => 28}
    */
   
    console.log(mapa.size); // imprime 3
    console.log(mapa.has("nombre")); // imprime true. Me pregunta si existe una clave
    console.log(mapa.get("nombre")); // imprime Lian. Me brinda una llave ingresada
    mapa.set("nombre","Lian Guevara");
    console.log(mapa.get("nombre")); // imprime Lian Guevara, lo anterior teniendo en cuenta que se modificó

