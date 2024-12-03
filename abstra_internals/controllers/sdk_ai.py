import io
import json
import pathlib
from typing import Dict, List, Optional, Union

import pypdfium2 as pdfium
from PIL.Image import Image

import abstra_internals.utils.b64 as b64
from abstra_internals.repositories.ai import AiApiHttpClient
from abstra_internals.utils.string import to_snake_case
from abstra_internals.widgets.response_types import FileResponse

Prompt = Union[str, io.IOBase, pathlib.Path, FileResponse]
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

    def _make_image_url_message(self, url: str):
        return {
            "role": "user",
            "content": [
                {
                    "type": "image_url",
                    "image_url": {
                        "url": url,
                    },
                },
            ],
        }

    def _make_text_message(self, text: str):
        return {
            "role": "user",
            "content": text,
        }

    def _try_extract_images(self, input: io.IOBase) -> Optional[List[io.BytesIO]]:
        try:
            images = self._extract_pdf_images(input)
            return images
        except Exception:
            return None

    def _make_messages(self, prompt: Prompt) -> List:
        if isinstance(prompt, pathlib.Path):
            with prompt.open("rb") as f:
                if images := self._try_extract_images(f):
                    return [
                        self._make_image_url_message(b64.encode_base_64(image))
                        for image in images
                    ]

                encoded_str = b64.encode_base_64(f)
                return [self._make_image_url_message(encoded_str)]

        if isinstance(prompt, FileResponse):
            file = prompt.file
            if images := self._try_extract_images(file):
                return [
                    self._make_image_url_message(b64.encode_base_64(image))
                    for image in images
                ]

            encoded_str = b64.encode_base_64(file)
            return [self._make_image_url_message(encoded_str)]

        if isinstance(prompt, io.IOBase):
            prompt.seek(0)
            if images := self._try_extract_images(prompt):
                return [
                    self._make_image_url_message(b64.encode_base_64(image))
                    for image in images
                ]
            encoded_str = b64.encode_base_64(prompt)
            return [self._make_image_url_message(encoded_str)]

        if isinstance(prompt, str) and (
            b64.is_base_64(prompt) or prompt.startswith("http")
        ):
            if prompt.endswith(".pdf"):
                raise ValueError("PDF URLs are not supported")

            return [self._make_image_url_message(prompt)]

        try:
            if isinstance(prompt, str) and pathlib.Path(prompt).exists():
                with open(prompt, "rb") as f:
                    if images := self._try_extract_images(f):
                        return [
                            self._make_image_url_message(b64.encode_base_64(image))
                            for image in images
                        ]
                    encoded_str = b64.encode_base_64(f)
                    return [self._make_image_url_message(encoded_str)]
        except OSError:  # Path contructor can raise OSError on long strings
            pass

        if isinstance(prompt, Image):
            image_io = io.BytesIO()
            prompt.save(image_io, format="PNG")
            image_io.seek(0)
            encoded_str = b64.encode_base_64(image_io)
            return [self._make_image_url_message(encoded_str)]

        if isinstance(prompt, str):
            return [self._make_text_message(prompt)]

        raise ValueError(f"Invalid prompt: {prompt}")

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
            messages.extend(self._make_messages(prompt))

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
