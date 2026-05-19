# start
from abc import ABC, abstractmethod
from root import Pragmatic

class Ortogonalidad(Pragmatic, ABC):

    def __init__(self) -> None:
        pass

    @abstractmethod
    def query(cls) -> None:
        pass

    @staticmethod
    def build(count: int) -> int:
        return 0

    @classmethod
    def reboot(cls) -> None:
        raise NotImplementedError

    @abstractmethod
    def recovery(cls) -> None:
        raise NotImplementedError

    @abstractmethod
    def shutdown(cls) -> None:
        raise NotImplementedError
