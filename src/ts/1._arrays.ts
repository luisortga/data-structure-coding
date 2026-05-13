// Estructura de datos
/** Array */

// creación del array de autos
const AUTOS = ["Toyota", "Mazda", "McLaren", "Mercedes", "Audi"];

// acceso por posición (instantáneo)
console.log(AUTOS[2]);

// agregar al final (rápido)
AUTOS.push("Tesla");
console.log(AUTOS);

// insertar en medio (tardado)
AUTOS.splice(1, 0, "Honda");
console.log(AUTOS);