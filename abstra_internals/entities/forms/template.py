import copy
from typing import Callable, Dict, Generator, List, Optional, Tuple, TypedDict, Union

from abstra_internals.entities.forms.form_state import Button, State
from abstra_internals.widgets.widget_base import Input, Widget

Template = List[Widget]
TemplateFunc = Callable[
    [State], Union[Template, Tuple[Template, Optional[List[Button]]]]
]
RawTemplate = Union[Template, TemplateFunc]
GeneratorFunc = Callable[
    [State],
    Generator[Union[Template, Tuple[Template, Optional[List[Button]]]], None, None],
]


LEGACY_CTX = {}


class RenderOutput(TypedDict):
    widgets: List[Dict]
    has_errors: bool


class TemplateRenderer:
    def __init__(self, template: Template) -> None:
        self._raw_template = template

    @property
    def template(self) -> Template:
        # Avoids using mutable objects as widgets currently have a internal state
        return copy.deepcopy(self._raw_template)

    def parse_state(self, raw_state: Dict) -> State:
        parsed = {}
        for widget in self.template:
            if isinstance(widget, Input):
                parsed[widget.key] = widget.parse_value(raw_state.get(widget.key))
        return State(parsed)

    def render(self, state: State) -> RenderOutput:
        rendered_widgets = []
        has_errors = False
        for widget in self.template:
            if isinstance(widget, Input):
                value = state.get(widget.key)
                if value is not None:
                    widget.set_value(value)
                if state.touched(widget.key):
                    widget.set_errors()
                if widget.has_errors() > 0:
                    has_errors = True

            rendered = widget.render(LEGACY_CTX)
            rendered_widgets.append(rendered)

        return RenderOutput(widgets=rendered_widgets, has_errors=has_errors)
