import inspect
import hackerforms.widgets as hw
from .widget_base import Input, Output


def get_widget_class(type: str):
    return [
        w
        for w in [
            *hw.input_types.__dict__.values(),
            *hw.output_types.__dict__.values(),
        ]
        if inspect.isclass(w)
        and (issubclass(w, Input) or issubclass(w, Output))
        and w.type == type
    ][0]
