import unittest
from typing import Optional
from .validate import check_type, validate_json_typing, validate_json


class ValidateTest(unittest.TestCase):
    def test_check_basic_types(self):
        self.assertEqual(check_type("string", str), True)
        self.assertEqual(check_type(19, int), True)
        self.assertEqual(check_type(1.9, float), True)
        self.assertEqual(check_type(True, bool), True)

    def test_check_basic_types_fail(self):
        self.assertEqual(check_type("string", int), False)
        self.assertEqual(check_type(19, float), False)
        self.assertEqual(check_type(1.9, int), False)
        self.assertEqual(check_type(True, str), False)

    def test_check_optional_types(self):
        self.assertEqual(check_type("string", Optional[str]), True)
        self.assertEqual(check_type(None, Optional[str]), True)
        self.assertEqual(check_type(19, Optional[int]), True)
        self.assertEqual(check_type(19, Optional[str]), False)
        self.assertEqual(check_type("string", Optional[int]), False)

    def test_validate_json_typing(self):
        json = dict(
            string="string",
            another_string=None,
            int=19,
            float=1.9,
            bool=True,
        )
        expected_types = {
            "string": Optional[str],
            "another_string": Optional[str],
            "int": int,
            "float": float,
            "bool": bool,
        }
        expected_validated_json = json

        self.assertEqual(
            validate_json_typing(json, expected_types), expected_validated_json
        )

    def test_filter_out_unexpected_fields(self):
        json = dict(
            prop1="prop1",
            prop2="prop2",
        )
        expected_types = {
            "prop1": str,
        }
        expected_validated_json = dict(
            prop1="prop1",
        )

        self.assertEqual(
            validate_json_typing(json, expected_types), expected_validated_json
        )

    def test_filter_out_fields_with_wrong_type(self):
        json = dict(
            string="string",
            integer="string",
        )
        expected_types = {
            "string": str,
            "integer": int,
        }
        expected_validated_json = dict(
            string="string",
        )

        self.assertEqual(
            validate_json_typing(json, expected_types), expected_validated_json
        )

    def test_do_not_create_expected_fields(self):
        json = dict(
            prop1="prop1",
        )
        expected_types = {
            "prop1": str,
            "prop2": str,
        }
        expected_validated_json = dict(
            prop1="prop1",
        )

        self.assertEqual(
            validate_json_typing(json, expected_types), expected_validated_json
        )

    def test_validate_json(self):
        self.assertEqual(validate_json('{"valid": "json"}'), True)
        self.assertEqual(validate_json('{"invalid": "json"'), False)
        self.assertEqual(validate_json("invalid"), False)
        self.assertEqual(validate_json(""), False)
