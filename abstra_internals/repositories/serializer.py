import json
from typing import Union, TypeVar

T = TypeVar("T")


class SerializationHelper:
    KB = 1024
    MAX_SIZE = 100 * KB

    @classmethod
    def enforce_max_size(cls, obj: T) -> Union[T, str]:
        try:
            dump = json.dumps(obj)
            if len(dump) > cls.MAX_SIZE:
                return "[abstra] payload too large"
            return obj
        except Exception:
            return "[abstra] serialization error"
