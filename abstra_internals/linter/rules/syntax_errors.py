from ..linter import LinterRule
from ...utils.file import traverse_code
from ...repositories.json.classes import AbstraJSONRepository


class SyntaxErrors(LinterRule):
    label = "Syntax errors"
    type = "bug"
    fixes = []
    error = None

    def is_valid(self) -> bool:
        abstra_json = AbstraJSONRepository.load()
        for entrypoint in abstra_json.iter_entrypoints():
            try:
                for _ in traverse_code(entrypoint, raise_on_syntax_errors=True):
                    pass
            except SyntaxError as e:
                self.error = e
                self.error.filename = str(entrypoint)
                return False
        return True

    def make_description(self):
        return str(self.error)
