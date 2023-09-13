import typing
from abstra_internals.player_api_clients import tables_api_http_client


def _execute(query: str, params: typing.List):  # private api
    r = tables_api_http_client.execute(query=query, params=params)
    if not r.ok:
        raise Exception(f"Error executing query {query}: {r.text}")

    response = r.json()
    if response["errors"]:
        raise TablesExecutionError(response["errors"], query, params)

    return response["returns"]


def _run(query: str, params: typing.List):  # private api
    return _execute(query, params)["result"]


# public


def run(query: str, params: typing.List = []):  # public api
    return _run(query, params)


def query_df(query: str, params: typing.List = []):  # public api
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
