import typing
from dataclasses import is_dataclass

from abstra_internals.interface.sdk.tables import comparators as cmp
from abstra_internals.interface.sdk.tables.utils import (
    WithAsDict,
    escape_ref,
    quoted_identifier,
    serialize,
)


def _execute(query: str, params: typing.List):  # private api
    from abstra_internals.repositories import tables_api_http_client

    r = tables_api_http_client.execute(query=query, params=params)
    if not r.ok:
        raise Exception(f"Error executing query {query}: {r.text}")
    response = r.json()
    if response["errors"]:
        raise TablesExecutionError(response["errors"], query, params)
    return response["returns"]


def _run(query: str, params: typing.List) -> typing.List[dict]:  # private api
    return _execute(query, params)["result"]


def make_where_exp(where: typing.Optional[dict], offset=0):
    column_names = []
    values_list = []
    if where is None or len(where) == 0:
        where_exp = ""
    else:
        for column_name, value in where.items():
            if value is None:
                value = cmp.is_null()
            elif not isinstance(value, cmp.Comparator):
                value = cmp.is_eq(value)
            idx = len(values_list) + offset + 1
            exp, exp_values = value.exp(column_name, idx)
            column_names.append(exp)
            values_list.extend(exp_values)
        conditions = " AND ".join(column_names)
        where_exp = f"WHERE {conditions}"
    return where_exp, values_list


def _make_delete_query(table: str, values: dict):
    if len(values) == 0:
        raise Exception("Delete query must have at least one where clause")

    table = quoted_identifier(table)
    where_exp, values_list = make_where_exp(values)

    return f"""DELETE FROM {table} {where_exp} RETURNING *""", values_list


def _make_select_query(
    table: str,
    *,
    where: typing.Optional[dict] = None,
    order_by: typing.Optional[str] = None,
    order_desc=False,
    limit: typing.Optional[int] = None,
    offset: typing.Optional[int] = None,
):
    assert limit is None or isinstance(limit, int)
    assert offset is None or isinstance(offset, int)
    table = quoted_identifier(table)
    where_exp, values_list = make_where_exp(where)

    order_type_exp = "DESC" if order_desc else "ASC"
    order_by_exp = (
        f"ORDER BY {quoted_identifier(order_by)} {order_type_exp}"
        if order_by is not None
        else ""
    )
    limit_exp = f"LIMIT {limit}" if limit is not None else ""
    offset_exp = f"OFFSET {offset}" if offset is not None else ""
    return (
        " ".join(
            filter(
                lambda s: s != "",
                [
                    f"SELECT * FROM {table}",
                    where_exp,
                    order_by_exp,
                    limit_exp,
                    offset_exp,
                ],
            )
        ),
        values_list,
    )


def _make_insert_query(table: str, values: dict):
    table = escape_ref(table)

    if len(values) == 0:
        return f"""INSERT INTO "{table}" DEFAULT VALUES RETURNING *""", []
    else:
        indexes = []
        column_names = []
        values_list = []
        for idx, (column_name, value) in enumerate(values.items()):
            column_name = escape_ref(column_name)
            indexes.append("$" + str(idx + 1))
            column_names.append(f'"{column_name}"')
            values_list.append(serialize(value))
        indexes_exp = ",".join(indexes)
        keys_exp = ",".join(column_names)
        return (
            f"""INSERT INTO "{table}" ({keys_exp}) VALUES ({indexes_exp}) RETURNING *""",
            values_list,
        )


def _make_insert_multiple_query(table: str, values: list):
    table = escape_ref(table)
    if len(values) == 0:
        return f"""INSERT INTO "{table}" DEFAULT VALUES RETURNING *""", []

    column_names = sorted(
        list({column_name for row in values for column_name in row.keys()})
    )
    indexes = []
    values_list = []
    current_index = 1

    for row in values:
        row_indexes = []
        for column_name in column_names:
            if column_name not in row:
                row_indexes.append("DEFAULT")
            else:
                row_indexes.append(f"${current_index}")
                values_list.append(serialize(row[column_name]))
                current_index += 1
        indexes.append(row_indexes)

    indexes_exp = ", ".join([f"({', '.join(row_indexes)})" for row_indexes in indexes])
    keys_exp = ", ".join(
        [f'"{escape_ref(column_name)}"' for column_name in column_names]
    )
    return (
        f"""INSERT INTO "{table}" ({keys_exp}) VALUES {indexes_exp} RETURNING *""",
        values_list,
    )


def _make_update_query(table: str, set: dict, where: dict):
    if len(set) == 0:
        raise Exception("Update query must set at least one property")
    if len(where) == 0:
        raise Exception("Update query must have at least one where clause")

    table = escape_ref(table)
    set_column_names = []
    set_values_list = []
    for column_name, value in set.items():
        column_id = quoted_identifier(column_name)
        set_column_names.append(f"{column_id}=${len(set_values_list)+1}")
        set_values_list.append(serialize(value))
    set_exp = ", ".join(set_column_names)

    where_exp, where_values_list = make_where_exp(where, len(set_values_list))

    return (
        f"""UPDATE "{table}" SET {set_exp} {where_exp} RETURNING *""",
        set_values_list + where_values_list,
    )


def _make_row_dict(data: typing.Any) -> typing.Dict[str, typing.Any]:
    if isinstance(data, WithAsDict):
        return data.as_dict
    elif is_dataclass(data):
        return {k: getattr(data, k) for k in data.__dict__}
    elif isinstance(data, dict):
        return data
    elif data is None:
        return {}
    raise Exception(f"Invalid data type: {type(data)}")


# public
def run(query: str, params: typing.List = []):  # public api
    return _run(query, params)


def select(
    table: str,
    *,
    where: typing.Optional[dict] = None,
    order_by: typing.Optional[str] = None,
    order_desc=False,
    limit: typing.Optional[int] = None,
    offset: typing.Optional[int] = None,
):
    query, params = _make_select_query(
        table=table,
        where=_make_row_dict(where),
        order_by=order_by,
        limit=limit,
        offset=offset,
        order_desc=order_desc,
    )
    return _run(query, params)


def select_df(
    table: str,
    *,
    where: typing.Optional[dict] = None,
    order_by: typing.Optional[str] = None,
    order_desc=False,
    limit: typing.Optional[int] = None,
    offset: typing.Optional[int] = None,
):
    query, params = _make_select_query(
        table=table,
        where=_make_row_dict(where),
        order_by=order_by,
        limit=limit,
        offset=offset,
        order_desc=order_desc,
    )
    return query_df(query, params)


def select_one(table: str, *, where: typing.Optional[dict] = None):
    query, params = _make_select_query(
        table=table,
        where=_make_row_dict(where),
        limit=1,
    )
    rows = _run(query, params)
    if len(rows) == 0:
        return None
    return rows[0]


def select_by_id(table: str, id: str):
    return select_one(table, where={"id": id})


def insert(table: str, values: typing.Any):
    if isinstance(values, list):
        query, params = _make_insert_multiple_query(table, values)
        return _run(query, params)

    query, params = _make_insert_query(table, _make_row_dict(values))
    return _run(query, params)[0]


def update(table: str, set: typing.Any, where: typing.Any):
    query, params = _make_update_query(
        table, _make_row_dict(set), _make_row_dict(where)
    )
    return _run(query, params)


def update_by_id(table: str, id: str, values: typing.Any):
    rows = update(table, _make_row_dict(values), {"id": id})
    if len(rows) == 0:
        return None
    return rows[0]


def delete_by_id(table: str, id: str):
    rows = delete(table, {"id": id})
    if len(rows) == 0:
        return None
    return rows[0]


def delete(table: str, values: typing.Any):
    query, params = _make_delete_query(table, _make_row_dict(values))
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

    def __str__(self):
        return (
            f"There was an error executing your query\n"
            f"Error(s): {', '.join(self.errors)}\n"
            f"Query: {self.query}\n"
            f"Parameters: {self.params}"
        )
