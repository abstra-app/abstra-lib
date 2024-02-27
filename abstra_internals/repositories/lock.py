import requests, datetime as dt, abc
from ..utils.environment import SIDECAR_URL, SIDECAR_HEADERS


class LockRepository(abc.ABC):
    def lock(self, key: str, exp: int, unlock: bool) -> bool:
        raise NotImplementedError()


class ProductionLockRepository(LockRepository):
    base_url: str

    def __init__(self, sidecar_url: str):
        self.base_url = sidecar_url + "/lock"

    def lock(self, key: str, exp: int, unlock: bool = False) -> bool:
        data = {"key": key, "exp": exp, "unlock": unlock}
        response = requests.post(self.base_url, json=data, headers=SIDECAR_HEADERS)
        return response.status_code == 200


class LocalLockRepository(LockRepository):
    locks = {}

    def lock(self, key: str, exp: int, unlock: bool = False) -> bool:
        lock = self.locks.get(key)
        can_lock = lock is None or lock < dt.datetime.now()

        if can_lock:
            self.locks[key] = dt.datetime.now() + dt.timedelta(seconds=exp)

        return can_lock


def lock_repository_factory() -> LockRepository:
    if SIDECAR_URL is None:
        return LocalLockRepository()
    else:
        return ProductionLockRepository(SIDECAR_URL)
