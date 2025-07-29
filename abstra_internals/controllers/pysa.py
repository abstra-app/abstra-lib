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


def analyze_python_syntax(code):
    """
    Analyze Python code for syntax errors using the Jedi static analysis engine.

    This function parses the provided Python code and returns a list of syntax errors
    found during parsing. It uses Jedi's syntax error detection capabilities to
    identify issues like missing parentheses, invalid indentation, undefined variables,
    and other Python syntax violations.

    Args:
        code (str): The Python source code to analyze for syntax errors.
            Can be a complete script, code snippet, or partial code.

    Returns:
        List[Dict]: List of syntax error objects, each containing:
            - line (int): Line number where the error occurs (1-based)
            - column (int): Column number where the error starts (0-based)
            - until_line (int): Line number where the error ends
            - until_column (int): Column number where the error ends
            - message (str): Human-readable error description
            - severity (str): Always "error" for syntax errors

    Example:
        ```python
        # Valid Python code - no errors
        valid_code = '''
        def hello_world():
            print("Hello, world!")
            return "success"
        '''
        errors = jedi_get_syntax_errors(valid_code)
        print(f"Errors found: {len(errors)}")  # Output: 0

        # Code with syntax errors
        invalid_code = '''
        def broken_function(
            print("Missing closing parenthesis")
            if True
                print("Missing colon")
            return unclosed_string"
        '''
        errors = jedi_get_syntax_errors(invalid_code)
        for error in errors:
            print(f"Line {error['line']}: {error['message']}")
            print(f"  Position: column {error['column']} to {error['until_column']}")

        # Code with indentation errors
        indentation_error = '''
        def my_function():
        print("Wrong indentation")
            return True
        '''
        errors = jedi_get_syntax_errors(indentation_error)
        if errors:
            print(f"Indentation error: {errors[0]['message']}")

        # Incomplete code snippets
        incomplete_code = "for i in range(10):"
        errors = jedi_get_syntax_errors(incomplete_code)
        # May return errors for incomplete syntax
        ```

    Note:
        - Uses cached Jedi Script objects for performance optimization
        - Returns empty list if code analysis fails due to Jedi exceptions
        - Line numbers are 1-based (first line is 1), columns are 0-based
        - Useful for real-time code validation in editors and IDEs
        - Can handle partial or incomplete code snippets
        - Severity is always "error" as this function only detects syntax errors
        - The function is safe and won't raise exceptions, returning [] on errors

    Copywritings:
        Analyze Python code for syntax errors
        Analyzing Python code for syntax errors...
    """
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
