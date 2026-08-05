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

/*
app.post('/login', (req, res) => {})
app.post('/register', (req, res) => {})
app.post('/logout', (req, res) => {})

app.post('/protected', (req, res) => {})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
*/