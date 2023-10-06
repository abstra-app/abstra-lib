import unittest
from abstra.tables.api import _make_insert_query, _make_delete_query, _make_update_query


class TestTables(unittest.TestCase):
    def test_insert(self):
        query, params = _make_insert_query(table="foo", values={"bar": "baz"})
        self.assertEqual(query, 'INSERT INTO "foo" ("bar") VALUES ($1)')
        self.assertEqual(params, ["baz"])

    def test_update(self):
        query, params = _make_update_query(
            table="foo", set={"bar": "baz"}, where={"id": 1}
        )
        self.assertEqual(query, 'UPDATE "foo" SET "bar"=$1 WHERE "id"=$2')
        self.assertEqual(params, ["baz", 1])
        self.assertEqual(params, ["baz", 1])

    def test_update_two_items(self):
        query, params = _make_update_query(
            table="foo", set={"bar": "baz", "car": "cat"}, where={"id": 1}
        )
        self.assertEqual(query, 'UPDATE "foo" SET "bar"=$1, "car"=$2 WHERE "id"=$3')
        self.assertEqual(params, ["baz", "cat", 1])

    def test_delete(self):
        query, params = _make_delete_query(table="foo", values={"id": 1})
        self.assertEqual(query, 'DELETE FROM "foo" WHERE "id"=$1')
        self.assertEqual(params, [1])

    def test_delete_and(self):
        query, params = _make_delete_query(
            table="fruits", values={"tangerina": 123456, "melancia": 888}
        )
        self.assertEqual(
            query, 'DELETE FROM "fruits" WHERE "tangerina"=$1 AND "melancia"=$2'
        )
        self.assertEqual(params, [123456, 888])

    def test_escaping_table_name(self):
        query, params = _make_delete_query(
            table='table "with" quotes', values={'"tangerina"': "123456"}
        )
        self.assertEqual(
            query, 'DELETE FROM "table ""with"" quotes" WHERE """tangerina"""=$1'
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
