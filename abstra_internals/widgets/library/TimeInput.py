import datetime
import re
from typing import Optional
from abstra_internals.widgets.widget_base import Input


class TimeInput(Input):
    type = 'time-input'
    empty_value = None

    def __init__(self, key: str, label: str, **kwargs):
        super().__init__(key)
        self.set_props(dict(label=label, **kwargs))

    def set_props(self, props):
        self.label = props.get('label', 'Label')
        self.value = props.get('initial_value', self.empty_value)
        self.required = props.get('required', True)
        self.hint = props.get('hint', None)
        self.full_width = props.get('full_width', False)
        self.format = props.get('format', '24hs')
        self.disabled = props.get('disabled', False)

    def render(self, ctx: dict):
        return {'type': self.type, 'key': self.key, 'label': self.label,
            'format': self.format, 'hint': self.hint, 'value': self.
            serialize_value(), 'required': self.required, 'fullWidth': self
            .full_width, 'disabled': self.disabled, 'errors': self.errors}

    def serialize_value(self) ->Optional[dict]:
        if isinstance(self.value, str) and re.match('^\\d{2}:\\d{2}$', self
            .value):
            return {'hour': int(self.value.split(':')[0]), 'minute': int(
                self.value.split(':')[1])}
        if isinstance(self.value, datetime.time):
            return {'hour': self.value.hour, 'minute': self.value.minute}
        return {'hour': 0, 'minute': 0}

    def parse_value(self, value) ->Optional[datetime.time]:
        if value is None or value['hour'] is None or value['minute'] is None:
            return self.empty_value
        return datetime.time(value['hour'], value['minute']
            ) if value else self.empty_value
