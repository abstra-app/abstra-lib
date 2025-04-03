from typing import List, Optional, Union

from abstra_internals.entities.forms.widgets.widget_base import InputWidget


class RatingInput(InputWidget):
    """Rating input widget for capturing user ratings on a scale.

    Attributes:
        value (int): The rating value selected by the user.
    """

    type = "rating-input"
    value: int

    def __init__(
        self,
        label: str,
        *,
        key: Optional[str] = None,
        required: bool = True,
        hint: Optional[str] = None,
        full_width: bool = False,
        disabled: bool = False,
        errors: Optional[Union[List[str], str]] = None,
        max_value: int = 5,
    ):
        """Initialize a RatingInput widget.

        Args:
            label (str): Text label displayed above the input.
            key (Optional[str]): Identifier for the widget, defaults to label if not provided.
            required (bool): Whether a rating must be selected before proceeding.
            hint (Optional[str]): Help text displayed below the input.
            full_width (bool): Whether the input should take up the full width of its container.
            disabled (bool): Whether the input is non-interactive.
            errors (Optional[Union[List[str], str]]): Pre-defined validation error messages to display.
            max_value (int): Maximum value for the rating scale.
        """
        self.label = label
        self.key = key or label
        self.required = required
        self.hint = hint
        self.full_width = full_width
        self.disabled = disabled
        self.value = 0
        self.errors = errors
        self.max_value = max_value

    def _render(self):
        return {
            "type": self.type,
            "key": self.key,
            "label": self.label,
            "value": self.value,
            "required": self.required,
            "hint": self.hint,
            "fullWidth": self.full_width,
            "max": self.max_value,
            "char": "⭐️",
            "disabled": self.disabled,
            "errors": self.errors,
        }
