//* #1.  if - else: 

    // Estructura de programación que permite tomar una decisión y si está se cumple se ejecutarán ciertas acciones.

    let age = 17;

    if (edad>=18){
        console.log("Eres mayor de edad");
    }else{
        console.log("Eres menor de edad"); 
    }

//* # 2. if - else if - else

    let hora = 24;

    if (hora >=0 && hora <=5){
        console.log("Déjame dormir")
    }else if (hora >=6 && hora <=11){
        console.log("Buenos días")
    }else if (hora >=12 && hora <=18){
        console.log("Buenas tardes")
    }else if (hora >=19 && hora <=23){
        console.log("Buenas noches")
    }else {
        console.log(`ingresaste un dato erroneo, no existe hora: ${hora}`)
    }

//*  # 3. Operadores ternarios: 

    // Solo se podrá ejecutar una línea de código y consta de: (condición) ? verdadero: falso

    // ejemplo 1
    let edad = 16;

        let eresMayor = (edad >= 18) 
        ? "Eres mayor de edad" 
        : "Eres menor de edad";
        console.log(eresMayor) //Eres menor de edad

    // ejemplo 2

    let drink = edad >= 18 ? "Eres mayor de edad" : "Eres menor de edad";
    console.log(drink)
    

// # 4. Swicht - case: Diferentes valores para una variable. La palabra break es la que finaliza el caso

    /* 
        Domingo - 0
        lunes -1 
        martes -2 
        miercoles -3 
        jueves -4 
        viernes -5 
        sabado - 6 
    */
    let dia = 8;
    switch (dia) {
        case 0:
            console.log("Es domingo")
            break;
        case 1:
            console.log("Es Lunes")
            break;
        case 2:
            console.log("Es martes")
            break;
        case 3:
            console.log("Es miercoles")
            break;
        case 4:
            console.log("Es jueves")
            break;
        case 5:
            console.log("Es viernes")
            break;
        case 6:
            console.log("Es sabado")
            break;
        default:
            console.log("El día no existe")
            break;
    }
 


