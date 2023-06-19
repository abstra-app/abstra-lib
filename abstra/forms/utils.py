import json

from typing import Dict


def deserialize(string: str) -> Dict:
    return json.loads(string)


def serialize(obj: Dict) -> bytes:
    return bytes(json.dumps(obj, allow_nan=False), "UTF-8")


def get_single_value(answer: Dict):
    return list(answer.values())[0]
