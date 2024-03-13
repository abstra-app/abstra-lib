import json
from typing import TypeVar, Dict

T = TypeVar("T")


class SerializationHelper:
    KB = 1024
    MAX_SIZE = 100 * KB

    @classmethod
    def enforce_max_size(cls, obj: Dict) -> Dict[str, str]:
        try:
            dump = json.dumps(obj)
            if len(dump) > cls.MAX_SIZE:
                return {"serialization-error": "payload too large"}
            return obj
        except Exception:
            return {"serialization-error": "serialization failed"}
