import sys
from .execution.execution import Execution

_og_stdout_write = sys.stdout.write
_og_stderr_write = sys.stderr.write


def writeWraper(type, write, text: str):
    try:
        write(text)
        execution = Execution.get_execution()
        if execution and text.strip() != "":
            execution.stdio(type, text)
    finally:
        return len(text)


def overloads():
    sys.stdout.write = lambda text: writeWraper("stdout", _og_stdout_write, text)
    sys.stderr.write = lambda text: writeWraper("stderr", _og_stderr_write, text)


def reset():
    sys.stdout.write = _og_stdout_write
    sys.stderr.write = _og_stderr_write
