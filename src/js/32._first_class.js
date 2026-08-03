
// callbacks

function greeting(fn) {
    const scripting = 'javascript'
    fn(scripting)
}

function fn(sp) {
    console.log(`Hello World ${sp}`)
}

greeting(fn) // call

function posibleName(namee) {
    return namee + 'sort'
}

let surname = posibleName('luis~')
console.log(surname)

// course first class citizen

const greet = function (name) {
    console.log(`Hola, ${name}`)
}

greet('luis') // call

function processGreeting(greetfn, name) {
    greetfn(name)
}

function returnGting(name) {
    return greet
}

processGreeting(greet, 'joker')

const greetTwo = returnGting()

greetTwo('Johaness') // call

/*

processGreeting(greet (name){ console.log(`Hola, ${name}`) }, 'joker')

greet(name) {}

*/

// Arrow function advanced

const mifun = function() {
    console.log('funcion desde variable hey')
}

mifun()

setTimeout(function() { console.log(`Despues de 6 seg`) }, 6000)

function unpacking(fn) {
    fn()
}

unpacking(function() { console.log(`Runner`) })