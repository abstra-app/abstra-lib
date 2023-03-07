from ..widget_base import Input


class NumberSliderInput(Input):
    type = "number-slider-input"

    def __init__(self, key: str, label: str, **kwargs):
        super().__init__(key)
        self.label = label
        self.initial_value = kwargs.get("initial_value", 0)
        self.required = kwargs.get("required", True)
        self.hint = kwargs.get("hint", None)
        self.columns = kwargs.get("columns", 1)
        self.full_width = kwargs.get("full_width", False)
        self.min = kwargs.get("min")
        self.max = kwargs.get("max")
        self.step = kwargs.get("step")
        self.disabled = kwargs.get("disabled", False)

    def json(self, **kwargs):
        return {
            "type": self.type,
            "key": self.key,
            "label": self.label,
            "initialValue": self.initial_value,
            "required": self.required,
            "hint": self.hint,
            "columns": self.columns,
            "fullWidth": self.full_width,
            "min": self.min,
            "max": self.max,
            "step": self.step,
            "disabled": self.disabled,
        }

    def convert_answer(self, answer: float) -> float:
        """
        Returns:
            float: The value entered by the user
        """
        return answer
