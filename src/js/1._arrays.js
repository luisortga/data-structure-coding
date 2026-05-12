// Estructura de datos
/** Array */

// Creción del array de autos
/** @type {String} */
const autos = ["Toyota", "Mazda", "Volvo", "BMW", "Audi"];

// acceso por posición (instantáneo)
console.log(autos[2]);

// agregar al final (rápido)
autos.push("Tesla");
console.log(autos);

// insertar en medio (tardado)
autos.splice(1, 0, "Honda");
console.log(autos);