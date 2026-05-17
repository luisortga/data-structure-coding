// Clase con instancia interna

class Coche {

    constructor(marca, color) {
        /** @type {string} */
        this.brand = marca
        /** @type {string} */
        this.color = color
        /** @type {string} */
        this.isParked = false
    }

    info() {
        this.isParked = true
        console.log(`${this.brand} se ha estacionado`)

        console.log('Coches estacionados')
    }

    showParking() {
        this.info()
        // instancias de objetos de la misma clase
        const cocheVecino = new Coche('zenvo', 'rojo')
        const cocheVecinoTwo = new Coche('mini', 'blanco')
        const cocheVecinoThree = new Coche('mazda', 'naranja')

        cocheVecino.isParked = true
        cocheVecinoTwo.isParked = true 
        cocheVecinoThree.isParked = true
        /** @type {Coche[]} */
        let estacionamiento = [cocheVecino, cocheVecinoTwo, cocheVecinoThree]

        for (let auto of estacionamiento) {
            console.log(auto)
        }

        return estacionamiento
    }
}

const cocheMain = new Coche('porsche', 'silver')
// view
/** @type {Coche[]} */
let lugares = cocheMain.showParking()
console.table(lugares)