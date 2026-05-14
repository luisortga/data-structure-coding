// Estructura de datos
/** Binary Search Tree */

class NodoTree {
    valor: number;
    izquierdo: NodoTree | null;
    derecho: NodoTree | null;

    constructor(valor: number) {
        this.valor = valor;
        this.izquierdo = null;
        this.derecho = null;
    }
}

class Tree {
    raiz: NodoTree | null;

    constructor() {
        this.raiz = null;
    }

    insertar(valor: number) : void {
        // pass
        this.raiz = this._insertar(this.raiz, valor);
    }

    private _insertar(nodo: NodoTree | null, valor: number): NodoTree {
        if (nodo === null) {
            return new NodoTree(valor);
        }

        if (valor < nodo.valor) {
            nodo.izquierdo = this._insertar(nodo.izquierdo, valor);
        } else {
            nodo.derecho = this._insertar(nodo.derecho, valor);
        }

        return nodo;
    }
}

const arbolBinario = new Tree();

// insertar valores numéricos
arbolBinario.insertar(50);
arbolBinario.insertar(30);
arbolBinario.insertar(70);
arbolBinario.insertar(20);
arbolBinario.insertar(40);
arbolBinario.insertar(60);
arbolBinario.insertar(80);

console.log(arbolBinario);
