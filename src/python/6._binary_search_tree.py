# Estructura de datos
# Binary Search Tree

class Node:
    def __init__(self, valor: int) -> None:
        self.valor = valor
        self.izquierdo: Node | None = None
        self.derecho: Node | None = None


class BinarySearchTree:

    def __init__(self) -> None:
        self.raiz: Node | None = None

    def insertar(self, valor: int) -> None:
        self.raiz = self._insertar(self.raiz, valor)

    def _insertar(self, nodo: Node | None, valor: int) -> Node :
        if nodo is None:
            return Node(valor)
        
        if valor < nodo.valor:
            nodo.izquierdo = self._insertar(nodo.izquierdo, valor)
        else:
            nodo.derecho = self._insertar(nodo.derecho, valor)
        
        return nodo
    
arbolBinario = BinarySearchTree()
for v in [500, 300, 700, 200, 400, 600, 800]:
    arbolBinario.insertar(v)

# mostrar en consola
def mostrar_arbol(nodo: Node | None, nivel: int = 0) -> None:
    if nodo is not None:
        mostrar_arbol(nodo.derecho, nivel + 1)
        print(' ' * 4 * nivel + '-> ' + str(nodo.valor))
        mostrar_arbol(nodo.izquierdo, nivel + 1)


mostrar_arbol(arbolBinario.raiz)
