from .sqlite import *
from .legacy import *  # deprecated
import os


class Table:
    def __init__(self, db: SqliteDB, table_name: str) -> None:
        self.db = db
        self.table_name = table_name

    def select(
        self, where: Optional[str] = None, columns: list[str] = ["*"], params={}
    ) -> list:
        return self.db.select(self.table_name, where, columns, params)

    def insert(self, values: dict[str, Any] = {}) -> None:
        return self.db.insert(self.table_name, values)

    def update(self, where: str, set: dict[str, Any], params) -> None:
        return self.db.update(self.table_name, where, set, params)

    def delete(self, where: str, params) -> None:
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
