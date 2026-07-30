const fs = require('fs').promises // Versión con promesas

app.get('/usuario/:id', function(req, res) {
  Promise.all([
    fs.readFile('usuarios.json', 'utf8'),
    fs.readFile('historial.json', 'utf8'),
    fs.readFile('prefs.json', 'utf8')
  ])
  .then(([usuarios, historial, prefs]) => {
    res.json({ usuarios, historial, prefs })
  })
  .catch(err => {
    res.status(500).send("Error")
  })
})// add promesas y async await
