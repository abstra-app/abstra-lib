from abc import abstractmethod, ABC


class JSONable(ABC):
    @abstractmethod
    def json(self, **kwargs):
        pass


class Input(JSONable):
    type: str

    def __init__(self, key: str) -> None:
        super().__init__()
        self.key = key

    @abstractmethod
    def convert_answer(self, answer):
        pass


class Output(JSONable):
    type: str
