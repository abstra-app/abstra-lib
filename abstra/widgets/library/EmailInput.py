from ..widget_base import Input


class EmailInput(Input):
    type = "email-input"

    def __init__(self, key: str, label: str, **kwargs):
        super().__init__(key)
        self.label = label
        self.initial_value = kwargs.get("initial_value", "")
        self.required = kwargs.get("required", True)
        self.hint = kwargs.get("hint", None)
        self.placeholder = kwargs.get("placeholder", "Your email here")
        self.columns = kwargs.get("columns", 1)
        self.full_width = kwargs.get("full_width", False)
        self.invalid_email_message = kwargs.get(
            "invalid_email_message", "Hmm… doesn't look like an email"
        )
        self.disabled = kwargs.get("disabled", False)

    def json(self, **kwargs):
        return {
            "type": self.type,
            "key": self.key,
            "label": self.label,
            "initialValue": self.initial_value,
            "placeholder": self.placeholder,
            "required": self.required,
            "hint": self.hint,
            "columns": self.columns,
            "fullWidth": self.full_width,
            "invalidEmailMessage": self.invalid_email_message,
            "disabled": self.disabled,
        }

    def convert_answer(self, answer: str) -> str:
        """
        Returns:
            str: The value entered by the user
        """
        return answer
