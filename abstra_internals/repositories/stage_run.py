import abc
import uuid
import requests

from dataclasses import dataclass
from typing import Optional, List, Dict, Type, Mapping, Any

from ..utils.environment import SIDECAR_URL, SIDECAR_SHARED_TOKEN


@dataclass
class StageRun:
    id: str
    stage: str
    data: dict
    status: str
    assignee: Optional[str]
    parent_id: Optional[str]

    def __getitem__(self, key):
        return self.data.get(key)

    def __setitem__(self, key, value):
        self.data[key] = value

    def to_dto(self):
        return self.__dict__


class IStageRunRepository(abc.ABC):
    valid_keys = ["data", "stage", "assignee", "status", "parent_id"]

    @classmethod
    def validate_keys(cls, filter: Dict) -> None:
        for key in filter.keys():
            if key not in cls.valid_keys:
                raise Exception(f"Invalid filter key {key}")

    @classmethod
    def hydrate_next_dto(cls, parent: StageRun, dtos: List[Dict]) -> List[Dict]:
        next_dtos = []

        for dto in dtos:
            stage = dto.get("stage")
            data = {**parent.data, **dto.get("data", {})}
            assignee = dto.get("assignee", parent.assignee)

            if not stage:
                raise Exception("'stage' is required")

            next_dtos.append(dict(stage=stage, data=data, assignee=assignee))

        return next_dtos

    @classmethod
    def find(cls, filter: Dict) -> List[StageRun]:
        raise NotImplementedError()

    @classmethod
    def get(cls, id: str) -> StageRun:
        raise NotImplementedError()

    @classmethod
    def change_state(cls, id: str, status: str) -> bool:
        raise NotImplementedError()

    @classmethod
    def create_initial(cls, stage: str, assignee: Optional[str] = None) -> StageRun:
        raise NotImplementedError()

    @classmethod
    def create_next(cls, parent: StageRun, dtos: List[Dict]) -> None:
        raise NotImplementedError()


class LocalStageRunRepository(IStageRunRepository):
    _stage_runs: List[StageRun] = []

    end_status = ["failed", "finished", "abandoned"]

    status_transitions = {
        "waiting": ["running"],
        "running": end_status,
    }

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
        cls.validate_keys(filter)

        stage = filter.get("stage")
        data = filter.get("data")
        assignee = filter.get("assignee")
        status = filter.get("status")
        parent_id = filter.get("parent_id")

        return [
            stage_run
            for stage_run in cls._stage_runs
            if (
                (not stage or stage_run.stage == stage)
                and (not data or stage_run.data == data)
                and (not assignee or stage_run.assignee == assignee)
                and (not status or stage_run.status == status)
                and (not parent_id or stage_run.parent_id == parent_id)
            )
        ]

    @classmethod
    def create_initial(cls, stage: str, assignee: Optional[str] = None) -> StageRun:
        stage_run = StageRun(
            id=str(uuid.uuid4()),
            status="waiting",
            stage=stage,
            data={},
            assignee=assignee,
            parent_id=None,
        )

        cls._stage_runs.append(stage_run)

        return stage_run

    @classmethod
    def create_next(cls, parent: StageRun, dtos: List[Dict]) -> None:
        for dto in cls.hydrate_next_dto(parent, dtos):
            stage_run = StageRun(
                id=str(uuid.uuid4()), parent_id=parent.id, status="waiting", **dto
            )

            cls._stage_runs.append(stage_run)

    @classmethod
    def change_state(cls, id: str, status: str) -> bool:
        stage_run = cls.get(id)

        if stage_run.status in cls.end_status:
            return False

        if status in cls.status_transitions.get(stage_run.status, []):
            stage_run.status = status
            return True

        return False


class ProductionStageRunRepository(IStageRunRepository):
    @classmethod
    def _request(
        cls,
        method: str,
        path: str,
        body: Any = None,
        params: dict = {},
        raise_for_status: bool = True,
    ):
        headers: Mapping[str, str] = {"shared-token": SIDECAR_SHARED_TOKEN}
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
            assignee=dto["assignee"],
            status=dto["status"],
            parent_id=dto["parentId"],
        )

    @classmethod
    def get(cls, id: str) -> StageRun:
        r = cls._request("GET", path=f"/{id}")
        return cls.create_from_dto(r.json())

    @classmethod
    def find(cls, filter: Dict) -> List[StageRun]:
        cls.validate_keys(filter)

        r = cls._request(
            "GET",
            path="/",
            params=filter,
        )

        return [cls.create_from_dto(dto) for dto in r.json()]

    @classmethod
    def create_initial(cls, stage: str, assignee: Optional[str] = None) -> StageRun:
        body = dict(data={}, stage=stage, assignee=assignee)
        r = cls._request("POST", path="/", body=body)

        return cls.create_from_dto(r.json())

    @classmethod
    def create_next(cls, parent: StageRun, dtos: List[Dict]) -> None:
        parent_id = parent.id
        next_dtos = cls.hydrate_next_dto(parent, dtos)
        cls._request("PUT", path=f"/{parent_id}/children", body=next_dtos)

    @classmethod
    def change_state(cls, id: str, status: str) -> bool:
        r = cls._request(
            "PATCH", path=f"/{id}", body={"status": status}, raise_for_status=False
        )

        if r.status_code == 409:
            return False

        r.raise_for_status()

        return True


def get_stage_run_repository() -> Type[IStageRunRepository]:
    if SIDECAR_URL is None:
        return LocalStageRunRepository
    else:
        return ProductionStageRunRepository
