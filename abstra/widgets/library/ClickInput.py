from ..widget_base import Input


class ClickInput(Input):
    type = "click-input"

    def __init__(self, key: str, label: str, **kwargs):
        super().__init__(key)
        self.label = label
        self.hint = kwargs.get("hint", None)
        self.disabled = kwargs.get("disabled", False)
        self.columns = kwargs.get("columns", 1)
        self.full_width = kwargs.get("full_width", False)

    def json(self, **kwargs):
        return {
            "type": self.type,
            "key": self.key,
            "label": self.label,
            "hint": self.hint,
            "disabled": self.disabled,
            "columns": self.columns,
            "fullWidth": self.full_width,
        }

    def convert_answer(self, answer: str) -> str:
        return answer
