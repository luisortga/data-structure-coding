// Estructuras avanzadas

// Arrays avanzados

// - Metodos funcionales

// ofEach

let numbers = [2, 6, 16, 8]

numbers.forEach((element) => console.log(element))

// map  list comprehesion in python

let less = numbers.map((element) => element * 2)
console.log(less)

// filter

// fitrado, solo numeros pares con modulo %
let fill = numbers.filter((element) => element % 2 === 0)
console.log(fill)

// reduce
// privius va almacenando los valores en este caso va sumando
let cooper = numbers.reduce((previus, current) => previus + current)
console.log(cooper)

// claudeia

const precios = [12, 24, 48, 56, 112, 16, 86]

const conIva = precios.filter((p) => p > 50).map((p) => p * 1.16)

console.log(conIva) // [63.8, 116, 87]

const conIvaReduced = precios.reduce((acc, p) => {
  if (p > 50) acc.push(p * 1.16)
  return acc
}, [])

const conIvaUltraRed = precios.flatMap((p) => (p > 50 ? [p * 1.16] : []))

console.log(conIvaReduced)
console.log(conIvaUltraRed)

// Manipulación

// flat: aplanar

// anidar arrays
let nestedArray = [6, [8, [16, [4]]]]
let flatArray = nestedArray.flat()
console.log(nestedArray)
flatArray = nestedArray.flat(3) // 3 unificado
console.log(flatArray)

// flatMap

let phrase = ['battle beast', 'thragg regente']
const separacion = phrase.flatMap((phrase) => phrase.split(' ')) // python .split(" ")
console.log(separacion)

// Ordenación

let unsorted = [8, 4, 116, 86, 24]
let order = unsorted.sort()
console.log(order)

let uted = ['b', 'f', 'a']
let sorted = unsorted.sort((a, b) => a - b) // criterio de ordenación
console.log(sorted)

// reverse

// sorted.reverse() // modifica el original
console.log(sorted)

// Search: busqueda

// buscar numero 4: includes
console.log(sorted.includes(4))

// find
// retorna el elemento en caso que lo encuentre
let firtsEven = sorted.find((element) => element % 2 === 0)
console.log(firtsEven) // undefined si no encuentra

// findIndex

let firtsEvenIndex = sorted.findIndex((element) => element % 2 === 0)
console.log(firtsEvenIndex) // -1 si no lo encuentra

// Sets avanzados

// Condisiones de valores unicos, no hay repetidos
// realizar operaciones de conjuntos, nos vale para eliminar repetidos

const numbersA = [1, 1, 2, 2, 4, 4]
const numbersSet = new Set(numbersA) // sin repeat
console.log(numbersSet)
const clearArray = [...new Set(numbersSet)]
console.log(clearArray)

// Union, interseccion, diferencia

// Union

const setA = new Set([1, 2, 4])
const setB = new Set([4, 6, 8, 12])
const union = new Set([...setA, ...setB]) // spread creacion de un Set con todos los elementos de los sets, limpiando valores repetidos
console.log(union)

// Intersección

const intersection = new Set([...setA].filter((element) => setB.has(element))) // { 4 } repeat
console.log(intersection)

// Diferencia => elementos no repetidos

const difference = new Set([...setA].filter((element) => !setB.has(element)))
console.log(difference) // elementos que estan en setA pero no estan en setB

// Conversión

console.log([...setA]) // no inserta el set, inserta los valores por separados creando un Array

// Set forEach

setA.forEach((element) => console.log(element))

// Maps avanzados

let myMap = new Map([
  ['name', 'luisOrteg'],
  ['age', 27],
])

console.log(myMap)

// firts value, second key

myMap.forEach((value, key) => console.log(`${key}: ${value}`))

// funciones arrow

const addSum = (a, b) => a + b
console.log(addSum(1, 2))

// Conversión
// Map to Array
// String [], string []
const arregloFromMapa = Array.from(myMap)
console.log(arregloFromMapa)

// Diccionario es un objeto: Mapa a object

const objectFromMap = Object.fromEntries(myMap)
console.log(objectFromMap)

// Convertir objeto a Map

const mapFromObject = new Map(Object.entries(objectFromMap))
console.log(mapFromObject)
