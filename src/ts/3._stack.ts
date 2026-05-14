// Estructura de datos
/** Stack */

const stack: string[] = [];

// push: apilamos tres acciones
stack.push('Escribir Hola');
stack.push('Escribir mundo');
stack.push('Colocar negrita');
stack.push('Escribir Mi primer');
stack.push('Escribir parrafo');

// pop: sacamos el stack de arriba (la ultima que entra, la primera que sale)
let action = stack.pop();
console.log(action);

// siguiente stack
action = stack.pop();
console.log(action);