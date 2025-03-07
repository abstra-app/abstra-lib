import io
from typing import Union

from abstra_internals.entities.forms.widgets.file_upload import upload_widget_file
from abstra_internals.entities.forms.widgets.widget_base import OutputWidget


class ImageOutput(OutputWidget):
    type = "image-output"

    def __init__(
        self,
        image: Union[str, io.IOBase],
        *,
        subtitle: str = "",
        full_width: bool = False,
        label: str = "",
    ):
        self.image = upload_widget_file(image)
        self.subtitle = subtitle
        self.full_width = full_width
        self.label = label

    def render(self):
        return {
            "type": self.type,
            "imageUrl": self.image,
            "subtitle": self.subtitle,
            "fullWidth": self.full_width,
            "label": self.label,
        }
