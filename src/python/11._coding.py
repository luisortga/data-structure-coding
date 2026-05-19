# start
from abc import ABC, abstractmethod
from root import Pragmatic

class Ortogonalidad(Pragmatic, ABC):

    def __init__(self) -> None:
        print('Aplicar los consejos de Ortogonalidad')

    @abstractmethod
    def query(cls) -> None:
        pass

    @staticmethod
    def build(count: int) -> int:
        return 0

    @classmethod
    def reboot(cls) -> None:
        print('Reinicio del metodo abstracto')

    @abstractmethod
    def recovery(cls) -> None:
        print('Recuperación del metodo abstracto')

    @abstractmethod
    def shutdown(cls) -> None:
        print('Apagar el metodo abstracto')

class Running(Ortogonalidad):
    
    __conteiner: str = 'docker'
    count: int = 0
    def __init__(self) -> None:
        super().__init__()
        print('En ejecucion el objeto con sus herencias')

    @staticmethod
    def counter() -> int:
        Running.count += 1
        return Running.count
    
    @property
    def conteiner(self) -> str:
        return self.__conteiner
    
    @conteiner.setter
    def conteiner(self, conteiner: str) -> None:
        self.__conteiner = conteiner

    @abstractmethod
    def query(cls) -> None:
        pass

    @classmethod
    def reboot(cls) -> None:
        print('Reinicio del metodo abstracto')

    @abstractmethod
    def recovery(cls) -> None:
        print('Recuperación del metodo abstracto')

    @abstractmethod
    def shutdown(cls) -> None:
        print('Apagar el metodo abstracto')

# <-- main -->
if __name__ == "__main__":

    Running.counter()
    print(Running.counter())

    # Object
