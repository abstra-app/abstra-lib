from abc import ABC, abstractmethod
from typing import Any, Dict, Optional

import requests

from abstra_internals.contracts_generated import CommonUser, CommonUserRoles
from abstra_internals.credentials import resolve_headers
from abstra_internals.environment import REQUEST_TIMEOUT, SIDECAR_HEADERS


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
    def __init__(self, url: str) -> None:
        self.url = url

    def _request(
        self,
        method: str,
        path: str,
        body: Any = None,
        params: dict = {},
        raise_for_status: bool = True,
    ):
        r = requests.request(
            method=method,
            url=f"{self.url}/users{path}",
            headers=SIDECAR_HEADERS,
            json=body,
            params=params,
            timeout=REQUEST_TIMEOUT,
        )

        if raise_for_status:
            r.raise_for_status()

        return r

    def get_user(self, email: str) -> Optional[CommonUser]:
        r = self._request("GET", "/", params={"email": email}, raise_for_status=False)
        if not r.ok:
            return None
        return CommonUser.from_dict(r.json())

    def insert_user(self, email: str) -> bool:
        r = self._request("POST", "/", body={"email": email}, raise_for_status=False)
        return r.ok
