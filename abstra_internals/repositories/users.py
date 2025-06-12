from abc import ABC, abstractmethod
from typing import Dict, Optional

from abstra_internals.cloud_api.http_client import HTTPClient
from abstra_internals.contracts_generated import CommonUser, CommonUserRoles
from abstra_internals.credentials import resolve_headers


class UsersRepository(ABC):
    @abstractmethod
    def get_user(self, email: str) -> Optional[CommonUser]:
        pass

    @abstractmethod
    def insert_user(self, email: str) -> bool:
        pass


class TestUsersRepository(UsersRepository):
    ## prevent pytest to inspect this class
    __test__ = False
    data: Dict[str, CommonUserRoles]

    def __init__(self, data: Dict[str, CommonUserRoles] = {}) -> None:
        super().__init__()
        self.data = data

    def get_user(self, email: str) -> Optional[CommonUser]:
        if email in self.data:
            return CommonUser(
                id=email,
                email=email,
                roles=self.data[email],
                created_at="2021-09-01T00:00:00Z",
                project_id="1",
            )

        return None

    def insert_user(self, email: str) -> bool:
        if email in self.data:
            return False
        self.data[email] = []
        return True


class LocalUsersRepository(UsersRepository):
    @property
    def headers(self):
        return resolve_headers()

    def get_user(self, email: str) -> Optional[CommonUser]:
        return None

    def insert_user(self, email: str) -> bool:
        return True


class ProductionUsersRepository(UsersRepository):
    def __init__(self, client: "HTTPClient") -> None:
        self.client = client

    def get_user(self, email: str) -> Optional[CommonUser]:
        r = self.client.get(
            endpoint="/users",
            params={"email": email},
        )
        if not r.ok:
            return None
        return CommonUser.from_dict(r.json())

    def insert_user(self, email: str) -> bool:
        r = self.client.post(
            endpoint="/users",
            json={"email": email},
        )
        return r.ok
