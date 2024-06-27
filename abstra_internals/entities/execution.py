import datetime
from typing import Any, Dict, Literal, Optional, TypedDict
from uuid import uuid4

import flask

from abstra_internals.utils.datetime import to_utc_iso_string
from abstra_internals.utils.dict import filter_non_string_values

# Avoid circular import due to repo and entity being in the same file
ActionStage = Any


class RequestContext(TypedDict):
    query_params: Dict[str, str]
    headers: Dict[str, str]
    method: str
    body: str


def context_from_flask(request: flask.Request) -> RequestContext:
    return RequestContext(
        headers=filter_non_string_values(request.headers),
        body=request.get_data(as_text=True),
        query_params=request.args,
        method=request.method,
    )


ExecutionStatus = Literal["running", "failed", "finished", "abandoned"]


class ExecutionDTO(TypedDict):
    id: str
    stage_id: str
    created_at: str
    stage_run_id: str
    status: ExecutionStatus
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
        *,
        id: str,
        stage_run_id: str,
        stage: ActionStage,
        created_at: datetime.datetime,
        request_context: Optional[RequestContext],
    ) -> None:
        self.id = id
        self.stage = stage
        self.created_at = created_at
        self.stage_run_id = stage_run_id
        self.request_context = request_context

    @classmethod
    def create(
        cls,
        *,
        stage_run_id: str,
        stage: ActionStage,
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
            stage_id=self.stage.id,
            context=self.request_context,
            stage_run_id=self.stage_run_id,
            created_at=to_utc_iso_string(self.created_at),
        )
