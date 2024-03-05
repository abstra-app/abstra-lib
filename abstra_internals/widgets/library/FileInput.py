from io import BufferedReader, TextIOWrapper
from pathlib import Path
from typing import List, Union
from ..apis import upload_file
from ..response_types import FileResponse
from ..widget_base import Input, MultipleHandler


class FileInput(Input):
    type = "file-input"
    multiple: bool = False
    multiple_handler: MultipleHandler

    def __init__(self, key: str, label: str, **kwargs):
        super().__init__(key)
        self.set_props(dict(label=label, **kwargs))

    def set_props(self, props):
        self.label = props.get("label", "Label")
        self.required = props.get("required", True)
        self.hint = props.get("hint", None)
        self.full_width = props.get("full_width", False)
        self.disabled = props.get("disabled", False)
        self.max_file_size = props.get("max_file_size", None)
        self.multiple = props.get("multiple", False)
        self.value = props.get("initial_value", self.empty_value)
        self.multiple_handler = MultipleHandler(self.multiple, self.required)

    def render(self, ctx: dict):
        return {
            "type": self.type,
            "key": self.key,
            "hint": self.hint,
            "label": self.label,
            "value": self.serialize_value(),
            "required": self.required,
            "multiple": self.multiple,
            "fullWidth": self.full_width,
            "disabled": self.disabled,
            "maxFileSize": self.max_file_size,
            "errors": self.errors,
        }

    @staticmethod
    def __get_file_uri(
        value: Union[FileResponse, str, BufferedReader, TextIOWrapper]
    ) -> str:
        if isinstance(value, str):
            if Path(value).is_file():
                return upload_file(open(value))
            else:
                return value
        if isinstance(value, FileResponse):
            return value.url
        if isinstance(value, BufferedReader):
            return upload_file(value)
        if isinstance(value, TextIOWrapper):
            return upload_file(value)
        return ""

    def serialize_value(self) -> List[str]:
        values_list = self.multiple_handler.value_to_list(self.value)
        return [FileInput.__get_file_uri(item) for item in values_list]

    def parse_value(
        self, value: List[str]
    ) -> Union[FileResponse, List[FileResponse], None]:
        file_responses = [FileResponse(item) for item in value]
        return self.multiple_handler.value_to_list_or_value(file_responses)
