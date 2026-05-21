// multi hilos de procesamiento
// Promise() and async

function steponePromise() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log('Paso 1 completado. promise')
            resolve()
        }, 1000)
    })
}

function steptwoPromise() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log('Paso 2 completado. promise')
            resolve()
        }, 1000)
    })
}

function stepthreePromise() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log('Paso 3 completado. promise')
            resolve()
        }, 1000)
    })
}

steponePromise().then(steptwoPromise).then(stepthreePromise).then(() => {
    console.log('Todos las promesas con promesa completados.')
})

// mas facil de entender y de mantener con las promesas

// Async/Await: forma más moderna se a incorporado en diferentes lenguajes

function wait(ms) {
    return new Promise(resolve => setTimeout(resolve,ms))
}

// transformar funcion sincrona en asyncrona: async function
// async se crea pero sin pedir que espere, para darle instrucciones de timmer usar palabra reservada:: await

async function process() {

    console.log(`inicia await`)

    await wait(6000)
    console.log(`proceso despues de 6 segundos`)

    await wait(2000)
    console.log(`proceso despues de 2 segundos`)

    await wait(3000)
    console.log(`proceso despues de 3 segundos`)

    console.log(`fin del proceso`)

}

process()