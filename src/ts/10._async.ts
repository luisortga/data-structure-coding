//

const firtss = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log('Hello Node js')
            resolve
        },2000)
    })
}

let pay: boolean = true

function segundo() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isPay) {
                console.log('Segundo thread termino y realizo el pago.')
                resolve
            } else {
                console.log('No se resolvio el pago en el segundo thread')
                reject()
            }
        }, 1000)
    })
}

firtss().then(segundo).then(() => {
    console.log('Se resolvieron todos los threads')
})

function threadthree() {
    setTimeout(() => {
        console.log('ADM Ryzen')
    },3000)
}

async function corredor() {


    console.log('start in BASH.')
    threadthree()
}

corredor()

let acount: number = -24

const service = (ms: number) => {
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

async function deploy() {

    const response = await service(6000)
    response
    //
} 

deploy()