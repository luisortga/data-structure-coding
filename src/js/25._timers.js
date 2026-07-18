// EJEMPLOS: setInterval y setImmediate en Node.js

console.log('=== EJEMPLO 1: setInterval ===')
console.log('setInterval ejecuta código cada X milisegundos\n')

// setInterval: ejecuta función cada 2000ms (2 segundos)
let contador = 0
const intervalo = setInterval(() => {
  contador++
  console.log(`Ejecución ${contador} a las ${new Date().toLocaleTimeString()}`)

  // Detenemos el intervalo después de 3 ejecuciones
  if (contador === 3) {
    clearInterval(intervalo) // Esto detiene el intervalo
    console.log('Intervalo detenido!\n')
  }
}, 2000) // Ejecuta cada 2000 milisegundos

// ============================================

setTimeout(() => {
  console.log('=== EJEMPLO 2: setImmediate ===')
  console.log(
    'setImmediate ejecuta código en la siguiente fase del event loop\n',
  )

  // setImmediate: ejecuta después de I/O
  setImmediate(() => {
    console.log('Esto se ejecuta en setImmediate')
  })

  console.log('Esto se ejecuta de inmediato (sincrónico)\n')
}, 7000) // Esperamos a que termine el intervalo anterior

// ============================================

setTimeout(() => {
  console.log('=== EJEMPLO 3: Comparación setTimeout vs setImmediate ===')
  console.log('Orden de ejecución en Node.js:\n')

  console.log('1. Código sincrónico')

  setTimeout(() => {
    console.log('3. setTimeout (retraso 0ms)')
  }, 0)

  setImmediate(() => {
    console.log('4. setImmediate')
  })

  Promise.resolve().then(() => {
    console.log('2. Promise (microtask)')
  })

  console.log('1. Fin del código sincrónico\n')
}, 10000)

// ============================================

setTimeout(() => {
  console.log('=== EJEMPLO 4: Uso práctico - Contador con setInterval ===\n')

  let segundos = 0
  const maxSegundos = 5

  const reloj = setInterval(() => {
    segundos++
    console.log(`Tiempo: ${segundos}s`)

    if (segundos === maxSegundos) {
      clearInterval(reloj)
      console.log(`¡Llegamos a ${maxSegundos} and ${segundos} segundos!\n`)
    }
  }, 1000)
}, 16000)

// ============================================

setTimeout(() => {
  console.log('=== EJEMPLO 5: setImmediate con callback ===\n')

  function procesarDatos(nombre) {
    console.log(`Procesando datos para: ${nombre}`)
  }

  // Podemos pasar argumentos a setImmediate
  setImmediate(procesarDatos, 'Usuario1')
  setImmediate(procesarDatos, 'Usuario2')
  setImmediate(procesarDatos, 'Usuario3')

  console.log('Datos encolados para procesamiento\n')
}, 22000)

// ============================================

setTimeout(() => {
  console.log('=== EJEMPLO 6: Limpieza - clearInterval ===\n')

  let click = 0

  // Simulamos clicks de usuario
  const simuladorClicks = setInterval(() => {
    click++
    console.log(`Click #${click}`)

    // Detenemos después del 4to click
    if (click === 4) {
      clearInterval(simuladorClicks)
      console.log('Intervalo cancelado - máximo de clicks alcanzado\n')
    }
  }, 500)
}, 28000)

// ============================================

setTimeout(() => {
  console.log('=== EJEMPLO 7: setImmediate en operaciones I/O ===\n')

  // En Node.js, setImmediate es muy útil después de operaciones de I/O
  const fs = require('fs')

  // Simulamos lectura de archivo (I/O operation)
  console.log('Iniciando lectura de archivo...')

  fs.readFile(__filename, (err, data) => {
    if (err) {
      console.error(err)
      return
    }

    console.log(`Archivo leído: ${data.length} bytes`)

    // setImmediate aquí es útil para procesar después de I/O
    setImmediate(() => {
      console.log('Procesando archivo después de I/O...')
      console.log('Este es un caso de uso perfecto para setImmediate\n')
    })
  })
}, 34000)
