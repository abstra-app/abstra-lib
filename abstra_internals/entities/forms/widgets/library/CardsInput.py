from typing import List, Optional, TypedDict, Union

from abstra_internals.entities.forms.widgets.file_upload import upload_widget_file
from abstra_internals.entities.forms.widgets.widget_base import (
    InputWidget,
    MultipleHandler,
)


class CardOption(TypedDict):
    title: Optional[str]
    subtitle: Optional[str]
    image: Optional[str]
    description: Optional[str]
    topLeftExtra: Optional[str]
    topRightExtra: Optional[str]


class CardsInput(InputWidget):
    type = "cards-input"
    value: Union[List[CardOption], CardOption, None]
    multiple: bool = False
    multiple_handler: MultipleHandler

    def __init__(
        self,
        label: str,
        options: List[CardOption],
        *,
        key: Optional[str] = None,
        searchable: bool = False,
        required: bool = True,
        hint: Optional[str] = None,
        columns: Optional[int] = 2,
        full_width: bool = False,
        layout: Optional[str] = "list",
        disabled: bool = False,
        min: Optional[int] = None,
        max: Optional[int] = None,
        errors: Optional[Union[List[str], str]] = None,
        value: Optional[Union[List[CardOption], CardOption]] = None,
    ):
        self.label = label
        self._key = key or label
        self.options = [
            {**opt, "image": upload_widget_file(opt.get("image") or "")}
            for opt in options
        ]
        self.searchable = searchable
        self.required = required
        self.hint = hint
        self.columns = columns
        self.full_width = full_width
        self.layout = layout
        self.disabled = disabled
        self.multiple = False
        self.empty_value = []
        self.min = min
        self.max = max
        self.multiple_handler = MultipleHandler(
            self.multiple, self.min, self.max, self.required
        )
        self.errors = self._init_errors(errors)
        self.value = value

    def render(self):
        return {
            "type": self.type,
            "key": self._key,
            "label": self.label,
            "hint": self.hint,
            "options": self.options,
            "multiple": self.multiple,
            "searchable": self.searchable,
            "required": self.required,
            "columns": self.columns,
            "fullWidth": self.full_width,
            "layout": self.layout,
            "disabled": self.disabled,
            "errors": self.errors,
            "min": self.min,
            "max": self.max,
            "value": self.serialize_value(),
        }

    def _run_validators(self) -> List[str]:
        return self.multiple_handler.validate(self.value)

    def serialize_value(self) -> List:
        return self.multiple_handler.value_to_list(self.value)

    def parse_value(self, value):
        return self.multiple_handler.value_to_list_or_value(value)
