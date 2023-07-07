import tempfile
import unittest
from uuid import uuid4 as uuid
from pathlib import Path

from abstra.tables import TableNotFound, get_db, get_table

from .fixtures import init_dir


class TestTables(unittest.TestCase):
    def test_create_table(self):
        workspace_root_path = Path(tempfile.gettempdir(), f"{uuid()}")
        init_dir(workspace_root_path)

        db = get_db()

        created_table = db.create_table()

        retrieved_table = db.get_table(created_table.name)

        self.assertEqual(created_table.name, retrieved_table.name)

    def test_delete_table(self):
        workspace_root_path = Path(tempfile.gettempdir(), f"{uuid()}")
        init_dir(workspace_root_path)

        db = get_db()

        created_table = db.create_table()

        db.delete_table(created_table.name)

        with self.assertRaises(TableNotFound):
            db.get_table(created_table.name)

    def test_update_table_name(self):
        workspace_root_path = Path(tempfile.gettempdir(), f"{uuid()}")
        init_dir(workspace_root_path)

        db = get_db()

        created_table = db.create_table()

        db.update_table(created_table.name, dict(name="new_name"))

        db.get_table("new_name")

    def test_create_column(self):
        workspace_root_path = Path(tempfile.gettempdir(), f"{uuid()}")
        init_dir(workspace_root_path)

        db = get_db()

        table = db.create_table()
        col = db.create_column(table.name)
        cols = db.get_columns(table.name)

        self.assertIn(col.name, [c.name for c in cols])

        db.delete_column(table.name, col.name)

        cols = db.get_columns(table.name)
        self.assertNotIn(col.name, [c.name for c in cols])

    def test_crud_data(self):
        workspace_root_path = Path(tempfile.gettempdir(), f"{uuid()}")
        init_dir(workspace_root_path)

        db = get_db()

        table = db.create_table()

        name_column = db.create_column(table.name)
        db.update_column(table.name, name_column.name, dict(name="name"))

        email_column = db.create_column(table.name)
        db.update_column(table.name, email_column.name, dict(name="email"))

        crud_table = get_table(table.name)
        crud_table.insert(
            dict(name="Michael Scott", email="michael.scott@dundermifflin.com")
        )
        crud_table.insert(
            dict(name="Dwight Schrute", email="dwight.schrute@dundermifflin.com")
        )
        crud_table.insert(
            dict(name="Jim Halpert", email="jim.halpert@dundermifflin.com")
        )
        crud_table.insert(dict(name="Pam Beesly", email="pam.beesly@dundermifflin.com"))

        crud_table.insert(dict(name="Uzumaki Naruto", email="uzumaki.naruto@konoha.jp"))
        crud_table.insert(dict(name="Uchiha Sasuke", email="uchiha.sasuke@konoha.jp"))
        crud_table.insert(dict(name="Haruno Sakura", email="haruno.sakura@konoha.jp"))
        crud_table.insert(dict(name="Hatake Kakashi", email="hatake.kakashi@konoha.jp"))

        self.assertEqual(len(crud_table.select()), 8)
        self.assertEqual(
            len(
                crud_table.select(
                    where="email LIKE :email_like",
                    params=dict(email_like="%@dundermifflin.com"),
                )
            ),
            4,
        )
        self.assertEqual(
            crud_table.select(
                columns=["name"],
                where="email = :email",
                params=dict(email="uzumaki.naruto@konoha.jp"),
            ),
            [dict(name="Uzumaki Naruto")],
        )

        crud_table.update(
            where="email = :email",
            params=dict(email="uchiha.sasuke@konoha.jp"),
            set=dict(email="uchiha.sasuke@akatsuki.jp"),
        )

        self.assertEqual(
            crud_table.select(
                columns=["email"],
                where="name = :name",
                params=dict(name="Uchiha Sasuke"),
            ),
            [dict(email="uchiha.sasuke@akatsuki.jp")],
        )

        crud_table.delete(
            where="email = :email", params=dict(email="uchiha.sasuke@akatsuki.jp")
        )

        self.assertEqual(len(crud_table.select()), 7)
