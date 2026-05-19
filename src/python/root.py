from abc import ABC, abstractmethod

class Pragmatic(ABC):

    @classmethod
    @abstractmethod
    def reboot(cls) -> None:
        pass

    @abstractmethod
    def recovery(cls) -> None:
        pass

    @abstractmethod
    def shutdown(cls) -> None:
        pass