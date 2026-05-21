from abc import ABC, abstractmethod

class Pragmatic(ABC):

    @abstractmethod
    def reboot(self) -> None:
        pass

    @abstractmethod
    def recovery(self) -> None:
        pass

    @abstractmethod
    def shutdown(self) -> None:
        pass