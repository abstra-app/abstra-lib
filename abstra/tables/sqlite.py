import re, typing, sqlite3
from dataclasses import dataclass


class TableNotFound(Exception):
    def __init__(self, table_name: str) -> None:
        self.table_name = table_name

    def __str__(self) -> str:
        return f"Table '{self.table_name}' does not exist"


@dataclass
class Column:
    id: int
    name: str
    type: str
    not_null: bool
    primary_key: bool
    default: typing.Optional[str] = None

    @property
    def editor_dto(self):
        return {
            "id": self.id,
            "name": self.name,
            "type": self.type,
            "not_null": self.not_null,
            "default": self.default,
            "primary_key": self.primary_key,
        }


@dataclass
class Table:
    name: str
    columns: typing.List[Column]

    @property
    def editor_dto(self):
        return {"name": self.name, "columns": [c.editor_dto for c in self.columns]}


def random_id(length=10):
    import random, string

    return "".join(random.choices(string.ascii_letters + string.digits, k=length))


def dict_factory(cursor, row):
    d = {}
    for idx, col in enumerate(cursor.description):
        d[col[0]] = row[idx]
    return d


def get_columns_from_table(cur: sqlite3.Cursor, table_name: str):
    rows = cur.execute(
        f"""
        pragma table_info("{table_name}")
    """
    ).fetchall()

    if len(rows) == 0:
        raise TableNotFound(table_name)

    return [
        Column(
            id=id,
            name=name,
            type=type,
            not_null=not_null == 1,
            default=default,
            primary_key=primary_key == 1,
        )
        for (id, name, type, not_null, default, primary_key) in rows
    ]


def get_column(cur: sqlite3.Cursor, table_name: str, column_name: str):
    return [
        c for c in get_columns_from_table(cur, table_name) if c.name == column_name
    ][0]


def transform_expression(
    exp: typing.Optional[str] = "", dict_params: typing.Dict[str, typing.Any] = {}
):
    param_key = r":\w+"
    list_params = []
    if exp:
        for match in re.findall(param_key, exp):
            list_params.append(dict_params[match[1:]])
            exp = exp.replace(match, "?")
        return f"WHERE {exp}", list_params
    else:
        return "", list_params


class SqliteDB:
    def __init__(self, db_path: str) -> None:
        self.db_path = db_path

    def connect(self, results="dicts"):
        conn = sqlite3.connect(self.db_path)
        if results == "dicts":
            conn.row_factory = dict_factory
        return conn

    def create_table(self):
        cur = self.connect("tuples").cursor()

        table_name = f"table-{random_id()}"
        cur.execute(
            f"""
            CREATE TABLE "{table_name}" (
                id INTEGER PRIMARY KEY NOT NULL,
                created_at INTEGER DEFAULT CURRENT_TIMESTAMP,
                updated_at INTEGER DEFAULT CURRENT_TIMESTAMP
            );
        """
        )

        return Table(
            name=table_name,
            columns=[
                Column(
                    id=0,
                    name="id",
                    type="INTEGER",
                    not_null=True,
                    default=None,
                    primary_key=True,
                ),
                Column(
                    id=1,
                    name="created_at",
                    type="INTEGER",
                    not_null=True,
                    default="CURRENT_TIMESTAMP",
                    primary_key=False,
                ),
                Column(
                    id=2,
                    name="updated_at",
                    type="INTEGER",
                    not_null=True,
                    default="CURRENT_TIMESTAMP",
                    primary_key=False,
                ),
            ],
        )

    def update_table(self, name: str, changes: typing.Dict[str, str]):
        cur = self.connect("tuples").cursor()

        if "name" in changes:
            old_name = name
            new_name = changes["name"]

            cur.execute(
                f"""
                ALTER TABLE "{old_name}"
                RENAME TO "{new_name}"
            """
            )

            return Table(name=new_name, columns=get_columns_from_table(cur, new_name))

    def get_table(self, name: str):
        cur = self.connect("tuples").cursor()

        return Table(name=name, columns=get_columns_from_table(cur, name))

    def get_tables(self):
        cur = self.connect("tuples").cursor()
        rows = cur.execute(
            """
            SELECT name
            FROM sqlite_schema
            WHERE type='table'
            ORDER BY name
        """
        ).fetchall()

        return [
            Table(name=name, columns=get_columns_from_table(cur, name))
            for (name,) in rows
        ]

    def delete_table(self, name: str):
        cur = self.connect("tuples").cursor()
        cur.execute(
            f"""
            DROP TABLE "{name}"
        """
        )

    def duplicate_table(self, name: str):
        cur = self.connect("tuples").cursor()
        new_name = f"{name}-{random_id()}"
        cur.execute(
            f"""
            CREATE TABLE "{new_name}" AS
            SELECT * FROM "{name}"
        """
        )
        return Table(name=new_name, columns=get_columns_from_table(cur, new_name))

    def db_types(self):
        return [
            {"type": "NULL", "input_spec": {"type": "hidden"}},
            {"type": "INTEGER", "input_spec": {"type": "number"}},
            {"type": "REAL", "input_spec": {"type": "number"}},
            {"type": "INT", "input_spec": {"type": "number"}},
            {"type": "TEXT", "input_spec": {"type": "text"}},
            {"type": "BLOB", "input_spec": {"type": "file"}},
        ]

    def get_column(self, table_name: str, column_name: str) -> typing.Optional[Column]:
        cur = self.connect("tuples").cursor()
        return get_column(cur, table_name, column_name)

    def get_columns(self, table_name: str):
        cur = self.connect("tuples").cursor()
        rows = cur.execute(
            f"""
            pragma table_info("{table_name}")
        """
        ).fetchall()

        return [
            Column(
                id=id,
                name=name,
                type=type,
                not_null=not_null == 1,
                default=default,
                primary_key=primary_key == 1,
            )
            for (id, name, type, not_null, default, primary_key) in rows
        ]

    def update_column(
        self, table_name: str, column_name: str, changes: typing.Dict[str, typing.Any]
    ):
        cur = self.connect("tuples").cursor()

        column = get_column(cur, table_name, column_name)

        if ("type" in changes) or ("not_null" in changes) or ("default" in changes):
            new_column_name = changes.get("name", column_name)
            new_column_type = changes.get("type", column.type)
            new_column_not_null = changes.get("not_null", column.not_null)
            new_column_default = changes.get("default", column.default)

            if new_column_not_null:
                not_null_exp = "NOT NULL"
            else:
                not_null_exp = ""

            if new_column_default:
                default_exp = f"DEFAULT {new_column_default}"
            else:
                default_exp = ""

            uuid = random_id()
            temp_column_name = f"{new_column_name}_{uuid}"

            cur.executescript(
                f"""
                ALTER TABLE "{table_name}"
                ADD COLUMN "{temp_column_name}" "{new_column_type}"
                {default_exp}
                {not_null_exp};

                UPDATE "{table_name}"
                SET "{temp_column_name}" = "{column_name}";
                
                ALTER TABLE "{table_name}"
                DROP COLUMN "{column_name}";
                
                ALTER TABLE "{table_name}"
                RENAME COLUMN "{temp_column_name}" TO "{new_column_name}"
            """
            )
        elif "name" in changes:
            new_column_name = changes["name"]
            new_column_type = column.type
            cur.execute(
                f"""
                ALTER TABLE "{table_name}"
                RENAME COLUMN "{column_name}" TO "{new_column_name}"
            """
            )
        else:
            raise Exception("Nothing changed")

        return Column(
            id=column.id,
            name=changes.get("name", column.name),
            type=changes.get("type", column.type),
            not_null=changes.get("not_null", column.not_null),
            default=changes.get("default", column.default),
            primary_key=changes.get("primary_key", column.primary_key),
        )

    def delete_column(self, table_name: str, column_name: str):
        cur = self.connect("tuples").cursor()

        cur.execute(
            f"""
            ALTER TABLE "{table_name}"
            DROP COLUMN "{column_name}"
        """
        )

    def create_column(self, table_name: str):
        cur = self.connect("tuples").cursor()

        column_name = f"column_{random_id()}"
        column_type = "TEXT"

        cur.execute(
            f"""
            ALTER TABLE "{table_name}"
            ADD COLUMN "{column_name}" "{column_type}"
        """
        )

        return get_column(cur, table_name, column_name)

    def select(
        self,
        table_name: str,
        where: typing.Optional[str] = None,
        columns: typing.List[str] = ["*"],
        params: typing.Dict[str, typing.Any] = {},
    ) -> typing.List[typing.Dict[str, typing.Any]]:
        with self.connect() as conn:
            where_exp, list_params = transform_expression(where, params)
            rows_exp = ", ".join(columns)
            query = f'SELECT {rows_exp} FROM "{table_name}" {where_exp}'
            return conn.execute(query, list_params).fetchall()

    def insert(
        self, table_name: str, values: typing.Dict[str, typing.Any] = {}
    ) -> typing.Dict[str, typing.Any]:
        with self.connect() as conn:
            if len(values) == 0:
                query = f'INSERT INTO "{table_name}" DEFAULT VALUES RETURNING *'
                result = conn.execute(query)
            else:
                params = [value for _, value in values.items()]
                keys = ", ".join([key for key, _ in values.items()])
                values_exp = ", ".join(["?" for _, _ in values.items()])
                query = f'INSERT INTO "{table_name}" ({keys}) VALUES ({values_exp}) RETURNING *'
                result = conn.execute(query, params).fetchone()

            return result

    def update(
        self,
        table_name: str,
        where: str,
        set: typing.Dict[str, typing.Any] = {},
        params: typing.Dict[str, typing.Any] = {},
    ) -> None:
        with self.connect() as conn:
            set_exp = ", ".join([f"{key} = ?" for key, value in set.items()])
            where_exp, list_params = transform_expression(where, params)
            list_params = [value for _, value in set.items()] + list_params
            query = f'UPDATE "{table_name}" SET {set_exp} {where_exp} RETURNING *'
            result = conn.execute(query, list_params).fetchone()

            return result

    def delete(
        self, table_name: str, where: str, params: typing.Dict[str, typing.Any] = {}
    ):
        with self.connect() as conn:
            where_exp, list_params = transform_expression(where, params)
            query = f'DELETE FROM "{table_name}" {where_exp} RETURNING *'
            result = conn.execute(query, list_params).fetchone()

            return dict(result=result)
