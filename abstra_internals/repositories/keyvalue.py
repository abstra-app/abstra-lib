import abc

from abstra_internals.cloud_api.http_client import HTTPClient


class KVRepository(abc.ABC):
    def get(self, key: str):
        raise NotImplementedError()

    def delete(self, key: str):
        raise NotImplementedError()

    def set(self, key: str, value: str):
        raise NotImplementedError()


class ProductionKVRepository(KVRepository):
    def __init__(self, client: "HTTPClient"):
        self.client = client

    def get(self, key: str):
        r = self.client.get(
            f"/kv/{key}",
        )
        if not r.ok:
            return None

        return r.json()["value"]

    def delete(self, key: str):
        self.client.delete(
            f"/kv/{key}",
        ).raise_for_status()

    def set(self, key: str, value: str):
        self.client.put(
            f"/kv/{key}",
            json=dict(value=value),
        ).raise_for_status()


class LocalKVRepository(KVRepository):
    kvs = {}

    def get(self, key: str):
        return self.kvs.get(key)

    def delete(self, key: str):
        del self.kvs[key]

    def set(self, key: str, value: str):
        self.kvs[key] = value
