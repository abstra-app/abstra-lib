import sys
from typing import Callable, Literal

from abstra_internals.stdio_skip_request import ESCAPE_STRING
from .execution.execution import Execution

_og_stdout_write = sys.stdout.write
_og_stderr_write = sys.stderr.write


def writeWraper(
    type: Literal["stdout", "stderr"],
    write: Callable,
    text: str,
    print_exceptions: bool,
):
    try:
        write(str(text))
        skip_sending = text.startswith(ESCAPE_STRING)
        execution = Execution.get_current_execution()

        if execution and not skip_sending:
            execution.stdio(type, text)
    except Exception as e:
        if print_exceptions:
            write(f"[WRITE_WRAPPER] ERROR: {str(e)}\n\n")
    finally:
        return len(text)


def override_stdio(print_exceptions: bool):
    sys.stdout.write = lambda text: writeWraper(
        "stdout", _og_stdout_write, text, print_exceptions
    )
    sys.stderr.write = lambda text: writeWraper(
        "stderr", _og_stderr_write, text, print_exceptions
    )


def reset():
    sys.stdout.write = _og_stdout_write
    sys.stderr.write = _og_stderr_write
