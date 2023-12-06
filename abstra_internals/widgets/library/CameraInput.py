from ..widget_base import Input
from io import BufferedReader, TextIOWrapper
from typing import Optional, Union, List
from ..apis import upload_file
from ..response_types import FileResponse
from pathlib import Path


class CameraInput(Input):
    type = "camera-input"
    empty_value = None

    def __init__(self, key: str, label: str, **kwargs):
        super().__init__(key)
        self.set_props(dict(label=label, **kwargs))

    def set_props(self, props):
        self.label = props.get("label", "Label")
        self.required = props.get("required", True)
        self.hint = props.get("hint", None)
        self.full_width = props.get("full_width", False)
        self.layout = props.get("layout", "list")
        self.disabled = props.get("disabled", False)
        self.value = props.get("initial_value", self.empty_value)

    def render(self, ctx: dict):
        return {
            "type": self.type,
            "key": self.key,
            "label": self.label,
            "hint": self.hint,
            "value": self.serialize_value(),
            "required": self.required,
            "fullWidth": self.full_width,
            "layout": self.layout,
            "disabled": self.disabled,
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

    def serialize_value(self):
        if self.value is None:
            return None
        return CameraInput.__get_file_uri(self.value)

    def parse_value(
        self, value: Optional[List[str]]
    ) -> Optional[Union[FileResponse, List[FileResponse]]]:
        if value is None:
            return self.empty_value
        file_response = FileResponse(value)
        return super().parse_value(file_response)
