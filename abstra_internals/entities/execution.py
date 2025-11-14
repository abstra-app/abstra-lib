import datetime
from typing import Generic, Literal, Optional, TypeVar
from uuid import uuid4

from pydantic import field_serializer

from abstra_internals.entities.execution_context import (
    ClientContext,
    FormExecutionMock,
    HookExecutionMock,
    ScriptExecutionMock,
)
from abstra_internals.utils.datetime import to_utc_iso_string
from abstra_internals.utils.serializable import Serializable

T = TypeVar("T", bound=ClientContext)
ExecutionStatus = Literal["running", "failed", "finished", "abandoned"]


class Execution(Serializable, Generic[T]):
    id: str
    stage_id: str
    status: ExecutionStatus
    created_at: datetime.datetime
    updated_at: Optional[datetime.datetime] = None
    context: T

    @classmethod
    def create(
        cls,
        *,
        stage_id: str,
        context: T,
    ) -> "Execution[T]":
        return cls(
            stage_id=stage_id,
            context=context,
            status="running",
            id=uuid4().__str__(),
            created_at=datetime.datetime.now(),
            updated_at=None,
        )

    def teardown_tests(self):
        self.context.mock_execution.test_pending_tasks = []
        if isinstance(self.context.mock_execution, HookExecutionMock):
            self.context.mock_execution.test_request = None
        elif isinstance(self.context.mock_execution, FormExecutionMock):
            self.context.mock_execution.test_answers = []
        elif isinstance(self.context.mock_execution, ScriptExecutionMock):
            self.context.mock_execution.test_trigger_task = None

    def set_status(self, status: ExecutionStatus) -> None:
        if status == "running":
            raise ValueError("Cannot set status to running")

        self.status = status
        self.updated_at = datetime.datetime.now()

    @property
    def short_id(self) -> str:
        return self.id[:8]

    @field_serializer("created_at")
    def serialize_created_at(self, value):
        return to_utc_iso_string(value)

    @field_serializer("updated_at")
    def serialize_updated_at(self, value):
        return to_utc_iso_string(value) if value is not None else None
