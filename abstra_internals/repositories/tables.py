import abc
import typing

import requests

from abstra_internals.credentials import resolve_headers
from abstra_internals.environment import CLOUD_API_CLI_URL, SIDECAR_HEADERS, SIDECAR_URL


class TablesApiHttpClient(abc.ABC):
    execute_url: str

    def __init__(self, base_url: str) -> None:
        self.execute_url = f"{base_url}/tables/execute"

    def execute(self, query: str, params: typing.List) -> requests.Response:
        raise NotImplementedError()


class ProductionTablesApiHttpClient(TablesApiHttpClient):
    def execute(self, query: str, params: typing.List) -> requests.Response:
        body = {"query": query, "params": params}
        return requests.post(self.execute_url, headers=SIDECAR_HEADERS, json=body)


class LocalTablesApiHttpClient(TablesApiHttpClient):
    def execute(self, query: str, params: typing.List) -> requests.Response:
        body = {"query": query, "params": params}
        headers = resolve_headers()
        if headers is None:
            raise Exception("You must be logged in to execute a table query")
        return requests.post(self.execute_url, headers=headers, json=body)


def tables_api_http_client_factory() -> TablesApiHttpClient:
    if SIDECAR_URL is None:
        return LocalTablesApiHttpClient(CLOUD_API_CLI_URL)
    else:
        return ProductionTablesApiHttpClient(SIDECAR_URL)
