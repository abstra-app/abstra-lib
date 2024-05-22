import inspect

from abstra_internals.widgets import library
from abstra_internals.widgets.metadata_parsed import metadata_objects
from abstra_internals.widgets.widget_base import Input, Output

output_types = [
    w for w in library.__dict__.values() if inspect.isclass(w) and issubclass(w, Output)
]

input_types = [
    w for w in library.__dict__.values() if inspect.isclass(w) and issubclass(w, Input)
]

widget_types = output_types + input_types


def get_widget_class(type: str):
    return [w for w in widget_types if w.type == type][0]


def _get_prop(widget_type: str, prop_name: str):
    params = metadata_objects[widget_type].pythonAPI.params
    return [p for p in params if p.argName == prop_name][0]


def is_prop_required(widget_type: str, prop_name: str):
    try:
        prop = _get_prop(widget_type, prop_name)
        return not prop.isKwarg
    except Exception:
        return False


def _get_broker_prop(widget_type: str, prop_name: str):
    params = metadata_objects[widget_type].brokerAPI.params
    return [p for p in params if p.argName == prop_name][0]


def get_widget_name(widget_type: str):
    try:
        return metadata_objects[widget_type].name
    except Exception:
        return None


def get_prop_type(widget_type: str, prop_name: str):
    try:
        prop = _get_prop(widget_type, prop_name)
        return prop.typeName
    except Exception:
        return None
