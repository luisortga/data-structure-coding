# start
from abc import ABC, abstractmethod

class Ortogonalidad(ABC):

    def __init__(self) -> None:
        pass

    @abstractmethod
    def query(self) -> None:
        pass

    @staticmethod
    def build(count: int) -> int:
        return 0 # pass