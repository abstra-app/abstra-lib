from typing import List, Optional, Union

from abstra_internals.entities.forms.widgets.widget_base import InputWidget


class ToggleInput(InputWidget):
    type = "toggle-input"
    value: bool

    def __init__(
        self,
        label: str,
        *,
        key: Optional[str] = None,
        on_text: str = "Yes",
        off_text: str = "No",
        required: bool = True,
        hint: Optional[str] = None,
        full_width: bool = False,
        disabled: bool = False,
        errors: Optional[Union[List[str], str]] = None,
        value: bool = False,
    ):
        self.label = label
        self._key = key or label
        self.on_text = on_text
        self.off_text = off_text
        self.value = value
        self.required = required
        self.hint = hint
        self.full_width = full_width
        self.disabled = disabled
        self.errors = self._init_errors(errors)

    def is_value_unset(self):
        return False

    def render(self):
        return {
            "type": self.type,
            "key": self._key,
            "label": self.label,
            "onText": self.on_text,
            "offText": self.off_text,
            "value": self.serialize_value(),
            "required": self.required,
            "hint": self.hint,
            "fullWidth": self.full_width,
            "disabled": self.disabled,
            "errors": self.errors,
        }

    def serialize_value(self) -> bool:
        return self.value or False

    def parse_value(self, value: bool) -> bool:
        return bool(value)
