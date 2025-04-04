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
    """Card selection input widget for choosing from visual card options.

    Attributes:
        value (Union[List[CardOption], CardOption, None]): The selected card option(s).
    """

    type = "cards-input"
    value: Union[List[CardOption], CardOption, None]
    multiple: bool = False
    multiple_handler: MultipleHandler
    value: Union[List[CardOption], CardOption, None]

    def __init__(
        self,
        label: str,
        options: List["CardOption"],
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
    ):
        """Initialize a CardsInput widget.

        Args:
            label (str): Text label displayed above the cards.
            options (List[CardOption]): List of card options to display.
            key (Optional[str]): Identifier for the widget, defaults to label if not provided.
            searchable (bool): Whether cards can be filtered by search.
            required (bool): Whether a card selection is required before proceeding.
            hint (Optional[str]): Help text displayed below the input.
            columns (Optional[int]): Number of columns to display cards in.
            full_width (bool): Whether the cards should take up the full width of their container.
            layout (Optional[str]): Layout style for the cards ('list' or 'grid').
            disabled (bool): Whether the input is non-interactive.
            min (Optional[int]): Minimum number of cards that must be selected when multiple=True.
            max (Optional[int]): Maximum number of cards that can be selected when multiple=True.
            errors (Optional[Union[List[str], str]]): Pre-defined validation error messages to display.
        """
        self.label = label
        self.key = key or label
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
        self.errors = errors
        self.value = None

    def _render(self):
        return {
            "type": self.type,
            "key": self.key,
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
            "value": self._serialize_value(),
        }

    def _run_validators(self) -> List[str]:
        return self.multiple_handler.validate(self.value)

    def _serialize_value(self) -> List:
        return self.multiple_handler.value_to_list(self.value)

    def _parse_value(self, value):
        return self.multiple_handler.value_to_list_or_value(value)
