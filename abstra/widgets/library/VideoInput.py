from ..widget_base import Input
from typing import Optional
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
            "initialValue": self.initial_value,
            "columns": self.columns,
            "required": self.required,
            "multiple": self.multiple,
            "fullWidth": self.full_width,
            "disabled": self.disabled,
            "maxFileSize": self.max_file_size,
        }

    @staticmethod
    def __revert_value(value) -> Optional[str]:
        if not value:
            return None
        if isinstance(value, list):
            return [item.url for item in value]
        return value.url

    @staticmethod
    def __convert_answer(answer) -> Optional[FileResponse]:
        if not answer:
            return None
        if isinstance(answer, list):
            return [FileResponse(item) for item in answer]
        return FileResponse(answer)

    def convert_answer(self, answer) -> Optional[FileResponse]:
        """
        Returns:
            FileResponse or FileResponse[]: A dict containing the video uploaded by the user ({"file": file, "url": str, "content": bytes}) or a list of videos in case of multiple flag set as True
        """
        return self.__convert_answer(answer)
