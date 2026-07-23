// no recomendado utilizar var in Js
// No utilizar var en javascript moderno
// Hoisting

console.log(team)
console.log(squad)
var team = 'BBVB'

console.log(team)

if (true) {
  var squad = 'Deberia de tener solo este alcance local.'
}

console.log(squad)

var squad = 'nuevo cambio'
console.log(squad)
