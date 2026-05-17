from collections import deque

class Grafo:
    def __init__(self, dirigido: bool = False) -> None:
        self.adyacencia: dict[str, list[str]] = {}
        self.dirigido: bool = dirigido

    def agregar_nodo(self, nodo: str) -> None:
        if nodo not in self.adyacencia:
            self.adyacencia[nodo] = []

    def agregar_arista(self, origen: str, destino: str) -> None:
        self.agregar_nodo(origen)
        self.agregar_nodo(destino)
        self.adyacencia[origen].append(destino)
        if not self.dirigido:
            self.adyacencia[destino].append(origen)

    def vecinos(self, nodo: str) -> list[str]:
        return self.adyacencia.get(nodo, [])

    def mostrar(self) -> None:
        for nodo, vecinos in self.adyacencia.items():
            print(f"  {nodo} → {vecinos}")

    def bfs(self, inicio: str) -> list[str]:
        visitados: set[str] = set()
        cola: deque[str] = deque([inicio])
        orden: list[str] = []

        while cola:
            nodo: str = cola.popleft()
            if nodo not in visitados:
                visitados.add(nodo)
                orden.append(nodo)
                for vecino in self.adyacencia[nodo]:
                    if vecino not in visitados:
                        cola.append(vecino)

        return orden

    def dfs(self, inicio: str, visitados: set[str] | None = None) -> list[str]:
        if visitados is None:
            visitados = set()

        visitados.add(inicio)
        orden: list[str] = [inicio]

        for vecino in self.adyacencia[inicio]:
            if vecino not in visitados:
                orden += self.dfs(vecino, visitados)

        return orden


# Main
if __name__ == "__main__":
    g = Grafo(dirigido=False)

    g.agregar_arista("A", "B")
    g.agregar_arista("A", "C")
    g.agregar_arista("B", "D")
    g.agregar_arista("C", "D")
    g.agregar_arista("D", "E")

    print("Lista de adyacencia:")
    g.mostrar()

    print("\nBFS desde A:", g.bfs("A"))
    print("DFS desde A:", g.dfs("A"))