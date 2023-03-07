from ..widget_base import Input


class PasswordInput(Input):
    type = "password-input"

    def __init__(self, key: str, label: str, **kwargs):
        super().__init__(key)
        self.label = label
        self.hint = kwargs.get("hint", None)
        self.required = kwargs.get("required", True)
        self.columns = kwargs.get("columns", 1)
        self.full_width = kwargs.get("full_width", False)
        self.lowercase_required = kwargs.get("lowercase_required", True)
        self.uppercase_required = kwargs.get("uppercase_required", True)
        self.special_required = kwargs.get("special_required", True)
        self.digit_required = kwargs.get("digit_required", True)
        self.min_length = kwargs.get("min_length", 8)
        self.max_length = kwargs.get("max_length", None)
        self.size = kwargs.get("size", None)
        self.pattern = kwargs.get("pattern", None)
        self.autocomplete = kwargs.get("autocomplete", "current-password")
        self.placeholder = kwargs.get("placeholder", "")
        self.disabled = kwargs.get("disabled", False)
        self.secret = True

    def json(self, **kwargs):
        return {
            "type": self.type,
            "key": self.key,
            "label": self.label,
            "hint": self.hint,
            "required": self.required,
            "columns": self.columns,
            "fullWidth": self.full_width,
            "lowercaseRequired": self.lowercase_required,
            "uppercaseRequired": self.uppercase_required,
            "specialRequired": self.special_required,
            "digitRequired": self.digit_required,
            "minLength": self.min_length,
            "maxLength": self.max_length,
            "size": self.size,
            "pattern": self.pattern,
            "autocomplete": self.autocomplete,
            "placeholder": self.placeholder,
            "disabled": self.disabled,
            "secret": self.secret,
        }

    def convert_answer(self, answer: str) -> str:
        """
        Returns:
            str: The value entered by the user
        """
        return answer
