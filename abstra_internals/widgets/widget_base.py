from abc import abstractmethod, ABC
from typing import Any, List, Union, Callable, Optional


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


class OptionalListInput(Input):
    # Input widgets that can be either a single value or a list of values
    multiple: bool = False
    min: Optional[int] = None
    max: Optional[int] = None

    def is_value_unset(self) -> bool:
        if self.multiple:
            return self.value == None
        else:
            return super().is_value_unset()

    def _single_value_or_list(self, value: List) -> Union[List, Any]:
        if not isinstance(value, list) and value is not None:
            raise Exception("Non-list value received")

        if value is None:
            return self.empty_value

        if self.multiple:
            return value or []

        return value[0] if len(value) > 0 else None

    def _validate_list_min_max(self) -> List[str]:
        if self.min is not None and len(self.value) < self.min:
            return ["i18n_error_min_list"]

        if self.max is not None and len(self.value) > self.max:
            return ["i18n_error_max_list"]

        return []

    @property
    def validators(self) -> List[Callable[[], List[str]]]:
        return super().validators + [self._validate_list_min_max]

    def parse_value(self, value: List) -> Union[List, Any]:
        _value = self._single_value_or_list(value)

        return super().parse_value(_value)


class NumberishInput(Input):
    min: Optional[Union[int, float]] = None
    max: Optional[Union[int, float]] = None

    @property
    def validators(self) -> List[Callable[[], List[str]]]:
        return super().validators + [self._validate_number_min_max]

    def _validate_number_min_max(self) -> List[str]:
        if type(self.value) != int and type(self.value) != float:
            return []

        if self.min is not None and self.value < self.min:
            return ["i18n_error_min_number"]

        if self.max is not None and self.value > self.max:
            return ["i18n_error_max_number"]

        return []
