import time
from dataclasses import dataclass, field
from enum import Enum
from multiprocessing import Queue
from multiprocessing.process import BaseProcess
from threading import RLock, Thread
from typing import Any, Dict, List, Optional
from uuid import uuid4

from abstra_internals.controllers.execution.executor_config import (
    ExecutorConfig,
)
from abstra_internals.controllers.execution.executor_metrics import MetricsCollector
from abstra_internals.controllers.execution.executor_process import (
    ExecuteRequest,
    ExecutorCommand,
    ExecutorResponse,
    RabbitMQParams,
    ShutdownRequest,
    WarmupRequest,
    executor_main,
)
from abstra_internals.logger import AbstraLogger
from abstra_internals.repositories.multiprocessing import MPContext
from abstra_internals.repositories.project.project import StageType, StageWithFile


class ExecutorStatus(str, Enum):
    SPAWNING = "spawning"
    WARMING_UP = "warming_up"
    IDLE = "idle"
    BUSY = "busy"
    DEAD = "dead"


@dataclass
class ExecutorHandle:
    executor_id: str
    process: BaseProcess
    work_queue: Queue
    response_queue: Queue
    status: ExecutorStatus
    pid: Optional[int] = None
    can_handle_forms: bool = True
    executions_completed: int = 0
    current_execution_id: Optional[str] = None
    spawn_time: float = field(default_factory=time.time)
    warmup_start_time: Optional[float] = None
    warmup_complete_time: Optional[float] = None
    last_execution_start: Optional[float] = None

    def is_alive(self) -> bool:
        return self.process.is_alive()

    def age_seconds(self) -> float:
        return time.time() - self.spawn_time

    def is_ready(self) -> bool:
        return self.status == ExecutorStatus.IDLE and self.is_alive()

    def can_handle_stage(self, stage_type: StageType) -> bool:
        if stage_type == "form":
            return self.can_handle_forms
        return True

    def mark_busy(self, execution_id: str) -> None:
        self.status = ExecutorStatus.BUSY
        self.current_execution_id = execution_id
        self.last_execution_start = time.time()

    def mark_idle(self) -> None:
        self.status = ExecutorStatus.IDLE
        self.current_execution_id = None
        self.executions_completed += 1

    def mark_dead(self) -> None:
        self.status = ExecutorStatus.DEAD
        self.current_execution_id = None

    def kill(self) -> None:
        if self.is_alive():
            try:
                self.process.terminate()
                self.process.join(timeout=2.0)
                if self.process.is_alive():
                    self.process.kill()
                    self.process.join(timeout=1.0)
            except Exception as e:
                AbstraLogger.error(f"[ExecutorPool] Error killing executor: {e}")
        self.mark_dead()


class ExecutorPool:
    def __init__(
        self,
        config: ExecutorConfig,
        mp_context: MPContext,
        root_path: str,
        server_port: int,
        parent_executions_queue: Optional[Queue] = None,
        verbose: bool = True,
    ):
        self.config = config
        self.mp_context = mp_context
        self.root_path = root_path
        self.server_port = server_port
        self.parent_executions_queue = parent_executions_queue
        self.verbose = verbose

        self.executors: Dict[str, ExecutorHandle] = {}
        self.execution_to_executor: Dict[str, str] = {}

        self.lock = RLock()

        self.shutdown_requested = False

        self.metrics = MetricsCollector()

    def start(self) -> None:
        with self.lock:
            for i in range(self.config.total_executors):
                can_handle_forms = i < self.config.min_form_executors
                executor = self._spawn_executor(can_handle_forms=can_handle_forms)
                self.executors[executor.executor_id] = executor
                if self.verbose:
                    AbstraLogger.warning(
                        f"[ExecutorPool] Spawned executor {i + 1}/{self.config.total_executors} "
                        f"(executor_id={executor.executor_id}, pid={executor.pid}, "
                        f"can_handle_forms={can_handle_forms})"
                    )

            for executor in list(self.executors.values()):
                self._start_warmup(executor)

        self.monitor_thread = Thread(target=self._monitor_loop, daemon=True)
        self.monitor_thread.start()

    def shutdown(self) -> None:
        if self.verbose:
            AbstraLogger.warning("[ExecutorPool] Shutting down pool")
        self.shutdown_requested = True

        with self.lock:
            for executor in list(
                self.executors.values()
            ):  # Create snapshot to avoid dictionary modification during iteration
                try:
                    if executor.is_alive():
                        executor.work_queue.put(ShutdownRequest(), timeout=2.0)
                except Exception as e:
                    AbstraLogger.error(
                        f"[ExecutorPool] Error sending shutdown to executor: {e}"
                    )

        shutdown_start = time.time()
        for executor in list(
            self.executors.values()
        ):  # Create snapshot to avoid dictionary modification during iteration
            remaining_time = max(0, 5.0 - (time.time() - shutdown_start))
            executor.process.join(timeout=remaining_time)
            if executor.is_alive():
                executor.kill()

        if self.verbose:
            AbstraLogger.warning("[ExecutorPool] Pool shutdown complete")

    def execute(
        self,
        stage: StageWithFile,
        worker_id: str,
        app_id: str,
        execution_id: str,
        request,
        connection,
        rabbitmq_params: Optional[RabbitMQParams],
    ) -> ExecutorResponse:
        max_wait = 60.0
        start_time = time.time()
        retry_count = 0

        while True:
            executor = self._acquire_executor(stage.type_name, execution_id)

            if executor is not None:
                break

            retry_count += 1

            elapsed = time.time() - start_time
            if elapsed >= max_wait:
                with self.lock:
                    status_summary = {}
                    for e in self.executors.values():
                        status = e.status.value
                        status_summary[status] = status_summary.get(status, 0) + 1

                AbstraLogger.error(
                    f"[ExecutorPool] No executor available after {elapsed:.1f}s wait "
                    f"(execution_id={execution_id}, stage_type={stage.type_name}, "
                    f"executor_status={status_summary})"
                )
                raise RuntimeError(
                    f"No available executor for stage type {stage.type_name} after {elapsed:.1f}s wait. "
                    "All executors are busy or dead."
                )

            time.sleep(0.25)

        try:
            self.metrics.record_execution_started(
                execution_id=execution_id,
                stage_type=stage.type_name,
                executor_id=executor.executor_id,
                wait_time_ms=0.0,
            )

            if not executor.is_alive():
                AbstraLogger.error(
                    f"[ExecutorPool] Executor died before work submission "
                    f"(execution_id={execution_id}, executor_id={executor.executor_id}, pid={executor.pid})"
                )
                executor.mark_dead()
                self.metrics.record_executor_died(executor.executor_id)
                raise RuntimeError(
                    f"Executor {executor.executor_id} died before execution"
                )

            execute_request = ExecuteRequest(
                command=ExecutorCommand.EXECUTE,
                worker_id=worker_id,
                app_id=app_id,
                execution_id=execution_id,
                stage=stage,
                request=request,
                connection=connection,
                rabbitmq_params=rabbitmq_params,
            )

            try:
                executor.work_queue.put(execute_request, timeout=5.0)
            except Exception as e:
                AbstraLogger.error(
                    f"[ExecutorPool] Failed to send work request to executor "
                    f"(execution_id={execution_id}, executor_id={executor.executor_id}, error={e})"
                )

                executor.mark_dead()
                self.metrics.record_executor_died(executor.executor_id)
                raise RuntimeError(
                    f"Failed to send work to executor {executor.executor_id}: {e}"
                )

            timeout = self.config.execution_timeout_seconds

            response = None
            wait_start = time.time()

            while time.time() - wait_start < timeout:
                if not executor.is_alive():
                    AbstraLogger.error(
                        f"[ExecutorPool] Executor died while waiting for response "
                        f"(execution_id={execution_id}, executor_id={executor.executor_id}, pid={executor.pid})"
                    )
                    executor.mark_dead()
                    self.metrics.record_executor_died(executor.executor_id)
                    raise RuntimeError(
                        f"Executor {executor.executor_id} died unexpectedly during execution"
                    )

                try:
                    response = executor.response_queue.get(timeout=1.0)
                    break
                except Exception:  # Empty queue
                    continue

            if response is None:
                raise TimeoutError(f"Execution timed out after {timeout}s")

            if response.execution_id != execution_id:
                raise RuntimeError(
                    f"Received response for wrong execution: expected={execution_id}, got={response.execution_id}"
                )

            execution_time_ms = (time.time() - start_time) * 1000
            self.metrics.record_execution_completed(
                execution_id=execution_id,
                success=response.success,
                execution_time_ms=execution_time_ms,
            )

            return response

        except Exception as e:
            AbstraLogger.error(
                f"[ExecutorPool] Error during execution "
                f"(execution_id={execution_id}): {e}"
            )
            raise

        finally:
            self._release_executor(executor, execution_id)

    def kill_execution(self, execution_id: str) -> bool:
        with self.lock:
            executor_id = self.execution_to_executor.get(execution_id)
            if executor_id is None:
                AbstraLogger.warning(
                    f"[ExecutorPool] Cannot kill execution {execution_id}: "
                    "not found in active executions"
                )
                return False

            executor = self.executors.get(executor_id)
            if executor is None or not executor.is_alive():
                AbstraLogger.warning(
                    f"[ExecutorPool] Cannot kill execution {execution_id}: "
                    "executor is dead"
                )
                self.execution_to_executor.pop(execution_id, None)
                return False

            self.execution_to_executor.pop(execution_id, None)
            self.executors.pop(executor_id, None)

        executor.kill()

        can_handle_forms = executor.can_handle_forms
        replacement = self._spawn_executor(can_handle_forms=can_handle_forms)

        with self.lock:
            self.executors[replacement.executor_id] = replacement

        self._start_warmup(replacement)

        return True

    def get_stats(self) -> Dict[str, Any]:
        with self.lock:
            executors = list(self.executors.values())
            active_executions_count = len(self.execution_to_executor)
            metrics_summary = self.metrics.get_summary()

        total = len(executors)
        idle = sum(1 for e in executors if e.status == ExecutorStatus.IDLE)
        busy = sum(1 for e in executors if e.status == ExecutorStatus.BUSY)
        warming_up = sum(1 for e in executors if e.status == ExecutorStatus.WARMING_UP)
        dead = sum(1 for e in executors if e.status == ExecutorStatus.DEAD)
        form_capable_idle = sum(
            1
            for e in executors
            if e.status == ExecutorStatus.IDLE and e.can_handle_forms
        )

        return {
            "total_executors": total,
            "idle": idle,
            "busy": busy,
            "warming_up": warming_up,
            "dead": dead,
            "form_capable_idle": form_capable_idle,
            "active_executions": active_executions_count,
            **metrics_summary,
        }

    def _spawn_executor(self, can_handle_forms: bool) -> ExecutorHandle:
        executor_id = str(uuid4())[:8]
        work_queue = self.mp_context.Queue()
        response_queue = self.mp_context.Queue()

        p = self.mp_context.Process(
            target=executor_main,
            name=f"Executor-{executor_id}",
            args=(
                work_queue,
                response_queue,
                self.root_path,
                self.server_port,
                self.parent_executions_queue,
                self.verbose,
            ),
        )

        p.start()

        executor = ExecutorHandle(
            executor_id=executor_id,
            process=p,
            work_queue=work_queue,
            response_queue=response_queue,
            status=ExecutorStatus.SPAWNING,
            pid=p.pid,
            can_handle_forms=can_handle_forms,
        )

        self.metrics.record_executor_spawned(
            executor_id=executor_id,
            spawn_time=time.time(),
            can_handle_forms=can_handle_forms,
        )

        return executor

    def _start_warmup(self, executor: ExecutorHandle) -> None:
        executor.status = ExecutorStatus.WARMING_UP
        executor.warmup_start_time = time.time()
        try:
            executor.work_queue.put(WarmupRequest(), timeout=5.0)
        except Exception:
            executor.mark_dead()
            self.metrics.record_executor_died(executor.executor_id)

    def _acquire_executor(
        self, stage_type: StageType, execution_id: str
    ) -> Optional[ExecutorHandle]:
        with self.lock:
            candidates: List[ExecutorHandle] = []
            for e in self.executors.values():
                if e.status == ExecutorStatus.IDLE and e.can_handle_stage(stage_type):
                    if e.is_alive():
                        candidates.append(e)
                    else:
                        e.mark_dead()
                        self.metrics.record_executor_died(e.executor_id)

            if not candidates:
                return None

            if stage_type == "form":
                executor = candidates[0]
            else:
                non_form_executors = [e for e in candidates if not e.can_handle_forms]
                if non_form_executors:
                    executor = non_form_executors[0]
                else:
                    executor = candidates[0]

            if not executor.is_alive():
                executor.mark_dead()
                self.metrics.record_executor_died(executor.executor_id)
                return None

            executor.mark_busy(execution_id)
            self.execution_to_executor[execution_id] = executor.executor_id

            return executor

    def _release_executor(self, executor: ExecutorHandle, execution_id: str) -> None:
        should_recycle = False

        with self.lock:
            self.execution_to_executor.pop(execution_id, None)

            if not executor.is_alive():
                AbstraLogger.warning(
                    f"[ExecutorPool] Executor died during execution "
                    f"(executor_id={executor.executor_id}, pid={executor.pid})"
                )
                executor.mark_dead()
                self.metrics.record_executor_died(executor.executor_id)
                return

            if (
                executor.executions_completed + 1
                >= self.config.max_executions_per_executor
            ):
                should_recycle = True
                self.executors.pop(executor.executor_id, None)
            else:
                executor.mark_idle()

        if should_recycle:
            executor.kill()

            can_handle_forms = executor.can_handle_forms
            replacement = self._spawn_executor(can_handle_forms=can_handle_forms)

            with self.lock:
                self.executors[replacement.executor_id] = replacement

            self._start_warmup(replacement)

    def _monitor_loop(self) -> None:
        while not self.shutdown_requested:
            time.sleep(0.25)

            try:
                warming_executors: List[ExecutorHandle] = []
                timed_out_executors: List[ExecutorHandle] = []
                dead_executors: List[ExecutorHandle] = []

                with self.lock:
                    for executor in list(self.executors.values()):
                        if executor.status == ExecutorStatus.WARMING_UP:
                            if executor.current_execution_id is None:
                                warming_executors.append(executor)
                        elif executor.status == ExecutorStatus.DEAD:
                            dead_executors.append(executor)

                for executor in warming_executors:
                    try:
                        response = executor.response_queue.get_nowait()

                        if response.execution_id is not None:
                            executor.response_queue.put(response)
                            continue

                        with self.lock:
                            if response.success:
                                executor.status = ExecutorStatus.IDLE
                                executor.warmup_complete_time = time.time()
                                warmup_duration = executor.warmup_complete_time - (
                                    executor.warmup_start_time or 0
                                )

                                self.metrics.record_executor_warmup(
                                    executor_id=executor.executor_id,
                                    warmup_duration_ms=warmup_duration * 1000,
                                )
                            else:
                                executor.mark_dead()
                                self.metrics.record_executor_died(executor.executor_id)
                    except Exception:
                        if executor.warmup_start_time:
                            warmup_elapsed = time.time() - executor.warmup_start_time
                            if warmup_elapsed > self.config.warmup_timeout_seconds:
                                timed_out_executors.append(executor)

                for executor in timed_out_executors:
                    executor.kill()

                for dead_executor in dead_executors:
                    with self.lock:
                        self.executors.pop(dead_executor.executor_id, None)

                    replacement = self._spawn_executor(
                        can_handle_forms=dead_executor.can_handle_forms
                    )

                    with self.lock:
                        self.executors[replacement.executor_id] = replacement

                    self._start_warmup(replacement)

            except Exception as e:
                AbstraLogger.error(f"[ExecutorPool] Error in monitor loop: {e}")
                AbstraLogger.capture_exception(e)
