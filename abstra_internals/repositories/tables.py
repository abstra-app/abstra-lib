import requests, typing, abc

from ..credentials import resolve_headers
from ..utils.environment import TABLES_EXECUTE_URL, LOCAL_TABLES_EXECUTE_URL


class TablesApiHttpClient(abc.ABC):
    execute_url: str

    def __init__(self, execute_url: str) -> None:
        self.execute_url = execute_url

    def execute(self, query: str, params: typing.List) -> requests.Response:
        raise NotImplementedError()


class ProductionTablesApiHttpClient(TablesApiHttpClient):
    def execute(self, query: str, params: typing.List) -> requests.Response:
        body = {"query": query, "params": params}
        return requests.post(self.execute_url, json=body)


class LocalTablesApiHttpClient(TablesApiHttpClient):
    def execute(self, query: str, params: typing.List) -> requests.Response:
        body = {"query": query, "params": params}
        headers = resolve_headers()
        if headers is None:
            raise Exception("You must be logged in to execute a table query")
        return requests.post(self.execute_url, headers=headers, json=body)


def tables_api_http_client_factory() -> TablesApiHttpClient:
    if TABLES_EXECUTE_URL is None:
        return LocalTablesApiHttpClient(LOCAL_TABLES_EXECUTE_URL)
    else:
        return ProductionTablesApiHttpClient(TABLES_EXECUTE_URL)
