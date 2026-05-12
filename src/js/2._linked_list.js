// Estructura de datos
/** Linked List */

/** @class */
class Nodo {
    /** @type {string} */
    constructor(valor) {
        this.valor = valor;
        this.siguiente = null;
    }
}

class ListaEnlazada {
    /** @type {null} */
    constructor() {
        this.cabeza = null;
    }


    agregarAlInicio(valor) {
        /** @type {Object} */
        const nuevo = new Nodo(valor);
        nuevo.siguiente = this.cabeza;
        this.cabeza = nuevo;
    }
}

const linkedLista = new ListaEnlazada();
linkedLista.agregarAlInicio(24);
linkedLista.agregarAlInicio(18);
linkedLista.agregarAlInicio(16);

console.log(linkedLista.cabeza.valor);