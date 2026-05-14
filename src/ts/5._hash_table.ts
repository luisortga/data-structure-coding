// Estructura de datos
/** Hash Table */

// email -> datos del usuario
const usernames = new Map([
    ["luis@gmail.com", { nombre: 'Luis', age: 27 }],
    ["anahi@gmail.com", { nombre: 'Anahi', age: 22 }]
]);

// acceso por clave: 0(1)
console.log(usernames.get("anahi@gmail.com"));

// agregar nueva entrada: 0(1)
usernames.set("melissa@gmail.com", { nombre: "Melissa", age: 26 });

// contar palabras
const text: string | undefined = "El esfuerzo es talento o el talento es solo talento";
const count: Map<string, number | undefined> = new Map();
for (let palabra of text.split(" ")) {
    count.set(palabra, (count.get(palabra) ?? 0) + 1);
}

console.log(count);

/* console:
{ nombre: 'Anahi', age: 22 }
Map(7) {
  'El' => 1,
  'esfuerzo' => 1,
  'es' => 2,
  'talento' => 3,
  'o' => 1,
  'el' => 1,
  'solo' => 1
}
*/