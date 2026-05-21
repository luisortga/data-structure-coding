# start
from abc import ABC
from root import Pragmatic

class Ortogonalidad(Pragmatic, ABC):

    def __init__(self) -> None:
        print('Aplicar los consejos de Ortogonalidad')

    def query(self) -> None:
        pass

    @staticmethod
    def build(count: int) -> int:
        return count+16

    def reboot(self) -> None:
        print('Reinicio del metodo abstracto')

    def recovery(self) -> None:
        print('Recuperación del metodo abstracto')

    def shutdown(self) -> None:
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

    def reboot(self) -> None:
        print('Reinicio del metodo abstracto')

    def query(self) -> None:
        print('Consulta a la base de datos')

    def recovery(self) -> None:
        print('Recuperación del metodo abstracto')

    def shutdown(self) -> None:
        print('Apagar el metodo abstracto')

    @property
    def conteiner(self) -> str:
        return self.__conteiner
    
    @conteiner.setter
    def conteiner(self, conteiner: str) -> None:
        self.__conteiner = conteiner

# <-- main -->
if __name__ == "__main__":

    # static
    Running.counter() # 1
    Running.counter() # 2
    Running.counter() # 3
    Running.counter() # 4
    print(Running.counter()) # 5

    # Object
    run = Running()
    run.reboot()
    run.recovery()
    print(run.conteiner)