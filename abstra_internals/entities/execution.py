import datetime
from typing import Any, Dict, Literal, Optional, TypedDict
from uuid import uuid4

from abstra_internals.utils.datetime import to_utc_iso_string

# Avoid circular import due to repo and entity being in the same file
ActionStage = Any


class RequestContext(TypedDict):
    body: str
    query_params: Dict[str, str]
    headers: Dict[str, str]
    method: str


ExecutionStatus = Literal["running", "failed", "finished", "abandoned"]


class ExecutionDTO(TypedDict):
    id: str
    status: ExecutionStatus
    created_at: str
    stage_id: str
    stage_run_id: str
    context: Optional[RequestContext]


class Execution:
    _status: ExecutionStatus = "running"
    id: str
    created_at: datetime.datetime
    stage: ActionStage
    stage_run_id: str
    request_context: Optional[RequestContext] = None

    def __init__(
        self,
        id: str,
        stage: ActionStage,
        stage_run_id: str,
        request_context: Optional[RequestContext],
        created_at: datetime.datetime,
    ) -> None:
        self.id = id
        self.created_at = created_at
        self.stage = stage
        self.stage_run_id = stage_run_id
        self.request_context = request_context

    @classmethod
    def create(
        cls,
        stage: ActionStage,
        stage_run_id: str,
        request_context: Optional[RequestContext],
    ):
        return cls(
            id=uuid4().__str__(),
            created_at=datetime.datetime.now(),
            stage=stage,
            stage_run_id=stage_run_id,
            request_context=request_context,
        )

    def set_status(self, status: ExecutionStatus) -> None:
        if status == "running":
            raise ValueError("Cannot set status to running")

        self._status = status

    def to_dto(self) -> ExecutionDTO:
        return ExecutionDTO(
            id=self.id,
            status=self._status,
            created_at=to_utc_iso_string(self.created_at),
            stage_id=self.stage.id,
            stage_run_id=self.stage_run_id,
            context=self.request_context,
        )
