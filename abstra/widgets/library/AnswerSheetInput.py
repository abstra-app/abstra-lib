from ..widget_base import Input
from typing import List


class AnswerSheetInput(Input):
    type = "answer-sheet-input"

    def __init__(
        self, key: str, label: str, options: List, number_of_questions: int, **kwargs
    ):
        super().__init__(key)
        self.label = label
        self.options = options
        self.number_of_questions = number_of_questions
        self.required = kwargs.get("required", True)
        self.hint = kwargs.get("hint", None)
        self.columns = kwargs.get("columns", 1)
        self.full_width = kwargs.get("full_width", False)
        self.disabled = kwargs.get("disabled", False)

    def json(self, **kwargs):
        return {
            "type": self.type,
            "key": self.key,
            "label": self.label,
            "options": self.options,
            "numberOfQuestions": self.number_of_questions,
            "required": self.required,
            "hint": self.hint,
            "columns": self.columns,
            "fullWidth": self.full_width,
            "disabled": self.disabled,
        }

    def convert_answer(self, answer: str) -> str:
        return answer
