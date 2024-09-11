from io import BufferedReader, TextIOWrapper
from pathlib import Path
from typing import List, Optional, Union
from abstra_internals.widgets.apis import upload_file
from abstra_internals.widgets.file_utils import extension_to_mime
from abstra_internals.widgets.response_types import FileResponse
from abstra_internals.widgets.widget_base import Input, MultipleHandler


class FileInput(Input):
    type = 'file-input'
    multiple: bool = False
    accepted_formats: list = []
    multiple_handler: MultipleHandler

    def __init__(self, key: str, label: str, **kwargs):
        super().__init__(key)
        self.set_props(dict(label=label, **kwargs))

    def set_props(self, props):
        self.label = props.get('label', 'Label')
        self.required = props.get('required', True)
        self.hint = props.get('hint', None)
        self.full_width = props.get('full_width', False)
        self.disabled = props.get('disabled', False)
        self.max_file_size = props.get('max_file_size', None)
        self.multiple = props.get('multiple', False)
        self.min = props.get('min', None)
        self.max = props.get('max', None)
        self.accepted_formats = props.get('accepted_formats', [])
        self.value = props.get('initial_value', self.empty_value)
        self.multiple_handler = MultipleHandler(self.multiple, self.min,
            self.max, required=self.required)

    def render(self, ctx: dict):
        return {'type': self.type, 'key': self.key, 'hint': self.hint,
            'label': self.label, 'value': self.serialize_value(),
            'required': self.required, 'multiple': self.multiple, 'min':
            self.min, 'max': self.max, 'acceptedFormats': self.
            accepted_formats, 'acceptedMimeTypes': self.get_mime_types,
            'fullWidth': self.full_width, 'disabled': self.disabled,
            'maxFileSize': self.max_file_size, 'errors': self.errors}

    @staticmethod
    def __get_file_uri(value: Union[FileResponse, str, BufferedReader,
        TextIOWrapper]) ->str:
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
        return ''

    def serialize_value(self) ->List[str]:
        values_list = self.multiple_handler.value_to_list(self.value)
        return [FileInput.__get_file_uri(item) for item in values_list]

    def parse_value(self, value: Optional[List[str]]) ->Union[FileResponse,
        List[FileResponse], None]:
        file_responses = [FileResponse(url) for url in value or []]
        return self.multiple_handler.value_to_list_or_value(file_responses)

    def validate(self) ->List[str]:
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

    @property
    def accepted_formats_without_dot(self) ->List[str]:
        return [extension.replace('.', '') for extension in self.
            accepted_formats]

    def _validate_file_extension(self, file: FileResponse) ->List[str]:
        if not self.accepted_formats:
            return []
        file_extension = file._url.split('.')[-1]
        if file_extension not in self.accepted_formats_without_dot:
            return ['i18n_error_invalid_file_format']
        return []

    @property
    def get_mime_types(self) ->str:
        if not self.accepted_formats:
            return '*'
        return ','.join(extension_to_mime(ext) for ext in self.accepted_formats
            )
