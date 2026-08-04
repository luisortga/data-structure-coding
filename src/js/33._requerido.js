/* testing from sale developer */

let espera = setTimeout((res) => {
    res(console.log('Sucessful'))
}, 4000)

const dataCompany = async () => {
    return new Promise((res) => {
        espera(res)
    })
}