from abc import ABC, abstractmethod


class Resource(ABC):
    @staticmethod
    @abstractmethod
    def list(*args, **kwargs):
        pass

    @staticmethod
    @abstractmethod
    def add(*args, **kwargs):
        pass

    @staticmethod
    @abstractmethod
    def remove(*args, **kwargs):
        pass
