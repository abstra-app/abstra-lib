import io
import json
import pathlib
from typing import Dict, List, Optional, Union

from abstra_internals.repositories import ai_repository
from abstra_internals.utils.b64 import is_base_64, to_base64


def _build_function_tool_call(format: Dict[str, object]) -> Dict[str, object]:
    variable_names = list(format.keys())
    function_name = "get_" + "_and_".join(variable_names)
    return {
        "name": function_name,
        "parameters": {
            "type": "object",
            "properties": format,
            "required": variable_names,
        },
    }


AcceptedPrompts = Union[str, io.IOBase, pathlib.Path]


def prompt(
    prompt: Union[AcceptedPrompts, List[AcceptedPrompts]],
    instructions: List[str] = [],
    format: Optional[Dict[str, object]] = None,
):
    messages = []
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

    response = ai_repository.prompt(messages, tools).json()
    if format:
        parameters_dict = response["tool_calls"][0]["function"]["arguments"]
        try:
            return json.loads(parameters_dict)
        except json.JSONDecodeError:
            raise Exception(f"Error parsing JSON: {parameters_dict}")

    return response["content"]
