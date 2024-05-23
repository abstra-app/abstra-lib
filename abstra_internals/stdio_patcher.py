import sys
from typing import Callable, Literal, Union

from abstra_internals.controllers.execution_stdio import (
    ExecutionStdioController,
    UnboundPthread,
)
from abstra_internals.env_masker import GLOBAL_MASKER
from abstra_internals.environment import IS_PRODUCTION
from abstra_internals.logger import AbstraLogger
from abstra_internals.repositories import (
    execution_logs_repository,
    execution_repository,
)


class StdioPatcher:
    sys_stdout_write = sys.stdout.write
    sys_stderr_write = sys.stderr.write
    _stdio_controller: ExecutionStdioController
    _debug: bool = False

    @classmethod
    def apply(cls, debug: bool):
        cls._stdio_controller = ExecutionStdioController(
            execution_logs_repository=execution_logs_repository,
            execution_repository=execution_repository,
        )

        cls._debug = debug

        sys.stdout.write = lambda raw: cls._wrapper("stdout", cls.sys_stdout_write, raw)
        sys.stderr.write = lambda raw: cls._wrapper("stderr", cls.sys_stderr_write, raw)

    @classmethod
    def reset(cls):
        sys.stdout.write = cls.sys_stdout_write
        sys.stderr.write = cls.sys_stderr_write

    @classmethod
    def _wrapper(
        cls,
        type: Literal["stdout", "stderr"],
        sys_write: Callable,
        raw: Union[str, bytearray],
    ):
        text = raw.decode("utf-8") if not isinstance(raw, str) else raw

        if IS_PRODUCTION:
            text = GLOBAL_MASKER.mask(text)

        try:
            execution_id = cls._stdio_controller.write_stdio(type, text)
            short_id = execution_id.split(sep="-")[0]
            term_output = f"[RUN {short_id}] {text}" if text.strip() else text
            sys_write(term_output)
        except UnboundPthread:
            sys_write(text)
        except Exception as e:
            AbstraLogger.capture_exception(e)
            if cls._debug:
                sys_write(f"[STDIO_PATCHER]: {e}")
        finally:
            sys.stdout.flush()
            return len(text)
