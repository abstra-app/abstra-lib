import threading
from typing import Dict, Generic, Optional, TypeVar

ValueType = TypeVar("ValueType")


class PThreadStore(Generic[ValueType]):
    def __init__(self):
        self.items: Dict[int, ValueType] = {}

    def pthread_id(self) -> int:
        return threading.get_ident()

    def set(self, value: ValueType) -> None:
        self.items[self.pthread_id()] = value

    def get(self) -> Optional[ValueType]:
        return self.items.get(self.pthread_id())

    def clear(self) -> None:
        self.items.pop(self.pthread_id(), None)
