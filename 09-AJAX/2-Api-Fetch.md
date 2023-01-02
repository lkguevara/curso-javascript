# Definición
    La API Fetch proporciona una interfaz JavaScript para acceder y manipular partes del canal HTTP, tales como peticiones y respuestas. 

    La forma de realizar una petición es muy sencilla, básicamente se trata de llamar a fetch y pasarle por parámetro la URL de la petición a realizar:

        Realizamos la petición y guardamos la promesa
            const request = fetch("/robots.txt");

        Si es resuelta, entonces ejecuta esta función...
            request.then(function(response) { ... });

    El fetch() devolverá una promesa que será aceptada cuando reciba una respuesta y sólo será rechazada si hay un fallo de red o si por alguna razón no se pudo completar la petición. 
    El modo más habitual de manejar las promesas es utilizando .then().

    https://lenguajejs.com/javascript/peticiones-http/fetch/

# Pasos:

    # Paso 1: Introducción a la sintaxis de la API Fetch

        - Para usar la API Fetch, invoque el método fetch, que acepta la URL de la API como parámetro: fetch(url)

        - Después del método fetch(), incluya el método de promesa then(): .then(function() {})

        - Con el método fetch() se obtiene una promesa. Si la promesa devuelta es *resolve*, se ejecuta la función dentro del método then(). Debajo del método then(), incluya el método catch(): .catch(function() {});

        Resumiendo, la API se verá así:

            fetch(url)
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.log(error))

            
    

# Fuentes
    https://www.digitalocean.com/community/tutorials/how-to-use-the-javascript-fetch-api-to-get-data-es

