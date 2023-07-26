import os, typing
from .sqlite import SqliteDB, TableNotFound  # expoted
from .legacy import *  # deprecated


def get_db():
    db_url = os.getenv("ABSTRA_DATABASE_URL")
    if db_url.startswith("postgres://"):
        raise NotImplementedError("Postgres is not supported yet")
    elif db_url.startswith("mysql://"):
        raise NotImplementedError("MySQL is not supported yet")
    else:
        return SqliteDB(db_url)


def get_table(table_name: str):
    return get_db().get_table(table_name)
