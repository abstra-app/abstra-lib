from abc import ABC, abstractmethod
from typing import Any, Dict, Optional

import requests

from abstra_internals.contracts_generated import CommonUserRoles
from abstra_internals.environment import SIDECAR_HEADERS, SIDECAR_URL


class MembersRepository(ABC):
    @abstractmethod
    def get_member_roles(self, email: str) -> CommonUserRoles:
        pass


class LocalMembersRepository(MembersRepository):
    data: Optional[Dict[str, CommonUserRoles]]

    def __init__(self, database: Optional[Dict[str, CommonUserRoles]] = None):
        self.data = database

    def get_member_roles(self, email: str) -> CommonUserRoles:
        if self.data is None:
            return ["workflow_viewer"]
        return self.data.get(email, [])


class ProductionMembersRepository(MembersRepository):
    headers: Dict[str, str]

    def __init__(self, headers) -> None:
        self.headers = headers

    @classmethod
    def _request(
        cls,
        method: str,
        path: str,
        body: Any = None,
        params: dict = {},
        raise_for_status: bool = True,
    ):
        headers: Dict[str, str] = SIDECAR_HEADERS
        r = requests.request(
            method=method,
            url=f"{SIDECAR_URL}/users{path}",
            headers=headers,
            json=body,
            params=params,
        )

        if raise_for_status:
            r.raise_for_status()

        return r

    def _get_user_by_email(self, email: str):
        r = self._request("GET", "/", params={"email": email}, raise_for_status=False)
        if not r.ok:
            return None
        return r.json()

    def get_member_roles(self, email: str) -> CommonUserRoles:
        user = self._get_user_by_email(email)
        if user is None:
            return []
        return user.get("roles", [])


def members_repository_factory() -> MembersRepository:
    if SIDECAR_URL is None:
        return LocalMembersRepository()
    else:
        headers = SIDECAR_HEADERS
        return ProductionMembersRepository(headers)
