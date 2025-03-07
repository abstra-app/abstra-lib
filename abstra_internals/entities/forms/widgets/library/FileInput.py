from io import BufferedReader, TextIOWrapper
from pathlib import Path
from typing import List, Optional, Union

from abstra_internals.entities.forms.widgets.response_types import FileResponse
from abstra_internals.entities.forms.widgets.widget_base import (
    InputWidget,
    MultipleHandler,
)
from abstra_internals.utils.file import extension_to_mime, upload_file


class FileInput(InputWidget):
    type = "file-input"
    multiple: bool = False
    multiple_handler: MultipleHandler

    def __init__(
        self,
        label: str,
        *,
        key: Optional[str] = None,
        required: bool = True,
        hint: Optional[str] = None,
        full_width: bool = False,
        disabled: bool = False,
        max_file_size: Optional[int] = None,
        multiple: bool = False,
        min: Optional[int] = None,
        max: Optional[int] = None,
        accepted_formats: Optional[List[str]] = None,
        initial_value: Optional[List[str]] = None,
        errors: Optional[Union[List[str], str]] = None,
    ):
        self.label = label
        self._key = key or label
        self.required = required
        self.hint = hint
        self.full_width = full_width
        self.disabled = disabled
        self.max_file_size = max_file_size
        self.multiple = multiple
        self.min = min
        self.max = max
        self.accepted_formats = accepted_formats
        self.multiple_handler = MultipleHandler(
            self.multiple, self.min, self.max, self.required
        )
        self.value = self.parse_value(initial_value)
        self.errors = self._init_errors(errors)

    def render(self):
        return {
            "type": self.type,
            "key": self._key,
            "hint": self.hint,
            "label": self.label,
            "value": self.serialize_value(),
            "required": self.required,
            "multiple": self.multiple,
            "min": self.min,
            "max": self.max,
            "acceptedFormats": self.accepted_formats,
            "acceptedMimeTypes": self.get_mime_types,
            "fullWidth": self.full_width,
            "disabled": self.disabled,
            "maxFileSize": self.max_file_size,
            "errors": self.errors,
        }

    @staticmethod
    def __get_file_uri(
        value: Union[FileResponse, str, BufferedReader, TextIOWrapper],
    ) -> str:
        if isinstance(value, str):
            if Path(value).is_file():
                return upload_file(open(value))
            else:
                return value
        if isinstance(value, FileResponse):
            return value._url
        if isinstance(value, BufferedReader):
            return upload_file(value)
        if isinstance(value, TextIOWrapper):
            return upload_file(value)
        return ""

    def serialize_value(self) -> List[str]:
        values_list = self.multiple_handler.value_to_list(self.value)
        return [FileInput.__get_file_uri(item) for item in values_list]

    def parse_value(
        self, value: Optional[List[str]]
    ) -> Union[FileResponse, List[FileResponse], None]:
        file_responses = [FileResponse(url) for url in value or []]
        return self.multiple_handler.value_to_list_or_value(file_responses)

    def _run_validators(self) -> List[str]:
        errors = []
        errors.extend(self.multiple_handler.validate(self.value))
        if not self.value:
            return errors
        if isinstance(self.value, list):
            for file in self.value:
                errors.extend(self._validate_file_extension(file))
        else:
            errors.extend(self._validate_file_extension(self.value))
        return errors

    def _remove_dots(self, accepted_formats: List[str]) -> List[str]:
        return [format.replace(".", "") for format in accepted_formats]

    def _validate_file_extension(self, file: FileResponse) -> List[str]:
        if not self.accepted_formats:
            return []
        file_extension = file._url.split(".")[-1]
        if file_extension not in self._remove_dots(self.accepted_formats):
            return ["i18n_error_invalid_file_format"]
        return []

    @property
    def get_mime_types(self) -> str:
        if not self.accepted_formats:
            return "*"
        return ",".join(extension_to_mime(ext) for ext in self.accepted_formats)
