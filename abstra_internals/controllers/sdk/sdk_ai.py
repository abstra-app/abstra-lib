import io
import json
import pathlib
from typing import Dict, List, Optional, Union

import pypdfium2 as pdfium
from PIL.Image import Image

import abstra_internals.utils.b64 as b64
from abstra_internals.contracts_generated import (
    CloudApiCliAiV2PromptPostRequest,
    CloudApiCliAiV2PromptPostRequestMessages,
    CloudApiCliAiV2PromptPostRequestMessagesItem,
    CloudApiCliAiV2PromptPostRequestMessagesItemContentItemImage,
    CloudApiCliAiV2PromptPostRequestMessagesItemContentItemImageImageUrl,
    CloudApiCliAiV2PromptPostRequestMessagesItemContentItemText,
    CloudApiCliAiV2PromptPostRequestTools,
    CloudApiCliAiV2PromptPostRequestToolsItem,
)
from abstra_internals.entities.forms.widgets.response_types import AbstractFileResponse
from abstra_internals.interface.sdk.forms.deprecated.widgets.response_abc import (
    AbstractFileResponse as DeprecatedAbstractFileResponse,
)
from abstra_internals.repositories.ai import AIRepository
from abstra_internals.utils.ai import build_function_tool_call

Prompt = Union[
    str, io.IOBase, pathlib.Path, AbstractFileResponse, DeprecatedAbstractFileResponse
]
Format = Dict[str, object]


class AiSDKController:
    def __init__(self, ai_client: AIRepository):
        self.ai_client = ai_client

    def _extract_pdf_images(self, file: Prompt) -> List[io.BytesIO]:
        images = []
        for page in pdfium.PdfDocument(file):
            bitmap = page.render(
                scale=4,  # 288 dpi
                rotation=0,
            )
            pil_image = bitmap.to_pil()
            image_io = io.BytesIO()
            pil_image.save(image_io, format="png")
            images.append(image_io)
        return images

    def _make_image_url_message(
        self, url: str
    ) -> CloudApiCliAiV2PromptPostRequestMessagesItem:
        return CloudApiCliAiV2PromptPostRequestMessagesItem(
            role="user",
            content=[
                CloudApiCliAiV2PromptPostRequestMessagesItemContentItemImage(
                    type="image_url",
                    image_url=CloudApiCliAiV2PromptPostRequestMessagesItemContentItemImageImageUrl(
                        url=url
                    ),
                )
            ],
        )

    def _make_text_message(
        self, text: str
    ) -> CloudApiCliAiV2PromptPostRequestMessagesItem:
        return CloudApiCliAiV2PromptPostRequestMessagesItem(
            role="user",
            content=[
                CloudApiCliAiV2PromptPostRequestMessagesItemContentItemText(
                    type="text", text=text
                )
            ],
        )

    def _try_extract_images(self, input: io.IOBase) -> Optional[List[io.BytesIO]]:
        try:
            images = self._extract_pdf_images(input)
            return images
        except Exception:
            return None

    def _make_messages(
        self, prompt: Prompt
    ) -> CloudApiCliAiV2PromptPostRequestMessages:
        if isinstance(prompt, pathlib.Path):
            if prompt.suffix[1:] == "txt":
                with open(prompt, "r", encoding="utf-8") as f:
                    return [self._make_text_message(f.read())]

            with prompt.open("rb") as f:
                if images := self._try_extract_images(f):
                    return [
                        self._make_image_url_message(b64.encode_base_64(image))
                        for image in images
                    ]

                encoded_str = b64.encode_base_64(f)
                return [self._make_image_url_message(encoded_str)]

        if isinstance(prompt, (AbstractFileResponse, DeprecatedAbstractFileResponse)):
            file = prompt.file

            if prompt.path.suffix[1:] == "txt":
                return [self._make_text_message(prompt.content.decode("utf-8"))]

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
        messages: CloudApiCliAiV2PromptPostRequestMessages = []

        for instruction in instructions:
            messages.append(
                CloudApiCliAiV2PromptPostRequestMessagesItem(
                    role="system",
                    content=[
                        CloudApiCliAiV2PromptPostRequestMessagesItemContentItemText(
                            type="text", text=instruction
                        )
                    ],
                )
            )

        for prompt in prompts:
            messages.extend(self._make_messages(prompt))

        tools: CloudApiCliAiV2PromptPostRequestTools = []
        if format:
            function = build_function_tool_call(format)
            tools.append(
                CloudApiCliAiV2PromptPostRequestToolsItem(
                    type="function", function=function
                )
            )

        response = self.ai_client.prompt(
            prompt_request_body=CloudApiCliAiV2PromptPostRequest(
                messages=messages,
                tools=tools,
                temperature=temperature,
            )
        )

        if response.get("error"):
            raise Exception(response["error"])

        if format:
            parameters_dict = response["tool_calls"][0]["function"]["arguments"]
            try:
                return json.loads(parameters_dict)
            except json.JSONDecodeError:
                raise Exception(f"Error parsing JSON: {parameters_dict}")

        return response["content"]

    def parse_document(
        self, document_path: Union[pathlib.Path, str], model: str
    ) -> dict:
        if isinstance(document_path, str):
            document_path = pathlib.Path(document_path)

        if document_path.suffix.lower() == ".pdf":
            mime_type = "application/pdf"
        elif document_path.suffix.lower() in [".jpeg", ".jpg"]:
            mime_type = "image/jpeg"
        elif document_path.suffix.lower() == ".png":
            mime_type = "image/png"
        else:
            raise ValueError(
                f"Unsupported file type: {document_path.suffix}. Supported types are: .pdf, .jpeg, .jpg, .png"
            )

        file_bytes = document_path.read_bytes()
        return self.ai_client.parse_document(
            model=model,
            file_content=file_bytes,
            mime_type=mime_type,
        )
