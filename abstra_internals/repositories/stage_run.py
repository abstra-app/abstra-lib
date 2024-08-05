import copy
import json
import uuid
from abc import ABC, abstractmethod
from datetime import datetime
from typing import Any, Dict, List, Literal, Mapping, Optional, Union

import requests
from pydantic import ConfigDict, Field
from pydantic.dataclasses import dataclass

from abstra_internals.environment import SIDECAR_HEADERS, SIDECAR_URL
from abstra_internals.utils.datetime import from_utc_iso_string, to_utc_iso_string
from abstra_internals.utils.dot_abstra import STAGE_RUNS_FOLDER
from abstra_internals.utils.file_manager import FileManager
from abstra_internals.utils.filter import FilterCondition, evaluate_filter_condition
from abstra_internals.utils.validate import validate_json

Status = Literal["waiting", "running", "finished", "failed", "abandoned"]

end_status = ["failed", "finished", "abandoned"]

end_status: List[Status] = ["failed", "finished", "abandoned"]

status_transitions: Dict[Status, List[Status]] = {
    "waiting": ["running"],
    "running": end_status,
}


@dataclass
class CountStageRunsByStatus:
    stage: str
    count: int
    status: str

    def to_dict(self) -> dict:
        return dict(
            stage=self.stage,
            count=self.count,
            status=self.status,
        )

    @staticmethod
    def from_dict(data: dict) -> "CountStageRunsByStatus":
        return CountStageRunsByStatus(
            stage=data.get("stage", None),
            count=data.get("count", None),
            status=data.get("status", None),
        )


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
            stage_runs=[StageRun.from_dto(dto) for dto in data.get("stageRuns", [])],
            total_count=data.get("totalCount", 0),
        )

    def to_dict(self) -> dict:
        return dict((k, v) for k, v in self.__dict__.items() if v is not None)


@dataclass
class GetStageRunByQueryFilter:
    stage: Optional[Union[str, List[str]]] = None
    assignee: Optional[str] = None
    parent_id: Optional[str] = None
    status: Optional[List[Status]] = None
    data: Optional[Dict] = None
    search: Optional[str] = None
    advanced_data_filter: Optional[FilterCondition] = None

    @staticmethod
    def from_dict(data: dict) -> "GetStageRunByQueryFilter":
        return GetStageRunByQueryFilter(
            stage=data.get("stage", None),
            assignee=data.get("assignee", None),
            parent_id=data.get("parent_id", None),
            status=data.get("status", None),
            data=data.get("data", None),
            search=data.get("search", None),
            advanced_data_filter=FilterCondition.from_dict(
                data.get("advanced_data_filter", {})
            ),
        )

    def to_dict(self) -> dict:
        filter = {
            "stage": self.stage,
            "assignee": self.assignee,
            "parent_id": self.parent_id,
            "status": self.status,
            "data": self.data,
            "search": self.search,
            "advanced_data_filter": (
                json.dumps(self.advanced_data_filter.to_dict())
                if self.advanced_data_filter
                else None
            ),
        }
        return dict((k, v) for k, v in filter.items() if v is not None)


@dataclass(config=ConfigDict(populate_by_name=True))
class StageRun:
    id: str
    stage: str
    data: dict
    status: Status
    created_at: datetime = Field(serialization_alias="createdAt")
    updated_at: datetime = Field(default=None, serialization_alias="updatedAt")
    parent_id: Optional[str] = Field(default=None, serialization_alias="parentId")
    execution_id: Optional[str] = Field(default=None, serialization_alias="executionId")

    @staticmethod
    def from_dto(dto: dict) -> "StageRun":
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
            "createdAt": to_utc_iso_string(self.created_at),
            "updatedAt": to_utc_iso_string(self.updated_at),
        }

    def clone(self):
        return StageRun(**copy.deepcopy(self.__dict__))

    def clone_to_waiting(self):
        new_stage_run = self.clone()

        new_stage_run.status = "waiting"
        new_stage_run.id = str(uuid.uuid4())
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
        self,
        filter: GetStageRunByQueryFilter,
        pagination: Pagination,
    ) -> PaginatedListResponse:
        raise NotImplementedError()

    @abstractmethod
    def count_leaves_by_status(self) -> List[CountStageRunsByStatus]:
        raise NotImplementedError()

    @abstractmethod
    def find_past(
        self, filter: GetStageRunByQueryFilter, pagination: Pagination
    ) -> PaginatedListResponse:
        raise NotImplementedError()

    @abstractmethod
    def get(self, id: str) -> StageRun:
        raise NotImplementedError()

    @abstractmethod
    def change_status(
        self, id: str, status: Status, execution_id: Optional[str] = None
    ) -> bool:
        raise NotImplementedError()

    @abstractmethod
    def create_initial(self, stage: str, data: dict = {}) -> StageRun:
        raise NotImplementedError()

    @abstractmethod
    def create_detached(self, stage_id: str, thread_data: dict = {}) -> StageRun:
        raise NotImplementedError()

    @abstractmethod
    def remove(self, id: str) -> None:
        raise NotImplementedError()

    @abstractmethod
    def create_next(self, parent: StageRun, dtos: List[Dict]) -> List[StageRun]:
        raise NotImplementedError()

    def ensure_not_abandoned(self, stage_run_id: str) -> str:
        stage_run = self.get(stage_run_id)
        while stage_run.is_abandoned:
            children = self.find(GetStageRunByQueryFilter(parent_id=stage_run.id))
            assert len(children) <= 1
            if len(children) == 0:
                return stage_run.id
            stage_run = children[0]
        return stage_run.id

    @abstractmethod
    def fork(
        self,
        stage_run: StageRun,
        parent_is_iterator: bool,
        custom_thread_data: Optional[str],
    ) -> StageRun:
        raise NotImplementedError()

    def retry(self, stage_run_id: str) -> StageRun:
        stage_run = self.get(stage_run_id)

        if stage_run.status != "failed":
            raise Exception(
                f"Can't retry stage run {stage_run.id} with non failed status"
            )

        children = self.find(GetStageRunByQueryFilter(parent_id=stage_run.id))
        if len(children) > 0:
            raise Exception(f"Can't retry stage run {stage_run.id} with children")

        retried_stage_run = stage_run.clone_to_waiting()
        retried, *_ = self.create_next(stage_run, [retried_stage_run.to_dto()])

        ancestors = self.find_ancestors(stage_run.id)
        initial_data = {}
        for ancestor in ancestors:
            if ancestor.status != "failed" or ancestor.stage != stage_run.stage:
                initial_data = ancestor.data

        retried.data = initial_data
        self.update_data(retried.id, initial_data)

        return retried

    @abstractmethod
    def update_data(self, stage_run_id: str, data: dict) -> bool:
        raise NotImplementedError()

    def acquire_lock(self, stage_run_id: str, execution_id: str) -> bool:
        return self.change_status(stage_run_id, "running", execution_id)

    def clear(self):
        raise NotImplementedError()


class LocalStageRunRepository(StageRunRepository):
    def __init__(self):
        self.manager = FileManager(directory=STAGE_RUNS_FOLDER, model=StageRun)

    def clear(self):
        self.manager.clear()

    def get(self, id: str) -> StageRun:
        stage_run = self.manager.load(id)
        if stage_run is None:
            raise Exception(f"StageRun with id {id} not found")

        return stage_run

    def find(self, filter: GetStageRunByQueryFilter) -> List[StageRun]:
        results: List[StageRun] = []

        for stage_run in self.manager.load_all():
            if filter.stage and stage_run.stage not in filter.stage:
                continue

            if filter.data and not self._compare_data(stage_run.data, filter.data):
                continue

            if filter.status and stage_run.status not in filter.status:
                continue

            if filter.parent_id and stage_run.parent_id != filter.parent_id:
                continue

            if filter.search and not self._compare_search(stage_run, filter.search):
                continue

            if filter.advanced_data_filter and not evaluate_filter_condition(
                filter.advanced_data_filter, stage_run.data
            ):
                continue

            results.append(stage_run)

        return results

    def remove(self, id: str) -> None:
        self.manager.delete(id)

    @staticmethod
    def _compare_data(data: dict, filter: dict) -> bool:
        for key, value in filter.items():
            if key not in data or data[key] not in value:
                return False
        return True

    @staticmethod
    def _compare_search(stage_run: StageRun, search: str) -> bool:
        # TODO: filter by stage title and stage type
        status_match = search.lower() in stage_run.status.lower()
        data_match = False
        for key, value in stage_run.data.items():
            if search.lower() in value.lower():
                data_match = True
        return status_match or data_match

    def find_ancestors(self, id: str) -> List[StageRun]:
        ancestors = []
        stage_run = self.get(id)
        ancestors.append(stage_run)
        while stage_run.parent_id is not None:
            stage_run = self.get(stage_run.parent_id)
            ancestors.insert(0, stage_run)
        return ancestors

    def find_leaves(
        self,
        filter: GetStageRunByQueryFilter,
        pagination: Pagination,
    ) -> PaginatedListResponse:
        filter_matches = self.find(filter)
        parent_ids = set(u.parent_id for u in self.manager.load_all())

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

    def count_leaves_by_status(self) -> List[CountStageRunsByStatus]:
        all_stage_runs = self.manager.load_all()
        parent_ids = set(u.parent_id for u in all_stage_runs)
        leaves = [
            stage_run for stage_run in all_stage_runs if stage_run.id not in parent_ids
        ]
        stage_status_count = {}
        for stage_run in leaves:
            key = (stage_run.stage, stage_run.status)
            if key in stage_status_count:
                stage_status_count[key] += 1
            else:
                stage_status_count[key] = 1
        return [
            CountStageRunsByStatus(stage=stage, status=status, count=count)
            for (stage, status), count in stage_status_count.items()
        ]

    def find_past(
        self, filter: GetStageRunByQueryFilter, pagination: Pagination
    ) -> PaginatedListResponse:
        filter_matches = self.find(filter)
        parent_ids = set(u.parent_id for u in self.manager.load_all())

        past = sorted(
            [stage_run for stage_run in filter_matches if stage_run.id in parent_ids],
            key=lambda x: x.created_at,
            reverse=True,
        )

        total_count = len(past)
        if pagination.offset >= total_count:
            return PaginatedListResponse(stage_runs=[], total_count=total_count)

        return PaginatedListResponse(
            stage_runs=past[pagination.offset : pagination.limit],
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

        self.manager.save(stage_run.id, stage_run)

        return stage_run

    def create_detached(self, stage_id: str, thread_data: dict = {}) -> StageRun:
        stage_run = StageRun(
            id=str(uuid.uuid4()),
            status="waiting",
            stage=stage_id,
            data=thread_data,
            parent_id=None,
            created_at=datetime.now(),
            updated_at=datetime.now(),
        )

        self.manager.save(stage_run.id, stage_run)

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
            self.manager.save(stage_run.id, stage_run)
        return created

    def change_status(
        self, id: str, status: Status, execution_id: Optional[str] = None
    ) -> bool:
        stage_run = self.get(id)
        stage_run.updated_at = datetime.now()

        if not stage_run.execution_id and execution_id is not None:
            stage_run.execution_id = execution_id

        if stage_run.status in end_status:
            return False

        if status in status_transitions.get(stage_run.status, []):
            stage_run.status = status
            self.manager.save(id, stage_run)
            return True

        return False

    def fork(
        self,
        stage_run: StageRun,
        parent_is_iterator: bool,
        custom_thread_data: Optional[str] = None,
    ) -> StageRun:
        if stage_run.parent_id is None:
            return self.create_initial(stage_run.stage, {})

        parent_stage_run = self.get(stage_run.parent_id)
        new_stage_run = stage_run.clone_to_waiting()
        forked, *_ = self.create_next(parent_stage_run, [new_stage_run.to_dto()])

        forked.data = parent_stage_run.data

        if custom_thread_data:
            validate_json(custom_thread_data)
            forked.data = json.loads(custom_thread_data)

        if parent_is_iterator:
            forked.data["item"] = stage_run.data["item"]

        self.manager.save(forked.id, forked)

        return forked

    def update_data(self, stage_run_id: str, data: dict) -> bool:
        stage_run = self.get(stage_run_id)
        stage_run.updated_at = datetime.now()
        stage_run.data = data
        self.manager.save(stage_run_id, stage_run)
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

    def clear(self):
        raise NotImplementedError("Can't clear remote repository")

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

    def create_detached(self, stage_id: str, thread_data: dict = {}) -> StageRun:
        raise Exception("Attempt to create detached stage run in remote repository")

    def remove(self, id: str) -> None:
        raise Exception("Attempt to remove stage run in remote repository")

    def create_next(self, parent: StageRun, dtos: List[Dict]) -> List[StageRun]:
        if len(dtos) == 0:
            return []

        parent_id = parent.id
        next_dtos = self.hydrate_next_dto(parent, dtos)
        r = self._request("PUT", path=f"/{parent_id}/children", body=next_dtos)
        return [self.create_from_dto(dto) for dto in r.json()]

    def change_status(
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
        self,
        filter: GetStageRunByQueryFilter,
        pagination: Pagination,
    ) -> PaginatedListResponse:
        r = self._request(
            "GET",
            path="/leaves",
            params={**filter.to_dict(), **pagination.to_dict()},
            raise_for_status=False,
        )

        r.raise_for_status()

        return PaginatedListResponse.from_dict(r.json())

    def count_leaves_by_status(self) -> List[CountStageRunsByStatus]:
        r = self._request("GET", path="/count")
        return [CountStageRunsByStatus.from_dict(dto) for dto in r.json()]

    def find_past(
        self, filter: GetStageRunByQueryFilter, pagination: Pagination
    ) -> PaginatedListResponse:
        raise NotImplementedError()

    def fork(
        self,
        stage_run: StageRun,
        parent_is_iterator: bool,
        custom_thread_data: Optional[str],
    ) -> StageRun:
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
