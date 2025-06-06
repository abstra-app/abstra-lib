from abc import ABC, abstractmethod
from typing import (
    Callable,
    Dict,
    Generic,
    List,
    Optional,
    TypedDict,
    TypeVar,
    Union,
    final,
)


class Widget(ABC):
    type: str

    @abstractmethod
    def __init__(self):
        pass

    @abstractmethod
    def _render(self):
        raise NotImplementedError("render method not implemented")


class OutputWidget(Widget):
    pass


WidgetValue = TypeVar("WidgetValue")


class InputWidget(Widget, Generic[WidgetValue]):
    value: WidgetValue
    required: bool
    key: Optional[str]
    _errors: Optional[List[str]]

    @final
    @property
    def errors(self) -> List[str]:
        return self._errors or []

    @final
    @errors.setter
    def errors(self, value: Union[List[str], str, None]) -> None:
        if value is None:
            self._errors = []
            return

        if isinstance(value, str):
            self._errors = [value]
            return

        if isinstance(value, list):
            if all(isinstance(e, str) for e in value):
                self._errors = value
                return
            else:
                raise TypeError("Provided errors list contains non-string elements")

        raise TypeError("Errors must be a list of strings or a string")

    @final
    def _ensure_key(self, idx: int) -> str:
        return self.key or f"{self.type}_{idx}"

    @final
    def _apply_validation(self):
        for validator in self._validators:
            self.errors += validator()

    @property
    def _validators(self) -> List[Callable[[], List[str]]]:
        return [self._basic_validate_required]

    @final
    def _basic_validate_required(self) -> List[str]:
        if self.required and (self.value is None or self.value == ""):
            return ["i18n_error_required_field"]

        return []

    def _parse_value(self, value):
        return value


class LabelValueDict(TypedDict):
    label: str
    value: object


class OptionsHandler:
    def __init__(self, options: Union[List[LabelValueDict], List[str]]) -> None:
        self.options = options

        self._mappedOptions: Dict[str, LabelValueDict] = {
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

    def serialized_options(self) -> List[LabelValueDict]:
        return [
            {"label": v["label"], "value": k} for k, v in self._mappedOptions.items()
        ]


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

    def validate(self, value: Optional[Union[object, List[object]]]) -> List[str]:
        if (value is None or value == []) and self.required:
            return ["i18n_error_required_field"]

        if not self.multiple or not isinstance(value, list):
            return []

        if self.min is not None and len(value) < self.min:
            return ["i18n_error_min_list"]

        if self.max is not None and len(value) > self.max:
            return ["i18n_error_max_list"]

        return []

    T = TypeVar("T", bound=object)

    def value_to_list_or_value(self, value: List[T]) -> Union[List[T], T, None]:
        if not isinstance(value, list) and value is not None:
            raise Exception("Non-list value received")

        if self.multiple:
            return value

        return value[0] if len(value) else None

    def value_to_list(self, value: Union[List[T], T, None]) -> List[T]:
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

    def validate(self, value: Optional[Union[int, float]]) -> List[str]:
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
