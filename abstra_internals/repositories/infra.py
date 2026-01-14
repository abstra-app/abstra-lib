from abc import ABC, abstractmethod
from dataclasses import dataclass
from typing import Optional

from abstra_internals.cloud_api.http_client import HTTPClient


@dataclass
class WorkerCapacity:
    current_workers: int
    max_workers: int
    is_at_capacity: bool

    @staticmethod
    def from_dict(data: dict) -> "WorkerCapacity":
        return WorkerCapacity(
            current_workers=data.get("currentWorkers", 0),
            max_workers=data.get("maxWorkers", 0),
            is_at_capacity=data.get("isAtCapacity", False),
        )


class InfraRepository(ABC):
    @abstractmethod
    def get_worker_capacity(self) -> Optional[WorkerCapacity]:
        raise NotImplementedError()


class LocalInfraRepository(InfraRepository):
    def get_worker_capacity(self) -> Optional[WorkerCapacity]:
        return None


class ProductionInfraRepository(InfraRepository):
    def __init__(self, client: HTTPClient):
        self.client = client

    def get_worker_capacity(self) -> Optional[WorkerCapacity]:
        try:
            res = self.client.get("/infra/worker-capacity")
            res.raise_for_status()
            return WorkerCapacity.from_dict(res.json())
        except Exception:
            return None
