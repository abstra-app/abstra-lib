import io
import unittest
from dataclasses import dataclass
from datetime import datetime
from typing import List
from uuid import UUID

import requests

from abstra.tables import insert
from abstra_internals.controllers.execution_client_form import FormClient
from abstra_internals.controllers.execution_store import ExecutionStore
from abstra_internals.entities.execution import Execution, RequestContext
from abstra_internals.entities.forms.page_response import PageResponse
from abstra_internals.interface.sdk.forms.step import StepsResponse
from abstra_internals.interface.sdk.tables.api import (
    _make_delete_query,
    _make_insert_multiple_query,
    _make_insert_query,
    _make_row_dict,
    _make_select_query,
    _make_update_query,
    serialize,
)
from abstra_internals.repositories.tables import TablesApiHttpClient
from tests.fixtures import BaseTest


class MockTablesApi(TablesApiHttpClient):
    def __init__(self):
        super().__init__("FAKE_URL")

    def execute(self, query: str, params: List) -> requests.Response:
        resp = requests.Response()
        resp.status_code = 200
        resp.raw = io.BytesIO(
            b'{"errors": null, "returns": {"result": [{"bar": "baz", "car": "cat"}], "fields": [{"name": "bar"}, {"name": "car"}]}}'
        )

        return resp


class TestTables(BaseTest):
    def setUp(self) -> None:
        super().setUp()
        self.repositories.tables = MockTablesApi()
        request_context = RequestContext(
            body="", query_params={}, headers={}, method="GET"
        )
        self.client = FormClient(
            request_context=request_context,
            production_mode=False,
            ws=None,  # type: ignore
        )
        execution = Execution.create(
            request_context=None,
            stage_run_id="mock_sr_id",
            stage_id="mock_stage_id",
        )
        ExecutionStore.set(execution, self.client, self.repositories)

    def tearDown(self) -> None:
        ExecutionStore.clear()
        super().tearDown()

    def test_select(self):
        query, params = _make_select_query(table="foo")
        self.assertEqual(query, 'SELECT * FROM "foo"')
        self.assertEqual(params, [])

    def test_select_with_none(self):
        query, params = _make_select_query(table="foo", where={"bar": None, "baz": 1})
        self.assertEqual(query, 'SELECT * FROM "foo" WHERE "bar" IS NULL AND "baz"=$1')
        self.assertEqual(params, [1])

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

    def test_insert_multiple(self):
        query, params = _make_insert_multiple_query(
            table="foo", values=[{"bar": "baz"}, {"bar": "cat"}]
        )
        self.assertEqual(
            query, 'INSERT INTO "foo" ("bar") VALUES ($1), ($2) RETURNING *'
        )
        self.assertEqual(params, ["baz", "cat"])

    def test_insert_multiple_with_empty_values(self):
        query, params = _make_insert_multiple_query(table="foo", values=[])
        self.assertEqual(query, 'INSERT INTO "foo" DEFAULT VALUES RETURNING *')
        self.assertEqual(params, [])

    def test_insert_multiple_with_missing_values(self):
        query, params = _make_insert_multiple_query(
            table="foo", values=[{"bar": "baz", "foo": 1}, {"foo": 2}]
        )
        self.assertEqual(
            query,
            'INSERT INTO "foo" ("bar", "foo") VALUES ($1, $2), (DEFAULT, $3) RETURNING *',
        )
        self.assertEqual(params, ["baz", 1, 2])

    def test_insert_multiple_with_missing_and_nulls(self):
        query, params = _make_insert_multiple_query(
            table="foo", values=[{"bar": None, "foo": 1}, {"bar": "baz"}]
        )
        self.assertEqual(
            query,
            'INSERT INTO "foo" ("bar", "foo") VALUES ($1, $2), ($3, DEFAULT) RETURNING *',
        )
        self.assertEqual(params, [None, 1, "baz"])

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

    def test_update_with_none_in_where(self):
        query, params = _make_update_query(
            table="foo", set={"a": "b"}, where={"c": None, "d": 1}
        )
        self.assertEqual(
            query, 'UPDATE "foo" SET "a"=$1 WHERE "c" IS NULL AND "d"=$2 RETURNING *'
        )
        self.assertEqual(params, ["b", 1])

    def test_update_with_multiple_where_conditions(self):
        query, params = _make_update_query(
            table="foo", set={"bar": "baz"}, where={"id": 1, "name": "foo"}
        )
        self.assertEqual(
            query, 'UPDATE "foo" SET "bar"=$1 WHERE "id"=$2 AND "name"=$3 RETURNING *'
        )
        self.assertEqual(params, ["baz", 1, "foo"])

    def test_update_two_items(self):
        query, params = _make_update_query(
            table="foo", set={"bar": "baz", "car": "cat"}, where={"id": 1}
        )
        self.assertEqual(
            query, 'UPDATE "foo" SET "bar"=$1, "car"=$2 WHERE "id"=$3 RETURNING *'
        )
        self.assertEqual(params, ["baz", "cat", 1])

    def test_update_without_where(self):
        with self.assertRaises(Exception):
            _make_update_query(table="foo", set={"bar": "baz"}, where={})

    def test_update_without_set(self):
        with self.assertRaises(Exception):
            _make_update_query(table="foo", set={}, where={"id": 1})

    def test_delete(self):
        query, params = _make_delete_query(table="foo", values={"id": 1})
        self.assertEqual(query, 'DELETE FROM "foo" WHERE "id"=$1 RETURNING *')
        self.assertEqual(params, [1])

    def test_delete_with_none(self):
        query, params = _make_delete_query(table="foo", values={"bar": None, "baz": 1})
        self.assertEqual(
            query, 'DELETE FROM "foo" WHERE "bar" IS NULL AND "baz"=$1 RETURNING *'
        )
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

    def test_delete_without_values(self):
        with self.assertRaises(Exception):
            _make_delete_query(table="foo", values={})


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

    def test_none(self):
        row = _make_row_dict(None)
        self.assertEqual(row, {})


class TestSerialize(unittest.TestCase):
    def test_datetime(self):
        value = datetime(2001, 1, 1, 10, 10, 10, 0)
        self.assertEqual(serialize(value), "2001-01-01T10:10:10")

    def test_set(self):
        value = set([1, 2, 3, 4])
        self.assertEqual(serialize(value), "[1, 2, 3, 4]")

    def test_list(self):
        value = [1, 2, 3, 4]
        self.assertEqual(serialize(value), "[1, 2, 3, 4]")

    def test_dict(self):
        value = {"bar": 1, "foo": "expected"}
        self.assertEqual(serialize(value), """{"bar": 1, "foo": "expected"}""")

    def test_tuple(self):
        value = (1, 2, 3, 4)
        self.assertEqual(serialize(value), "[1, 2, 3, 4]")

    def test_uuid(self):
        value = UUID("12345678-1234-5678-1234-567812345678")
        self.assertEqual(serialize(value), "12345678-1234-5678-1234-567812345678")
