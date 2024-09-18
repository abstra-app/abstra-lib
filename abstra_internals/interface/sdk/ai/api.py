import io
import json
import pathlib
from typing import Dict, List, Optional, Union

from abstra_internals.repositories import ai_repository
from abstra_internals.utils.b64 import is_base_64, to_base64
from abstra_internals.utils.string import to_snake_case


def _build_function_tool_call(format: Dict[str, object]) -> Dict[str, object]:
    variable_names = list(format.keys())
    description = "get_" + "_and_".join(variable_names)
    return {
        "name": "get_parameters",
        "description": to_snake_case(description),
        "parameters": {
            "type": "object",
            "properties": format,
            "required": variable_names,
        },
    }


AcceptedPrompts = Union[str, io.IOBase, pathlib.Path]


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
    prompt: Union[AcceptedPrompts, List[AcceptedPrompts]],
    instructions: Union[str, List[str]] = [],
    format: Optional[Dict[str, object]] = None,
    temperature: float = 1.0,
):
    if temperature < 0.0 or temperature > 2.0:
        raise ValueError("Temperature must be between 0.0 and 2.0")
    format = normalize_format(format) if format else None
    messages = []
    if isinstance(instructions, str):
        instructions = [instructions]
    for instruction in instructions:
        messages.append(
            {
                "role": "system",
                "content": instruction,
            }
        )

    prompts_list = prompt if isinstance(prompt, list) else [prompt]
    for prompt_content in prompts_list:
        if isinstance(prompt_content, str) and not is_base_64(prompt_content):
            messages.append(
                {
                    "role": "user",
                    "content": prompt_content,
                }
            )
        else:
            base_64_image = to_base64(prompt_content)
            messages.append(
                {
                    "role": "user",
                    "content": [
                        {
                            "type": "image_url",
                            "image_url": {
                                "url": base_64_image,
                            },
                        },
                    ],
                }
            )

    tools = []
    if format:
        function = _build_function_tool_call(format)
        tools.append({"type": "function", "function": function})

    response = ai_repository.prompt(messages, tools, temperature)

    if response.get("error"):
        raise Exception(response["error"])

    if format:
        parameters_dict = response["tool_calls"][0]["function"]["arguments"]
        try:
            return json.loads(parameters_dict)
        except json.JSONDecodeError:
            raise Exception(f"Error parsing JSON: {parameters_dict}")

    return response["content"]
