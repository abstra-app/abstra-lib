import io
from typing import Union

from abstra_internals.entities.forms.widgets.file_upload import upload_widget_file
from abstra_internals.entities.forms.widgets.widget_base import OutputWidget


class FileOutput(OutputWidget):
    """File output widget for displaying downloadable files.

    Attributes:
        file (str): The URL of the file to make available for download.
    """

    type = "file-output"

    def __init__(
        self,
        file: Union[str, io.IOBase],
        *,
        download_text: str = "Download",
        full_width: bool = False,
    ):
        """Initialize a FileOutput widget.

        Args:
            file (Union[str, io.IOBase]): The file to make available for download, as a URL or file-like object.
            download_text (str): Text displayed on the download button.
            full_width (bool): Whether the download button should take up the full width of its container.
        """
        self.file = upload_widget_file(file)
        self.download_text = download_text
        self.full_width = full_width

    def _render(self):
        return {
            "type": self.type,
            "fileUrl": self.file,
            "downloadText": self.download_text,
            "fullWidth": self.full_width,
        }
