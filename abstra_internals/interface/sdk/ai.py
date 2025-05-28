from pathlib import Path
from typing import Dict, List, Optional, TypeVar, Union

from abstra_internals.contracts_generated import CloudApiCliModelsNfseResponse
from abstra_internals.controllers.sdk.sdk_ai import Format, Prompt
from abstra_internals.controllers.sdk.sdk_context import SDKContextStore

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
    prompt: Union["Prompt", List["Prompt"]],
    instructions: Union[str, List[str]] = [],
    format: Optional["Format"] = None,
    temperature: float = 1.0,
):
    """
    Send a prompt to the AI and get a response.

    Args:
        prompt (Union[Prompt, List[Prompt]]): The prompt(s) to send to the AI model.
        instructions (Union[str, List[str]]): Additional instructions for the AI. Defaults to [].
        format (Optional[Format]): The expected format for the AI response. Defaults to None.
        temperature (float): Controls randomness in the AI response, from 0.0 to 2.0. Defaults to 1.0.

    Returns:
        The AI response formatted according to the specified format if provided.

    Raises:
        ValueError: If temperature is not between 0.0 and 2.0.
    """
    if temperature < 0.0 or temperature > 2.0:
        raise ValueError("Temperature must be between 0.0 and 2.0")

    instructions_list = to_list(instructions)
    normalized_format = normalize_format(format) if format else None
    prompt_list = to_list(prompt)

    return SDKContextStore.get_by_thread().ai_sdk.prompt(
        prompt_list, instructions_list, normalized_format, temperature
    )


def parse_document(document_path: Path, model: str) -> dict:
    """
    Parse a document using the specified AI model.
    Args:
        document_path (Path): The path to the document to be parsed.
        model (str): The AI model to use for parsing.
    Returns:
        dict: The parsed document data.
    Raises:
        ValueError: If the document path is invalid or the model is not supported.
    """
    return SDKContextStore.get_by_thread().ai_sdk.parse_document(document_path, model)


def parse_nfse(document_path: Path) -> CloudApiCliModelsNfseResponse:
    """
    Parse a Nota Fiscal de Serviço Eletrônica (NFSe) document.
    Args:
        document_path (Path): The path to the NFSe document to be parsed.
    Returns:
        CloudApiCliModelsNfseResponse: The parsed NFSe response.
    Raises:
        ValueError: If the document path is invalid or the parsing fails.
    """
    data = parse_document(document_path, "nfse")
    return CloudApiCliModelsNfseResponse.from_dict(data)
