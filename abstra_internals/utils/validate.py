import json
from typing import Union, get_args, get_origin


def check_type(obj, expected_type):
    if get_origin(expected_type) is Union:
        for t in get_args(expected_type):
            if isinstance(obj, t):
                return True
        return False
    else:
        return isinstance(obj, expected_type)


def validate_json_typing(json, expected_types):
    validated_json = {}
    for key, expected_type in expected_types.items():
        if key in json and check_type(json[key], expected_type):
            validated_json[key] = json[key]
    return validated_json


def validate_json(data: str):
    try:
        json.loads(data)
        return True
    except json.JSONDecodeError:
        return False
