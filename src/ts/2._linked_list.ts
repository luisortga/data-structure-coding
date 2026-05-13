// Estructura de datos
/** Linked List */

class Nodos {
    valor: number;
    siguiente: Nodos | null;

    constructor(valor: number) {
        this.valor = valor;
        this.siguiente = null;
    }
}

class ListaEnlace {
    cabeza: Nodos | null;

    constructor() {
        this.cabeza = null;
    }

    agregarAlInicio(valor: number): void {
        const nuevo = new Nodos(valor);

        nuevo.siguiente = this.cabeza;
        this.cabeza = nuevo;
    }
}

const linked = new ListaEnlace();

linked.agregarAlInicio(24);
linked.agregarAlInicio(18);
linked.agregarAlInicio(16);

console.log(linked.cabeza?.valor);