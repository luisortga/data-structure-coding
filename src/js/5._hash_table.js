// Estructura de datos
/** Hash Table */

// email -> datos del usuario
/** @type {Map} */
const usuarios = new Map([
    ["luis@gmail.com", { nombre: "Luis", edad: 27 }],
    ["anahi@gmail.com", { nombre: "Anahi", edad: 22 }],
]);

// acceso por clave: 0(1)
console.log(usuarios.get("anahi@gmail.com"))

// agregar nueva entrada: 0(1)
usuarios.set("melissa@gmail.com", { nombre: "Melissa", edad: 26 });

// contar palabras
/** @type {string} */
const texto = "ser o no ser";
const conteo = new Map();
for (let palabra of texto.split(" ")) {
    conteo.set(palabra, (conteo.get(palabra) ?? 0) + 1);
}

console.log(conteo);