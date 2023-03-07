import inspect

from abstra.widgets import library
from .widget_base import Input, Output  # exported


output_types = [
    w for w in library.__dict__.values() if inspect.isclass(w) and issubclass(w, Output)
]

input_types = [
    w for w in library.__dict__.values() if inspect.isclass(w) and issubclass(w, Input)
]

widget_types = output_types + input_types


def get_widget_class(type: str):
    return [w for w in widget_types if w.type == type][0]
