from abc import ABC, abstractmethod
from typing import List

from abstra_internals.cloud_api.http_client import HTTPClient
from abstra_internals.contracts_generated import CommonRole
from abstra_internals.credentials import resolve_headers
from abstra_internals.environment import REQUEST_TIMEOUT


class RolesRepository(ABC):
    @abstractmethod
    def get_roles(self) -> List[CommonRole]:
        raise NotImplementedError


class LocalRolesRepository(RolesRepository):
    def __init__(self, client: HTTPClient) -> None:
        self.client = client

    @property
    def headers(self):
        return resolve_headers()

    def get_roles(self) -> List[CommonRole]:
        if not self.headers:
            return []

        response = self.client.get(
            "/roles", headers=self.headers, timeout=REQUEST_TIMEOUT
        )
        return [CommonRole.from_dict(role) for role in response.json()]


class ProductionRolesRepository(RolesRepository):
    def get_roles(self) -> List[CommonRole]:
        # not applicable for production
        raise NotImplementedError()
