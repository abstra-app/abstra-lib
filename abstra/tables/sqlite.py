import re, typing, sqlite3


class TableNotFound(Exception):
    def __init__(self, table_name: str) -> None:
        self.table_name = table_name

    def __str__(self) -> str:
        return f"Table '{self.table_name}' does not exist"


class MissingColumns(Exception):
    def __init__(self, missing_columns: typing.List[str]) -> None:
        self.missing_columns = missing_columns

    def __str__(self) -> str:
        return f"Missing columns: {self.missing_columns}"


class InvalidTableJoin(Exception):
    def __init__(self, table) -> None:
        self.table = table

    def __str__(self) -> str:
        return f"Invalid table argument for join: {self.table}"


class SqliteColumn:
    table: "SqliteTable"
    id: int
    name: str
    type: str
    not_null: bool
    primary_key: bool
    default: typing.Optional[str] = None

    def __init__(
        self,
        table: "SqliteTable",
        id: int,
        name: str,
        type: str,
        not_null: bool,
        primary_key: bool,
        default: typing.Optional[str] = None,
    ) -> None:
        self.table = table
        self.id = id
        self.name = name
        self.type = type
        self.not_null = not_null
        self.primary_key = primary_key
        self.default = default

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


def random_id(length=10):
    import random, string

    return "".join(random.choices(string.ascii_letters + string.digits, k=length))


def dict_factory(cursor, row):
    d = {}
    for idx, col in enumerate(cursor.description):
        d[col[0]] = row[idx]
    return d


def transform_expression(
    exp: typing.Optional[str] = "",
    dict_params: typing.Dict[str, typing.Any] = {},
    type: str = "WHERE",
):
    param_key = r":\w+"
    list_params = []
    if exp:
        for match in re.findall(param_key, exp):
            list_params.append(dict_params[match[1:]])
            exp = exp.replace(match, "?")
        return f"{type} {exp}", list_params
    else:
        return "", list_params


class SqliteDB:
    db_path: str

    def __init__(self, db_path) -> None:
        self.db_path = str(db_path)

    def connect(self):
        is_uri = self.db_path.startswith("file://")
        conn = sqlite3.connect(self.db_path, uri=is_uri)
        return conn

    def create_table(self, table_name=f"table-{random_id()}", columns=[]):
        with self.connect() as conn:
            conn.execute(
                f"""
                CREATE TABLE "{table_name}" (
                    id INTEGER PRIMARY KEY NOT NULL,
                    created_at INTEGER DEFAULT CURRENT_TIMESTAMP,
                    updated_at INTEGER DEFAULT CURRENT_TIMESTAMP
                );
            """
            )

            for column in columns:
                self.create_column(table_name, column.get("name"), column.get("type"))

            return self.get_table(table_name)

    def update_table(self, name: str, changes: typing.Dict[str, str]):
        with self.connect() as conn:
            if "name" in changes:
                old_name = name
                new_name = changes["name"]

                conn.execute(
                    f"""
                    ALTER TABLE "{old_name}"
                    RENAME TO "{new_name}"
                """
                )

            return self.get_table(new_name)

    def get_table(self, name: str):
        with self.connect() as conn:
            [count] = conn.execute(
                f"SELECT count(*) FROM sqlite_master WHERE name=?", [name]
            ).fetchone()

            if count == 0:
                raise TableNotFound(name)
            else:
                return SqliteTable(self, name)

    def get_tables(self):
        with self.connect() as cur:
            rows = cur.execute(
                """
                SELECT name
                FROM sqlite_schema
                WHERE type='table'
                ORDER BY name
            """
            ).fetchall()

            return [SqliteTable(db=self, name=name) for (name,) in rows]

    def delete_table(self, name: str):
        cur = self.connect().cursor()
        cur.execute(
            f"""
            DROP TABLE "{name}"
        """
        )

    def duplicate_table(self, name: str):
        cur = self.connect().cursor()
        new_name = f"{name}-{random_id()}"
        cur.execute(
            f"""
            CREATE TABLE "{new_name}" AS
            SELECT * FROM "{name}"
        """
        )
        return SqliteTable(db=self, name=new_name)

    def db_types(self):
        return [
            {"type": "NULL", "input_spec": {"type": "hidden"}},
            {"type": "INTEGER", "input_spec": {"type": "number"}},
            {"type": "REAL", "input_spec": {"type": "number"}},
            {"type": "TEXT", "input_spec": {"type": "text"}},
            {"type": "BOOL", "input_spec": {"type": "checkbox"}},
            {"type": "BLOB", "input_spec": {"type": "file"}},
        ]

    def get_column(self, table_name: str, column_name: str) -> SqliteColumn:
        return self.get_table(table_name).get_column(column_name)

    def get_columns(self, table_name: str):
        cur = self.connect().cursor()
        rows = cur.execute(
            f"""
            pragma table_info("{table_name}")
        """
        ).fetchall()

        return [
            SqliteColumn(
                table=self.get_table(table_name),
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
        with self.connect() as conn:
            column = self.get_column(table_name, column_name)

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
                    bias_exp = f"DEFAULT {new_column_default}"
                else:
                    bias_exp = ""

                uuid = random_id()
                temp_column_name = f"{new_column_name}_{uuid}"

                conn.executescript(
                    f"""
                    ALTER TABLE "{table_name}"
                    ADD COLUMN "{temp_column_name}" "{new_column_type}"
                    {bias_exp}
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
                conn.execute(
                    f"""
                    ALTER TABLE "{table_name}"
                    RENAME COLUMN "{column_name}" TO "{new_column_name}"
                """
                )
            else:
                raise Exception("Nothing changed")

            return self.get_column(table_name, new_column_name)

    def delete_column(self, table_name: str, column_name: str):
        cur = self.connect().cursor()

        cur.execute(
            f"""
            ALTER TABLE "{table_name}"
            DROP COLUMN "{column_name}"
        """
        )

    def create_column(
        self, table_name: str, column_name=f"column_{random_id()}", column_type=None
    ):
        cur = self.connect().cursor()

        if column_type is None:
            column_type = "TEXT"
            reference_exp = ""
        elif type(column_type) == str:
            reference_exp = ""
        elif type(column_type) == SqliteColumn:
            reference_exp = """
                REFERENCES "{table_name}" ("{column_name}")
            """
            column_type = column_type.type
        else:
            raise Exception(f"Invalid column type: {column_type}")

        cur.execute(
            f"""
            ALTER TABLE "{table_name}"
            ADD COLUMN "{column_name}" "{column_type}"
            {reference_exp}
        """
        )

        return self.get_column(table_name, column_name)


class SqliteTable:
    name: str
    bias: typing.Dict

    def __init__(
        self,
        db: SqliteDB,
        name: str,
        bias: typing.Dict = {},
    ) -> None:
        self.db = db
        self.name = name
        self.bias = bias

    @property
    def editor_dto(self):
        return {"name": self.name, "columns": [c.editor_dto for c in self.columns]}

    @property
    def columns(self):
        with self.db.connect() as conn:
            rows = conn.execute(
                f"""
                pragma table_info("{self.name}")
            """
            ).fetchall()

            if len(rows) == 0:
                raise TableNotFound(self.name)

            return [
                SqliteColumn(
                    table=self,
                    id=id,
                    name=name,
                    type=type,
                    not_null=not_null == 1,
                    default=default,
                    primary_key=primary_key == 1,
                )
                for (id, name, type, not_null, default, primary_key) in rows
            ]

    def add_bias(self, where_exp: str, where_params: typing.List[str]):
        if self.bias and len(self.bias) > 0:
            bias_exp = " AND ".join([f'"{col}" = ?' for col in self.bias.keys()])
            bias_params = list(self.bias.values())
            return where_exp + " AND " + bias_exp, where_params + bias_params
        else:
            return where_exp, where_params

    def get_column(self, column_name: str):
        return [c for c in self.columns if c.name == column_name][0]

    def select(
        self,
        where: typing.Optional[str] = None,
        columns: typing.Optional[typing.List[str]] = None,
        params: typing.Dict[str, typing.Any] = {},
    ) -> typing.List["SqliteRow"]:
        if not columns:
            columns = [c.name for c in self.columns]

        with self.db.connect() as conn:
            where_exp, list_params = transform_expression(where, params)
            where_exp, list_params = self.add_bias(where_exp, list_params)
            rows_exp = ", ".join(columns)
            query = f'SELECT {rows_exp} FROM "{self.name}" {where_exp}'
            rows = conn.execute(query, list_params).fetchall()
            return [SqliteRow(self, dict(zip(columns, row))) for row in rows]

    def select_one(
        self,
        where: typing.Optional[str] = None,
        columns: typing.Optional[typing.List[str]] = None,
        params: typing.Dict[str, typing.Any] = {},
    ) -> "SqliteRow":
        if not columns:
            columns = [c.name for c in self.columns]

        with self.db.connect() as conn:
            where_exp, list_params = transform_expression(where, params)
            rows_exp = ", ".join(columns)
            query = f'SELECT {rows_exp} FROM "{self.name}" {where_exp}'
            row = conn.execute(query, list_params).fetchone()
            return SqliteRow(self, dict(zip(columns, row)))

    def insert(
        self,
        values: typing.Union[
            typing.Dict[str, typing.Any], typing.List[typing.Dict[str, typing.Any]]
        ] = {},
        columns: typing.Optional[typing.List[str]] = None,
    ) -> typing.Union[typing.List["SqliteRow"], "SqliteRow"]:
        if columns is None:
            columns = [c.name for c in self.columns]

        if type(values) == dict:
            values_list = [values]
        elif type(values) == list:
            values_list = values
        else:
            raise Exception(f"Invalid values argument type: {values}")

        if len(values_list) == 0:
            return []
        elif len(values_list) > 1:
            keys = set(values_list[0].keys())
            for values_item in values_list:
                if set(values_item.keys()) != keys:
                    raise Exception("All dicts must have the same keys")

        columns_exp = ", ".join(columns)
        if len(values_list[0]) == 0:
            query = f'INSERT INTO "{self.name}" DEFAULT VALUES RETURNING {columns_exp}'
            params: typing.List[str] = []
        else:
            inserted_columns = values_list[0].keys()
            keys_exp = ", ".join(inserted_columns)
            value_exp = ", ".join("?" for _ in inserted_columns)
            values_exp = ", ".join(f"({value_exp})" for _ in values_list)
            params = []
            for value_item in values_list:
                params.extend(value_item[col] for col in inserted_columns)
            query = f'INSERT INTO "{self.name}" ({keys_exp}) VALUES {values_exp} RETURNING {columns_exp}'

        with self.db.connect() as conn:
            result = conn.execute(query, params).fetchall()

            if type(values) == dict:
                return SqliteRow(self, dict(zip(columns, result[0])))
            elif type(values) == list:
                return [SqliteRow(self, dict(zip(columns, row))) for row in result]
            else:
                raise Exception(f"Invalid values argument type: {values}")

    def update(
        self,
        where: str,
        set: typing.Dict[str, typing.Any] = {},
        columns: typing.Optional[typing.List[str]] = None,
        params: typing.Dict[str, typing.Any] = {},
    ) -> typing.List["SqliteRow"]:
        if not columns:
            columns = [c.name for c in self.columns]

        with self.db.connect() as conn:
            rows_exp = ", ".join(columns)

            set_exp = ", ".join([f"{key} = ?" for key in set.keys()])
            set_params = [value for value in set.values()]
            where_exp, where_params = transform_expression(where, params)
            where_exp, where_params = self.add_bias(where_exp, where_params)
            query = (
                f'UPDATE "{self.name}" SET {set_exp} {where_exp} RETURNING {rows_exp}'
            )
            result = conn.execute(query, set_params + where_params).fetchall()

            return [SqliteRow(self, dict(zip(columns, row))) for row in result]

    def delete(
        self,
        where: str,
        columns: typing.Optional[typing.List[str]] = None,
        params: typing.Dict[str, typing.Any] = {},
    ) -> typing.List["SqliteRow"]:
        if not columns:
            columns = [c.name for c in self.columns]
        with self.db.connect() as conn:
            rows_exp = ", ".join(columns)

            where_exp, list_params = transform_expression(where, params)
            where_exp, list_params = self.add_bias(where_exp, list_params)
            query = f'DELETE FROM "{self.name}" {where_exp} RETURNING {rows_exp}'
            result = conn.execute(query, list_params).fetchall()

            return [SqliteRow(self, dict(zip(columns, row))) for row in result]

    def join(self, table, on: str, params: typing.Dict = {}) -> "SqliteJoin":
        if type(table) == str:
            right_table = self.db.get_table(table)
        elif type(table) == SqliteTable:
            right_table = table
        else:
            raise InvalidTableJoin(table)
        return SqliteJoin(
            db=self.db,
            left_table=self,
            right_table=right_table,
            on_exp=on,
            on_params=params,
        )


class SqliteJoin:
    def __init__(
        self,
        db: SqliteDB,
        left_table: SqliteTable,
        right_table: SqliteTable,
        on_exp: str,
        on_params: typing.Dict,
    ):
        self.db = db
        self.left_table = left_table
        self.right_table = right_table
        self.on_exp = on_exp
        self.on_params = on_params

    def select(
        self,
        where: typing.Optional[str] = None,
        columns: typing.Optional[typing.List[str]] = None,
        params: typing.Dict[str, typing.Any] = {},
    ):
        if not columns:
            columns = [
                f'"{col.name}" as "{self.left_table.name}"."{col.name}"'
                for col in self.left_table.columns
            ]
            columns += [
                f'"{col.name}" as "{self.right_table.name}"."{col.name}"'
                for col in self.right_table.columns
            ]
        with self.db.connect() as conn:
            where_exp, where_params = transform_expression(where, params)
            on_exp, on_params = transform_expression(
                exp=self.on_exp, dict_params=self.on_params, type="ON"
            )
            list_params = [*on_params, *where_params]
            rows_exp = ", ".join(columns)
            query = f"""
            SELECT {rows_exp}
            FROM "{self.left_table.name}"
            JOIN "{self.right_table.name}"
            {on_exp}
            {where_exp}
            """

            rows = conn.execute(query, list_params).fetchall()

            return [SqliteRow(self, dict(zip(columns, row))) for row in rows]


class SqliteRow:
    def __init__(self, table: typing.Union[SqliteTable, SqliteJoin], data: typing.Dict):
        self.table = table
        self.initial_state = data
        self.changes: typing.Dict = {}

    def get(self, column_idx):
        if type(column_idx) == str:
            column_name = column_idx
        elif type(column_idx) == int:
            column_name = [c.name for c in self.table.columns][column_idx]
        if column_name in self.changes:
            return self.changes[column_name]
        elif column_name in self.initial_state:
            return self.initial_state[column_name]
        elif column_name in [c.name for c in self.table.columns]:
            return None
        else:
            raise Exception(f"Column '{column_name}' not found")

    def set(self, column_name: str, value: typing.Any):
        self.changes[column_name] = value

    def __getitem__(self, key):
        return self.get(key)

    def __setitem__(self, key, value):
        self.set(key, value)

    @property
    def identifier_selector(self):
        return " AND ".join(
            [f"{c.name} = :{c.name}" for c in self.table.columns if c.primary_key]
        )

    @property
    def identifier_params(self):
        return {c.name: self.get(c.name) for c in self.table.columns if c.primary_key}

    def assert_all_identifiers_found(self):
        valid = all(
            [c.name in self.initial_state for c in self.table.columns if c.primary_key]
        )
        if not valid:
            raise MissingColumns(
                [
                    c.name
                    for c in self.table.columns
                    if c.primary_key and c.name not in self.initial_state
                ]
            )

    def save(self):
        self.assert_all_identifiers_found()
        self.table.update(
            where=self.identifier_selector,
            set=self.changes,
            params=self.identifier_params,
        )
        self.initial_state.update(self.changes)
        self.changes = {}

    def delete(self):
        self.assert_all_identifiers_found()
        self.table.delete(
            where=self.identifier_selector,
            params=self.identifier_params,
        )

    @property
    def __dict__(self):
        return {**self.initial_state, **self.changes}

    def __iter__(self):
        return iter(self.__dict__.items())

    def __repr__(self) -> str:
        return f"<SqliteRow {self.__dict__}>"
