import sys
from typing import Callable, Literal, Union

from .env_masker import GLOBAL_MASKER
from .execution.execution import Execution
from .stdio_skip_request import ESCAPE_STRING
from .utils.environment import IS_PRODUCTION

_og_stdout_write = sys.stdout.write
_og_stderr_write = sys.stderr.write


def writeWraper(
    type: Literal["stdout", "stderr"],
    write: Callable,
    raw: Union[str, bytearray],
    print_exceptions: bool,
):
    text = raw.decode("utf-8") if not isinstance(raw, str) else raw

    if IS_PRODUCTION:
        text = GLOBAL_MASKER.mask(text)
    try:
        skip_sending = text.startswith(ESCAPE_STRING)
        execution = Execution.get_current_execution()

        term_output = text

        if execution and not skip_sending:
            term_output = (
                f"[RUN {execution.id.split(sep='-')[0]}] {term_output}"
                if term_output.strip()
                else term_output
            )
            execution.stdio(type, text)
        write(term_output)
    except Exception as e:
        if print_exceptions:
            write(f"[STDIO_WRAPPER_ERROR]: {e}")
    finally:
        sys.stdout.flush()
        return len(text)


def override_stdio(print_exceptions: bool):
    sys.stdout.write = lambda raw: writeWraper(
        "stdout", _og_stdout_write, raw, print_exceptions
    )
    sys.stderr.write = lambda raw: writeWraper(
        "stderr", _og_stderr_write, raw, print_exceptions
    )


def reset():
    sys.stdout.write = _og_stdout_write
    sys.stderr.write = _og_stderr_write
