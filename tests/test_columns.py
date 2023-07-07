import os
import tempfile
from uuid import uuid4 as uuid
from pathlib import Path

from abstra.tables import get_db


class TestColumns:
    def test_update_not_null(self):
        # setup
        base_path = Path(tempfile.gettempdir(), f"{uuid()}")
        os.mkdir(base_path)
        os.environ["ABSTRA_DATABASE_URL"] = f"{base_path}/db.sqlite3"
        db = get_db()
        table = db.create_table()
        old_columns = db.get_columns(table.name)
        col = db.create_column(table.name)

        # experiment
        db.update_column(table.name, col.name, {"not_null": True})

        # result
        col2 = db.get_column(table.name, col.name)
        new_columns = db.get_columns(table.name)
        assert len(old_columns) + 1 == len(new_columns)
        assert col2.not_null == True
