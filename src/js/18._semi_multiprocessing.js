//

const control = () => {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                r1: '',
                r2: 'shooter',
                l1: '',
                l2: 'apuntar',
                rectangle: 'change guns'
            })
        })
    })
}