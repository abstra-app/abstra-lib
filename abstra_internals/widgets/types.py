from typing import Any, TypedDict, Union


class LabelValueOption(TypedDict):
    label: str
    value: Any


AbstraOption = Union[str, LabelValueOption]
