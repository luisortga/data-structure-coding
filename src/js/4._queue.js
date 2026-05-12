// Estructura de datos
/** Queue */
// Array usando como cola FIFO

/** @type {string} */
const cola = [];

// agregamos al final (enqueue)
cola.push('Melissa');
cola.push('Luis');
cola.push('Valeria');

console.log(cola);

// Sacar del principio (dequeue)
/** @type {string} */
let siguiente = cola.shift();
console.log(siguiente);
console.log(cola);

// siguiente en cola
siguiente = cola.shift();
console.log(siguiente);
console.log(cola);