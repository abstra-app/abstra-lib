import datetime
import json
from abc import ABC, abstractmethod
from typing import Any, Dict, List, Optional

import requests

from ..contracts_generated import CommonUser, CommonUserRoles
from ..environment import SIDECAR_HEADERS, SIDECAR_URL
from ..logger import AbstraLogger
from ..settings import Settings
from ..utils.dot_abstra import LOCAL_USERS_FILE


class UsersRepository(ABC):
    @abstractmethod
    def get_user_roles(self, email: str) -> CommonUserRoles:
        pass

    @abstractmethod
    def get_user(self, email: str) -> Optional[CommonUser]:
        pass

    @abstractmethod
    def list_users(self) -> List[CommonUser]:
        pass

    @abstractmethod
    def insert_user(self, email: str, roles: CommonUserRoles) -> bool:
        pass

    @abstractmethod
    def delete_user(self, email: str) -> None:
        pass

    @abstractmethod
    def update_user(self, email: str, roles: CommonUserRoles) -> None:
        pass


class LocalUsersRepository(UsersRepository):
    data: Dict[str, CommonUserRoles]
    sign_up_policy: List[str]
    is_loaded: bool

    def __init__(self, data: Dict[str, CommonUserRoles] = {}) -> None:
        self.data = data
        self.sign_up_policy: List[str] = []
        self.is_loaded = False

    def __load(self):
        self.is_loaded = True
        self.local_cache = Settings.root_path.joinpath(LOCAL_USERS_FILE)
        try:
            with open(self.local_cache, "r") as f:
                self.data = {**self.data, **json.load(f)}
        except Exception as e:
            AbstraLogger.capture_exception(e)

    def __dump(self):
        with open(self.local_cache, "w") as f:
            json.dump(self.data, f)

    def get_user_roles(self, email: str) -> CommonUserRoles:
        user = self.get_user(email)
        if user is None:
            return []
        return user.roles

    def get_user(self, email: str) -> Optional[CommonUser]:
        if not self.is_loaded:
            self.__load()

        if email not in self.data:
            return None

        roles = self.data.get(email, [])

        return CommonUser(
            id=email,
            email=email,
            roles=roles,
            project_id=email,
            created_at=datetime.datetime.now().isoformat(),
        )

    def list_users(self) -> List[CommonUser]:
        if not self.is_loaded:
            self.__load()

        return [
            CommonUser(
                id=email,
                email=email,
                roles=roles,
                project_id=email,
                created_at=datetime.datetime.now().isoformat(),
            )
            for email, roles in self.data.items()
        ]

    def insert_user(self, email: str, roles: CommonUserRoles) -> bool:
        if not self.is_loaded:
            self.__load()

        self.data[email] = roles
        self.__dump()
        return True

    def delete_user(self, email: str) -> None:
        if email in self.data:
            del self.data[email]
            self.__dump()

    def update_user(self, email: str, roles: CommonUserRoles) -> None:
        if email in self.data:
            self.data[email] = roles
            self.__dump()


class ProductionUsersRepository(UsersRepository):
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

    def get_user(self, email: str) -> Optional[CommonUser]:
        r = self._request("GET", "/", params={"email": email}, raise_for_status=False)
        if r.status_code == 404:
            return None
        return CommonUser.from_dict(r.json())

    def get_user_roles(self, email: str) -> CommonUserRoles:
        user = self.get_user(email)
        if user is None:
            return []
        return user.roles

    def insert_user(self, email: str, roles: CommonUserRoles) -> bool:
        r = self._request(
            "POST", "/", body={"email": email, "roles": roles}, raise_for_status=False
        )
        return r.status_code == 201

    ##this is not expected, but is needed to keep the interface
    def list_users(self) -> List[CommonUser]:
        return []

    def delete_user(self, email: str) -> None:
        pass

    def update_user(self, email: str, roles: CommonUserRoles) -> None:
        pass


def users_repository_factory() -> UsersRepository:
    if SIDECAR_URL is None:
        return LocalUsersRepository()
    else:
        headers = SIDECAR_HEADERS
        return ProductionUsersRepository(headers)
