from abc import abstractmethod, ABC


class Input(ABC):
    type: str

    def __init__(self, key: str) -> None:
        super().__init__()
        self.key = key

    @abstractmethod
    def json(self, **kwargs):
        pass

    @abstractmethod
    def convert_answer(self, answer):
        pass


class Output(ABC):
    type: str

    @abstractmethod
    def json(self, **kwargs):
        pass
