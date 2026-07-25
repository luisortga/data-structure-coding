// ============================================
// EJEMPLOS DE PIPELINES EN JAVASCRIPT/NODE.JS
// Ejecuta con: node ejemplos-pipelines.js
// ============================================

console.log('═══════════════════════════════════════')
console.log('  EJEMPLOS DE PIPELINES EN JAVASCRIPT')
console.log('═══════════════════════════════════════\n')

// ============================================
// 1. PIPELINES BÁSICOS CON FUNCIONES
// ============================================

console.log('--- 1. PIPELINES BÁSICOS ---\n')

// Función pipe: encadena funciones izquierda a derecha
const pipe = (...funciones) => {
  return (valor) => funciones.reduce((v, f) => f(v), valor)
}

const sumar5 = (x) => {
  console.log(`  → Sumar 5: ${x} + 5 = ${x + 5}`)
  return x + 5
}

const multiplicarPor2 = (x) => {
  console.log(`  → Multiplicar por 2: ${x} * 2 = ${x * 2}`)
  return x * 2
}

const restarEn3 = (x) => {
  console.log(`  → Restar 3: ${x} - 3 = ${x - 3}`)
  return x - 3
}

console.log('Empezamos con: 10')
const miPipeline = pipe(sumar5, multiplicarPor2, restarEn3)
const resultado1 = miPipeline(10)
console.log(`Resultado final: ${resultado1}\n`)

// ============================================
// 2. PIPELINES CON ARRAYS
// ============================================

console.log('--- 2. PIPELINES CON ARRAYS ---\n')

const numeros = [1, 2, 3, 4, 5]
console.log('Array original:', numeros)

const resultado2 = numeros
  .map((n) => {
    const multiplicado = n * 2
    console.log(`  map: ${n} → ${multiplicado}`)
    return multiplicado
  })
  .filter((n) => {
    const pasa = n > 5
    if (pasa) console.log(`  filter: ${n} ✓`)
    else console.log(`  filter: ${n} ✗`)
    return pasa
  })

console.log('Resultado:', resultado2)
console.log('')

// ============================================
// 3. EJEMPLO PRÁCTICO: PROCESAMIENTO DE USUARIOS
// ============================================

console.log('--- 3. EJEMPLO: PROCESAMIENTO DE USUARIOS ---\n')

const usuarios = [
  { nombre: 'Ana', edad: 25, ciudad: 'Madrid', salario: 1200 },
  { nombre: 'Bob', edad: 30, ciudad: 'Barcelona', salario: 1500 },
  { nombre: 'Carlos', edad: 22, ciudad: 'Madrid', salario: 800 },
  { nombre: 'Diana', edad: 28, ciudad: 'Valencia', salario: 1400 },
  { nombre: 'Eva', edad: 26, ciudad: 'Madrid', salario: 1100 },
]

console.log('Usuarios:', usuarios)
console.log('\nFiltrar Madrid, ordenar por edad, obtener nombres:')

const madrilenos = usuarios
  .filter((u) => {
    if (u.ciudad === 'Madrid') {
      console.log(`  ✓ ${u.nombre} (Madrid)`)
      return true
    }
    return false
  })
  .sort((a, b) => a.edad - b.edad)
  .map((u) => {
    console.log(`  → ${u.nombre} (${u.edad} años)`)
    return u.nombre
  })

console.log('Resultado:', madrilenos)
console.log('')

// ============================================
// 4. PIPELINE PERSONALIZADO (PARECIDO A RxJS)
// ============================================

console.log('--- 4. PIPELINE PERSONALIZADO ---\n')

class DataPipeline {
  constructor(datos) {
    this.datos = datos
    console.log('Inicializar pipeline con:', datos)
  }

  map(fn) {
    console.log('  [map]')
    this.datos = this.datos.map(fn)
    return this
  }

  filter(fn) {
    console.log('  [filter]')
    this.datos = this.datos.filter(fn)
    return this
  }

  reduce(fn, inicial) {
    console.log('  [reduce]')
    this.datos = fn(this.datos, inicial)
    return this
  }

  resultado() {
    return this.datos
  }
}

const resultado4 = new DataPipeline([1, 2, 3, 4, 5])
  .map((n) => n * 2)
  .filter((n) => n > 5)
  .reduce((acc, n) => acc + n, 0)

console.log('Resultado:', resultado4.resultado())
console.log('')

// ============================================
// 5. TRABAJAR CON OBJETOS COMPLEJOS
// ============================================

console.log('--- 5. OBJETOS COMPLEJOS ---\n')

const pedidos = [
  {
    id: 1,
    cliente: 'Cliente A',
    items: [
      { producto: 'Laptop', precio: 800, cantidad: 1 },
      { producto: 'Mouse', precio: 25, cantidad: 2 },
    ],
  },
  {
    id: 2,
    cliente: 'Cliente B',
    items: [{ producto: 'Teclado', precio: 50, cantidad: 1 }],
  },
  {
    id: 3,
    cliente: 'Cliente C',
    items: [
      { producto: 'Monitor', precio: 300, cantidad: 1 },
      { producto: 'Webcam', precio: 80, cantidad: 1 },
    ],
  },
]

console.log('Calcular el total de cada pedido y filtrar > 500:\n')

const pedidosFiltrados = pedidos
  .map((pedido) => {
    const total = pedido.items.reduce((sum, item) => {
      return sum + item.precio * item.cantidad
    }, 0)
    return { ...pedido, total }
  })
  .filter((pedido) => {
    console.log(`  Pedido #${pedido.id} (${pedido.cliente}): $${pedido.total}`)
    return pedido.total > 500
  })
  .map((pedido) => ({
    id: pedido.id,
    cliente: pedido.cliente,
    total: pedido.total,
  }))

console.log('\nPedidos > $500:')
console.log(pedidosFiltrados)
console.log('')

// ============================================
// 6. OPERADORES PERSONALIZADOS
// ============================================

console.log('--- 6. OPERADORES PERSONALIZADOS ---\n')

// Crea tus propios operadores
const operadores = {
  // Duplica valores
  duplicar: (arr) => arr.map((x) => x * 2),

  // Solo impares
  soloImpares: (arr) => arr.filter((x) => x % 2 !== 0),

  // Solo pares
  soloPares: (arr) => arr.filter((x) => x % 2 === 0),

  // Suma todos
  sumarTodos: (arr) => arr.reduce((sum, x) => sum + x, 0),

  // Promedio
  promedio: (arr) => operadores.sumarTodos(arr) / arr.length,

  // Cuadrado
  alCuadrado: (arr) => arr.map((x) => x * x),
}

const nums = [1, 2, 3, 4, 5]
console.log('Array inicial:', nums)
console.log('Duplicar:', operadores.duplicar(nums))
console.log('Solo impares:', operadores.soloImpares(nums))
console.log('Solo pares:', operadores.soloPares(nums))
console.log('Suma:', operadores.sumarTodos(nums))
console.log('Promedio:', operadores.promedio(nums).toFixed(2))
console.log('Al cuadrado:', operadores.alCuadrado(nums))
console.log('')

// ============================================
// 7. PIPELINE ENCADENADO CON OPERADORES
// ============================================

console.log('--- 7. PIPELINE ENCADENADO ---\n')

const pasoApaso = [1, 2, 3, 4, 5]
console.log('0. Inicial:', pasoApaso)

const paso1 = operadores.duplicar(pasoApaso)
console.log('1. Duplicar:', paso1)

const paso2 = operadores.soloPares(paso1)
console.log('2. Solo pares:', paso2)

const paso3 = operadores.alCuadrado(paso2)
console.log('3. Al cuadrado:', paso3)

const paso4 = operadores.sumarTodos(paso3)
console.log('4. Sumar:', paso4)

// O todo junto:
console.log('\nMismo resultado todo junto:')
const resultadoFinal = operadores.sumarTodos(
  operadores.alCuadrado(operadores.soloPares(operadores.duplicar(nums))),
)
console.log('Resultado:', resultadoFinal)
console.log('')

// ============================================
// 8. REDUCE - EL OPERADOR MÁS PODEROSO
// ============================================

console.log('--- 8. REDUCE (El Operador Poderoso) ---\n')

const datos = [1, 2, 3, 4, 5]

// Reduce para SUMAR
const suma = datos.reduce((acc, n) => acc + n, 0)
console.log('Sumar:', suma)

// Reduce para MULTIPLICAR
const producto = datos.reduce((acc, n) => acc * n, 1)
console.log('Multiplicar:', producto)

// Reduce para crear OBJETO
const conteo = ['a', 'b', 'a', 'c', 'b', 'a'].reduce((acc, letra) => {
  acc[letra] = (acc[letra] || 0) + 1
  return acc
}, {})
console.log('Contar ocurrencias:', conteo)

// Reduce para AGRUPAR
const numsPorParidad = [1, 2, 3, 4, 5, 6].reduce((acc, n) => {
  const tipo = n % 2 === 0 ? 'pares' : 'impares'
  if (!acc[tipo]) acc[tipo] = []
  acc[tipo].push(n)
  return acc
}, {})
console.log('Agrupar por paridad:', numsPorParidad)
console.log('')
