import requests, os, typing

DEFAULT_EXECUTE_URL = "https://cloud-api.abstra.cloud/cli/tables/execute"
EXECUTE_URL = os.getenv("ABSTRA_TABLES_EXECUTE_URL", DEFAULT_EXECUTE_URL)


def _execute(query: str, params: typing.Optional[typing.List] = None):  # private api
    j_body = {"query": query, "params": params or []}

    headers = {
        "Content-Type": "application/json",
        "api-authorization": f"Bearer {os.getenv('ABSTRA_API_TOKEN')}",
    }

    if EXECUTE_URL == DEFAULT_EXECUTE_URL and not os.getenv("ABSTRA_API_TOKEN"):
        raise Exception("You must be logged in to execute a tables query")

    r = requests.post(EXECUTE_URL, headers=headers, json=j_body)
    if not r.ok:
        raise Exception(f"Error executing query {query}: {r.text}")

    response = r.json()
    if response["errors"]:
        raise TablesExecutionError(response["errors"], query, params)

    return response["returns"]


def _run(query: str, params: typing.Optional[typing.List] = None):  # private api
    return _execute(query, params)["result"]


def run(query: str, params: typing.Optional[typing.List] = None):  # public api
    return _run(query, params)


def query_df(query: str, params: typing.Optional[typing.List] = None):  # public api
    import pandas as pd

    api_response = _execute(query, params)
    col_names = [c["name"] for c in api_response["fields"]]
    return pd.DataFrame.from_records(api_response["result"], columns=col_names)


class TablesExecutionError(Exception):  # public api
    def __init__(
        self,
        errors: typing.List,
        query: str,
        params: typing.Optional[typing.List] = None,
    ) -> None:
        self.query = query
        self.params = params
        self.errors = errors
