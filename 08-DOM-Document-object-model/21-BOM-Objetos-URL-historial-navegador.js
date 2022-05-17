//* 1. Objeto URL (objeto location);

console.log("********** Objeto URL (location) **********");
console.log(location); 
console.log(location.origin); //ruta que origina: "http://127.0.0.1:5500"
console.log(location.protocol); // protocolo: "http:"
console.log(location.host); // host "127.0.0.1:5500"
console.log(location.hostname); // host "127.0.0.1"
console.log(location.port); //puerto "5500"
console.log(location.href); //url "http://127.0.0.1:5500/9-DOM-Document-object-model/index.html#"
console.log(location.hash); //aplica para los # en las url
console.log(location.search);  //valores por medio de la url
console.log(location.pathname); // Pathname: "9-DOM-Document-object-model/index.html"
//location.reload();

//* 2. Objeto Historial (history)

console.log("********** Objeto Historial (history) **********");
console.log(history);
console.log(history.length); //Historial de las páginas que se han visitado
//history.forward(1); // Páginas hacia adelante (flecha hacia adelante del navegador)
//history.go(-3); // signo - página hacia atrás y número positivo página hacia adelante
//history.back(2); //nos regresa a la página que se indique. Páginas hacía atrás. (flecha hacia adelante del atrás)

//* 3. Objeto Navegador (navigator)

console.log("********** Objeto Navegador (navigator) **********");
console.log(navigator);
console.log(navigator.connection);
console.log(navigator.geolocation);
console.log(navigator.mediaDevices);
console.log(navigator.mimeTypes);
console.log(navigator.onLine);
console.log(navigator.serviceWorker);
console.log(navigator.storage);
console.log(navigator.usb);
console.log(navigator.userAgent);