import copy, uuid, json, requests
from datetime import datetime
from abc import ABC, abstractmethod
from pydantic import ConfigDict, Field
from pydantic.dataclasses import dataclass
from typing import Any, Dict, List, Mapping, Optional, Union

from ..utils.datetime import from_utc_iso_string
from ..utils.environment import SIDECAR_HEADERS, SIDECAR_URL

end_status = ["failed", "finished", "abandoned"]

status_transitions = {
    "waiting": ["running"],
    "running": end_status,
}


@dataclass
class Pagination:
    limit: int
    offset: int

    @staticmethod
    def from_dict(data: dict) -> "Pagination":
        return Pagination(
            limit=data.get("limit", 10),
            offset=data.get("offset", 0),
        )

    def to_dict(self) -> dict:
        return dict((k, v) for k, v in self.__dict__.items() if v is not None)


@dataclass
class PaginatedListResponse:
    stage_runs: List["StageRun"]
    total_count: int

    @staticmethod
    def from_dict(data: dict) -> "PaginatedListResponse":
        return PaginatedListResponse(
            stage_runs=[StageRun.from_dict(dto) for dto in data.get("stageRuns", [])],
            total_count=data.get("totalCount", 0),
        )

    def to_dict(self) -> dict:
        return dict((k, v) for k, v in self.__dict__.items() if v is not None)


@dataclass
class GetStageRunByQueryFilter:
    stage: Optional[Union[str, List[str]]] = None
    assignee: Optional[str] = None
    parent_id: Optional[str] = None
    status: Optional[str] = None
    data: Optional[Dict] = None

    @staticmethod
    def from_dict(data: dict) -> "GetStageRunByQueryFilter":
        return GetStageRunByQueryFilter(
            stage=data.get("stage", None),
            assignee=data.get("assignee", None),
            parent_id=data.get("parent_id", None),
            status=data.get("status", None),
            data=data.get("data", None),
        )

    def to_dict(self) -> dict:
        return dict((k, v) for k, v in self.__dict__.items() if v is not None)


@dataclass(config=ConfigDict(populate_by_name=True))
class StageRun:
    id: str
    stage: str
    data: dict
    status: str
    created_at: datetime = Field(serialization_alias="createdAt")
    updated_at: datetime = Field(default=None, serialization_alias="updatedAt")
    parent_id: Optional[str] = Field(default=None, serialization_alias="parentId")
    execution_id: Optional[str] = Field(default=None, serialization_alias="executionId")

    @staticmethod
    def from_dict(data: dict) -> "StageRun":
        return StageRun(
            id=data["id"],
            stage=data["stage"],
            data=data["data"],
            status=data["status"],
            parent_id=data.get("parentId"),
            execution_id=data.get("executionId"),
            created_at=from_utc_iso_string(data["createdAt"]),
            updated_at=from_utc_iso_string(data["updatedAt"]),
        )

    def __getitem__(self, key):
        return self.data.get(key)

    def __setitem__(self, key, value):
        self.data[key] = value

    def get(self, key, default=None):
        return self.data.get(key, default)

    @property
    def is_end(self):
        return self.status in end_status

    @property
    def is_abandoned(self):
        return self.status == "abandoned"

    def to_dto(self):
        return {
            "id": self.id,
            "stage": self.stage,
            "data": self.data,
            "status": self.status,
            "parentId": self.parent_id,
            "executionId": self.execution_id,
            "createdAt": self.created_at.isoformat(),
            "updatedAt": self.updated_at.isoformat(),
        }

    def clone(self):
        return StageRun(**copy.deepcopy(self.__dict__))

    def clone_to_waiting(self):
        new_stage_run = self.clone()
        new_stage_run.id = str(uuid.uuid4())
        new_stage_run.status = "waiting"
        new_stage_run.created_at = datetime.now()
        new_stage_run.updated_at = datetime.now()
        return new_stage_run


class StageRunRepository(ABC):
    valid_filter_keys = ["data", "stage", "status", "parent_id"]

    def validate_filter_keys(self, filter: Dict) -> None:
        for key in filter.keys():
            if key not in self.valid_filter_keys:
                raise Exception(f"Invalid filter key {key}")

    def hydrate_next_dto(self, parent: StageRun, dtos: List[Dict]) -> List[Dict]:
        next_dtos = []

        for dto in dtos:
            stage = dto.get("stage")
            data = {**parent.data, **dto.get("data", {})}
            next_dtos.append(dict(stage=stage, data=data))

        return next_dtos

    @abstractmethod
    def find(self, filter: GetStageRunByQueryFilter) -> List[StageRun]:
        raise NotImplementedError()

    @abstractmethod
    def find_ancestors(self, id: str) -> List[StageRun]:
        raise NotImplementedError()

    @abstractmethod
    def find_leaves(
        self, filter: GetStageRunByQueryFilter, pagination: Pagination
    ) -> PaginatedListResponse:
        raise NotImplementedError()

    @abstractmethod
    def get(self, id: str) -> StageRun:
        raise NotImplementedError()

    @abstractmethod
    def change_state(
        self, id: str, status: str, execution_id: Optional[str] = None
    ) -> bool:
        raise NotImplementedError()

    @abstractmethod
    def create_initial(self, stage: str, data: dict = {}) -> StageRun:
        raise NotImplementedError()

    @abstractmethod
    def create_next(self, parent: StageRun, dtos: List[Dict]) -> List[StageRun]:
        raise NotImplementedError()

    @abstractmethod
    def fork(self, stage_run: StageRun) -> StageRun:
        raise NotImplementedError()

    @abstractmethod
    def update_data(self, stage_run_id: str, data: dict) -> bool:
        raise NotImplementedError()


class LocalStageRunRepository(StageRunRepository):
    _stage_runs: List[StageRun]

    def __init__(self):
        self._stage_runs = []
        self._locks = []

    def clear(self):
        self._stage_runs = []
        self._locks = []

    def get(self, id: str) -> StageRun:
        for stage_run in self._stage_runs:
            if stage_run.id == id:
                return stage_run

        raise Exception(f"StageRun with id {id} not found")

    def find(self, filter: GetStageRunByQueryFilter) -> List[StageRun]:
        results: List[StageRun] = []

        for stage_run in self._stage_runs:
            if filter.stage:
                if isinstance(filter.stage, list):
                    if stage_run.stage not in filter.stage:
                        continue
                else:
                    if stage_run.stage != filter.stage:
                        continue

            if filter.data and not self._compare_data(stage_run.data, filter.data):
                continue

            if filter.status and stage_run.status != filter.status:
                continue

            if filter.parent_id and stage_run.parent_id != filter.parent_id:
                continue

            results.append(stage_run)

        return results

    def _compare_data(self, data: dict, filter: dict) -> bool:
        filtered_data = {k: v for k, v in data.items() if k in filter}
        return json.dumps(filtered_data, sort_keys=True) == json.dumps(
            filter, sort_keys=True
        )

    def find_ancestors(self, id: str) -> List[StageRun]:
        ancestors = []
        stage_run = self.get(id)
        ancestors.append(stage_run)
        while stage_run.parent_id is not None:
            stage_run = self.get(stage_run.parent_id)
            ancestors.insert(0, stage_run)
        return ancestors

    def find_leaves(
        self, filter: GetStageRunByQueryFilter, pagination: Pagination
    ) -> PaginatedListResponse:
        filter_matches = self.find(filter)
        parent_ids = set(u.parent_id for u in self._stage_runs)

        leaves = sorted(
            [
                stage_run
                for stage_run in filter_matches
                if stage_run.id not in parent_ids
            ],
            key=lambda x: x.created_at,
            reverse=True,
        )

        total_count = len(leaves)
        if pagination.offset >= total_count:
            return PaginatedListResponse(stage_runs=[], total_count=total_count)

        return PaginatedListResponse(
            stage_runs=leaves[pagination.offset : pagination.limit],
            total_count=total_count,
        )

    def create_initial(self, stage: str, data: dict = {}) -> StageRun:
        stage_run = StageRun(
            id=str(uuid.uuid4()),
            status="waiting",
            stage=stage,
            data=data,
            parent_id=None,
            created_at=datetime.now(),
            updated_at=datetime.now(),
        )

        self._stage_runs.append(stage_run)

        return stage_run

    def create_next(self, parent: StageRun, dtos: List[Dict]) -> List[StageRun]:
        created = []
        for dto in self.hydrate_next_dto(parent, dtos):
            stage_run = StageRun(
                id=str(uuid.uuid4()),
                parent_id=parent.id,
                status="waiting",
                **dto,
                created_at=datetime.now(),
                updated_at=datetime.now(),
            )
            created.append(stage_run)
            self._stage_runs.append(stage_run)
        return created

    def change_state(
        self, id: str, status: str, execution_id: Optional[str] = None
    ) -> bool:
        stage_run = self.get(id)
        stage_run.updated_at = datetime.now()

        if not stage_run.execution_id and execution_id is not None:
            stage_run.execution_id = execution_id

        if stage_run.status in end_status:
            return False

        if status in status_transitions.get(stage_run.status, []):
            stage_run.status = status
            return True

        return False

    def fork(self, stage_run: StageRun) -> StageRun:
        if stage_run.parent_id == None:
            return self.create_initial(stage_run.stage, {})
        parent_stage_run = self.get(stage_run.parent_id)
        new_stage_run = stage_run.clone_to_waiting()
        new_stage_run.data = parent_stage_run.data
        new_stage_run_dto = new_stage_run.to_dto()
        stage_runs = self.create_next(parent_stage_run, [new_stage_run_dto])
        return stage_runs[0]

    def update_data(self, stage_run_id: str, data: dict) -> bool:
        stage_run = self.get(stage_run_id)
        stage_run.updated_at = datetime.now()
        stage_run.data = data
        return True


class RemoteStageRunRepository(StageRunRepository):
    def _request(
        self,
        method: str,
        path: str,
        body: Any = None,
        params: dict = {},
        raise_for_status: bool = True,
    ):
        headers: Mapping[str, str] = SIDECAR_HEADERS
        r = requests.request(
            method=method,
            url=f"{SIDECAR_URL}/stage-runs{path}",
            headers=headers,
            json=body,
            params=params,
        )

        if raise_for_status:
            r.raise_for_status()

        return r

    @staticmethod
    def create_from_dto(dto: dict) -> StageRun:
        return StageRun(
            id=dto["id"],
            stage=dto["stage"],
            data=dto["data"],
            status=dto["status"],
            parent_id=dto.get("parentId"),
            execution_id=dto.get("executionId"),
            created_at=from_utc_iso_string(dto["createdAt"]),
            updated_at=from_utc_iso_string(dto["updatedAt"]),
        )

    def get(self, id: str) -> StageRun:
        r = self._request("GET", path=f"/{id}")
        return self.create_from_dto(r.json())

    def find(self, filter: GetStageRunByQueryFilter) -> List[StageRun]:
        r = self._request("GET", path="/", params=filter.to_dict())
        return [self.create_from_dto(dto) for dto in r.json()]

    def find_ancestors(self, id: str) -> List[StageRun]:
        r = self._request("GET", path=f"/{id}/ancestors")
        return [self.create_from_dto(dto) for dto in r.json()]

    def create_initial(self, stage: str, data: dict = {}) -> StageRun:
        body = dict(data={}, stage=stage)
        r = self._request("POST", path="/", body=body)
        return self.create_from_dto(r.json())

    def create_next(self, parent: StageRun, dtos: List[Dict]) -> List[StageRun]:
        if len(dtos) == 0:
            return []

        parent_id = parent.id
        next_dtos = self.hydrate_next_dto(parent, dtos)
        r = self._request("PUT", path=f"/{parent_id}/children", body=next_dtos)
        return [self.create_from_dto(dto) for dto in r.json()]

    def change_state(
        self, id: str, status: str, execution_id: Optional[str] = None
    ) -> bool:
        r = self._request(
            "PATCH", path=f"/{id}", body={"status": status}, raise_for_status=False
        )

        if r.status_code == 409:
            return False

        r.raise_for_status()

        return True

    def find_leaves(
        self, filter: GetStageRunByQueryFilter, pagination: Pagination
    ) -> PaginatedListResponse:
        r = self._request(
            "GET",
            path=f"/leaves",
            params={**filter.to_dict(), **pagination.to_dict()},
            raise_for_status=False,
        )

        r.raise_for_status()

        return PaginatedListResponse.from_dict(r.json())

    def fork(self, stage_run: StageRun) -> StageRun:
        raise NotImplementedError()

    def update_data(self, stage_run_id: str, data: dict) -> bool:
        r = self._request("PATCH", path=f"/{stage_run_id}", body={"data": data})
        if r.status_code == 409:
            return False

        r.raise_for_status()

        return True


def stage_run_repository_factory() -> StageRunRepository:
    if SIDECAR_URL is None:
        return LocalStageRunRepository()
    else:
        return RemoteStageRunRepository()
