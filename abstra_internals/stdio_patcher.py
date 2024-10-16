import sys

from abstra_internals.controllers.execution_stdio import StdioController
from abstra_internals.controllers.main import MainController


class UnboundPthread(Exception):
    pass


class StdioPatcher:
    original_sys_stdout_write = sys.stdout.write
    original_sys_stderr_write = sys.stderr.write

    @classmethod
    def apply(cls, main_controller: MainController):
        stdio_controller = StdioController(
            sys_stderr_write=cls.original_sys_stderr_write,
            sys_stdout_write=cls.original_sys_stdout_write,
            main_controller=main_controller,
        )

        sys.stdout.write = stdio_controller.patched_stdout_write
        sys.stderr.write = stdio_controller.patched_stderr_write

    @classmethod
    def reset(cls):
        sys.stdout.write = cls.original_sys_stdout_write
        sys.stderr.write = cls.original_sys_stderr_write
