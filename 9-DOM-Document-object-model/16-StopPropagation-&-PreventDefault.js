const divsEventos = document.querySelectorAll(".eventos-flujo div"),
linkEventos = document.querySelector(".eventos-flujo a");

function flujoEventos(e) {
    console.log(`hola te saluda ${this.className}, el click lo originó ${e.target.className}`); 

    e.stopPropagation(); // evita la propagación
}

divsEventos.forEach(div => {
    div.addEventListener('click', flujoEventos) 
});

linkEventos.addEventListener('click', e => {
    alert('Hola');
    e.preventDefault(); //Cancela la acción por default
    e.stopPropagation();
});