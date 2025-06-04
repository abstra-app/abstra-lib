import copy
from dataclasses import dataclass
from typing import (
    Callable,
    Dict,
    Generator,
    List,
    Optional,
    Tuple,
    TypedDict,
    Union,
)

from abstra_internals.entities.forms.form_state import State
from abstra_internals.entities.forms.widgets.widget_base import InputWidget, Widget


@dataclass
class Button:
    """
    Base class for form navigation buttons.

    Args:
        label (str): The text displayed on the button.
        key (Optional[str]): An optional key for the button.
            If not provided, the label will be used as the key.
    """

    label: str
    key: Optional[str]

    def __init__(
        self,
        label: str,
        key: Optional[str] = None,
    ):
        """Initialize a Button with the given label.

        Args:
            label (str): The text displayed on the button.
            key (Optional[str]): An optional key for the button.
                If not provided, the label will be used as the key.
        """
        self.label = label
        self.key = key

    def safe_get_key(self) -> str:
        return self.key if self.key else self.label


class NextButton(Button):
    """
    Button used to navigate to the next step in a form.
    Automatically labeled with internationalized "Next" text.
    """

    def __init__(self):
        """Initialize a NextButton with the default internationalized label."""
        super().__init__("i18n_next_action")


class BackButton(Button):
    """
    Button used to navigate to the previous step in a form.
    Automatically labeled with internationalized "Back" text.
    """

    def __init__(self):
        """Initialize a BackButton with the default internationalized label."""
        super().__init__("i18n_back_action")


Template = List[Widget]
TemplateWithButtons = Tuple[Template, Optional[List[Button]]]

TemplateFunction = Callable[[State], Optional[Union[Template, TemplateWithButtons]]]
TemplateGenerator = Generator[Union[Template, TemplateWithButtons], None, None]
TemplateGeneratorFunction = Callable[[State], TemplateGenerator]


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

    def parse_state(self, *, raw_state: Dict, include_missing: bool) -> State:
        parsed = {}
        for idx, widget in enumerate(self.template):
            if not isinstance(widget, InputWidget):
                continue

            key = widget._ensure_key(idx)

            if not include_missing and key not in raw_state:
                continue

            parsed[key] = widget._parse_value(raw_state.get(key))

        return State(parsed)

    def render(self, state: State) -> RenderOutput:
        rendered_widgets = []
        has_errors = False

        for idx, widget in enumerate(self.template):
            if isinstance(widget, InputWidget):
                key = widget._ensure_key(idx)
                value = state.get(key)

                if value is not None:
                    widget.value = value

                if key in state:
                    widget._apply_validation()

                if len(widget.errors) > 0:
                    has_errors = True

            rendered = widget._render()
            rendered_widgets.append(rendered)

        return RenderOutput(widgets=rendered_widgets, has_errors=has_errors)
