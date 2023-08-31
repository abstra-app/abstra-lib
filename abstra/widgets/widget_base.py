from abc import abstractmethod, ABC
from typing import Any, List, Union
from . import i18n


class Widget(ABC):
    def __init__(self, i18n_lang="en_us") -> None:
        super().__init__()
        self.i18n = i18n.Provider(lang=i18n_lang)

    @abstractmethod
    def render(self, ctx: dict):
        raise NotImplementedError("render not implemented")

    @abstractmethod
    def set_props(self, props):
        raise NotImplementedError("set_props not implemented")


class Input(Widget):
    type: str
    errors: List[str] = []
    empty_value: Any = None

    def __init__(self, key: str) -> None:
        super().__init__()
        self.key = key

    def has_errors(self):
        return len(self.errors) > 0

    def set_value(self, value, set_errors=False):
        old_value = self.value if hasattr(self, "value") else None
        self.value = value

        if set_errors and old_value != value:
            self.set_errors()

    def set_errors(self):
        self.errors = self.validate()

    def is_value_unset(self):
        if self.has_prop_multiple() and self.multiple:
            return False

        return (
            self.value == None
            or self.value == ""
            or self.value == []
            or (isinstance(self.value, bool) and self.value == False)
            or self.value == {}
        )

    def has_prop_multiple(self):
        return "multiple" in self.__dict__

    def _validate_required(self) -> List[str]:
        if hasattr(self, "required") and self.required and self.is_value_unset():
            if type(self.required) == str:
                return [self.required]

            return [self.i18n.get("error_required_field")]

        return []

    def _validate_number_min_max(self) -> List[str]:
        if type(self.value) != int and type(self.value) != float:
            return []

        if hasattr(self, "min") and self.min is not None and self.value < self.min:
            return [self.i18n.get("error_min_number").format(min=self.min)]

        if hasattr(self, "max") and self.max is not None and self.value > self.max:
            return [self.i18n.get("error_max_number").format(max=self.max)]

        return []

    def _validate_list_min_max(self) -> List[str]:
        if type(self.value) != list:
            return []

        if hasattr(self, "min") and self.min is not None and len(self.value) < self.min:
            return [self.i18n.get("error_min_list").format(min=self.min)]

        if hasattr(self, "max") and self.max is not None and len(self.value) > self.max:
            return [self.i18n.get("error_max_list").format(max=self.max)]

        return []

    def validate(self) -> List[str]:
        errors = []
        errors.extend(self._validate_required())
        errors.extend(self._validate_number_min_max())
        errors.extend(self._validate_list_min_max())

        return errors

    def __first_or_list(self, value: List) -> Union[List, Any]:
        if not self.has_prop_multiple():
            raise Exception("first_or_list called on widget without multiple property")

        if not isinstance(value, list) and value is not None:
            raise Exception("Non-list value received")

        if value is None:
            return self.empty_value

        if hasattr(self, "multiple") and self.multiple:
            return value if value else []
        return value[0] if len(value) > 0 else None

    @abstractmethod
    def serialize_value(self):
        raise NotImplementedError("serialize_value not implemented")

    def parse_value(self, value):
        _value = value

        if hasattr(self, "multiple"):
            _value = self.__first_or_list(value)

        return _value if _value != None else self.empty_value


class Output(Widget):
    type: str

    def has_errors(self):
        return False
