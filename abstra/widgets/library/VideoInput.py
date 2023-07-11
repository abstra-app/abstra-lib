from io import IOBase
from typing import Optional, Union, List
from ..apis import upload_file
from ..widget_base import Input
from ..response_types import FileResponse


class VideoInput(Input):
    type = "video-input"

    def __init__(self, key: str, label: str, **kwargs):
        super().__init__(key)
        self.label = label
        self.initial_value = kwargs.get("initial_value", "")
        self.required = kwargs.get("required", True)
        self.hint = kwargs.get("hint", None)
        self.columns = kwargs.get("columns", 1)
        self.multiple = kwargs.get("multiple", False)
        self.full_width = kwargs.get("full_width", False)
        self.disabled = kwargs.get("disabled", False)
        self.max_file_size = kwargs.get("max_file_size", None)

    def json(self, **kwargs):
        return {
            "type": self.type,
            "key": self.key,
            "hint": self.hint,
            "label": self.label,
            "initialValue": VideoInput.__revert_value(self.initial_value),
            "columns": self.columns,
            "required": self.required,
            "multiple": self.multiple,
            "fullWidth": self.full_width,
            "disabled": self.disabled,
            "maxFileSize": self.max_file_size,
        }

    @staticmethod
    def __convert_value(value: Union[FileResponse, str, IOBase]) -> str:
        if isinstance(value, FileResponse):
            return value.url
        if isinstance(value, str):
            return value
        if isinstance(value, IOBase):
            return upload_file(value)
        return ""

    @staticmethod
    def __revert_value(
        value: Optional[
            Union[
                FileResponse, List[FileResponse], str, List[str], IOBase, List[IOBase]
            ]
        ]
    ) -> Union[None, str, List[str]]:
        if not value:
            return None
        if isinstance(value, list):
            return [VideoInput.__convert_value(item) for item in value]
        return VideoInput.__convert_value(value)

    @staticmethod
    def __convert_answer(answer) -> Union[None, FileResponse, List[FileResponse]]:
        if not answer:
            return None
        if isinstance(answer, list):
            return [FileResponse(item) for item in answer]
        return FileResponse(answer)

    def convert_answer(self, answer):
        """
        Returns:
            FileResponse or FileResponse[]: A dict containing the video uploaded by the user ({"file": file, "url": str, "content": bytes}) or a list of videos in case of multiple flag set as True
        """
        return self.__convert_answer(answer)
