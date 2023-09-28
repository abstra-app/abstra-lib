from io import BufferedReader, TextIOWrapper
from typing import Optional, Union, List
from ..apis import upload_file
from ..widget_base import OptionalListInput
from ..response_types import FileResponse


class FileInput(OptionalListInput):
    type = "file-input"
    empty_value = None
    multiple: bool = False

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
        self.empty_value = [] if self.multiple else None
        self.value = props.get("initial_value", self.empty_value)

    def render(self, context: dict):
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
            return value
        if isinstance(value, FileResponse):
            return value.url
        if isinstance(value, BufferedReader):
            return upload_file(value)
        if isinstance(value, TextIOWrapper):
            return upload_file(value)
        return ""

    def serialize_value(self) -> List[str]:
        if not self.value:
            return []
        if isinstance(self.value, list):
            return [FileInput.__get_file_uri(item) for item in self.value]
        return [FileInput.__get_file_uri(self.value)]

    def parse_value(
        self, value: Optional[List[str]]
    ) -> Optional[Union[FileResponse, List[FileResponse]]]:
        if value is None:
            return self.empty_value
        file_responses = [FileResponse(item) for item in value]
        return super().parse_value(file_responses)
