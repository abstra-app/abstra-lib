from dataclasses import dataclass

from abstra_internals.environment import (
    ABSTRA_EXECUTOR_MAX_EXECUTIONS,
    ABSTRA_EXECUTOR_POOL_SIZE,
    ABSTRA_EXECUTOR_WARMUP_TIMEOUT,
    ABSTRA_MIN_FORMS_EXECUTORS,
    PROCESS_TIMEOUT_SECONDS,
)


@dataclass(frozen=True)
class ExecutorConfig:
    total_executors: int
    min_form_executors: int
    max_executions_per_executor: int
    warmup_timeout_seconds: float
    execution_timeout_seconds: float

    @classmethod
    def from_environment(cls) -> "ExecutorConfig":
        total_executors = ABSTRA_EXECUTOR_POOL_SIZE
        min_form_executors = ABSTRA_MIN_FORMS_EXECUTORS
        max_executions = ABSTRA_EXECUTOR_MAX_EXECUTIONS
        warmup_timeout = ABSTRA_EXECUTOR_WARMUP_TIMEOUT

        return cls(
            total_executors=total_executors,
            min_form_executors=min_form_executors,
            max_executions_per_executor=max_executions,
            warmup_timeout_seconds=warmup_timeout,
            execution_timeout_seconds=PROCESS_TIMEOUT_SECONDS,
        )

    def validate(self) -> None:
        if self.total_executors < 1:
            raise ValueError("total_executors must be at least 1")

        if self.min_form_executors < 0:
            raise ValueError("min_form_executors cannot be negative")

        if self.min_form_executors > self.total_executors:
            raise ValueError("min_form_executors cannot exceed total_executors")

        if self.max_executions_per_executor < 1:
            raise ValueError("max_executions_per_executor must be at least 1")

        if self.warmup_timeout_seconds <= 0:
            raise ValueError("warmup_timeout_seconds must be positive")

        if self.execution_timeout_seconds <= 0:
            raise ValueError("execution_timeout_seconds must be positive")
