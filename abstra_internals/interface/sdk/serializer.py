import json
import typing
from datetime import datetime, date
from uuid import UUID


def serialize(value: typing.Any) -> str:
    if isinstance(value, (datetime, date)):
        return value.isoformat()
    if isinstance(value, (dict, list, tuple)):
        return json.dumps(value)
    if isinstance(value, set):
        return json.dumps(list(value))
    if isinstance(value, UUID):
        return str(value)

    try:
        json.dumps(value)
    except TypeError:
        raise Exception(f"Cannot serialize value: {value}")

    return value
