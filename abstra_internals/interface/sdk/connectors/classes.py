from ....repositories import connectors_api_http_client


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
        r = connectors_api_http_client.execute(
            name=self.connector.name, method=self.name, params=kwargs
        )

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
