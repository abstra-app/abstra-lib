from functools import lru_cache

import jedi
from pydantic import BaseModel

JEDI_ENV = jedi.InterpreterEnvironment()


@lru_cache(maxsize=128)
def _script(code: str):
    return jedi.Script(code=code, environment=JEDI_ENV)


def jedi_get_autocomplete(code, line, column):
    try:
        script = _script(code)
        completions = script.complete(line, column)
        result = []
        for c in completions:
            completion = {
                "params": [],
                "name": c.name,
                "source": "jedi",
                "documentation": c.docstring(),
            }
            for completion_signatures in c.get_signatures():
                for p in completion_signatures.params:
                    completion["params"].append({"name": p.name})
            result.append(completion)

        return result
    except Exception:
        return []


def jedi_help(code, line, column):
    try:
        script = _script(code)
        return [
            {"docstring": h.docstring(), "name": h.name}
            for h in script.help(line, column)
        ]
    except Exception:
        return []


def jedi_get_syntax_errors(code):
    try:
        script = _script(code)
        errors = script.get_syntax_errors()
        return [
            {
                "line": e.line,
                "column": e.column,
                "until_line": e.until_line,
                "until_column": e.until_column,
                "message": e.get_message(),
                "severity": "error",
            }
            for e in errors
        ]
    except Exception:
        return []


class Context(BaseModel):
    code: str
    line: int = 0
    column: int = 0
