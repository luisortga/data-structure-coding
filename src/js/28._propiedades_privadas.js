class Cuenta {
  #saldo

  constructor(saldo) {
    this.#saldo = saldo
  }

  comparar(otraCuenta) {
    return this.#saldo > otraCuenta.#saldo
  }
}

const a = new Cuenta(500)
const b = new Cuenta(800)

console.log(a.comparar(b))
