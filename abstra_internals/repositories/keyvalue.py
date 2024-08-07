import abc

import requests

from abstra_internals.environment import (
    SIDECAR_HEADERS,
    SIDECAR_URL,
)


class KVRepository(abc.ABC):
    def get(self, key: str):
        raise NotImplementedError()

    def delete(self, key: str):
        raise NotImplementedError()

    def set(self, key: str, value: str):
        raise NotImplementedError()


class ProductionKVRepository(KVRepository):
    base_url: str

    def __init__(self, sidecar_url: str):
        self.base_url = sidecar_url + "/kv"

    def get(self, key: str):
        r = requests.get(f"{self.base_url}/{key}", headers=SIDECAR_HEADERS)
        if not r.ok:
            return None

        return r.json()["value"]

    def delete(self, key: str):
        requests.delete(
            f"{self.base_url}/{key}", headers=SIDECAR_HEADERS
        ).raise_for_status()

    def set(self, key: str, value: str):
        requests.put(
            f"{self.base_url}/{key}", json=dict(value=value), headers=SIDECAR_HEADERS
        ).raise_for_status()


class LocalKVRepository(KVRepository):
    kvs = {}

    def get(self, key: str):
        return self.kvs.get(key)

    def delete(self, key: str):
        del self.kvs[key]

    def set(self, key: str, value: str):
        self.kvs[key] = value


def kv_repository_factory() -> KVRepository:
    if SIDECAR_URL is None:
        return LocalKVRepository()
    else:
        return ProductionKVRepository(SIDECAR_URL)
