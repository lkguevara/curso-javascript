/*window.alert("Alerta");
window.confirm("Confirmación");
window.prompt("Aviso");

// lo anterior es equivalente
alert("Alerta");
confirm("Confirmación");
prompt("Aviso"); */

const btnAbrir= document.getElementById("abrir-ventana"),
    btnCerrar = document.getElementById("cerrar-ventana"),
    btnImprimir = document.getElementById("imprimir-ventana");

let ventana;

btnAbrir.addEventListener("click", (e) => {
   ventana = open("https://jonmircha.com");
});


btnCerrar.addEventListener("click", (e) => {
    ventana.close(); //cierra la ventana que se abrió anteriormente
});

btnImprimir.addEventListener("click", e => window.print())