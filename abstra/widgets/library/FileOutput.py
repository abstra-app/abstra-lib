from ..widget_base import Output
from typing import Union
from ..file_utils import convert_file
import io


class FileOutput(Output):
    type = "file-output"

    def __init__(self, file: Union[str, io.IOBase], **kwargs):
        self.file = file
        self.download_text = kwargs.get("download_text", "Download")
        self.columns = kwargs.get("columns", 1)
        self.full_width = kwargs.get("full_width", False)

    def json(self, **kwargs):
        return {
            "type": self.type,
            "fileUrl": convert_file(self.file),
            "downloadText": self.download_text,
            "columns": self.columns,
            "fullWidth": self.full_width,
        }
