import io
import json
import pathlib
from typing import Dict, List, Optional, Union

import pypdfium2 as pdfium

from abstra_internals.repositories.ai import AiApiHttpClient
from abstra_internals.utils.b64 import is_base_64, to_base64
from abstra_internals.utils.string import to_snake_case

Prompt = Union[str, io.IOBase, pathlib.Path]
Format = Dict[str, object]


class AiSDKController:
    def __init__(self, ai_client: AiApiHttpClient):
        self.ai_client = ai_client

    def _build_function_tool_call(self, format: Dict[str, object]) -> Dict[str, object]:
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

    def _extract_pdf_images(self, file: Prompt) -> List[io.BytesIO]:
        images = []
        for page in pdfium.PdfDocument(file):
            bitmap = page.render(
                scale=1,  # 72dpi resolution
                rotation=0,
            )
            pil_image = bitmap.to_pil()
            image_io = io.BytesIO()
            pil_image.save(image_io, format="png")
            images.append(image_io)
        return images

    def _prompt_is_valid_file(self, prompt: Prompt) -> bool:
        if isinstance(prompt, (io.IOBase, pathlib.Path)) or is_base_64(prompt):
            return True

        try:
            return pathlib.Path(prompt).exists()
        except Exception:
            return False

    def prompt(
        self,
        prompts: List[Prompt],
        instructions: List[str],
        format: Optional[Format],
        temperature: float,
    ):
        messages = []

        for instruction in instructions:
            messages.append(
                {
                    "role": "system",
                    "content": instruction,
                }
            )

        for prompt in prompts:
            if self._prompt_is_valid_file(prompt):
                try:
                    images = self._extract_pdf_images(prompt)
                except pdfium.PdfiumError:
                    # If the file is not a PDF, read it as a single image
                    images = [prompt]
                except FileNotFoundError:
                    raise FileNotFoundError(f"File not found: {prompt}")
                except Exception as e:
                    raise Exception(f"Error reading file: {e}")

                for image in images:
                    base_64_image = to_base64(image)
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
            elif isinstance(prompt, str) and is_base_64(prompt):
                messages.append(
                    {
                        "role": "user",
                        "content": [
                            {
                                "type": "image_url",
                                "image_url": {
                                    "url": prompt,
                                },
                            },
                        ],
                    }
                )
            elif isinstance(prompt, str):
                messages.append(
                    {
                        "role": "user",
                        "content": prompt,
                    }
                )

        tools = []
        if format:
            function = self._build_function_tool_call(format)
            tools.append({"type": "function", "function": function})

        response = self.ai_client.prompt(messages, tools, temperature)

        if response.get("error"):
            raise Exception(response["error"])

        if format:
            parameters_dict = response["tool_calls"][0]["function"]["arguments"]
            try:
                return json.loads(parameters_dict)
            except json.JSONDecodeError:
                raise Exception(f"Error parsing JSON: {parameters_dict}")

        return response["content"]
