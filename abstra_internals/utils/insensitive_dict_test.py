import json
import unittest

from abstra_internals.utils.insensitive_dict import CaseInsensitiveDict


class TestCaseInsensitiveDict(unittest.TestCase):
    def setUp(self):
        self.cid = CaseInsensitiveDict()
        self.cid["Hello"] = "World"
        self.cid["Foo"] = "Bar"
        self.initial_json = '{"Hello": "World", "Foo": "Bar"}'

    def tearDown(self):
        self.cid = CaseInsensitiveDict()

    def test_set_and_get_item(self):
        self.cid["Another"] = "Value"
        self.assertEqual(self.cid["Another"], "Value")
        self.assertEqual(self.cid["another"], "Value")
        self.assertEqual(self.cid["ANOTHER"], "Value")

    def test_contains(self):
        self.assertTrue("Hello" in self.cid)
        self.assertTrue("hello" in self.cid)
        self.assertTrue("HELLO" in self.cid)
        self.assertTrue("fOO" in self.cid)
        self.assertTrue("Foo" in self.cid)
        self.assertFalse("World" in self.cid)

    def test_delete_item(self):
        del self.cid["hello"]
        self.assertFalse("Hello" in self.cid)

    def test_get_with_default(self):
        self.assertEqual(self.cid.get("NonExistent", "Default"), "Default")
        self.assertEqual(self.cid.get("Hello", "Default"), "World")

    def test_update(self):
        self.cid.update({"NewKey": "NewValue", "Foo": "NewBar"})
        self.assertEqual(self.cid["newkey"], "NewValue")
        self.assertEqual(self.cid["foo"], "NewBar")

    def test_items(self):
        items = dict(self.cid.items())
        self.assertEqual(items, {"Hello": "World", "Foo": "Bar"})

    def test_keys(self):
        keys = list(self.cid.keys())
        self.assertIn("Hello", keys)
        self.assertIn("Foo", keys)

    def test_values(self):
        values = list(self.cid.values())
        self.assertIn("World", values)
        self.assertIn("Bar", values)

    def test_preserve_original_casing(self):
        self.cid["HelloWorld"] = "Value"
        self.assertEqual(self.cid["helloworld"], "Value")
        items = dict(self.cid.items())
        self.assertIn("HelloWorld", items)
        self.assertNotIn("helloworld", items)

    def test_serialize_to_json(self):
        self.assertEqual(json.dumps(self.cid), self.initial_json)

    def test_init_with_kwargs(self):
        cid = CaseInsensitiveDict(Hello="World", Foo="Bar")
        self.assertEqual(cid["Hello"], "World")
        self.assertEqual(cid["Foo"], "Bar")

    def test_init_with_dict(self):
        cid = CaseInsensitiveDict({"Hello": "World", "Foo": "Bar"})
        self.assertEqual(cid["Hello"], "World")
        self.assertEqual(cid["Foo"], "Bar")

    def test_init_with_list(self):
        cid = CaseInsensitiveDict([("Hello", "World"), ("Foo", "Bar")])
        self.assertEqual(cid["Hello"], "World")
        self.assertEqual(cid["Foo"], "Bar")

    def test_deserialize_from_json(self):
        cid = CaseInsensitiveDict(json.loads(self.initial_json))
        self.assertEqual(cid["Hello"], "World")
        self.assertEqual(cid["Foo"], "Bar")
