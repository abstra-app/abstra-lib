import time
from dataclasses import dataclass
from threading import Lock
from typing import Any, Dict, List, Optional

from abstra_internals.logger import AbstraLogger


@dataclass
class ExecutionMetrics:
    execution_id: str
    stage_type: str
    start_time: float
    end_time: Optional[float] = None
    success: bool = False
    executor_id: Optional[str] = None
    wait_time_ms: float = 0.0
    execution_time_ms: float = 0.0

    def mark_completed(self, success: bool, execution_time: float) -> None:
        self.end_time = time.time()
        self.success = success
        self.execution_time_ms = execution_time * 1000

    def total_time_ms(self) -> float:
        if self.end_time is None:
            return (time.time() - self.start_time) * 1000
        return (self.end_time - self.start_time) * 1000


@dataclass
class ExecutorMetrics:
    executor_id: str
    spawn_time: float
    warmup_duration_ms: float = 0.0
    executions_completed: int = 0
    executions_failed: int = 0
    total_execution_time_ms: float = 0.0
    avg_execution_time_ms: float = 0.0
    last_execution_time: Optional[float] = None
    is_alive: bool = True
    can_handle_forms: bool = True

    def record_execution(self, success: bool, execution_time_ms: float) -> None:
        if success:
            self.executions_completed += 1
        else:
            self.executions_failed += 1

        self.total_execution_time_ms += execution_time_ms
        total_executions = self.executions_completed + self.executions_failed
        if total_executions > 0:
            self.avg_execution_time_ms = self.total_execution_time_ms / total_executions

        self.last_execution_time = time.time()

    def age_seconds(self) -> float:
        return time.time() - self.spawn_time

    def idle_time_seconds(self) -> float:
        if self.last_execution_time is None:
            return self.age_seconds()
        return time.time() - self.last_execution_time


class MetricsCollector:
    def __init__(self):
        self.lock = Lock()

        self.active_executions: Dict[str, ExecutionMetrics] = {}
        self.completed_executions: List[ExecutionMetrics] = []
        self.max_completed_history = 1000

        self.executor_metrics: Dict[str, ExecutorMetrics] = {}

        self.pool_start_time = time.time()
        self.total_executions_submitted = 0
        self.total_executions_completed = 0
        self.total_executions_failed = 0

        self.last_metrics_log_time = time.time()
        self.metrics_log_interval_seconds = 60.0

    def record_executor_spawned(
        self, executor_id: str, spawn_time: float, can_handle_forms: bool
    ) -> None:
        with self.lock:
            self.executor_metrics[executor_id] = ExecutorMetrics(
                executor_id=executor_id,
                spawn_time=spawn_time,
                can_handle_forms=can_handle_forms,
            )

    def record_executor_warmup(
        self, executor_id: str, warmup_duration_ms: float
    ) -> None:
        with self.lock:
            if executor_id in self.executor_metrics:
                self.executor_metrics[
                    executor_id
                ].warmup_duration_ms = warmup_duration_ms

    def record_executor_died(self, executor_id: str) -> None:
        with self.lock:
            if executor_id in self.executor_metrics:
                self.executor_metrics[executor_id].is_alive = False

    def record_execution_started(
        self,
        execution_id: str,
        stage_type: str,
        executor_id: str,
        wait_time_ms: float,
    ) -> None:
        with self.lock:
            self.total_executions_submitted += 1
            self.active_executions[execution_id] = ExecutionMetrics(
                execution_id=execution_id,
                stage_type=stage_type,
                start_time=time.time(),
                executor_id=executor_id,
                wait_time_ms=wait_time_ms,
            )

    def record_execution_completed(
        self, execution_id: str, success: bool, execution_time_ms: float
    ) -> None:
        with self.lock:
            execution_metrics = self.active_executions.pop(execution_id, None)
            if execution_metrics is None:
                AbstraLogger.warning(
                    f"[MetricsCollector] Execution {execution_id} not found in active executions"
                )
                return

            execution_metrics.mark_completed(success, execution_time_ms / 1000)

            if execution_metrics.executor_id:
                executor_metrics = self.executor_metrics.get(
                    execution_metrics.executor_id
                )
                if executor_metrics:
                    executor_metrics.record_execution(success, execution_time_ms)

            if success:
                self.total_executions_completed += 1
            else:
                self.total_executions_failed += 1

            self.completed_executions.append(execution_metrics)
            if len(self.completed_executions) > self.max_completed_history:
                self.completed_executions.pop(0)

            if (
                time.time() - self.last_metrics_log_time
                > self.metrics_log_interval_seconds
            ):
                # Don't call _log_metrics() while holding lock - defer it
                should_log_metrics = True
                self.last_metrics_log_time = time.time()
            else:
                should_log_metrics = False

        if should_log_metrics:
            self._log_metrics()

    def get_summary(self) -> Dict[str, Any]:
        total_executors = len(self.executor_metrics)
        alive_executors = sum(1 for e in self.executor_metrics.values() if e.is_alive)
        dead_executors = total_executors - alive_executors

        form_executors = sum(
            1
            for e in self.executor_metrics.values()
            if e.is_alive and e.can_handle_forms
        )

        warmup_times = [
            e.warmup_duration_ms
            for e in self.executor_metrics.values()
            if e.warmup_duration_ms > 0
        ]
        avg_warmup_ms = sum(warmup_times) / len(warmup_times) if warmup_times else 0

        avg_exec_time_ms = 0
        if self.total_executions_completed > 0:
            total_exec_time = sum(
                e.total_execution_time_ms for e in self.executor_metrics.values()
            )
            avg_exec_time_ms = total_exec_time / self.total_executions_completed

        total_executions = (
            self.total_executions_completed + self.total_executions_failed
        )
        success_rate = (
            (self.total_executions_completed / total_executions * 100)
            if total_executions > 0
            else 0
        )

        recent_executions = self.completed_executions[-100:]
        recent_wait_times = [e.wait_time_ms for e in recent_executions]
        avg_wait_time_ms = (
            sum(recent_wait_times) / len(recent_wait_times) if recent_wait_times else 0
        )

        uptime_seconds = time.time() - self.pool_start_time

        return {
            "uptime_seconds": uptime_seconds,
            "total_executors": total_executors,
            "alive_executors": alive_executors,
            "dead_executors": dead_executors,
            "form_capable_executors": form_executors,
            "active_executions": len(self.active_executions),
            "total_submitted": self.total_executions_submitted,
            "total_completed": self.total_executions_completed,
            "total_failed": self.total_executions_failed,
            "success_rate_percent": round(success_rate, 2),
            "avg_warmup_ms": round(avg_warmup_ms, 2),
            "avg_execution_time_ms": round(avg_exec_time_ms, 2),
            "avg_wait_time_ms": round(avg_wait_time_ms, 2),
        }

    def _log_metrics(self) -> None:
        summary = self.get_summary()
        AbstraLogger.warning(
            f"[ExecutorPool:Metrics] "
            f"Executors: {summary['alive_executors']}/{summary['total_executors']} alive, "
            f"Active: {summary['active_executions']}, "
            f"Completed: {summary['total_completed']}, "
            f"Failed: {summary['total_failed']}, "
            f"Success Rate: {summary['success_rate_percent']}%, "
            f"Avg Wait: {summary['avg_wait_time_ms']:.0f}ms, "
            f"Avg Exec: {summary['avg_execution_time_ms']:.0f}ms, "
            f"Uptime: {summary['uptime_seconds']:.0f}s"
        )
