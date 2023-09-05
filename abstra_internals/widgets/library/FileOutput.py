from ..widget_base import Output
from typing import Union
from ..file_utils import convert_file
import io


class FileOutput(Output):
    type = "file-output"

    def __init__(self, file: Union[str, io.IOBase], **kwargs):
        self.set_props(dict(file=file, **kwargs))

    def set_props(self, props):
        self.file = convert_file(props.get("file", ""))
        self.download_text = props.get("download_text", "Download")
        self.full_width = props.get("full_width", False)

    def render(self, context: dict):
        return {
            "type": self.type,
            "fileUrl": self.file,
            "downloadText": self.download_text,
            "fullWidth": self.full_width,
        }
