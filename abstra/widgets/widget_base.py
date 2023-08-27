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

    def set_value(self, value):
        self.value = value

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

    def validate(self) -> List[str]:
        errors = []
        if hasattr(self, "required") and self.required and self.is_value_unset():
            errors.append(self.i18n.get("error_required_field"))

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
