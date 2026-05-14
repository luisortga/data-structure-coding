// Estructura de datos
/** Queue */
// Primero que entra, primero que sale

const fila: string[] = [];

// add al final de la cola
fila.push('Melissa');
fila.push('Luis');
fila.push('Valeria');

console.log(fila);

// sacar del principio ()
let next: string | undefined;
next = fila.shift();
console.log(next);

/* siguiente en la cola */
next = fila.shift();
console.log(next);

/* quedo en la fila */
console.log(fila);