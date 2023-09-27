from __future__ import annotations
import traceback
from ...repositories.json.classes import SlotJSON


class PythonProgram:
    root: SlotJSON
    state: dict

    def __init__(self, code: str) -> None:
        self.code = code

        # state: { [variable: string]: value }
        self.state = {}

    def ex(self, cmd: str):
        exec(cmd, self.state, self.state)

    def ev(self, expr: str):
        return eval(expr, self.state, self.state)

    def execute_initial_code(self):
        if not self.code:
            return

        self.ex(self.code)

    def set_variable(self, variable: str, value):
        try:
            self.state.update({"__temp_value__": value})
            self.ex(f"{variable} = __temp_value__")
        except Exception as e:
            traceback.print_exc()
        finally:
            self.state.pop("__temp_value__", None)
