const express = require('express')
const crypto = require('node:crypto')
const movies = require('./movies.json')
const z = require('zod')
const { validateMovie, validatePartialMovie } = require('./Schemas/movies')

const app = express()
app.use(express.json())
app.disable('x-powered-by') // desabilitar

const acceptedOrigins = [
  'http://localhost:8080',
  'http://localhost:8081',
  'http://localhost:1234',
  'http://movies.com'
]

// Todos los recursos que sean MOVIES se identifica con /movies
app.get('/movies', (req, res) => {
  const origin = req.header('origin')
  // cuando la peticion es del mismo ORIGIN
  // http://localhost:1234 -> http://localhost:1234
  if (acceptedOrigins.includes(origin)) {
  res.header('Access-Control-Allow-Origin', '*') // todos los origenes estan permitidos
  }

  const { genre } = req.query
  if (genre) {
    //
    const filteredMovies = movies.filter(
      movies => movie.genre.some(g => g.toLowerCase() === genre.toLowerCase()) // asegurar la comparacion todo en miniscula
    )
    return res.json(filteredMovies)
  }
  res.json(movies)
})

app.get('/movies/:id', (req, res) => {
  // path to regex
  const { id } = req.params
  const movie = movies.find((movies) => movies.id === id)
  if (movie) return res.json(movie)

  res.status(404).json({ message: 'Movie not found' })
})

app.post('/movies', (req, res) => {

  // validate
  
  const result = validateMovie(req, req.body)
  
  if (result.error) {
    // 422 specific
    return res.status(400).json({ error: JSON.parse(result.error.message) })
  }

  // en base de datos
  const newMovie = {
    id: crypto.randomUUID(), // uuid v4
    ...result.data
  }

  // Esto no sería REST, porque estamos guardando
  // El estado de la aplicación en memoria

  movies.push(newMovie) // actualizar la caché del cliente

  res.status(201).json(newMovie)
})

app.patch('/movies/:id', (req, res) => {
  const result = validatePartialMovie(req.body)

  if (!result.success) {
    return res.status(400).json({ error: JSON.parse(result.error.nessage) })
  }
  
  const { id } = req.params
  const movieIndex = movies.findIndex(movie => movie.id === id)

  if (movieIndex === -1) {
     return res.status(404).json({ message: 'Movie not found' })
  }

  const updateMovie = {
    ...movies[movieIndex],
    ...result.data
  }
})

const PORT = process.env.PORT ?? 1234

app.listen(PORT, () => {
  console.log(`server listening on port http://localhost:${PORT}`)
})
