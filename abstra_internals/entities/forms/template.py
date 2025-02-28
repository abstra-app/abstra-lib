import copy
from dataclasses import dataclass
from typing import Callable, Dict, Generator, List, Optional, Tuple, TypedDict, Union

from abstra_internals.entities.forms.form_state import State
from abstra_internals.widgets.widget_base import Input, Widget


@dataclass
class Button:
    label: str


class NextButton(Button):
    def __init__(self):
        super().__init__("i18n_next_action")


class BackButton(Button):
    def __init__(self):
        super().__init__("i18n_back_action")


Template = List[Widget]
TemplateWithButtons = Tuple[Template, Optional[List[Button]]]

TemplateFunction = Callable[[State], Optional[Union[Template, TemplateWithButtons]]]
TemplateGenerator = Generator[Union[Template, TemplateWithButtons], None, None]
TemplateGeneratorFunction = Callable[[State], TemplateGenerator]


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
            if isinstance(widget, Input) and widget.key in raw_state:
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
                if widget.key in state:
                    widget.set_errors()
                if widget.has_errors() > 0:
                    has_errors = True

            rendered = widget.render(LEGACY_CTX)
            rendered_widgets.append(rendered)

        return RenderOutput(widgets=rendered_widgets, has_errors=has_errors)
