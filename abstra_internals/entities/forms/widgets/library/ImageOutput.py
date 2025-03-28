import io
from typing import Union

from abstra_internals.entities.forms.widgets.file_upload import upload_widget_file
from abstra_internals.entities.forms.widgets.widget_base import OutputWidget


class ImageOutput(OutputWidget):
    """Image output widget for displaying images.

    Attributes:
        image (str): The URL of the image to display.
    """

    type = "image-output"

    def __init__(
        self,
        image: Union[str, io.IOBase],
        *,
        subtitle: str = "",
        full_width: bool = False,
        label: str = "",
    ):
        """Initialize an ImageOutput widget.

        Args:
            image (Union[str, io.IOBase]): The image to display, as a URL or file-like object.
            subtitle (str): Text displayed below the image.
            full_width (bool): Whether the image should take up the full width of its container.
            label (str): Text displayed above the image.
        """
        self.image = upload_widget_file(image)
        self.subtitle = subtitle
        self.full_width = full_width
        self.label = label

    def _render(self):
        return {
            "type": self.type,
            "imageUrl": self.image,
            "subtitle": self.subtitle,
            "fullWidth": self.full_width,
            "label": self.label,
        }
