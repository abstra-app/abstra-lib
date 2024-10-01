from abc import ABC, abstractmethod
from typing import Any, Callable, List, Optional, TypedDict, TypeVar, Union


class Widget(ABC):
    @abstractmethod
    def render(self, ctx: dict):
        raise NotImplementedError("render not implemented")

    @abstractmethod
    def set_props(self, props):
        raise NotImplementedError("set_props not implemented")

    def is_equal_to(self, other: "Widget"):
        if type(self) is not type(other):
            return False

        self_render = self.render({})
        other_render = other.render({})

        ignore_keys = ["value", "errors"]

        for key in self_render:
            if key not in ignore_keys and self_render[key] != other_render.get(key):
                return False

        return True


class Output(Widget):
    type: str

    def has_errors(self):
        return False


class Input(Widget):
    type: str
    errors: List[str] = (lambda: [])()
    empty_value: Any = None
    required: Optional[Union[bool, str]] = None

    def __init__(self, key: str) -> None:
        super().__init__()
        self.key = key

    def _has_changes(self, old_value, new_value):
        is_empty = old_value is None and new_value == self.empty_value
        return old_value != new_value and not is_empty

    def set_value(self, value, set_errors=False):
        old_value = self.value if hasattr(self, "value") else None
        self.value = value

        if set_errors and self._has_changes(old_value, value):
            self.set_errors()

    def validate(self) -> List[str]:
        errors = []
        for validator in self.validators:
            errors += validator()
        return errors

    def set_errors(self):
        self.errors = self.validate()

    def has_errors(self):
        return len(self.errors) > 0

    def is_value_unset(self) -> bool:
        return (
            self.value is None
            or self.value == ""
            or self.value == []
            or (isinstance(self.empty_value, bool) and self.value is False)
            or self.value == {}
        )

    def _validate_required(self) -> List[str]:
        if self.required and self.is_value_unset():
            if isinstance(self.required, str):
                return [self.required]

            return ["i18n_error_required_field"]

        return []

    @property
    def validators(self) -> List[Callable[[], List[str]]]:
        return [self._validate_required]

    def parse_value(self, value):
        _value = value
        return _value if _value is not None else self.empty_value

    @abstractmethod
    def serialize_value(self):
        raise NotImplementedError("serialize_value not implemented")


class LabelValueOption(TypedDict):
    label: str
    value: object


AbstraOption = Union[str, LabelValueOption]


class OptionsHandler:
    def __init__(self, options: Union[List[str], List[LabelValueOption]]) -> None:
        self.options = options

        self._mappedOptions = {
            str(index): {
                "label": option if isinstance(option, str) else option["label"],
                "value": option if isinstance(option, str) else option["value"],
            }
            for index, option in enumerate(options)
        }

    def ids_from_values(self, values: List[object]) -> List[str]:
        value = [self._id_from_value(value) for value in values]
        return [v for v in value if v is not None]

    def values_from_ids(self, ids: Union[List[str], None]) -> List[object]:
        if ids is None:
            return []

        return [self._value_from_id(id) for id in ids]

    def _value_from_id(self, id: str) -> object:
        if id not in self._mappedOptions:
            return None
        return self._mappedOptions[id]["value"]

    def _id_from_value(self, value: object) -> Optional[str]:
        for mapKey, mapValue in self._mappedOptions.items():
            if mapValue["value"] == value:
                return mapKey
        return None

    def serialized_options(self) -> List[LabelValueOption]:
        return [
            {"label": v["label"], "value": k} for k, v in self._mappedOptions.items()
        ]


T = TypeVar("T")


class MultipleHandler:
    def __init__(
        self,
        multiple: bool,
        min: Optional[int] = None,
        max: Optional[int] = None,
        required: Optional[Union[bool, str]] = None,
    ) -> None:
        self.multiple = multiple
        self.min = min
        self.max = max
        self.required = required

    def _is_value_unset(self, value: Union[object, List[object]]) -> bool:
        return value is None or value == []

    def validate(self, value: Union[object, List[object]]) -> List[str]:
        if self.required and self._is_value_unset(value):
            if isinstance(self.required, str):
                return [self.required]

            return ["i18n_error_required_field"]

        if not self.multiple or not isinstance(value, list):
            return []

        if self.min is not None and len(value) < self.min:
            return ["i18n_error_min_list"]

        if self.max is not None and len(value) > self.max:
            return ["i18n_error_max_list"]

        return []

    def value_to_list_or_value(self, value: List[T]) -> Union[List[T], T, None]:
        if not isinstance(value, list) and value is not None:
            raise Exception("Non-list value received")

        if self.multiple:
            return value

        return value[0] if len(value) else None

    def value_to_list(self, value: Union[List[T], T]) -> List[T]:
        if isinstance(value, list):
            return value
        if value is None:
            return []
        return [value]


class NumberValueHandler:
    def __init__(
        self,
        min: Optional[Union[int, float]] = None,
        max: Optional[Union[int, float]] = None,
        required: Optional[Union[bool, str]] = None,
    ) -> None:
        self.min = min
        self.max = max
        self.required = required

    def validate(self, value: Union[int, float]) -> List[str]:
        errors = []
        if self.required and value is None:
            if isinstance(self.required, str):
                errors.append(self.required)
            else:
                errors.append("i18n_error_required_field")

        if self.min is not None and value is not None and value < self.min:
            errors.append("i18n_error_min_number")

        if self.max is not None and value is not None and value > self.max:
            errors.append("i18n_error_max_number")

        return errors
