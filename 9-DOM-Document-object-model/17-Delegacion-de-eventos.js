function flujoEventos(e) {
    console.log(`hola te saluda ${this.className}, el click lo originó ${e.target.className}`); 

}

document.addEventListener("click", (e)=>{
    console.log("click en:",e.target);

    if (e.target.matches(".eventos-flujo div")) {
        flujoEventos(e)
    }

    if (e.target.matches(".eventos-flujo a")) {
        alert('Hola');
        e.preventDefault();
    }
})

// divsEventos.forEach(div => {
//     div.addEventListener('click', flujoEventos) 
// });

