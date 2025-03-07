from typing import List, Optional, Union

from abstra_internals.entities.forms.widgets.widget_base import InputWidget


class RatingInput(InputWidget):
    type = "rating-input"
    value: Optional[float]

    def __init__(
        self,
        label: str,
        *,
        key: Optional[str] = None,
        value: Optional[float] = None,
        required: bool = True,
        hint: Optional[str] = None,
        full_width: bool = False,
        max: Optional[int] = None,
        char: str = "⭐️",
        disabled: bool = False,
        errors: Optional[Union[List[str], str]] = None,
    ):
        self.label = label
        self._key = key or label
        self.value = value
        self.required = required
        self.hint = hint
        self.full_width = full_width
        self.max = max
        self.char = char
        self.disabled = disabled
        self.errors = self._init_errors(errors)

    def render(self):
        return {
            "type": self.type,
            "key": self._key,
            "label": self.label,
            "value": self.value,
            "required": self.required,
            "hint": self.hint,
            "fullWidth": self.full_width,
            "max": self.max,
            "char": self.char,
            "disabled": self.disabled,
            "errors": self.errors,
        }
