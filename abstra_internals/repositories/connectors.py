import abc
import typing

import requests

from abstra_internals.credentials import resolve_headers
from abstra_internals.environment import CLOUD_API_CLI_URL, SIDECAR_HEADERS, SIDECAR_URL


class ConnectorsApiHttpClient(abc.ABC):
    execute_url: str

    def __init__(self, base_url: str) -> None:
        self.execute_url = f"{base_url}/connectors/execute"

    def execute(self, name: str, method: str, params: typing.Dict) -> requests.Response:
        raise NotImplementedError()


class ProductionConnectorsApiHttpClient(ConnectorsApiHttpClient):
    def execute(self, name: str, method: str, params: typing.Dict) -> requests.Response:
        body = {"name": name, "method": method, "params": params}
        return requests.post(self.execute_url, headers=SIDECAR_HEADERS, json=body)


class LocalConnectorsApiHttpClient(ConnectorsApiHttpClient):
    def execute(self, name: str, method: str, params: typing.Dict) -> requests.Response:
        body = {"name": name, "method": method, "params": params}
        headers = resolve_headers()
        if headers is None:
            raise Exception("You must be logged in to execute a connector method")
        return requests.post(self.execute_url, headers=headers, json=body)


def connectors_api_http_client_factory() -> ConnectorsApiHttpClient:
    if SIDECAR_URL is None:
        return LocalConnectorsApiHttpClient(CLOUD_API_CLI_URL)
    else:
        return ProductionConnectorsApiHttpClient(SIDECAR_URL)
