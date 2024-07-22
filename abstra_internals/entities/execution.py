import datetime
from typing import Any, Dict, Literal, Optional, TypedDict
from uuid import uuid4

import flask

from abstra_internals.utils.datetime import from_utc_iso_string, to_utc_iso_string
from abstra_internals.utils.dict import filter_non_string_values


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


class Execution:
    id: str
    stage_id: str
    stage_run_id: str
    _status: ExecutionStatus
    created_at: datetime.datetime
    request_context: Optional[RequestContext] = None

    def __init__(
        self,
        *,
        id: str,
        stage_id: str,
        stage_run_id: str,
        status: ExecutionStatus,
        created_at: datetime.datetime,
        request_context: Optional[RequestContext],
    ) -> None:
        self.id = id
        self._status = status
        self.stage_id = stage_id
        self.created_at = created_at
        self.stage_run_id = stage_run_id
        self.request_context = request_context

    @classmethod
    def create(
        cls,
        *,
        stage_id: str,
        stage_run_id: str,
        request_context: Optional[RequestContext],
    ):
        return cls(
            stage_id=stage_id,
            stage_run_id=stage_run_id,
            request_context=request_context,
            status="running",
            id=uuid4().__str__(),
            created_at=datetime.datetime.now(),
        )

    def set_status(self, status: ExecutionStatus) -> None:
        if status == "running":
            raise ValueError("Cannot set status to running")

        self._status = status

    @property
    def status(self) -> ExecutionStatus:
        return self._status

    @property
    def short_id(self) -> str:
        return self.id[:8]

    def to_dto(self):
        return dict(
            id=self.id,
            status=self.status,
            stageId=self.stage_id,
            stageRunId=self.stage_run_id,
            context=self.request_context or {},
            createdAt=to_utc_iso_string(self.created_at),
        )

    @classmethod
    def from_dto(cls, dto: Dict[str, Any]):
        return cls(
            id=dto["id"],
            status=dto["status"],
            stage_id=dto["stageId"],
            stage_run_id=dto["stageRunId"],
            request_context=dto["context"],
            created_at=from_utc_iso_string(dto["createdAt"]),
        )
