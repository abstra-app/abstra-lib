import os, typing
from .sqlite import SqliteDB, TableNotFound  # expoted
from .legacy import *  # deprecated


class Table:
    def __init__(self, db: SqliteDB, table_name: str) -> None:
        self.db = db
        self.table_name = table_name

    def select(
        self,
        where: typing.Optional[str] = None,
        columns: typing.List[str] = ["*"],
        params={},
    ) -> list:
        return self.db.select(self.table_name, where, columns, params)

    def insert(self, values: typing.Dict[str, typing.Any] = {}):
        return self.db.insert(self.table_name, values)

    def update(self, where: str, set: typing.Dict[str, typing.Any], params):
        return self.db.update(self.table_name, where, set, params)

    def delete(self, where: str, params):
        return self.db.delete(self.table_name, where, params)


def get_db():
    db_url = os.getenv("ABSTRA_DATABASE_URL")
    if db_url.startswith("postgres://"):
        raise NotImplementedError("Postgres is not supported yet")
    elif db_url.startswith("mysql://"):
        raise NotImplementedError("MySQL is not supported yet")
    else:
        return SqliteDB(db_url)


def get_table(table_name: str):
    return Table(get_db(), table_name)
