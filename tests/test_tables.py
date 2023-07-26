import tempfile
import unittest
from uuid import uuid4 as uuid
from pathlib import Path

from abstra.tables import TableNotFound, get_db, get_table

from .fixtures import init_dir, clear_dir


class TestTables(unittest.TestCase):
    def setUp(self) -> None:
        self.root = init_dir()

    def tearDown(self) -> None:
        clear_dir(self.root)

    def test_create_table(self):
        db = get_db()

        created_table = db.create_table()

        retrieved_table = db.get_table(created_table.name)

        self.assertEqual(created_table.name, retrieved_table.name)

    def test_delete_table(self):
        db = get_db()

        created_table = db.create_table()

        db.delete_table(created_table.name)

        with self.assertRaises(TableNotFound):
            db.get_table(created_table.name)

    def test_update_table_name(self):
        db = get_db()

        created_table = db.create_table()

        db.update_table(created_table.name, dict(name="new_name"))

        db.get_table("new_name")

    def test_create_column(self):
        db = get_db()

        table = db.create_table()
        col = db.create_column(table.name)
        cols = db.get_columns(table.name)

        self.assertIn(col.name, [c.name for c in cols])

        db.delete_column(table.name, col.name)

        cols = db.get_columns(table.name)
        self.assertNotIn(col.name, [c.name for c in cols])

    def test_crud_data(self):
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
            dict(
                crud_table.select(
                    columns=["name"],
                    where="email = :email",
                    params=dict(email="uzumaki.naruto@konoha.jp"),
                )[0]
            ),
            dict(name="Uzumaki Naruto"),
        )

        crud_table.update(
            where="email = :email",
            params=dict(email="uchiha.sasuke@konoha.jp"),
            set=dict(email="uchiha.sasuke@akatsuki.jp"),
        )

        self.assertEqual(
            dict(
                crud_table.select(
                    columns=["email"],
                    where="name = :name",
                    params=dict(name="Uchiha Sasuke"),
                )[0]
            ),
            dict(email="uchiha.sasuke@akatsuki.jp"),
        )

        crud_table.delete(
            where="email = :email", params=dict(email="uchiha.sasuke@akatsuki.jp")
        )

        self.assertEqual(len(crud_table.select()), 7)

        naruto = crud_table.select_one(
            where="email = :email", params=dict(email="uzumaki.naruto@konoha.jp")
        )
        naruto.delete()

        self.assertEqual(len(crud_table.select()), 6)

        sakura = crud_table.select_one(
            where="email = :email", params=dict(email="haruno.sakura@konoha.jp")
        )

        sakura["name"] = "Sakura"
        sakura.save()

        self.assertEqual(
            dict(
                crud_table.select(
                    columns=["name"],
                    where="email = :email",
                    params=dict(email="haruno.sakura@konoha.jp"),
                )[0]
            ),
            dict(name="Sakura"),
        )

    def test_join(self):
        db = get_db()

        consoles = db.create_table()
        consoles = db.update_table(consoles.name, dict(name="consoles"))
        console_name = db.create_column("consoles")
        db.update_column("consoles", console_name.name, dict(name="name"))

        games = db.create_table()
        games = db.update_table(games.name, dict(name="games"))
        game_name = db.create_column("games")
        db.update_column("games", game_name.name, dict(name="name"))
        console_id = db.create_column("games")
        db.update_column("games", console_id.name, dict(name="console_id"))

        ps4 = consoles.insert(
            dict(
                name="Play Station 4",
            )
        )
        nswitch = consoles.insert(dict(name="Nintendo Switch"))

        games.insert(
            [
                dict(name="God of War", console_id=ps4["id"]),
                dict(name="Elden Ring", console_id=ps4["id"]),
                dict(name="Metroid Dread", console_id=nswitch["id"]),
                dict(name="Zelda - Breath of the Wild", console_id=nswitch["id"]),
            ]
        )

        self.assertEqual(len(consoles.select()), 2)
        self.assertEqual(len(games.select()), 4)

        rows = consoles.join(games, on="games.console_id = consoles.id").select(
            columns=["consoles.name", "games.name"]
        )
        self.assertEqual(len(rows), 4)

        self.assertIn(
            {
                "consoles.name": "Nintendo Switch",
                "games.name": "Zelda - Breath of the Wild",
            },
            [dict(row) for row in rows],
        )

    def test_insert_defaults(self):
        db = get_db()

        table = db.create_table()

        self.assertEqual(len(table.select()), 0)
        table.insert()
        self.assertEqual(len(table.select()), 1)
        table.insert({})
        self.assertEqual(len(table.select()), 2)
        table.insert([])
        self.assertEqual(len(table.select()), 2)
