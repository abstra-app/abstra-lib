from typing import Optional


def literal(value):
    return {"enum": [value]}


def enum(values: list):
    return {"type": "string", "enum": values}


def object(properties: dict):
    return {"type": "object", "properties": properties, "additionalProperties": False}


def string(description: Optional[str]):
    return {"type": "string"}
