this.lugar = "Contexto global";

function saludar(params) {
    console.log(`${this.lugar}`)
};

saludar();

const obj = { 
    lugar: "Contexto objeto"
}

saludar.call(obj) // imprimirá "Contexto objeto"
saludar.call(this) // imprimirá "Contexto global"
saludar.apply(obj) // imprimirá "Contexto objeto"
