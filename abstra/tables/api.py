import typing
from abstra_internals.repositories import tables_api_http_client


def escape_ref(ref: str):
    return ref.replace('"', '""')


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


def _make_delete_query(table: str, values: dict):
    table = escape_ref(table)
    column_names = []
    values_list = []
    for idx, (column_name, values) in enumerate(values.items()):
        column_name = escape_ref(column_name)
        column_names.append(f'"{column_name}"=${idx+1}')
        values_list.append(values)
    conditions = " AND ".join(column_names)
    return f"""DELETE FROM "{table}" WHERE {conditions}""", values_list


def _make_insert_query(table: str, values: dict):
    table = escape_ref(table)
    indexes = []
    column_names = []
    values_list = []
    for idx, (column_name, value) in enumerate(values.items()):
        column_name = escape_ref(column_name)
        indexes.append("$" + str(idx + 1))
        column_names.append(f'"{column_name}"')
        values_list.append(value)
    indexes_exp = ",".join(indexes)
    keys_exp = ",".join(column_names)
    return f"""INSERT INTO "{table}" ({keys_exp}) VALUES ({indexes_exp})""", values_list


def _make_update_query(table: str, set: dict, where: dict):
    table = escape_ref(table)
    set_column_names = []
    set_values_list = []
    for idx, (column_name, value) in enumerate(set.items()):
        column_name = escape_ref(column_name)
        set_column_names.append(f'"{column_name}"=${idx+1}')
        set_values_list.append(value)
    set_exp = ", ".join(set_column_names)
    where_column_names = []
    where_values_list = []
    (column_name, value) = list(where.items())[0]
    where_column_names.append(f'"{column_name}"=${len(set)+1}')
    where_values_list.append(value)
    return (
        f"""UPDATE "{table}" SET {set_exp} WHERE {where_column_names[0]}""",
        set_values_list + where_values_list,
    )


# public
def run(query: str, params: typing.List = []):  # public api
    return _run(query, params)


def insert(table: str, values: dict):
    query, params = _make_insert_query(table, values)
    return _run(query, params)


def update(table: str, set: dict, where: dict):
    query, params = _make_update_query(table, set, where)
    return _run(query, params)


def update_by_id(table: str, id: int, values: dict):
    return update(table, values, {"id": id})


def delete_by_id(table: str, id: int):
    return delete(table, {"id": id})


def delete(table: str, values: dict):
    query, params = _make_delete_query(table, values)
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
