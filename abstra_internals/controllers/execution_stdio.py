import sys
from threading import Event
from typing import Callable, List, Literal, Union

import flask_sock

from abstra_internals.controllers.execution_store import (
    ExecutionNotFound,
    ExecutionStore,
)
from abstra_internals.entities.execution import Execution
from abstra_internals.env_masker import GLOBAL_MASKER
from abstra_internals.environment import IS_PRODUCTION
from abstra_internals.logger import AbstraLogger
from abstra_internals.server.controller.main import MainController
from abstra_internals.utils import serialize


class StdioListener:
    def __init__(self, ws: flask_sock.Server):
        self._close_event = Event()
        self._ws = ws

    def wait_for_close(self):
        self._close_event.wait()

    def close(self):
        self._close_event.set()

    def dispatch(self, message: str):
        try:
            if not self._close_event.is_set():
                self._ws.send(message)
        except Exception:
            self.close()


class UnboundPthread(Exception):
    pass


class StdioController:
    listeners: List[StdioListener] = []

    @classmethod
    def register(cls, listener: StdioListener):
        cls.listeners.append(listener)

    @classmethod
    def unregister(cls, listener: StdioListener):
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
            listener.dispatch(msg)

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
        return self._wrapper("stderr", self.sys_stderr_write, raw)

    def patched_stdout_write(self, raw: Union[str, bytearray]) -> int:
        return self._wrapper("stdout", self.sys_stdout_write, raw)

    def _wrapper(
        self,
        type: Literal["stdout", "stderr"],
        sys_write: Callable,
        raw: Union[str, bytearray],
    ):
        text = raw.decode("utf-8") if not isinstance(raw, str) else raw

        if IS_PRODUCTION:
            text = GLOBAL_MASKER.mask(text)

        try:
            short_id = self._capture_stdio(type, text).split(sep="-")[0]
            term_output = f"[RUN {short_id}] {text}" if text.strip() else text
            sys_write(term_output)
        except UnboundPthread:
            sys_write(text)
        except Exception as e:
            AbstraLogger.capture_exception(e)
        finally:
            sys.stdout.flush()
            return len(text)

    def _get_current_execution(self) -> Execution:
        try:
            return ExecutionStore.get_by_thread().execution
        except ExecutionNotFound:
            raise UnboundPthread()

    def _capture_stdio(self, type: Literal["stderr", "stdout"], text: str) -> str:
        execution = self._get_current_execution()
        self.execution_logs_repository.insert_stdio(execution.id, type, text)
        self.broadcast(
            type=type, log=text, execution_id=execution.id, stage_id=execution.stage_id
        )

        return execution.id
