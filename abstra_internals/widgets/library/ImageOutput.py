import io
from typing import Union
from abstra_internals.widgets.file_utils import convert_file
from abstra_internals.widgets.widget_base import Output


class ImageOutput(Output):
    type = 'image-output'

    def __init__(self, image: Union[str, io.IOBase], **kwargs):
        self.set_props(dict(image=image, **kwargs))

    def set_props(self, props):
        self.image = convert_file(props.get('image', None))
        self.subtitle = props.get('subtitle', '')
        self.full_width = props.get('full_width', False)
        self.label = props.get('label', '')

    def render(self, ctx: dict):
        return {'type': self.type, 'imageUrl': self.image, 'subtitle': self
            .subtitle, 'fullWidth': self.full_width, 'label': self.label}
