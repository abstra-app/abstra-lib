import gc
from pathlib import Path
from typing import Literal, Tuple, Union

from abstra_internals.controllers.execution_client import (
    ClientAbandoned,
)
from abstra_internals.modules import import_as_new

Result = Tuple[Literal["finished", "abandoned", "failed"], Union[Exception, None]]


class ExecutionService:
    @staticmethod
    def _execute_code(filepath: Path):
        try:
            import_as_new(filepath.as_posix())
        except SystemExit as e:
            no_errors = e.code is None or e.code == 0
            if no_errors:
                return
            raise Exception(f"SystemExit: {e.code}") from e

    @classmethod
    def run(cls, filepath: Path) -> Result:
        try:
            cls._execute_code(filepath)
            return "finished", None
        except ClientAbandoned:
            return "abandoned", None
        except Exception as e:
            return "failed", e
        finally:
            gc.collect()
