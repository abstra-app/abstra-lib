import sys
from typing import Callable, List, Literal, Optional, Union

import flask_sock

from abstra_internals.controllers.main import MainController
from abstra_internals.controllers.sdk.sdk_context import (
    SDKContextStore,
)
from abstra_internals.entities.execution import Execution
from abstra_internals.env_masker import GLOBAL_MASKER
from abstra_internals.environment import IS_PRODUCTION
from abstra_internals.interface.sdk.user_exceptions import ExecutionNotFound
from abstra_internals.logger import AbstraLogger
from abstra_internals.utils import serialize


class StdioController:
    listeners: List[flask_sock.Server] = []

    @classmethod
    def register(cls, listener: flask_sock.Server):
        cls.listeners.append(listener)

    @classmethod
    def unregister(cls, listener: flask_sock.Server):
        cls.listeners.remove(listener)

    @classmethod
    def broadcast(
        cls,
        *,
        type: Literal["stdout", "stderr"],
        execution_id: str,
        stage_id: str,
        log: str,
    ):
        msg = serialize(
            dict(type=type, log=log, execution_id=execution_id, stage_id=stage_id)
        )
        for listener in cls.listeners:
            try:
                listener.send(msg)
            except Exception:
                pass

    def __init__(
        self,
        *,
        main_controller: MainController,
        sys_stdout_write,
        sys_stderr_write,
    ):
        self.execution_logs_repository = main_controller.execution_logs_repository
        self.execution_repository = main_controller.execution_repository
        self.sys_stdout_write = sys_stdout_write
        self.sys_stderr_write = sys_stderr_write

    def patched_stderr_write(self, raw: Union[str, bytearray]) -> int:
        return self._handle_stdio("stderr", self.sys_stderr_write, raw)

    def patched_stdout_write(self, raw: Union[str, bytearray]) -> int:
        return self._handle_stdio("stdout", self.sys_stdout_write, raw)

    def _handle_stdio(
        self,
        std_type: Literal["stdout", "stderr"],
        sys_write: Callable,
        raw: Union[str, bytearray],
    ):
        text = raw.decode("utf-8") if not isinstance(raw, str) else raw

        try:
            execution = self.get_current_execution()

            text = self.mask(text)
            text = self.tag(text, execution)

            self.send_stdio(execution, std_type, text)
        except Exception as e:
            AbstraLogger.capture_exception(e)
        finally:
            sys_write(text)
            sys.stdout.flush()
            return len(text)

    def get_current_execution(self) -> Optional[Execution]:
        try:
            return SDKContextStore.get_execution()
        except ExecutionNotFound:
            return None

    def send_stdio(
        self,
        execution: Optional[Execution],
        std_type: Literal["stderr", "stdout"],
        text: str,
    ):
        if not execution:
            return

        self.execution_logs_repository.insert_stdio(execution.id, std_type, text)
        self.broadcast(
            type=std_type,
            log=text,
            execution_id=execution.id,
            stage_id=execution.stage_id,
        )

    def mask(self, raw: str) -> str:
        if IS_PRODUCTION:
            return GLOBAL_MASKER.mask(raw)
        return raw

    def tag(self, raw: str, execution: Optional[Execution]) -> str:
        if not execution:
            return raw

        short_id = execution.id.split(sep="-")[0]
        return f"[RUN {short_id}] {raw}" if raw.strip() else raw
