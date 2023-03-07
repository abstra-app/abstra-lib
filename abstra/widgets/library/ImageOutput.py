from ..widget_base import Output
from ..file_utils import convert_file
from typing import Union
import io


class ImageOutput(Output):
    type = "image-output"

    def __init__(self, image: Union[str, io.IOBase], **kwargs):
        self.image = image
        self.subtitle = kwargs.get("subtitle", "")
        self.columns = kwargs.get("columns", 1)
        self.full_width = kwargs.get("full_width", False)
        self.label = kwargs.get("label", None)

    def json(self, **kwargs):
        return {
            "type": self.type,
            "imageUrl": convert_file(self.image),
            "subtitle": self.subtitle,
            "columns": self.columns,
            "fullWidth": self.full_width,
            "label": self.label,
        }
