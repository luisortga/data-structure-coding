const express = require('express')
const crypto = require('node:crypto')
const movies = require('./movies.json')
const z = require('zod')

const app = express()
app.use(express.json())
app.disable('x-powered-by') // desabilitar

// Todos los recursos que sean MOVIES se identifica con /movies
app.get('/movies', (req, res) => {
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
  const movie = movies.find((movie) => movie.id === id)
  if (movie) return res.json(movie)

  res.status(404).json({ message: 'Movie not found' })
})

app.post('/movies', (req, res) => {
  const movieSchema = z.object({
    title: z.string({
      invalid_type_error: 'Movie title must be a string.',
      required_error: 'Movie title is required.',
    }),
    year: z.number().int().min(1900).max(2027),
    director: z.string(),
    duration: z.number().int().positive(),
    rate: z.number().min(0).max(10),
    poster: z.string().url({
      message: 'Poster must be a valid url'
    }), //.endsWith('jpg')
    genre: z.array(
      z.enum(['Action', 'Adventure', 'Comedy', 'Drama', 'Fantasy', 'Horror', 'Thriller', 'Sci-Fi'])
    )
  })
  const {
    title,
    genre,
    year,
    director,
    duration,
    rate,
    poster
  } = req.body

  // security

  const newMovie = {
    id: crypto.randomUUID(), // uuid v4
    title,
    genre,
    year,
    director,
    duration,
    rate: rate ?? 0,
    poster
  }

  // Esto no sería REST, porque estamos guardando
  // El estado de la aplicación en memoria

  movies.push(newMovie) // actualizar la caché del cliente

  res.status(201).json(newMovie)
})

const PORT = process.env.PORT ?? 1234

app.listen(PORT, () => {
  console.log(`server listening on port http://localhost:${PORT}`)
})
