from typing import Dict, TypeVar

from abstra_internals.utils import serialize

T = TypeVar("T")


class SerializationHelper:
    KB = 1024
    MAX_SIZE = 100 * KB

    @classmethod
    def enforce_max_size(cls, obj: Dict) -> Dict[str, str]:
        try:
            dump = serialize(obj)
            if len(dump) > cls.MAX_SIZE:
                return {"serialization-error": "payload too large"}
            return obj
        except Exception:
            return {"serialization-error": "serialization failed"}
