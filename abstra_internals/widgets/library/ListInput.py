import types
from typing import Any, Dict, List, Optional, Union
from abstra_internals.entities.forms.form_state import State
from abstra_internals.entities.forms.template import Template, TemplateFunction, TemplateRenderer
from abstra_internals.widgets.widget_base import Input


class ListInput:


    class LegacyListInput(Input):
        type = 'list-input'
        schemas: List[Any]
        item_schema: Any
        empty_value = []

        def __init__(self, key: str, item_schema: Any, **kwargs):
            initial_error = kwargs.get('errors', [])
            if not isinstance(initial_error, list):
                initial_error = [initial_error]
            super().__init__(key)
            self.item_schema = item_schema
            self.schemas = []
            self.value = self.empty_value
            self.set_props(dict(item_schema=item_schema, **kwargs))

        def serialize_value(self) ->List:
            return [schema.serialize_value() for schema in self.schemas]

        def set_props(self, props):
            self.min = props.get('min', 0)
            self.max = props.get('max', None)
            self.hint = props.get('hint', None)
            self.add_button_text = props.get('add_button_text', '+')
            self.full_width = props.get('full_width', False)
            self.required = props.get('required', True)
            self.disabled = props.get('disabled', False)
            self.schemas = [self.item_schema.copy() for _ in range(self.min)]
            if props.get('initial_value', None):
                self.set_value(props.get('initial_value', None), set_errors
                    =False)

        def _validate_list_min_max(self) ->List[str]:
            if self.min is not None and len(self.value) < self.min:
                return ['i18n_error_min_list']
            if self.max is not None and len(self.value) > self.max:
                return ['i18n_error_max_list']
            return []

        def _get_inputs(self):
            inputs = []
            for schema in self.schemas:
                inputs.extend(schema.get_input_widgets())
            return inputs

        def _validate_each(self) ->List[str]:
            inputs = self._get_inputs()
            for input in inputs:
                input.set_errors()
            if self._has_errors():
                return ['i18n_error_invalid_list_item']
            return []

        def _has_errors(self) ->bool:
            inputs = self._get_inputs()
            for input in inputs:
                has_errors = len(input.validate()) > 0
                if has_errors:
                    return True
            return False

        @property
        def validators(self):
            return super().validators + [self._validate_list_min_max] + [self
                ._validate_each]

        def render(self, ctx: dict):
            schemas = [schema.render(ctx) for schema in self.schemas]
            return {'type': self.type, 'key': self.key, 'hint': self.hint,
                'errors': self.errors, 'min': self.min, 'max': self.max,
                'addButtonText': self.add_button_text, 'fullWidth': self.
                full_width, 'required': self.required, 'disabled': self.
                disabled, 'schemas': schemas, 'value': self.serialize_value()}

        def set_value(self, value: List, set_errors=False):
            if not self._has_errors():
                self.errors = []
            if not value:
                value = []
            self.value = value
            for idx, value_item in enumerate(value):
                if idx >= len(self.schemas):
                    schema = self.item_schema.copy()
                    self.schemas.append(schema)
                else:
                    schema = self.schemas[idx]
                schema.set_values(value_item)
            self.schemas = self.schemas[:len(value)]

        def parse_value(self, value) ->List:
            parsed_values = []
            for index, value in enumerate(value or self.empty_value):
                if index >= len(self.schemas):
                    schema = self.item_schema.copy()
                    value = schema.parse_value(value or {})
                else:
                    schema = self.schemas[index]
                    value = schema.parse_value(value or {})
                parsed_values.append(value)
            return parsed_values


    class _ListInput(Input):
        type = 'list-input'
        _raw_template: Union[Template, TemplateFunction]
        empty_value = []
        value: List[State]

        def __init__(self, key: str, raw_template: Union[Template,
            TemplateFunction], **kwargs):
            initial_error = kwargs.get('errors', [])
            if not isinstance(initial_error, list):
                initial_error = [initial_error]
            super().__init__(key)
            self.value = self.empty_value
            self._raw_template = raw_template
            self.set_props(dict(**kwargs))

        def serialize_value(self):
            raise NotImplementedError(
                'Unnecessary as its done by rendering widgets')

        def get_item_template(self, idx: int) ->Template:
            item_state = self.value[idx] if idx < len(self.value) else {}
            if callable(self._raw_template):
                result = self._raw_template(State(item_state))
                if isinstance(result, tuple):
                    return result[0]
                return result or []
            return self._raw_template

        def set_props(self, props):
            self.min = props.get('min', 0)
            self.max = props.get('max', None)
            self.hint = props.get('hint', None)
            self.add_button_text = props.get('add_button_text', '+')
            self.full_width = props.get('full_width', False)
            self.required = props.get('required', True)
            self.disabled = props.get('disabled', False)
            super().set_props(props)

        def _validate_list_min_max(self) ->List[str]:
            if self.min is not None and len(self.value) < self.min:
                return ['i18n_error_min_list']
            if self.max is not None and len(self.value) > self.max:
                return ['i18n_error_max_list']
            return []

        def _validate_all_items(self) ->List[str]:
            for idx in range(len(self.value)):
                template = self.get_item_template(idx)
                renderer = TemplateRenderer(template)
                output = renderer.render(self.value[idx])
                if output['has_errors']:
                    return ['i18n_error_invalid_list_item']
            return []

        @property
        def validators(self):
            return super().validators + [self._validate_list_min_max, self.
                _validate_all_items]

        def render(self, ctx: dict):
            rendered_items = []
            serialized_value = []
            for idx in range(len(self.value)):
                item_template = self.get_item_template(idx)
                renderer = TemplateRenderer(item_template)
                output = renderer.render(self.value[idx])
                rendered_items.append(output['widgets'])
                item_value = {widget['key']: widget['value'] for widget in
                    output['widgets'] if 'key' in widget}
                serialized_value.append(item_value)
            return {'type': self.type, 'key': self.key, 'hint': self.hint,
                'errors': self.errors, 'min': self.min, 'max': self.max,
                'addButtonText': self.add_button_text, 'fullWidth': self.
                full_width, 'required': self.required, 'disabled': self.
                disabled, 'schemas': rendered_items, 'value': serialized_value}

        def parse_value(self, value: List[Optional[Dict]]) ->List[State]:
            parsed_values: List[State] = []
            if not value:
                return self.empty_value
            for idx, item in enumerate(value):
                state = State()
                template = self.get_item_template(idx)
                renderer = TemplateRenderer(template)
                raw_value = item or {}
                parsed = renderer.parse_state(raw_value)
                state.update_values(parsed)
                parsed_values.append(state)
            return parsed_values

    def __new__(cls, key: str, item_schema: Any, **kwargs):
        if isinstance(item_schema, list) or isinstance(item_schema, types.
            FunctionType):
            return cls._ListInput(key, raw_template=item_schema, **kwargs)
        return cls.LegacyListInput(key, item_schema, **kwargs)
