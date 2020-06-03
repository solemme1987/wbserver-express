/*
helpers, son funciones qeu se disparan cuando el template lo requiere en este caso el helpers que creamos es el que me muestra el año.

para registrar un helper utilizamos la siguiente sintaxis

   1.registro del helper
   2.nombre del helper
   3.lo que retorna el helper

hbs.registerHelper('getAnio', ()=>{
   return new Date().getFullYear();
});

*/
const hbs = require('hbs');


hbs.registerHelper('getAnio', () => {
    return new Date().getFullYear();
});
 

// esta funcion me coloca la primera le tra de cada palabra en mayuscula y el resto en minuscula
hbs.registerHelper('capitalizar', (texto) => {

    let palabras = texto.split(' ');
    
    palabras.forEach((palabra, idx)=>{
        // chartAt(0) indica que solo le aplique mayuscula al primer carcter
        // palabra.slice(1)me le aplica minuscula a todo  lo que encuentre de la posicion 1 en adelante
        palabras[idx] = palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
        
    }); 
    
    return palabras.join(' ');
});