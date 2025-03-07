from typing import Optional, Union

from abstra_internals.entities.forms.widgets.widget_base import InputWidget


class CheckboxInput(InputWidget):
    type = "checkbox-input"
    value: bool

    def __init__(
        self,
        label: str,
        *,
        key: Optional[str] = None,
        required: bool = True,
        hint: Optional[str] = None,
        full_width: bool = False,
        disabled: bool = False,
        errors: Optional[Union[list, str]] = None,
        value: bool = False,
    ):
        self.label = label
        self._key = key or label
        self.required = required
        self.hint = hint
        self.full_width = full_width
        self.disabled = disabled
        self.errors = self._init_errors(errors)
        self.value = value

    def render(self):
        return {
            "type": self.type,
            "key": self._key,
            "label": self.label,
            "value": self.value,
            "required": self.required,
            "hint": self.hint,
            "fullWidth": self.full_width,
            "disabled": self.disabled,
            "errors": self.errors,
        }
