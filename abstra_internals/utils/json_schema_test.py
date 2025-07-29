"""
Comprehensive test suite for JSON Schema validation utilities.

This test suite covers all edge cases and expected behaviors for JSON Schema validation functions.
It is organized and written in the style of other test files in this project, such as paths_test.py and mcp_test.py.

Each function is tested with multiple cases, including valid, invalid, edge, and special cases.
"""

from dataclasses import dataclass
from inspect import signature
from typing import (
    Any,
    Dict,
    List,
    Literal,
    Optional,
    Tuple,
    Union,
)
from unittest import TestCase

from pydantic import BaseModel, Field

from abstra_internals.utils.json_schema import (
    dataclass_to_json_schema,
    get_param_json_schema,
    pydantic_to_json_schema,
    type_to_json_schema,
    validate_type,
)


class TestTypeToJSONSchema(TestCase):
    def test_get_param_json_schema(self):
        def func(a: int, b: str = "foo", c: Optional[float] = None):
            pass

        params = signature(func).parameters
        schema = {name: get_param_json_schema(param) for name, param in params.items()}
        self.assertEqual(schema["a"], {"type": "integer"})
        self.assertEqual(schema["b"], {"type": "string"})
        self.assertEqual(schema["c"], {"type": "number", "nullable": True})

    def test_get_param_json_schema_various_types(self):
        def func(a: List[int], b: Dict[str, float], c: Union[int, str], d: Any):
            pass

        params = signature(func).parameters
        schema = {name: get_param_json_schema(param) for name, param in params.items()}
        self.assertEqual(schema["a"], {"type": "array", "items": {"type": "integer"}})
        self.assertEqual(
            schema["b"], {"type": "object", "additionalProperties": {"type": "number"}}
        )
        self.assertEqual(
            schema["c"], {"anyOf": [{"type": "integer"}, {"type": "string"}]}
        )
        self.assertEqual(schema["d"], {})

    def test_get_param_json_schema_with_defaults_and_required(self):
        def func(a: int, b: str = "foo", c: float = 1.2, d: bool = False):
            pass

        params = signature(func).parameters
        schema = {name: get_param_json_schema(param) for name, param in params.items()}
        self.assertIn("a", schema)
        self.assertIn("b", schema)
        self.assertIn("c", schema)
        self.assertIn("d", schema)
        self.assertEqual(schema["a"], {"type": "integer"})
        self.assertEqual(schema["b"], {"type": "string"})
        self.assertEqual(schema["c"], {"type": "number"})
        self.assertEqual(schema["d"], {"type": "boolean"})

    def test_get_param_json_schema_with_no_annotations(self):
        def func(a, b=1):
            pass

        params = signature(func).parameters
        schema = {name: get_param_json_schema(param) for name, param in params.items()}
        self.assertEqual(schema["a"], {"type": "string"})
        self.assertEqual(schema["b"], {"type": "string"})

    def test_get_param_json_schema_with_dataclass_and_pydantic(self):
        @dataclass
        class Foo:
            x: int
            y: str

        class Bar(BaseModel):
            a: int
            b: str

        def func(foo: Foo, bar: Bar):
            pass

        params = signature(func).parameters
        schema = {name: get_param_json_schema(param) for name, param in params.items()}
        self.assertEqual(schema["foo"]["type"], "object")
        self.assertIn("x", schema["foo"]["properties"])
        self.assertIn("y", schema["foo"]["properties"])
        self.assertEqual(schema["bar"]["type"], "object")
        self.assertIn("a", schema["bar"]["properties"])
        self.assertIn("b", schema["bar"]["properties"])

    def test_deeply_nested_types(self):
        schema = type_to_json_schema(List[Dict[str, List[int]]])
        self.assertEqual(
            schema,
            {
                "type": "array",
                "items": {
                    "type": "object",
                    "additionalProperties": {
                        "type": "array",
                        "items": {"type": "integer"},
                    },
                },
            },
        )

    def test_literal_type(self):
        try:
            _Literal = Literal
        except NameError:
            from typing_extensions import Literal as _Literal
        schema = type_to_json_schema(_Literal[1, "a", True])
        self.assertIn("enum", schema)
        self.assertIn(1, schema["enum"])
        self.assertIn("a", schema["enum"])
        self.assertIn(True, schema["enum"])

    def test_any_type(self):
        schema = type_to_json_schema(Any)
        self.assertEqual(schema, {})

    def test_nonetype(self):
        schema = type_to_json_schema(type(None))
        self.assertEqual(schema["type"], "null")

    def test_empty_union(self):
        # Not a valid use, and should raise TypeError
        with self.assertRaises(TypeError):
            type_to_json_schema(Union[()])

    """Test type_to_json_schema for all supported and edge cases."""

    def test_basic_types(self):
        self.assertEqual(type_to_json_schema(str), {"type": "string"})
        self.assertEqual(type_to_json_schema(int), {"type": "integer"})
        self.assertEqual(type_to_json_schema(float), {"type": "number"})
        self.assertEqual(type_to_json_schema(bool), {"type": "boolean"})
        self.assertEqual(
            type_to_json_schema(dict), {"type": "object", "additionalProperties": True}
        )
        self.assertEqual(
            type_to_json_schema(Dict),
            {"type": "object", "additionalProperties": True},
        )

    def test_list_and_tuple_types(self):
        self.assertEqual(
            type_to_json_schema(List[str]),
            {"type": "array", "items": {"type": "string"}},
        )
        self.assertEqual(
            type_to_json_schema(list), {"type": "array", "items": {"type": "string"}}
        )
        self.assertEqual(
            type_to_json_schema(List),
            {"type": "array", "items": {"type": "string"}},
        )
        self.assertEqual(
            type_to_json_schema(Tuple[int, str]),
            {
                "type": "array",
                "items": [{"type": "integer"}, {"type": "string"}],
                "minItems": 2,
                "maxItems": 2,
            },
        )
        self.assertEqual(type_to_json_schema(tuple), {"type": "array"})

    def test_dict_types(self):
        self.assertEqual(
            type_to_json_schema(Dict[str, int]),
            {
                "type": "object",
                "additionalProperties": {"type": "integer"},
            },
        )
        self.assertEqual(
            type_to_json_schema(Dict),
            {"type": "object", "additionalProperties": True},
        )

    def test_union_and_optional(self):
        # Optional[int] == Union[int, None]
        schema = type_to_json_schema(Optional[int])
        self.assertEqual(schema["type"], "integer")
        self.assertTrue(schema["nullable"])

        schema = type_to_json_schema(Union[int, str])
        self.assertEqual(schema["anyOf"], [{"type": "integer"}, {"type": "string"}])

        schema = type_to_json_schema(Union[int, None, str])
        self.assertEqual(schema["anyOf"], [{"type": "integer"}, {"type": "string"}])

    def test_custom_dataclass(self):
        @dataclass
        class Foo:
            a: int
            b: Optional[str] = None

        schema = type_to_json_schema(Foo)
        self.assertEqual(schema["type"], "object")
        self.assertIn("properties", schema)
        self.assertIn("a", schema["properties"])
        self.assertIn("b", schema["properties"])
        self.assertIn("required", schema)
        self.assertIn("a", schema["required"])
        self.assertNotIn("b", schema["required"])

    def test_pydantic_model(self):
        class Bar(BaseModel):
            x: int
            y: str = "foo"

        schema = type_to_json_schema(Bar)
        self.assertEqual(schema["type"], "object")
        self.assertIn("properties", schema)
        self.assertIn("x", schema["properties"])
        self.assertIn("y", schema["properties"])
        self.assertIn("required", schema)
        self.assertIn("x", schema["required"])
        self.assertNotIn("y", schema["required"])

    def test_unsupported_type(self):
        class Custom:
            pass

        schema = type_to_json_schema(Custom)
        self.assertEqual(schema["type"], "string")
        self.assertIn("Unsupported type", schema["description"])


class TestPydanticToJSONSchema(TestCase):
    """Test pydantic_to_json_schema for all edge cases."""

    def test_basic_pydantic(self):
        class Model(BaseModel):
            a: int
            b: str

        schema = pydantic_to_json_schema(Model)
        self.assertEqual(schema["type"], "object")
        self.assertIn("properties", schema)
        self.assertIn("a", schema["properties"])
        self.assertIn("b", schema["properties"])
        self.assertIn("required", schema)
        self.assertIn("a", schema["required"])
        self.assertIn("b", schema["required"])

    def test_pydantic_with_defaults(self):
        class Model(BaseModel):
            a: int
            b: str = "foo"

        schema = pydantic_to_json_schema(Model)
        self.assertIn("a", schema["required"])
        self.assertNotIn("b", schema["required"])

    def test_pydantic_with_field(self):
        class Model(BaseModel):
            a: int = Field(..., description="desc")

        schema = pydantic_to_json_schema(Model)
        self.assertIn("a", schema["properties"])
        self.assertEqual(schema["properties"]["a"]["description"], "desc")


class TestDataclassToJSONSchema(TestCase):
    def test_dataclass_with_default_factory(self):
        from dataclasses import field

        @dataclass
        class Foo:
            a: int
            b: list = field(default_factory=list)

        schema = dataclass_to_json_schema(Foo)
        self.assertIn("a", schema["required"])
        self.assertNotIn("b", schema["required"])

    def test_pydantic_with_custom_type(self):
        from pydantic.errors import PydanticInvalidForJsonSchema

        class CustomType(int):
            pass

        class Model(BaseModel):
            a: CustomType

            class Config:
                arbitrary_types_allowed = True

        with self.assertRaises(PydanticInvalidForJsonSchema):
            pydantic_to_json_schema(Model)

    """Test dataclass_to_json_schema for all edge cases."""

    def test_basic_dataclass(self):
        @dataclass
        class Foo:
            a: int
            b: str

        schema = dataclass_to_json_schema(Foo)
        self.assertEqual(schema["type"], "object")
        self.assertIn("a", schema["properties"])
        self.assertIn("b", schema["properties"])
        self.assertIn("a", schema["required"])
        self.assertIn("b", schema["required"])

    def test_dataclass_with_defaults(self):
        @dataclass
        class Foo:
            a: int
            b: str = "foo"

        schema = dataclass_to_json_schema(Foo)
        self.assertIn("a", schema["required"])
        self.assertNotIn("b", schema["required"])

    def test_dataclass_with_optional(self):
        @dataclass
        class Foo:
            a: int
            b: Optional[str] = None

        schema = dataclass_to_json_schema(Foo)
        self.assertIn("a", schema["required"])
        self.assertNotIn("b", schema["required"])

    def test_not_a_dataclass(self):
        with self.assertRaises(ValueError):
            dataclass_to_json_schema(int)


class TestValidateType(TestCase):
    def test_validate_any_type(self):
        schema = {}
        self.assertTrue(validate_type("foo", schema))
        self.assertTrue(validate_type(123, schema))
        self.assertTrue(validate_type(None, schema))

    def test_validate_null_type(self):
        schema = {"type": "null"}
        self.assertTrue(validate_type(None, schema))
        self.assertFalse(validate_type(0, schema))

    def test_validate_object_with_extra_keys_and_no_additionalProperties(self):
        schema = {"type": "object", "properties": {"a": {"type": "string"}}}
        # Should allow extra keys by default
        self.assertTrue(validate_type({"a": "foo", "b": 1}, schema))

    """Test validate_type for all supported and edge cases."""

    def test_string(self):
        schema = {"type": "string"}
        self.assertTrue(validate_type("foo", schema))
        self.assertFalse(validate_type(123, schema))

    def test_integer(self):
        schema = {"type": "integer"}
        self.assertTrue(validate_type(123, schema))
        self.assertFalse(validate_type(1.2, schema))
        self.assertFalse(validate_type(True, schema))

    def test_number(self):
        schema = {"type": "number"}
        self.assertTrue(validate_type(123, schema))
        self.assertTrue(validate_type(1.2, schema))
        self.assertFalse(validate_type(True, schema))

    def test_boolean(self):
        schema = {"type": "boolean"}
        self.assertTrue(validate_type(True, schema))
        self.assertTrue(validate_type(False, schema))
        self.assertFalse(validate_type(1, schema))

    def test_array(self):
        schema = {"type": "array", "items": {"type": "string"}}
        self.assertTrue(validate_type(["a", "b"], schema))
        self.assertFalse(validate_type([1, 2], schema))
        self.assertTrue(validate_type([], schema))

    def test_array_tuple(self):
        schema = {
            "type": "array",
            "items": [{"type": "string"}, {"type": "integer"}],
            "minItems": 2,
            "maxItems": 2,
        }
        self.assertTrue(validate_type(["a", 1], schema))
        self.assertFalse(validate_type(["a", "b"], schema))
        self.assertFalse(validate_type(["a"], schema))
        self.assertFalse(validate_type(["a", 1, 2], schema))

    def test_array_min_max(self):
        schema = {
            "type": "array",
            "items": {"type": "string"},
            "minItems": 2,
            "maxItems": 3,
        }
        self.assertTrue(validate_type(["a", "b"], schema))
        self.assertTrue(validate_type(["a", "b", "c"], schema))
        self.assertFalse(validate_type(["a"], schema))
        self.assertFalse(validate_type(["a", "b", "c", "d"], schema))

    def test_object(self):
        schema = {
            "type": "object",
            "properties": {"a": {"type": "string"}},
            "required": ["a"],
            "additionalProperties": False,
        }
        self.assertTrue(validate_type({"a": "foo"}, schema))
        self.assertFalse(validate_type({}, schema))
        self.assertFalse(validate_type({"a": 1}, schema))
        self.assertFalse(validate_type({"a": "foo", "b": 1}, schema))

    def test_object_additional_properties_true(self):
        schema = {
            "type": "object",
            "properties": {"a": {"type": "string"}},
            "required": ["a"],
            "additionalProperties": True,
        }
        self.assertTrue(validate_type({"a": "foo", "b": 1}, schema))

    def test_object_additional_properties_schema(self):
        schema = {
            "type": "object",
            "properties": {"a": {"type": "string"}},
            "required": ["a"],
            "additionalProperties": {"type": "integer"},
        }
        self.assertTrue(validate_type({"a": "foo", "b": 1}, schema))
        self.assertFalse(validate_type({"a": "foo", "b": "bar"}, schema))

    def test_anyof(self):
        schema = {"anyOf": [{"type": "string"}, {"type": "integer"}]}
        self.assertTrue(validate_type("foo", schema))
        self.assertTrue(validate_type(123, schema))
        self.assertFalse(validate_type(1.2, schema))

    def test_fallback(self):
        schema = {"type": "unknown"}
        self.assertTrue(validate_type("anything", schema))

    def test_nested(self):
        schema = {
            "type": "object",
            "properties": {
                "a": {"type": "array", "items": {"type": "integer"}},
                "b": {
                    "type": "object",
                    "properties": {"c": {"type": "string"}},
                    "required": ["c"],
                    "additionalProperties": False,
                },
            },
            "required": ["a", "b"],
            "additionalProperties": False,
        }
        self.assertTrue(validate_type({"a": [1, 2], "b": {"c": "foo"}}, schema))
        self.assertFalse(validate_type({"a": [1, 2], "b": {"c": 1}}, schema))
        self.assertFalse(validate_type({"a": [1, 2]}, schema))

    def test_object_with_no_properties(self):
        schema = {"type": "object"}
        self.assertTrue(validate_type({}, schema))
        self.assertTrue(validate_type({"a": 1}, schema))

    def test_object_with_empty_required(self):
        schema = {"type": "object", "required": []}
        self.assertTrue(validate_type({}, schema))

    def test_object_with_additional_properties_false(self):
        schema = {"type": "object", "properties": {}, "additionalProperties": False}
        self.assertTrue(validate_type({}, schema))
        self.assertFalse(validate_type({"a": 1}, schema))

    def test_object_with_additional_properties_schema_and_no_properties(self):
        schema = {"type": "object", "additionalProperties": {"type": "integer"}}
        self.assertTrue(validate_type({"a": 1, "b": 2}, schema))
        self.assertFalse(validate_type({"a": 1, "b": "foo"}, schema))
