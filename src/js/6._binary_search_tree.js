// Estructura de datos
/** Binary Search Tree */


class Nodo {
    constructor(valor) {
        /** @type {string} */
        this.valor = valor;
        this.izquierdo = null;
        this.derecho = null;
    }
}

class Arbol {
    constructor() {
        this.raiz = null;
    }

    insertar(valor) {
        this.raiz = this._insertar(this.raiz, valor);
    }


    _insertar(nodo, valor) {
        if (nodo === null) {
            return new Nodo(valor);
        }
        if (valor < nodo.valor) {
            nodo.izquierdo = this._insertar(nodo.izquierdo, valor);
        } else {
            nodo.derecho = this._insertar(nodo.derecho, valor);
        }
        return nodo;
    }
}


const arbol = new Arbol();

// insertar valores de numeros
arbol.insertar(50);
arbol.insertar(30);
arbol.insertar(70);
arbol.insertar(20);
arbol.insertar(40);
arbol.insertar(60);
arbol.insertar(80);
console.log(arbol);