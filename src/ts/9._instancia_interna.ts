// Clase con instancia interna

class Auto {

    public brand: string = ""
    protected color: string = ""
    public isParked: boolean = false
    constructor(marca: string, color: string) {
        this.brand = marca
        this.color = color
    }

    info(): void {
        this.isParked = true
        console.log(`${this.brand} se ha estacionado`)
    }

    showParking() {
        this.info()
        
        const cocheVecino = new Auto('aston martin', 'verde')
        const cocheVecinoTwo = new Auto('alfa romeo', 'rojo')
        const cocheVecinoThree = new Auto('w motors', 'negro')

        cocheVecino.isParked = true
        cocheVecinoTwo.isParked = true
        cocheVecinoThree.isParked = true
        let estacionamiento: Auto[] = [cocheVecino, cocheVecinoTwo, cocheVecinoThree]

        for (let auto of estacionamiento) {
            console.log(auto)
        }
    }
}

const coche = new Auto('cadillac', 'azul')
let park = coche.showParking()