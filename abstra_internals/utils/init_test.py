from datetime import date
from unittest import TestCase

from abstra_internals.utils import (
    check_is_url,
    deserialize,
    is_serializable,
    nested_get,
    serialize,
)


class SerializeTest(TestCase):
    def test_serialize(self):
        obj = {"a": 1}
        result = serialize(obj)
        self.assertEqual(result, '{"a": 1}')

    def test_serialize_nan(self):
        obj = {"a": float("nan")}
        result = serialize(obj)
        self.assertEqual(result, '{"a": null}')

    def test_deserialize(self):
        obj = '{"a": 1}'
        result = deserialize(obj)
        self.assertEqual(result, {"a": 1})

    def test_is_serializable(self):
        obj = {"a": 1}
        result = is_serializable(obj)
        self.assertTrue(result)

    def test_is_not_serializable(self):
        obj = {"a": date.today()}
        result = is_serializable(obj)
        self.assertFalse(result)


class CheckIsUrlTest(TestCase):
    def test_is_url_https(self):
        url = "https://www.google.com"
        result = check_is_url(url)
        self.assertTrue(result)

    def test_is_url_http(self):
        url = "http://www.google.com"
        result = check_is_url(url)
        self.assertTrue(result)

    def test_is_not_url(self):
        url = "not a url"
        result = check_is_url(url)
        self.assertFalse(result)


class NestedGetTest(TestCase):
    def test_nested_get(self):
        obj = {"a": {"b": 1}}
        result = nested_get(obj, "a.b")
        self.assertEqual(result, 1)

    def test_nested_get_default_none(self):
        obj = {"a": {"b": 1}}
        result = nested_get(obj, "a.c")
        self.assertIsNone(result)
