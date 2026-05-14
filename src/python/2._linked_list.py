"""
@author: luis
Estructura de datos
Linked List
"""

from typing import Optional

class Nodo:

    def __init__(self, valor: int):
        self.valor = valor
        self.siguiente: Optional[Nodo]

    def __repr__(self) -> str:
         return f"Nodo({self.valor})"


class ListaEnlace:
    cabeza: Optional[Nodo]

    def __init__(self):
        self.cabeza: Optional[Nodo] = None

    
    def agregarAlInicio(self, valor: int) -> None:
        """Agrega un nuevo nodo al inicio de la lista enlazada."""
        nuevo = Nodo(valor)

        nuevo.siguiente = self.cabeza
        self.cabeza = nuevo

# MAIN
if __name__ == "__main__":
        linked = ListaEnlace()
        linked.agregarAlInicio(24)
        linked.agregarAlInicio(18)
        linked.agregarAlInicio(16)

        print(linked.cabeza.valor if linked.cabeza else None)