

/** -----------------------------------------------------------------------------------------------------------
 * ESTE COMENTARIO ES PARA EXPLICAR NETAMENTE  LA PRIMERA PARTE DE HTTP:
 
   -Esta es la forma de crear nuestro servidar, pero es un poco complicada la sintaxis, por eso  vamos a hacer lo 
    mismo pero  a través de express pero con una sintaxis menos compleja y mas entendible a simple vista
    
    NOTA: lo de express lo haremos en otro  archivo llamado server.js

 ----------------------------------------------------------------------------------------------------------------*/

// El http lo utilizamos para  montar un servidor, y  empesar a servir contenido en la web, asi que lo instanciamos  o lo requerimos para su suso. este paqueteya viene por defecto en node
const http = require('http');

// con esta funcion creamos nustro servidor http y le dicimos que escuche por el puerto 8080 y que la salida sera en texto plano y 

const server = http.createServer((req, res) => {

    res.writeHead(200, { 'Content-Type': 'text/plain' });
    
    // este objeto lo creamos para mostrarlo en el navegador  como ejemplo.  esto es un objeto formato JSON pero le estamos diciendo en  el res.writeHead que  el tipo de formato de salida es de texto plano  entonces antes de mostrarlo en el navegador tenemos que convertirlo a formato JSON
    let salida={
        nombre:'Ricardo',
        edad:33,
        url:req.url
    };
    
    // convertimos el objeto a formato JSON para mostrarlo en el navegador
    res.write(JSON.stringify(salida));

    // finalizamos el proceso, si no lo hacemos se va  a quear dando vueltas el navegador y no nos va a mostrar nada
    res.end();

})
.listen(8080);//escogemos el puerto por el que queremos que escuche nuestra app
// mostramos por consola que puerto estamos utilizando
console.log(`Escuchando el puerto 8080`);

/** -----------------------------------------------------------------------------------
                          FIN DEL COMENTARIO DE HTTP PURO 
 --------------------------------------------------------------------------------------*/

