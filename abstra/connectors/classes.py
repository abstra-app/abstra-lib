import requests, os

DEFAULT_EXECUTE_URL = "https://cloud-api.abstra.cloud/cli/connectors/execute"
EXECUTE_URL = os.getenv("ABSTRA_CONNECTORS_EXECUTE_URL", DEFAULT_EXECUTE_URL)


class ConnectorExecutionError(Exception):  # public api
    def __init__(self, name: str, method_name: str, errors: list) -> None:
        self.name = name
        self.method_name = method_name
        self.errors = errors


class Method:
    def __init__(self, name: str, connector: "Connector") -> None:
        self.name = name
        self.connector = connector

    def __call__(self, **kwargs):  # public api
        j_body = {"name": self.connector.name, "method": self.name, "params": kwargs}

        headers = {
            "Content-Type": "application/json",
            "api-authorization": f"Bearer {os.getenv('ABSTRA_API_TOKEN')}",
        }

        if EXECUTE_URL == DEFAULT_EXECUTE_URL and not os.getenv("ABSTRA_API_TOKEN"):
            raise Exception("You must be logged in to execute a connector method")

        r = requests.post(EXECUTE_URL, headers=headers, json=j_body)
        if not r.ok:
            raise Exception(f"Error executing method {self.name}: {r.text}")

        result = r.json()
        if result["errors"]:
            raise ConnectorExecutionError(
                self.connector.name, self.name, result["errors"]
            )

        return result["returns"]


class Connector:
    def __init__(self, name: str) -> None:
        self.name = name

    def get_method(self, method_name: str) -> "Method":  # public api
        return Method(method_name, self)

    def execute(self, method_name: str, **kwargs):  # public api
        return self.get_method(method_name)(**kwargs)

    def __getattr__(self, method_name: str) -> "Method":
        return self.get_method(method_name)


def get_connector(name: str) -> "Connector":  # public api
    return Connector(name)
