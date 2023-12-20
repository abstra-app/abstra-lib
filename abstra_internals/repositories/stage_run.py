import copy, uuid, requests
from datetime import datetime
from pydantic.dataclasses import dataclass
from typing import Optional, List, Dict, Type, Mapping, Any

from ..utils import real_datetime_fromisoformat
from ..utils.environment import SIDECAR_URL, SIDECAR_HEADERS

end_status = ["failed", "finished", "abandoned"]

status_transitions = {
    "waiting": ["running"],
    "running": end_status,
}


@dataclass
class StageRun:
    id: str
    stage: str
    data: dict
    status: str
    created_at: datetime
    parent_id: Optional[str]
    execution_id: Optional[str] = None

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
        return copy.deepcopy(self.__dict__)

    def clone(self):
        return StageRun(**self.to_dto())


class StageRunRepository:
    valid_filter_keys = ["data", "stage", "status", "parent_id"]

    @classmethod
    def validate_filter_keys(cls, filter: Dict) -> None:
        for key in filter.keys():
            if key not in cls.valid_filter_keys:
                raise Exception(f"Invalid filter key {key}")

    @classmethod
    def hydrate_next_dto(cls, parent: StageRun, dtos: List[Dict]) -> List[Dict]:
        next_dtos = []

        for dto in dtos:
            stage = dto.get("stage")
            data = {**parent.data, **dto.get("data", {})}
            next_dtos.append(dict(stage=stage, data=data))

        return next_dtos

    @classmethod
    def find(cls, filter: Dict) -> List[StageRun]:
        raise NotImplementedError()

    @classmethod
    def find_ancestors(cls, id: str) -> List[StageRun]:
        raise NotImplementedError()

    @classmethod
    def find_leaves(cls, filter: Dict) -> List[StageRun]:
        raise NotImplementedError()

    @classmethod
    def get(cls, id: str) -> StageRun:
        raise NotImplementedError()

    @classmethod
    def change_state(
        cls, id: str, status: str, execution_id: Optional[str] = None
    ) -> bool:
        raise NotImplementedError()

    @classmethod
    def create_initial(cls, stage: str) -> StageRun:
        raise NotImplementedError()

    @classmethod
    def create_next(cls, parent: StageRun, dtos: List[Dict]) -> List[StageRun]:
        raise NotImplementedError()


class LocalStageRunRepository(StageRunRepository):
    _stage_runs: List[StageRun] = []

    @classmethod
    def clear(cls):
        cls._stage_runs = []
        cls._locks = []

    @classmethod
    def get(cls, id: str) -> StageRun:
        for stage_run in cls._stage_runs:
            if stage_run.id == id:
                return stage_run

        raise Exception(f"StageRun with id {id} not found")

    @classmethod
    def find(cls, filter: Dict) -> List[StageRun]:
        cls.validate_filter_keys(filter)

        stage = filter.get("stage")
        data = filter.get("data")
        status = filter.get("status")
        parent_id = filter.get("parent_id")

        return [
            stage_run
            for stage_run in cls._stage_runs
            if (
                (not stage or stage_run.stage == stage)
                and (not data or stage_run.data == data)
                and (not status or stage_run.status == status)
                and (not parent_id or stage_run.parent_id == parent_id)
            )
        ]

    @classmethod
    def find_ancestors(cls, id: str) -> List[StageRun]:
        ancestors = []
        stage_run = cls.get(id)
        ancestors.append(stage_run)
        while stage_run.parent_id is not None:
            stage_run = cls.get(stage_run.parent_id)
            ancestors.insert(0, stage_run)
        return ancestors

    @classmethod
    def find_leaves(cls, filter: Dict) -> List[StageRun]:
        cls.validate_filter_keys(filter)
        filter_matches = cls.find(filter)
        parent_ids = set(u.parent_id for u in cls._stage_runs)

        return [
            stage_run for stage_run in filter_matches if stage_run.id not in parent_ids
        ]

    @classmethod
    def create_initial(cls, stage: str, data: dict = {}) -> StageRun:
        stage_run = StageRun(
            id=str(uuid.uuid4()),
            status="waiting",
            stage=stage,
            data=data,
            parent_id=None,
            created_at=datetime.now(),
        )

        cls._stage_runs.append(stage_run)

        return stage_run

    @classmethod
    def create_next(cls, parent: StageRun, dtos: List[Dict]) -> List[StageRun]:
        created = []
        for dto in cls.hydrate_next_dto(parent, dtos):
            stage_run = StageRun(
                id=str(uuid.uuid4()),
                parent_id=parent.id,
                status="waiting",
                **dto,
                created_at=datetime.now(),
            )
            created.append(stage_run)
            cls._stage_runs.append(stage_run)
        return created

    @classmethod
    def change_state(
        cls, id: str, status: str, execution_id: Optional[str] = None
    ) -> bool:
        stage_run = cls.get(id)

        if not stage_run.execution_id and execution_id is not None:
            stage_run.execution_id = execution_id

        if stage_run.status in end_status:
            return False

        if status in status_transitions.get(stage_run.status, []):
            stage_run.status = status
            return True

        return False


class ProductionStageRunRepository(StageRunRepository):
    @classmethod
    def _request(
        cls,
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
            parent_id=dto["parentId"],
            created_at=real_datetime_fromisoformat(dto["createdAt"]),
        )

    @classmethod
    def get(cls, id: str) -> StageRun:
        r = cls._request("GET", path=f"/{id}")
        return cls.create_from_dto(r.json())

    @classmethod
    def find(cls, filter: Dict) -> List[StageRun]:
        cls.validate_filter_keys(filter)
        r = cls._request("GET", path="/", params=filter)
        return [cls.create_from_dto(dto) for dto in r.json()]

    @classmethod
    def find_ancestors(cls, id: str) -> List[StageRun]:
        r = cls._request("GET", path=f"/{id}/ancestors")
        return [cls.create_from_dto(dto) for dto in r.json()]

    @classmethod
    def create_initial(cls, stage: str) -> StageRun:
        body = dict(data={}, stage=stage)
        r = cls._request("POST", path="/", body=body)
        return cls.create_from_dto(r.json())

    @classmethod
    def create_next(cls, parent: StageRun, dtos: List[Dict]) -> List[StageRun]:
        if len(dtos) == 0:
            return []

        parent_id = parent.id
        next_dtos = cls.hydrate_next_dto(parent, dtos)
        r = cls._request("PUT", path=f"/{parent_id}/children", body=next_dtos)
        return [cls.create_from_dto(dto) for dto in r.json()]

    @classmethod
    def change_state(
        cls, id: str, status: str, execution_id: Optional[str] = None
    ) -> bool:
        r = cls._request(
            "PATCH", path=f"/{id}", body={"status": status}, raise_for_status=False
        )

        if r.status_code == 409:
            return False

        r.raise_for_status()

        return True


def get_stage_run_repository() -> Type[StageRunRepository]:
    if SIDECAR_URL is None:
        return LocalStageRunRepository
    else:
        return ProductionStageRunRepository
