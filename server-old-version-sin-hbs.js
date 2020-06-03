/*=====================================================================
 Aqui hacemos lo mismo que que en el archivo app-version-sin-ex´res.js
 solo que de una manera mas sencilla, igual que en  el ejemplo del otro
 archivo, creamos un objeto  pero no hay necesidad de convertirlo a JSON
 por que express toma el objeto e internamente lo serializa y dependiendo
 del tipo de formato asi mismo lo muestra, en este caso seria formato json
 ======================================================================*/

const express = require('express');
const app = express();

/**================================================================================
   Con ésta linea de código "app.use( express.static( __dirname + '/public' ) );" 
   logramos poder servir todo el contenido web estatico  que se encuentre dentro de
   la carpeta public. debemos saber que todo lo que esté en esa carpeta  es a lo que 
   van a poder acceder  las personas. si no queremos que las personas accedan a cierto
   contenido, sabenmos que no debemos agregarlo a esa carpeta.

   N0TA: la funcion app.get, la comentamos para evitar  conflictos en el servidor,
   para que  no se confunda  entre si mostrar la carpeta public o la funcion app.get 
   entonces si vamos a mostrar esta funcion es recomendable comentar  la carpeta public
 ==================================================================================*/
app.use( express.static( __dirname + '/public' ) );


// app.get('/', (req, res) => {

    
//     let salida={
//         nombre:'Ricardo',
//         edad:33,
//         url:req.url
//     };

// //   express internamente convierte el objeto en formato JSON para  mostrarlo en el navegador
//    res.send(salida);
   
// });
 
app.listen(3000,()=>{
   console.log('Escuchando peticiones desde el puerto 3000');
});