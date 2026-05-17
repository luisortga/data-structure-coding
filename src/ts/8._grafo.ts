

class Grafo {

    dirigido: boolean = false;
    adyacencia: { [key: string]: string[] } = {};
    constructor(dirigido: boolean = false) {
        this.dirigido = dirigido;
    }

    protected agregar_nodo(nodo: string) : void {
        if (nodo in this.adyacencia) {
            this.adyacencia[nodo] = [];
        }
    }

    agregar_artista(origen: string, destino: string) : void {
        this.agregar_nodo(origen);
        this.agregar_nodo(destino);
        this.adyacencia[origen].push(destino);
        if (!this.dirigido) {
            this.adyacencia[destino].push(origen)
        }
    }
}