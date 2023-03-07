from ..widget_base import Input


class NpsInput(Input):
    type = "nps-input"

    def __init__(self, key: str, label: str, **kwargs):
        super().__init__(key)
        self.label = label
        self.initial_value = kwargs.get("initial_value", None)
        self.required = kwargs.get("required", True)
        self.min = kwargs.get("min", 0)
        self.max = kwargs.get("max", 10)
        self.min_hint = kwargs.get("min_hint", "Not at all likely")
        self.max_hint = kwargs.get("max_hint", "Extremely likely")
        self.columns = kwargs.get("columns", 1)
        self.hint = kwargs.get("hint", None)
        self.full_width = kwargs.get("full_width", False)
        self.disabled = kwargs.get("disabled", False)

    def json(self, **kwargs):
        return {
            "type": self.type,
            "key": self.key,
            "label": self.label,
            "min": self.min,
            "max": self.max,
            "minHint": self.min_hint,
            "maxHint": self.max_hint,
            "initialValue": self.initial_value,
            "required": self.required,
            "columns": self.columns,
            "hint": self.hint,
            "fullWidth": self.full_width,
            "disabled": self.disabled,
        }

    def convert_answer(self, answer: int) -> int:
        """
        Returns:
            int: The value entered by the user
        """
        return answer
