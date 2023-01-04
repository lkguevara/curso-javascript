let dog = {
    nombre:"Scott",
    color:"Cafe",
    edad: 5,
    macho: true
};

const propiedades = (mascota) =>{
    console.log(mascota.nombre)
    console.log(mascota.color)
    console.log(mascota.edad)
    console.log(mascota.macho)
}

propiedades (perro)

// *Aplicando desestructuración
let perro = {
    nombre:"Scott",
    color:"Cafe",
    edad: 5,
    macho: true
};
const imprimePropiedades = ({nombre, color, edad, macho}) =>{
    console.log({nombre})
    console.log({color})
    console.log({edad})
    console.log({macho})
}

imprimePropiedades (perro)



     
