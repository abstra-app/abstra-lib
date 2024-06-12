from datetime import datetime
from typing import List, Optional, Tuple, Union
from abstra_internals.widgets.response_types import AppointmentSlot
from abstra_internals.widgets.widget_base import Input


class AppointmentInput(Input):
    type = 'appointment-input'
    empty_value = None
    value: Optional[AppointmentSlot]
    slots: List[AppointmentSlot]

    def __init__(self, key: str, label: str, **kwargs):
        super().__init__(key)
        self.set_props(dict(label=label, **kwargs))

    def set_props(self, props):
        self.label = props.get('label', 'Label')
        self.required = props.get('required', True)
        self.hint = props.get('hint', None)
        self.full_width = props.get('full_width', False)
        self.disabled = props.get('disabled', False)
        self.value = self.load_initial_value(props.get('initial_value',
            self.empty_value))
        self.slots = AppointmentSlot.from_list(props.get('slots', []))

    def render(self, ctx: dict):
        return {'type': self.type, 'key': self.key, 'label': self.label,
            'hint': self.hint, 'value': self.serialize_value(), 'required':
            self.required, 'fullWidth': self.full_width, 'disabled': self.
            disabled, 'slots': [s.to_dict() for s in self.slots], 'errors':
            self.errors}

    def serialize_value(self) ->Optional[int]:
        return self.slots.index(self.value) if self.value is not None else None

    def parse_value(self, value: Optional[int]) ->Optional[AppointmentSlot]:
        if value is None:
            return None
        return self.slots[value]

    def load_initial_value(self, value: Union[AppointmentSlot, dict, Tuple[
        datetime, datetime]]) ->Optional[AppointmentSlot]:
        if isinstance(value, AppointmentSlot):
            return value
        elif isinstance(value, dict):
            return AppointmentSlot.from_dict(value)
        elif isinstance(value, tuple):
            return AppointmentSlot(*value)
        return None
