from unittest import TestCase

from .api import normalize_format


class TestNormalizeFormat(TestCase):
    def test_normal(self):
        self.assertEqual(
            normalize_format({"a": {"type": "string"}}), {"a": {"type": "string"}}
        )

    def test_string(self):
        self.assertEqual(normalize_format({"a": "string"}), {"a": {"type": "string"}})

    def test_str(self):
        self.assertEqual(normalize_format({"a": str}), {"a": {"type": "string"}})

    def test_int(self):
        self.assertEqual(normalize_format({"a": int}), {"a": {"type": "integer"}})

    def test_float(self):
        self.assertEqual(normalize_format({"a": float}), {"a": {"type": "number"}})

    def test_bool(self):
        self.assertEqual(normalize_format({"a": bool}), {"a": {"type": "boolean"}})

    def test_enum(self):
        self.assertEqual(
            normalize_format({"a": ["b", "c"]}), {"a": {"enum": ["b", "c"]}}
        )
