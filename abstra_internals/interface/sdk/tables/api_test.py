import unittest
from dataclasses import dataclass
from datetime import datetime
from abstra.tables import (
    insert,
)
from .api import (
    _make_select_query,
    _make_insert_query,
    _make_update_query,
    _make_delete_query,
    _make_row_dict,
)
import abstra_internals.repositories as repositories
from abstra_internals.interface.sdk.forms.page_response import PageResponse
from abstra_internals.interface.sdk.forms.step import StepsResponse


@dataclass
class MockResponse:
    ok: bool

    def json(self):
        return dict(
            errors=None,
            returns=dict(
                result=[{"bar": "baz", "car": "cat"}],
                fields=[{"name": "bar"}, {"name": "car"}],
            ),
        )

    def __getitem__(self, key):
        return self.json()[key]


class MockTablesApi:
    def execute(self, query, params):
        return MockResponse(ok=True)


repositories.tables_api_http_client = MockTablesApi()


class TestTables(unittest.TestCase):
    def test_select(self):
        query, params = _make_select_query(table="foo")
        self.assertEqual(query, 'SELECT * FROM "foo"')
        self.assertEqual(params, [])

    def test_select_all_params(self):
        query, params = _make_select_query(
            table="foo", where={"bar": "baz"}, order_by="bar", limit=10, offset=0
        )
        self.assertEqual(
            query,
            'SELECT * FROM "foo" WHERE "bar"=$1 ORDER BY "bar" ASC LIMIT 10 OFFSET 0',
        )
        self.assertEqual(params, ["baz"])

    def test_select_and(self):
        query, params = _make_select_query(
            table="fruits", where={"tangerina": 123456, "melancia": 888}
        )
        self.assertEqual(
            query,
            'SELECT * FROM "fruits" WHERE "tangerina"=$1 AND "melancia"=$2',
        )
        self.assertEqual(params, [123456, 888])

    def test_select_order_desc(self):
        query, params = _make_select_query(
            table="fruits", order_by="tangerina", order_desc=True
        )
        self.assertEqual(
            query,
            'SELECT * FROM "fruits" ORDER BY "tangerina" DESC',
        )
        self.assertEqual(params, [])

    def test_select_crashes_with_non_numeric_limit(self):
        with self.assertRaises(Exception):
            _make_select_query(table="foo", limit="a")  # type: ignore

    def test_select_crashes_with_non_numeric_offset(self):
        with self.assertRaises(Exception):
            _make_select_query(table="foo", offset="a")  # type: ignore

    def test_insert(self):
        query, params = _make_insert_query(table="foo", values={"bar": "baz"})
        self.assertEqual(query, 'INSERT INTO "foo" ("bar") VALUES ($1) RETURNING *')
        self.assertEqual(params, ["baz"])

    def test_insert_datetime(self):
        query, params = _make_insert_query(
            table="foo", values={"bar": datetime(2001, 1, 1, 10, 10, 10, 0)}
        )
        self.assertEqual(query, 'INSERT INTO "foo" ("bar") VALUES ($1) RETURNING *')
        self.assertEqual(params, ["2001-01-01T10:10:10"])

    def test_insert_dict(self):
        query, params = _make_insert_query(
            table="foo", values={"bar": {"bar": 1, "foo": "expected"}}
        )
        self.assertEqual(query, 'INSERT INTO "foo" ("bar") VALUES ($1) RETURNING *')
        self.assertEqual(params, ["""{"bar": 1, "foo": "expected"}"""])

    def test_insert_list(self):
        query, params = _make_insert_query(table="foo", values={"bar": [1, 2, 3, 4]})
        self.assertEqual(query, 'INSERT INTO "foo" ("bar") VALUES ($1) RETURNING *')
        self.assertEqual(params, ["""[1, 2, 3, 4]"""])

    def test_insert_set(self):
        query, params = _make_insert_query(
            table="foo", values={"bar": set([1, 2, 3, 4])}
        )
        self.assertEqual(query, 'INSERT INTO "foo" ("bar") VALUES ($1) RETURNING *')
        self.assertEqual(params, ["""[1, 2, 3, 4]"""])

    def test_insert_tuples(self):
        query, params = _make_insert_query(table="foo", values={"bar": (1, 2, 3, 4)})
        self.assertEqual(query, 'INSERT INTO "foo" ("bar") VALUES ($1) RETURNING *')
        self.assertEqual(params, ["""[1, 2, 3, 4]"""])

    def test_insert_default_values(self):
        query, params = _make_insert_query(table="foo", values={})
        self.assertEqual(query, 'INSERT INTO "foo" DEFAULT VALUES RETURNING *')
        self.assertEqual(params, [])

    def test_insert_returning(self):
        row = insert(table="foo", values={"bar": "baz", "car": "cat"})
        self.assertEqual(row, {"bar": "baz", "car": "cat"})

    def test_update(self):
        query, params = _make_update_query(
            table="foo", set={"bar": "baz"}, where={"id": 1}
        )
        self.assertEqual(query, 'UPDATE "foo" SET "bar"=$1 WHERE "id"=$2 RETURNING *')
        self.assertEqual(params, ["baz", 1])
        self.assertEqual(params, ["baz", 1])

    def test_update_two_items(self):
        query, params = _make_update_query(
            table="foo", set={"bar": "baz", "car": "cat"}, where={"id": 1}
        )
        self.assertEqual(
            query, 'UPDATE "foo" SET "bar"=$1, "car"=$2 WHERE "id"=$3 RETURNING *'
        )
        self.assertEqual(params, ["baz", "cat", 1])

    def test_delete(self):
        query, params = _make_delete_query(table="foo", values={"id": 1})
        self.assertEqual(query, 'DELETE FROM "foo" WHERE "id"=$1 RETURNING *')
        self.assertEqual(params, [1])

    def test_delete_and(self):
        query, params = _make_delete_query(
            table="fruits", values={"tangerina": 123456, "melancia": 888}
        )
        self.assertEqual(
            query,
            'DELETE FROM "fruits" WHERE "tangerina"=$1 AND "melancia"=$2 RETURNING *',
        )
        self.assertEqual(params, [123456, 888])

    def test_escaping_table_name(self):
        query, params = _make_delete_query(
            table='table "with" quotes', values={'"tangerina"': "123456"}
        )
        self.assertEqual(
            query,
            'DELETE FROM "table ""with"" quotes" WHERE """tangerina"""=$1 RETURNING *',
        )

    # security tests
    def test_delete_sql_injection(self):
        query, params1 = _make_delete_query(
            table="fruits", values={"tangerina": "12345678; DROP TABLE fruits"}
        )
        query2, params2 = _make_delete_query(
            table="fruits", values={"tangerina": "123456"}
        )
        self.assertEqual(query, query2)


class TestMakeRowDict(unittest.TestCase):
    def test_dict(self):
        row = _make_row_dict({"bar": "baz", "car": "cat"})
        self.assertEqual(row, {"bar": "baz", "car": "cat"})

    def test_dataclass(self):
        @dataclass
        class Foo:
            bar: str
            car: str

        row = _make_row_dict(Foo(bar="baz", car="cat"))
        self.assertEqual(row, {"bar": "baz", "car": "cat"})

    def test_page_response(self):
        row = _make_row_dict(PageResponse({"bar": "baz", "car": "cat"}, None))
        self.assertEqual(row, {"bar": "baz", "car": "cat"})

    def test_step_response(self):
        pr1 = PageResponse({"a": "1", "b": 2}, None)
        pr2 = PageResponse({"b": "3", "c": 4}, None)
        steps_response = StepsResponse()
        steps_response.append(pr1)
        steps_response.append(pr2)
        row = _make_row_dict(steps_response)
        self.assertEqual(row, {"a": "1", "b": "3", "c": 4})
