/*=====================================================================
 la explicacion de de algunas partes de este codigo estan en el archivo 
 server-old-version-sin-hbs.js

 NOTA: Aqui solo vamos a explicar lo de HBS

 NOTA: Para ejecutar la palicacion en heroku creamos en el archivo 
 package.json en  el atributo script creamos un elemento llamado
 "start":"node server.js" esto le da la orden a heroku de que inicie 
 nuestra aplicacion o nuestra pagina web. pero debemos ir  a la consola
 de comandos y ejcutar  el codigo "npm start" y eso ejecuta nuestra app

 podemos crear tambien otros comandos como "nodemon":"nodemon server.js" 
 en este caso para ejecutar un comando deferente a start como el anterior
 debemos  ejecutarlo en la conola de comandos de la siguiente manejra
 "npm run nodemon"
 ======================================================================*/

const express = require('express');
const app = express();

const hbs = require('hbs');

require('./hbs/helpers');

// aqui configuramos el puerto , como no sabemos el que heroku nos va a dar creamos una constante, y si no hay puerto en heroku pues que me asigne uno por defecto el 3000
const port=process.env.PORT || 3000;

app.use( express.static( __dirname + '/public' ) );

/*Aqui establesco la ruta de los parciales, indicando la carpeta donde van a estar todos.

 los parciales son como los diferentes tipos de rutas  por lo general son los componentes que van a llevar todas las paginas, como el cabesote, el footer y el navbars se hace uno solo, y gracias a expres y handlebars podemos utilizarlo en la pagina que lo requiramos.  como si estuvieramos llamando una varible a mostrar. 
 
 la llamada del parcial se hace directamente en los  archivo .hbs de la siguiente forma:
 donde queramos que aparezca el parcial haremos emplearemos la siguiente sintxis respetando los espacios del lado izquiero tal cual com se muestra:

 {{> head}} de esta forma donde yo coloque esto indica que debe ir el parcial o el codigo del encabezado. pero cuando voy a renderizar y quieros pasar valores a variable utilizo una sintasis mas sensilla como por ejemplo para pasar el nmbre solo hago  esto: {{nombre}}
 en el archivo.hbs que quiero que aparezca el nombnre

 los archios .hbs  es como si fueran los archivos.html donde va todo el codigo de etiquetas
*/
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine','hbs');

// si tengo varios archivos rendirezo cada pagina de esta forma en este caso este seria el render para el home
app.get('/', (req, res) => {
   
   res.render('home',{
      nombre:'ñañeI ñoPANDA'    
   });
   
});

// este seria el render para  la pagina de about
app.get('/about', (req, res) => { 
   res.render('about');
});

app.listen(port, ()=>{
   console.log(`Escuchando peticiones desde el puerto ${port}`);
});