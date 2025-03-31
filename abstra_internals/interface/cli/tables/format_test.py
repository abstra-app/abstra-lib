from unittest import TestCase
from unittest.mock import ANY

from tests.fixtures import clear_dir, init_dir

from .format import tables_snapshot_from_csv, tables_snapshot_to_csv


class TestFromCsv(TestCase):
    def setUp(self) -> None:
        self.root = init_dir()

    def tearDown(self) -> None:
        clear_dir(self.root)

    def test_from_csv_rn(self):
        csv_path = self.root / "test.csv"
        lines = (
            "name,age,city\r\n"
            "Alice,30,New York\r\n"
            "Bob,25,Los Angeles\r\n"
            "Charlie,35,Chicago\r\n"
            "David,40,Houston\r\n"
        )
        csv_path.write_text(lines, encoding="utf-8")
        restore_request = tables_snapshot_from_csv(csv_path)
        self.assertEqual(
            restore_request.to_dict(),
            dict(
                tables=[
                    dict(
                        id=ANY,
                        name="test",
                        data=[
                            dict(name="Alice", age="30", city="New York"),
                            dict(name="Bob", age="25", city="Los Angeles"),
                            dict(name="Charlie", age="35", city="Chicago"),
                            dict(name="David", age="40", city="Houston"),
                        ],
                        columns=[
                            dict(
                                id=ANY,
                                primaryKey=False,
                                name="name",
                                type="text",
                                unique=False,
                                nullable=False,
                            ),
                            dict(
                                id=ANY,
                                primaryKey=False,
                                name="age",
                                type="text",
                                unique=False,
                                nullable=False,
                            ),
                            dict(
                                id=ANY,
                                primaryKey=False,
                                name="city",
                                type="text",
                                unique=False,
                                nullable=False,
                            ),
                        ],
                    )
                ]
            ),
        )

    def test_from_csv_n(self):
        csv_path = self.root / "test.csv"
        lines = (
            "name,age,city\n"
            "Alice,30,New York\n"
            "Bob,25,Los Angeles\n"
            "Charlie,35,Chicago\n"
            "David,40,Houston\n"
        )
        csv_path.write_text(lines, encoding="utf-8")
        restore_request = tables_snapshot_from_csv(csv_path)
        self.assertEqual(
            restore_request.to_dict(),
            dict(
                tables=[
                    dict(
                        id=ANY,
                        name="test",
                        data=[
                            dict(name="Alice", age="30", city="New York"),
                            dict(name="Bob", age="25", city="Los Angeles"),
                            dict(name="Charlie", age="35", city="Chicago"),
                            dict(name="David", age="40", city="Houston"),
                        ],
                        columns=[
                            dict(
                                id=ANY,
                                primaryKey=False,
                                name="name",
                                type="text",
                                unique=False,
                                nullable=False,
                            ),
                            dict(
                                id=ANY,
                                primaryKey=False,
                                name="age",
                                type="text",
                                unique=False,
                                nullable=False,
                            ),
                            dict(
                                id=ANY,
                                primaryKey=False,
                                name="city",
                                type="text",
                                unique=False,
                                nullable=False,
                            ),
                        ],
                    )
                ]
            ),
        )

    def test_from_csv_with_empty_lines(self):
        csv_path = self.root / "test.csv"
        lines = "name,age,city"
        csv_path.write_text(lines, encoding="utf-8")
        restore_request = tables_snapshot_from_csv(csv_path)
        self.assertEqual(
            restore_request.to_dict(),
            dict(
                tables=[
                    dict(
                        id=ANY,
                        name="test",
                        data=[],
                        columns=[
                            dict(
                                id=ANY,
                                primaryKey=False,
                                name="name",
                                type="text",
                                unique=False,
                                nullable=False,
                            ),
                            dict(
                                id=ANY,
                                primaryKey=False,
                                name="age",
                                type="text",
                                unique=False,
                                nullable=False,
                            ),
                            dict(
                                id=ANY,
                                primaryKey=False,
                                name="city",
                                type="text",
                                unique=False,
                                nullable=False,
                            ),
                        ],
                    )
                ]
            ),
        )

    def test_from_csv_detect_delimiter(self):
        self.maxDiff = None
        csv_path = self.root / "test.csv"
        lines = (
            "name;age;city\n"
            "Alice;30;New York\n"
            "Bob;25;Los Angeles\n"
            "Charlie;35;Chicago\n"
            "David;40;Houston\n"
        )
        csv_path.write_text(lines, encoding="utf-8")
        restore_request = tables_snapshot_from_csv(csv_path)
        self.assertEqual(
            restore_request.to_dict(),
            dict(
                tables=[
                    dict(
                        id=ANY,
                        name="test",
                        data=[
                            dict(name="Alice", age="30", city="New York"),
                            dict(name="Bob", age="25", city="Los Angeles"),
                            dict(name="Charlie", age="35", city="Chicago"),
                            dict(name="David", age="40", city="Houston"),
                        ],
                        columns=[
                            dict(
                                id=ANY,
                                primaryKey=False,
                                name="name",
                                type="text",
                                unique=False,
                                nullable=False,
                            ),
                            dict(
                                id=ANY,
                                primaryKey=False,
                                name="age",
                                type="text",
                                unique=False,
                                nullable=False,
                            ),
                            dict(
                                id=ANY,
                                primaryKey=False,
                                name="city",
                                type="text",
                                unique=False,
                                nullable=False,
                            ),
                        ],
                    )
                ]
            ),
        )

    def test_to_csv(self):
        csv_path = self.root / "test.csv"
        lines = (
            "name,age,city\r\n"
            "Alice,30,New York\r\n"
            "Bob,25,Los Angeles\r\n"
            "Charlie,35,Chicago\r\n"
            "David,40,Houston\r\n"
        )
        csv_path.write_text(lines, encoding="utf-8")
        restore_request = tables_snapshot_from_csv(csv_path)
        table_name, csv_content = tables_snapshot_to_csv(restore_request)
        self.assertEqual(table_name, "test")
        self.assertEqual(csv_content, lines)
