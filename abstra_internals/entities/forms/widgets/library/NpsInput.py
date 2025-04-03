from typing import List, Optional, Union

from abstra_internals.entities.forms.widgets.widget_base import (
    InputWidget,
    NumberValueHandler,
)


class NpsInput(InputWidget):
    """Net Promoter Score input widget for collecting customer feedback scores.

    Attributes:
        value (int): The NPS score selected by the user.
    """

    type = "nps-input"
    value: int

    def __init__(
        self,
        label: str,
        *,
        key: Optional[str] = None,
        required: bool = True,
        min: int = 0,
        max: int = 10,
        min_hint: str = "Not at all likely",
        max_hint: str = "Extremely likely",
        hint: Optional[str] = None,
        full_width: bool = False,
        disabled: bool = False,
        errors: Optional[Union[List[str], str]] = None,
        value: int = 0,
    ):
        """Initialize an NpsInput widget.

        Args:
            label (str): Text label displayed above the input.
            key (Optional[str]): Identifier for the widget, defaults to label if not provided.
            required (bool): Whether a score must be selected before proceeding.
            min (int): Minimum score value.
            max (int): Maximum score value.
            min_hint (str): Text displayed beneath the minimum score value.
            max_hint (str): Text displayed beneath the maximum score value.
            hint (Optional[str]): Help text displayed below the input.
            full_width (bool): Whether the input should take up the full width of its container.
            disabled (bool): Whether the input is non-interactive.
            errors (Optional[Union[List[str], str]]): Pre-defined validation error messages to display.
            value (int): Initial value of the score.
        """
        self.label = label
        self.key = key or label
        self.required = required
        self.min = min
        self.max = max
        self.min_hint = min_hint
        self.max_hint = max_hint
        self.hint = hint
        self.full_width = full_width
        self.disabled = disabled
        self.number_value_handler = NumberValueHandler(min=self.min, max=self.max)
        self.errors = errors
        self.value = value

    def _render(self):
        return {
            "type": self.type,
            "key": self.key,
            "label": self.label,
            "min": self.min,
            "max": self.max,
            "minHint": self.min_hint,
            "maxHint": self.max_hint,
            "value": self.value,
            "required": self.required,
            "hint": self.hint,
            "fullWidth": self.full_width,
            "disabled": self.disabled,
            "errors": self.errors,
        }

    def _run_validators(self) -> List[str]:
        return self.number_value_handler.validate(self.value)
