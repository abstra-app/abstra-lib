from unittest import TestCase
from .proxy import ReadOnlyProxyDict


def getter():
    return {"a": 1, "b": 2}


class ReadOnlyProxyDictTest(TestCase):
    def test_data(self):
        proxy = ReadOnlyProxyDict(getter)

        self.assertEqual(proxy.data, {"a": 1, "b": 2})

    def test_len(self):
        proxy = ReadOnlyProxyDict(getter)

        self.assertEqual(len(proxy), 2)

    def test_getitem(self):
        proxy = ReadOnlyProxyDict(getter)

        self.assertEqual(proxy["a"], 1)

    def test_iter(self):
        proxy = ReadOnlyProxyDict(getter)

        self.assertEqual(list(iter(proxy)), ["a", "b"])

    def test_contains(self):
        proxy = ReadOnlyProxyDict(getter)

        self.assertTrue("a" in proxy)
        self.assertFalse("c" in proxy)

    def test_str(self):
        proxy = ReadOnlyProxyDict(getter)

        self.assertEqual(str(proxy), "{'a': 1, 'b': 2}")

    def test_repr(self):
        proxy = ReadOnlyProxyDict(getter)

        self.assertEqual(repr(proxy), "{'a': 1, 'b': 2}")

    def test_get(self):
        proxy = ReadOnlyProxyDict(getter)

        self.assertEqual(proxy.get("a"), 1)
        self.assertEqual(proxy.get("c"), None)
        self.assertEqual(proxy.get("c", 3), 3)

    def test_copy(self):
        proxy = ReadOnlyProxyDict(getter)

        self.assertEqual(proxy.copy(), {"a": 1, "b": 2})

    def test_keys(self):
        proxy = ReadOnlyProxyDict(getter)

        self.assertEqual(list(proxy.keys()), ["a", "b"])

    def test_values(self):
        proxy = ReadOnlyProxyDict(getter)

        self.assertEqual(list(proxy.values()), [1, 2])

    def test_items(self):
        proxy = ReadOnlyProxyDict(getter)

        self.assertEqual(list(proxy.items()), [("a", 1), ("b", 2)])

    def test_has_key(self):
        proxy = ReadOnlyProxyDict(getter)

        self.assertTrue(proxy.has_key("a"))
        self.assertFalse(proxy.has_key("c"))
