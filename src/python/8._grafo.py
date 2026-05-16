# from collections import deque


class Grafo:
    def __init__(self, dirigido: bool = False):
        self.adyacencia = {}      # Diccionario: nodo → lista de vecinos
        self.dirigido = dirigido
    
    