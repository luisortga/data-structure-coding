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

import { promises as fs } from 'fs' // Versión con promesas

app.get('/usuario/:id', function(req, res) {
  Promise.all([
    fs.readFile('usuarios.json', 'utf8'),
    fs.readFile('historial.json', 'utf8'),
    fs.readFile('prefs.json', 'utf8')
  ])
  .then(([usuarios, historial, prefs]) => {
    res.json({ usuarios, historial, prefs });
  })
  .catch(err => {
    res.status(500).send("Error");
  });
});