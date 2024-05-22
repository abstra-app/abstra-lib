from typing import List, Optional, TypedDict
from abstra_internals.widgets.file_utils import convert_file
from abstra_internals.widgets.widget_base import Input, MultipleHandler


class CardOption(TypedDict):
    title: Optional[str]
    subtitle: Optional[str]
    image: Optional[str]
    description: Optional[str]
    topLeftExtra: Optional[str]
    topRightExtra: Optional[str]


class CardsInput(Input):
    type = 'cards-input'
    empty_value = None
    multiple: bool = False
    multiple_handler: MultipleHandler

    def __init__(self, key: str, label: str, options: List[CardOption], **
        kwargs):
        super().__init__(key)
        self.set_props(dict(label=label, options=options, **kwargs))

    def set_props(self, props):
        self.label = props.get('label', 'Label')
        self.options = [{**opt, 'image': convert_file(opt.get('image'))} for
            opt in props.get('options', [])]
        self.searchable = props.get('searchable', False)
        self.required = props.get('required', True)
        self.hint = props.get('hint', None)
        self.columns = props.get('columns', 2)
        self.full_width = props.get('full_width', False)
        self.layout = props.get('layout', 'list')
        self.disabled = props.get('disabled', False)
        self.multiple = props.get('multiple', False)
        self.empty_value = [] if self.multiple else None
        self.value = props.get('initial_value', self.empty_value)
        self.min = props.get('min', None)
        self.max = props.get('max', None)
        self.multiple_handler = MultipleHandler(self.multiple, self.min,
            self.max, self.required)

    def render(self, ctx: dict):
        return {'type': self.type, 'key': self.key, 'label': self.label,
            'hint': self.hint, 'options': self.options, 'multiple': self.
            multiple, 'searchable': self.searchable, 'required': self.
            required, 'columns': self.columns, 'fullWidth': self.full_width,
            'layout': self.layout, 'disabled': self.disabled, 'errors':
            self.errors, 'min': self.min, 'max': self.max, 'value': self.
            serialize_value()}

    def validate(self) ->List[str]:
        return self.multiple_handler.validate(self.value)

    def serialize_value(self) ->List:
        return self.multiple_handler.value_to_list(self.value)

    def parse_value(self, value):
        return self.multiple_handler.value_to_list_or_value(value)
