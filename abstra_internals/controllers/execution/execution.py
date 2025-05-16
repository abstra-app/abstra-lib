import gc
import os
import traceback
from pathlib import Path
from typing import Literal, Optional, Tuple

from abstra_internals.controllers.execution.execution_client import (
    ExecutionClient,
    HeadlessClient,
)
from abstra_internals.controllers.execution.execution_client_form import ClientAbandoned
from abstra_internals.controllers.sdk.sdk_context import SDKContext
from abstra_internals.entities.execution import Execution
from abstra_internals.entities.execution_context import ClientContext
from abstra_internals.logger import AbstraLogger
from abstra_internals.modules import import_as_new
from abstra_internals.repositories.factory import Repositories
from abstra_internals.repositories.project.project import StageWithFile
from abstra_internals.usage import send_execution_usage
from abstra_internals.utils.datetime import now_str

DEFAULT_STATUS = "failed"

ExecutionResult = Tuple[Literal["finished", "abandoned", "failed"], Optional[Exception]]


class ExecutionController:
    def __init__(
        self,
        *,
        repositories: Repositories,
        stage: StageWithFile,
        client: Optional[ExecutionClient] = None,
        context: Optional[ClientContext] = None,
    ) -> None:
        self.repositories = repositories
        self.stage = stage
        self.client = client or HeadlessClient()
        self.context = context

    def run(self):
        execution = Execution.create(
            context=self.context,
            stage_id=self.stage.id,
        )

        with SDKContext(execution, self.client, self.repositories):
            status = DEFAULT_STATUS
            try:
                self.repositories.execution.create(execution)
                print(f"[ABSTRA] {now_str()} - Execution started")

                self.client.handle_start(execution.id)

                status, exception = self._execute_code(self.stage.file_path)
                send_execution_usage(self.stage.file_path, status, exception)
                if exception:
                    self.client.handle_failure(exception)
                else:
                    self.client.handle_success()
            except ClientAbandoned:
                status = "abandoned"
            except Exception as e:
                status = "failed"
                AbstraLogger.capture_exception(e)
            finally:
                execution.teardown_tests()
                print(f"[ABSTRA] {now_str()} - Execution {status}")
                try:
                    execution.set_status(status)
                    self.repositories.execution.update(execution)
                except Exception as e_final:
                    AbstraLogger.capture_exception(e_final)

    def _execute_without_exit(self, filepath: Path):
        try:
            import_as_new(filepath.as_posix())
        except SystemExit as e:
            no_errors = e.code is None or e.code == 0
            if no_errors:
                return
            raise Exception(f"SystemExit: {e.code}") from e

    def print_filtered_exception(self, exception: Exception, entrypoint: Path) -> None:
        # normcase is used to make the paths case-insensitive and replace backslashes with slashes on Windows
        normalized_entrypoint = os.path.normcase(str(entrypoint.resolve()))

        entrypoint_frame_index = 0
        legacy_thread_frame_index = 0

        tb = exception.__traceback__
        index = 0
        while tb:
            frame_filename = os.path.normcase(
                str(Path(tb.tb_frame.f_code.co_filename).resolve())
            )
            if frame_filename == normalized_entrypoint:
                entrypoint_frame_index = index
            if tb.tb_frame.f_code.co_name == "use_legacy_threads":
                legacy_thread_frame_index = index
            index += 1
            tb = tb.tb_next

        user_frame_index = max(entrypoint_frame_index, legacy_thread_frame_index)

        # Reset traceback and skip frames before the user frame
        tb = exception.__traceback__
        for _ in range(user_frame_index):
            if tb is not None:
                tb = tb.tb_next

        traceback.print_exception(type(exception), exception, tb)

    def _execute_code(self, filepath: Path) -> ExecutionResult:
        try:
            self._execute_without_exit(filepath)
            return "finished", None
        except ClientAbandoned as e:
            return "abandoned", e
        except Exception as e:
            self.print_filtered_exception(e, entrypoint=filepath)
            return "failed", e
        finally:
            gc.collect()
