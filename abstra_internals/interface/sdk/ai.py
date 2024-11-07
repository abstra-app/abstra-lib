import io
import pathlib
from typing import Dict, List, Optional, TypeVar, Union

from abstra_internals.controllers.execution_store import ExecutionStore

Prompt = Union[str, io.IOBase, pathlib.Path]
InputFile = Union[str, pathlib.Path, io.IOBase]
Format = Dict[str, object]


T = TypeVar("T")


def to_list(value: Union[T, List[T], None]) -> List[T]:
    if value is None:
        return []
    if isinstance(value, list):
        return value
    return [value]


def normalize_format(format: Dict[str, object]) -> Dict[str, object]:
    for key, value in format.items():
        if isinstance(value, str):
            format[key] = {"type": value}
        elif isinstance(value, list):
            format[key] = {"enum": value}
        elif value is bool:
            format[key] = {"type": "boolean"}
        elif value is int:
            format[key] = {"type": "integer"}
        elif value is float:
            format[key] = {"type": "number"}
        elif value is str:
            format[key] = {"type": "string"}
        else:
            format[key] = value
    return format


def prompt(
    prompt: Union[Prompt, List[Prompt]],
    instructions: Union[str, List[str]] = [],
    format: Optional[Format] = None,
    temperature: float = 1.0,
):
    if temperature < 0.0 or temperature > 2.0:
        raise ValueError("Temperature must be between 0.0 and 2.0")

    instructions_list = to_list(instructions)
    normalized_format = normalize_format(format) if format else None
    prompt_list = to_list(prompt)

    return ExecutionStore.get_by_thread().ai_sdk.prompt(
        prompt_list, instructions_list, normalized_format, temperature
    )
