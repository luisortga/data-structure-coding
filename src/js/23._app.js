const express = require('express')

const app = express()
app.disable('x-powered-by') // desabilitar

app.get('/', (req, res) => {
  res.json({ message: 'hola mundo' })
})
