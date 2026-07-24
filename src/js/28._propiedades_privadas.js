class Cuenta {
  #saldo
  #info

  constructor(saldo, complemento) {
    this.#saldo = saldo
    this.#info = `codex - ${complemento}`
  }

  comparar(otraCuenta) {
    return this.#saldo > otraCuenta.#saldo
  }

  greeting(otraCuenta) {
    return `${this.#info} and ${otraCuenta.#info} from best duple`
  }
}

const a = new Cuenta(500, 'remi')
const b = new Cuenta(800, 'loki')

console.log(a.comparar(b))
console.log(a.greeting(b))
