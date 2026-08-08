
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

// setTimeout(function() { console.log(`Despues de 6 seg`) }, 6000)
// MacroTask Thrid priority

function unpacking(fn) {
    fn()
}

unpacking(function() { console.log(`Runner`) })

// Arrow

const mfun3 = (name) => {
    console.log(`heey ${name}`)
}

// 2 caracteristicas, arrow con retorno implicito

let multiply = (a, b) => a * b // return implicit - not return
console.warn(multiply(12, 24))

const namee = 'melissa'

// this léxico
const handler = {
    namee: "joseph",
    greeting: function() {
        console.log(`Hola, ${this.namee}`)
    },
    arrowGtin: () => {
        console.log(`Hola, ${this.namee}`)
    }
}

// what is this?

/*

this = {

}

object === this

*/

handler.greeting()
handler.arrowGtin(); // undefined: arrow su propio contexto, quitar contexto dejar

// IIFE (Expresión de fn inviked inmediatamente) fn entre (fn)

    (function() {
        console.log('Es verdadero')
    })();

    (() => {
        console.log('new callback')
    })()

    // parametros Rest (...)

    function sum(...numbers) {
        let result = 0
        for (let nm of numbers) {
            result += nm
        }
        return result
    }

    console.log(sum(12, 24, 36)) // [?, ?, ?] ... is array argument
    console.log(sum(2, 4)) // [?, ?] parametros rest ...

    // Operator Spread (...)
    // expandir un elemento en un array

    const numbers = [2, 6, 8]
    function fnSum(a, b, c) {
        return a+b+c
    }

    console.log(fnSum(...numbers)) // py : *numbers, unpackage

    // NaN si tiene menos, if less Not a Number

    // Closures (clausuras)

    
    function createCounter() {
        let counter = 0
        return function() {
            counter++
            console.log(`Counter: ${counter}`)
        }
    }

    const counter = createCounter()
    counter()
    counter()
    counter()
    counter()

    // Recursividad

    function factorial(n) {
        if (n < 2) {
            return 1
        } else {
            return n * factorial(n - 1)
        }
    }

    console.log(factorial(5))

    // funciones parciales

    function partialSum(a) {
        return function(b, c) {
            return sum(a, b, c)
        }
    }

// a | b | c
// 24 | number | number

const sumWith = partialSum(24)
console.log(sumWith(12, 16))
console.log(sumWith(1, 2))

// Currying

function curSum(a) {
    return function(b) {
        return function (c) {
            return sum(a,b,c)
        }
    }
}

const codex = curSum(12)(16)
console.log(codex(24))
console.log(codex(8))

function marvel(hro1) {
    return function(hro2) {
        return function (hro3) {
            if (hro3 !== '') {
                return `${hro1} vs ${hro2} and challenger is ${hro3}`
            } else {
                return `${hro1} vs ${hro2}`
            }
        }
    }
}

const spidy = marvel('spiderman')
const battle = spidy('jeam grey')
console.log(battle('punisher'))

console.log(battle(''))