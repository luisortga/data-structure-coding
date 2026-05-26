// Syncronía

const { resolve } = require("node:dns")

const firts = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log('Hello Node js')
            resolve()
        },2000)
    })
}

let isPay = true

function second() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isPay) {
                console.log('Segundo thread termino y realizo el pago.')
                resolve()
            } else {
                console.log('No se resolvio el pago en el segundo thread')
                reject()
            }
        }, 1000)
    })
}

firts().then(second()).then(() => {
    console.log('Se resolvieron todos los threads')
})

function threaddripper() {
    setTimeout(() => {
        console.log('ADM Ryzen')
    },3000)
}

async function runnable() {


    console.log('start in BASH.')
    await threaddripper()
}

runnable()

function searchUser() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ nombre: "luis", age: 28, videogame: "Forza Horizon 5" })
        }, 1000)
    })
}

async function view() {
    try {
    const user = await searchUser()

    console.log(`Bienvenido usuario: ${user.nombre}`)
    } catch (error) {
        throw new Error(error)
    }
}

view()

let num = 1

let prometeo = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(() => {
            num++
            console.log(`Se resolvio todo correctamente ${num}`)
        })
        reject(() => {
            console.log('algo salio mal.')
        })
    }, 2000)
})

prometeo.then(resolve => {
    resolve()
}).catch(reject => {
    reject()
})

/**@type {number} */
let dato = -24

const waiting = (ms) => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(() => {
                let num = dato
                
                if (num < 0) {
                    num -= (num*2)
                    console.log(`Solucion del numero ${num}.`)
                } else {
                    console.log(`El numero introducido es ${num}.`)
                }
            })
        }, ms)
    } )
}

async function agreed() {

    const response = await waiting(6000)
    response()
    //
} 

agreed()