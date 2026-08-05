/* testing from sale developer */

let espera = setTimeout((res) => {
    console.log('Sucessful')
}, 4000)

const dataCompany = async () => {
    return new Promise((res) => {
        espera(res)
    })
}

dataCompany()