import requests, os, typing, abc

from ..credentials import resolve_headers


LOCAL_CONNECTORS_EXECUTE_URL = "https://cloud-api.abstra.cloud/cli/connectors/execute"
ABSTRA_CONNECTORS_EXECUTE_URL = os.getenv("ABSTRA_CONNECTORS_EXECUTE_URL")


class ConnectorsApiHttpClient(abc.ABC):
    execute_url: str

    def __init__(self, execute_url: str) -> None:
        self.execute_url = execute_url

    def execute(self, name: str, method: str, params: typing.Dict) -> requests.Response:
        raise NotImplementedError()


class ProductionConnectorsApiHttpClient(ConnectorsApiHttpClient):
    def execute(self, name: str, method: str, params: typing.Dict) -> requests.Response:
        body = {"name": name, "method": method, "params": params}
        return requests.post(self.execute_url, json=body)


class LocalConnectorsApiHttpClient(ConnectorsApiHttpClient):
    def execute(self, name: str, method: str, params: typing.Dict) -> requests.Response:
        body = {"name": name, "method": method, "params": params}
        headers = resolve_headers()
        if headers is None:
            raise Exception("You must be logged in to execute a connector method")
        return requests.post(self.execute_url, headers=headers, json=body)


def connectors_api_http_client_factory() -> ConnectorsApiHttpClient:
    if ABSTRA_CONNECTORS_EXECUTE_URL is None:
        return LocalConnectorsApiHttpClient(LOCAL_CONNECTORS_EXECUTE_URL)
    else:
        return ProductionConnectorsApiHttpClient(ABSTRA_CONNECTORS_EXECUTE_URL)
