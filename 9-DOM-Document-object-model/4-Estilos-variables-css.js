const $linkDOM = document.querySelector(".link-dom");

// accediendo a los valores css

console.log($linkDOM.style); //imprimirá CSSStyleDeclaration {0: 'background-color', 1: 'color', accentColor: '', additiveSymbols: '', alignContent: '', alignItems: '', alignSelf: '', …}

console.log($linkDOM.getAttribute("style")); // imprimirá: background-color: #F7DF1E; color: #222;

console.log($linkDOM.style.backgroundColor); //imprime: rgb(247, 223, 30)

console.log(window.getComputedStyle($linkDOM)); //imprime las propiedades dinámicas de css
console.log(getComputedStyle($linkDOM).getPropertyValue("color")); //imprime rgb(34, 34, 34)

// estableciendo valores css
$linkDOM.style.setProperty("text-decoration", "none"); 
$linkDOM.style.setProperty("display", "block");

//Variables CSS - Custom Properties CSS
const $html = document.documentElement,
  $body = document.body;

let varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color"),
  varYellowColor = getComputedStyle($html).getPropertyValue("--yellow-color");

console.log(varDarkColor, varYellowColor);

$body.style.backgroundColor = varDarkColor;
$body.style.color = varYellowColor;

$html.style.setProperty("--dark-color", "#000");
varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color");

$body.style.setProperty("background-color", varDarkColor);