from dataclasses import is_dataclass
from typing import Any, Dict, List, Optional

from abstra_internals.controllers.sdk.sdk_context import SDKContextStore
from abstra_internals.interface.sdk.tables import comparators as cmp
from abstra_internals.interface.sdk.tables.utils import (
    WithAsDict,
    escape_ref,
    quoted_identifier,
    serialize,
)
from abstra_internals.utils.deprecated import deprecated


def _execute(query: str, params: List):  # private api
    r = SDKContextStore.get_by_thread().repositories.tables.execute(
        query=query, params=params
    )
    if not r.ok:
        raise Exception(f"Error executing query {query}: {r.text}")
    response = r.json()
    if response["errors"]:
        raise TablesExecutionError(response["errors"], query, params)
    return response["returns"]


def _run(query: str, params: List) -> List[dict]:  # private api
    return _execute(query, params)["result"]


def make_where_exp(where: Optional[dict], offset=0):
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
    where: Optional[dict] = None,
    order_by: Optional[str] = None,
    order_desc=False,
    limit: Optional[int] = None,
    offset: Optional[int] = None,
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
        set_column_names.append(f"{column_id}=${len(set_values_list) + 1}")
        set_values_list.append(serialize(value))
    set_exp = ", ".join(set_column_names)

    where_exp, where_values_list = make_where_exp(where, len(set_values_list))

    return (
        f"""UPDATE "{table}" SET {set_exp} {where_exp} RETURNING *""",
        set_values_list + where_values_list,
    )


def _make_row_dict(data: Any) -> Dict[str, Any]:
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
def run_sql(query: str, params: List = []):  # public api
    """Execute a raw SQL query with parameters.

    Args:
        query (str): SQL query to execute.
        params (List): List of parameters for the query. Defaults to [].

    Returns:
        List[dict]: List of rows returned by the query.
    """
    return _run(query, params)


@deprecated(new_function="run_sql")
def run(query: str, params: List = []):  # public api
    """Execute a raw SQL query with parameters (deprecated, use run_sql instead).

    Args:
        query (str): SQL query to execute.
        params (List): List of parameters for the query. Defaults to [].

    Returns:
        List[dict]: List of rows returned by the query.
    """
    return _run(query, params)


def select(
    table: str,
    *,
    where: Optional[dict] = None,
    order_by: Optional[str] = None,
    order_desc: bool = False,
    limit: Optional[int] = None,
    offset: Optional[int] = None,
):
    """Select rows from a table with filtering and ordering options.

    Args:
        table (str): Name of the table to select from.
        where (Optional[dict]): Dictionary of conditions for the WHERE clause.
        order_by (Optional[str]): Column name to order by.
        order_desc (bool): Whether to order in descending order. Defaults to False.
        limit (Optional[int]): Maximum number of rows to return.
        offset (Optional[int]): Number of rows to skip.

    Returns:
        List[dict]: List of rows matching the query.
    """
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
    where: Optional[dict] = None,
    order_by: Optional[str] = None,
    order_desc: bool = False,
    limit: Optional[int] = None,
    offset: Optional[int] = None,
):
    """Select rows from a table and return a pandas DataFrame.

    Args:
        table (str): Name of the table to select from.
        where (Optional[dict]): Dictionary of conditions for the WHERE clause.
        order_by (Optional[str]): Column name to order by.
        order_desc (bool): Whether to order in descending order. Defaults to False.
        limit (Optional[int]): Maximum number of rows to return.
        offset (Optional[int]): Number of rows to skip.

    Returns:
        pandas.DataFrame: DataFrame containing the rows matching the query.
    """
    query, params = _make_select_query(
        table=table,
        where=_make_row_dict(where),
        order_by=order_by,
        limit=limit,
        offset=offset,
        order_desc=order_desc,
    )
    return query_df(query, params)


def select_one(table: str, *, where: Optional[dict] = None):
    """Select a single row from a table.

    Args:
        table (str): Name of the table to select from.
        where (Optional[dict]): Dictionary of conditions for the WHERE clause.

    Returns:
        Optional[dict]: The first matching row, or None if no rows match.
    """
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
    """Select a single row from a table by its ID.

    Args:
        table (str): Name of the table to select from.
        id (str): ID of the row to select.

    Returns:
        Optional[dict]: The matching row, or None if no row matches.
    """
    return select_one(table, where={"id": id})


def insert(table: str, values: Any):
    """Insert one or more rows into a table.

    Args:
        table (str): Name of the table to insert into.
        values (Any): Dictionary of column-value pairs for a single row,
                            or list of dictionaries for multiple rows.

    Returns:
        Union[dict, List[dict]]:
            The inserted row if values is a dict,
            or a list of all inserted rows if values is a list.
    """
    if isinstance(values, list):
        query, params = _make_insert_multiple_query(table, values)
        return _run(query, params)

    query, params = _make_insert_query(table, _make_row_dict(values))
    return _run(query, params)[0]


def update(table: str, set: Any, where: Any):
    """Update rows in a table.

    Args:
        table (str): Name of the table to update.
        set (Any): Dictionary (or dataclass) of column-value pairs to set.
        where (Any): Dictionary (or dataclass) of column-value pairs for the WHERE clause.

    Returns:
        List[dict]: List of updated rows.
    """
    query, params = _make_update_query(
        table, _make_row_dict(set), _make_row_dict(where)
    )
    return _run(query, params)


def update_by_id(table: str, id: str, values: Any):
    """Update a row in a table by its ID.

    Args:
        table (str): Name of the table to update.
        id (str): ID of the row to update.
        values (Any): Dictionary (or dataclass) of column-value pairs to set.

    Returns:
        Optional[dict]: The updated row, or None if no row matches.
    """
    rows = update(table, _make_row_dict(values), {"id": id})
    if len(rows) == 0:
        return None
    return rows[0]


def delete_by_id(table: str, id: str):
    """Delete a row from a table by its ID.

    Args:
        table (str): Name of the table to delete from.
        id (str): ID of the row to delete.

    Returns:
        Optional[dict]: The deleted row, or None if no row matches.
    """
    rows = delete(table, {"id": id})
    if len(rows) == 0:
        return None
    return rows[0]


def delete(table: str, values: Any):
    """Delete rows from a table based on conditions.

    Args:
        table (str): Name of the table to delete from.
        values (Any): Dictionary (or dataclass) of column-value pairs for the WHERE clause.

    Returns:
        List[dict]: List of deleted rows.
    """
    query, params = _make_delete_query(table, _make_row_dict(values))
    return _run(query, params)


def query_df(query: str, params: List = []):  # public api
    """Execute a raw SQL query and return the results as a pandas DataFrame.

    Args:
        query (str): SQL query to execute.
        params (List): List of parameters for the query. Defaults to [].

    Returns:
        pandas.DataFrame: DataFrame containing the query results.
    """
    import pandas as pd

    api_response = _execute(query, params)
    col_names = [c["name"] for c in api_response["fields"]]
    return pd.DataFrame.from_records(api_response["result"], columns=col_names)


class TablesExecutionError(Exception):  # public api
    """Exception raised when there is an error executing a SQL query.

    Attributes:
        query (str): The SQL query that caused the error.
        params (Optional[List]): The parameters used in the query.
        errors (List): List of error messages from the database.
    """

    def __init__(
        self,
        errors: List,
        query: str,
        params: Optional[List] = None,
    ) -> None:
        """Initialize a TablesExecutionError.

        Args:
            errors (List): List of error messages from the database.
            query (str): The SQL query that caused the error.
            params (Optional[List]): The parameters used in the query.
        """
        self.query = query
        self.params = params
        self.errors = errors

    def __str__(self):
        """Return a string representation of the error.

        Returns:
            str: A formatted error message.
        """
        return (
            f"There was an error executing your query\n"
            f"Error(s): {', '.join(self.errors)}\n"
            f"Query: {self.query}\n"
            f"Parameters: {self.params}"
        )
