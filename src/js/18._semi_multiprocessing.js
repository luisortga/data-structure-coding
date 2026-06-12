//

const control = () => {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                r1: 'launch tactical equipment',
                r2: 'shooter',
                l1: 'launch lethal equipment',
                l2: 'aim',
                rectangle: 'change guns',
                circle: 'recharge'
            })
        }, 6000)
    })
}

const threading = async () => {

    try {

        console.log('start...')
        let ps5 = await control()
        print(ps5)

    } catch (error) {
        console.error(error)
    }
}

threading()