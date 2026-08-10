// Structure advanced

// Arrays avanzados - methods

let cars = ["beantley", "aston martin", "mini", "mc laren", "rolls roys"]

console.log('Reino Unido')
cars.forEach(element => {
    console.log(element)  
})

// map : mapear una colección

let present = cars.map(element => `car is ${element}` )
console.log(present)

cars.push('ac cars')

// filter

let clocking = cars.filter(element => element.length >= 6)
console.log(clocking)

// reduce : only array number

// Manipulación

// flat : aplanar