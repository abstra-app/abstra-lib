from typing import List, Union
from abstra_internals.widgets.widget_base import Input


class TagInput(Input):
    type = 'tag-input'
    empty_value = []

    def __init__(self, key: str, label: str, **kwargs):
        super().__init__(key)
        self.set_props(dict(label=label, **kwargs))

    def set_props(self, props):
        self.label = props.get('label', 'Label')
        self.value = props.get('initial_value', self.empty_value)
        self.placeholder = props.get('placeholder', '')
        self.required = props.get('required', True)
        self.hint = props.get('hint', None)
        self.full_width = props.get('full_width', False)
        self.disabled = props.get('disabled', False)

    def is_value_unset(self):
        return False

    def render(self, ctx: dict):
        return {'type': self.type, 'key': self.key, 'label': self.label,
            'value': self.serialize_value(), 'placeholder': self.
            placeholder, 'required': self.required, 'hint': self.hint,
            'fullWidth': self.full_width, 'disabled': self.disabled,
            'errors': self.errors}

    def serialize_value(self) ->List[Union[str, float]]:
        return self.value or []
