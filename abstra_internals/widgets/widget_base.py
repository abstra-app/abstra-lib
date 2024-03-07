from token import OP
import uuid
from abc import ABC, abstractmethod
from typing import Any, Callable, List, Optional, TypedDict, Union, TypeVar


class Widget(ABC):
    @abstractmethod
    def render(self, ctx: dict):
        raise NotImplementedError("render not implemented")

    @abstractmethod
    def set_props(self, props):
        raise NotImplementedError("set_props not implemented")


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

    def set_value(self, value, set_errors=False):
        old_value = self.value if hasattr(self, "value") else None
        self.value = value

        if set_errors and old_value != value:
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
            self.value == None
            or self.value == ""
            or self.value == []
            or (isinstance(self.empty_value, bool) and self.value == False)
            or self.value == {}
        )

    def _validate_required(self) -> List[str]:
        if self.required and self.is_value_unset():
            if type(self.required) == str:
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
            str(uuid.uuid4()): {
                "label": option if isinstance(option, str) else option["label"],
                "value": option if isinstance(option, str) else option["value"],
            }
            for option in options
        }

    def uuids_from_values(self, values: List[object]) -> List[str]:
        value = [self._uuid_from_value(value) for value in values]
        return [v for v in value if v is not None]

    def values_from_uuids(self, uuids: Union[List[str], None]) -> List[object]:
        if uuids is None:
            return []

        return [self._value_from_uuid(uuid) for uuid in uuids]

    def _value_from_uuid(self, uuid: str) -> object:
        return self._mappedOptions[uuid]["value"]

    def _uuid_from_value(self, value: object) -> Optional[str]:
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
            if type(self.required) == str:
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
            if type(self.required) == str:
                errors.append(self.required)
            else:
                errors.append("i18n_error_required_field")

        if self.min is not None and value < self.min:
            errors.append("i18n_error_min_number")

        if self.max is not None and value > self.max:
            errors.append("i18n_error_max_number")

        return errors
