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
        })
    })
}