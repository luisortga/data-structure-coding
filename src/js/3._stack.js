// Estructura de datos
/** Stack */

/** @type {string} */
const pila = [];

// push: apilamos tres acciones
pila.push('Escribir Hola');
pila.push('Escribir mundo');
pila.push('poner cursiva');
pila.push('Escribir Investigación');
pila.push('poner titulo');
pila.push('Escribir el primer parrafo');

// pop: sacamos la de arriba (la última)
/** @type {string} */
let accion = pila.pop();
console.log(accion);

// siguiente pop
accion = pila.pop();
console.log(accion);