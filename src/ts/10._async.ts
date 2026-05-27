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