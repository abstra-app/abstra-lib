import io
from typing import Union

from abstra_internals.entities.forms.widgets.file_upload import upload_widget_file
from abstra_internals.entities.forms.widgets.widget_base import OutputWidget


class FileOutput(OutputWidget):
    type = "file-output"

    def __init__(
        self,
        file: Union[str, io.IOBase],
        *,
        download_text: str = "Download",
        full_width: bool = False,
    ):
        self.file = upload_widget_file(file)
        self.download_text = download_text
        self.full_width = full_width

    def render(self):
        return {
            "type": self.type,
            "fileUrl": self.file,
            "downloadText": self.download_text,
            "fullWidth": self.full_width,
        }
