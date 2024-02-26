import json
import typing
from dataclasses import is_dataclass
from datetime import date, datetime
from uuid import UUID
from ..forms.page_response import PageResponse
from ..forms.step import StepsResponse


def escape_ref(ref: str):
    return ref.replace('"', '""')


def quoted_identifier(ref: str):
    return f'"{escape_ref(ref)}"'


def serialize(value: typing.Any):
    if isinstance(value, (datetime, date)):
        return value.isoformat()
    if isinstance(value, (dict, list, tuple)):
        return json.dumps(value)
    if isinstance(value, set):
        return json.dumps(list(value))
    if isinstance(value, UUID):
        return str(value)

    return value


def _execute(query: str, params: typing.List):  # private api
    from ....repositories import tables_api_http_client

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
    if len(values) == 0:
        raise Exception("Delete query must have at least one where clause")

    table = escape_ref(table)
    column_names = []
    values_list = []
    for column_name, value in values.items():
        column_name = escape_ref(column_name)
        if value is None:
            column_names.append(f'"{column_name}" IS NULL')
        else:
            column_names.append(f'"{column_name}"=${len(values_list)+1}')
            values_list.append(serialize(value))
    conditions = " AND ".join(column_names)
    return f"""DELETE FROM "{table}" WHERE {conditions} RETURNING *""", values_list


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
    column_names = []
    values_list = []
    if where is None or len(where) == 0:
        where_exp = ""
    else:
        for column_name, value in where.items():
            column_name = quoted_identifier(column_name)
            if value is None:
                column_names.append(f"{column_name} IS NULL")
            else:
                column_names.append(f"{column_name}=${len(values_list)+1}")
                values_list.append(serialize(value))
        conditions = " AND ".join(column_names)
        where_exp = f"WHERE {conditions}"

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


def _make_update_query(table: str, set: dict, where: dict):
    if len(set) == 0:
        raise Exception("Update query must set at least one property")
    if len(where) == 0:
        raise Exception("Update query must have at least one where clause")

    table = escape_ref(table)
    set_column_names = []
    set_values_list = []
    for column_name, value in set.items():
        column_name = escape_ref(column_name)
        set_column_names.append(f'"{column_name}"=${len(set_values_list)+1}')
        set_values_list.append(serialize(value))
    set_exp = ", ".join(set_column_names)

    where_column_names = []
    where_values_list = []
    for column_name, value in where.items():
        column_name = escape_ref(column_name)
        if value is None:
            where_column_names.append(f'"{column_name}" IS NULL')
        else:
            where_column_names.append(
                f'"{column_name}"=${len(set_values_list)+len(where_values_list)+1}'
            )
            where_values_list.append(serialize(value))
    where_exp = " AND ".join(where_column_names)

    return (
        f"""UPDATE "{table}" SET {set_exp} WHERE {where_exp} RETURNING *""",
        set_values_list + where_values_list,
    )


def _make_row_dict(data: typing.Any) -> typing.Dict[str, typing.Any]:
    if is_dataclass(data):
        fields = data.__dataclass_fields__
        return {k: getattr(data, k) for k in fields.keys()}
    elif isinstance(data, PageResponse):
        return data.data
    elif isinstance(data, StepsResponse):
        return data.acc
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
    return _run(query, params)[0]


def select_by_id(table: str, id: int):
    return select_one(table, where={"id": id})


def insert(table: str, values: typing.Any):
    query, params = _make_insert_query(table, _make_row_dict(values))
    return _run(query, params)[0]


def update(table: str, set: typing.Any, where: typing.Any):
    query, params = _make_update_query(
        table, _make_row_dict(set), _make_row_dict(where)
    )
    return _run(query, params)


def update_by_id(table: str, id: int, values: typing.Any):
    return update(table, _make_row_dict(values), {"id": id})


def delete_by_id(table: str, id: int):
    return delete(table, {"id": id})


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
