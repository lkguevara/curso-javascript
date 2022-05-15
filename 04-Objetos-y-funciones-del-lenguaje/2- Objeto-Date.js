// * #1. Definición
  /*
    Permite trabajar con fechas y horas.
    new Date()
  */

// * #2. Métodos

  //* Fecha total
  let fecha = new Date();
  console.log(fecha) //Imprime: 2022-03-01T22:25:39.819Z

  //* Día del mes
  console.log(fecha.getDate()) //Imprime: 1 (corresponde a la posición 1)

  //* Día del año
  console.log(fecha.getDay()) //Imprime: 2 (corresponde a la posición 2)

  //* Año
  console.log(fecha.getFullYear()) // Imprime 2022

  //* Hora
  console.log(fecha.getHours()) // Imprime 17
  console.log(fecha.getMinutes()) // Imprime 37
  console.log(fecha.getSeconds()) // Imprime 3
  console.log(fecha.toLocaleTimeString()) // Imprime 5:37:40 p. m.

  // * Fecha y hora
  console.log(fecha.toDateString()) // Imprime Tue Mar 01 2022
  console.log(fecha.toLocaleString()) // Imprime 1/3/2022, 5:35:37 p. m.

  //* Fecha
  console.log(fecha.toLocaleDateString()) //Imprime: 1/3/2022

  //* Obteniendo datos de la hora cero
  console.log(fecha.getUTCDate()) //Imprime: 1/3/2022

  let cumpleLian = new Date(1984,4,23)
  console.log(cumpleLian)
