# Iteradores y el protocolo de iteración de python

class Contador:
    
    def __init__(self, limite: int) -> None:
        self.limite = limite
        self.actual: int = 1
        
    def __iter__(self):
        return self
    
    def __next__(self):
        if self.actual > self.limite:
            raise StopIteration
        
        valor = self.actual
        self.actual += 1
        return valor

my_list: list[int] = [10, 20, 30, 40, 50]

mi_marcador = iter(my_list)
print(mi_marcador)
print(next(mi_marcador))
print(next(mi_marcador))
print(next(mi_marcador))
print(next(mi_marcador))

count = Contador(5)