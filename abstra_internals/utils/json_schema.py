from collections.abc import Iterable, Sized
from dataclasses import MISSING, fields, is_dataclass
from inspect import Parameter, signature
from typing import (
    Any,
    Callable,
    Dict,
    List,
    Literal,
    Tuple,
    Type,
    Union,
    get_args,
    get_origin,
)

from pydantic import BaseModel


def get_function_metadata(func: Callable) -> Dict[str, Any]:
    """Extract metadata from a function for JSON schema generation"""
    func_name = func.__name__
    input_schema = get_function_json_schema(func)

    requires_approval = False
    if hasattr(func, "_requires_approval"):
        requires_approval = func._requires_approval  # type: ignore
        func_name += "__req_approval__"

    return {
        "name": func_name,
        "description": func.__doc__.strip() if func.__doc__ else f"Tool: {func_name}",
        "inputSchema": input_schema,
        "requiresApproval": requires_approval,
    }


def get_function_json_schema(func: Callable) -> Dict[str, Any]:
    func_signature = signature(func)
    parameters = list(func_signature.parameters.values())

    properties = {}
    required = []

    for param in parameters:
        param_name = param.name
        properties[param_name] = get_param_json_schema(param)

        if param.default == Parameter.empty:
            required.append(param_name)

    input_schema = {"type": "object", "additionalProperties": True}

    if properties:
        input_schema["properties"] = properties
        input_schema["required"] = required

    return input_schema


def get_param_json_schema(param: Parameter):
    param_type = param.annotation

    if param_type == Parameter.empty:
        # No type annotation - default to string
        param_schema = {"type": "string"}
    else:
        param_schema = type_to_json_schema(param_type)

    return param_schema


def type_to_json_schema(field_type: Any) -> Dict[str, Any]:
    """Convert a Python type to JSON schema format"""

    # Handle Any
    if field_type is Any:
        return {}

    # Handle NoneType
    if field_type is type(None):
        return {"type": "null"}

    # Handle basic types
    if field_type is str:
        return {"type": "string"}
    elif field_type is int:
        return {"type": "integer"}
    elif field_type is float:
        return {"type": "number"}
    elif field_type is bool:
        return {"type": "boolean"}
    elif field_type is dict or field_type is Dict:
        return {"type": "object", "additionalProperties": True}
    elif field_type is list or field_type is List:
        return {"type": "array", "items": {"type": "string"}}
    elif field_type is tuple or field_type is Tuple:
        return {"type": "array"}

    # Handle typing module types
    origin = get_origin(field_type)
    args = get_args(field_type)

    if origin is Literal:
        return {"enum": list(args)}

    # Handle tuple and Tuple as fixed-length arrays
    if origin in (tuple, Tuple):
        if args:
            item_schemas = [type_to_json_schema(arg) for arg in args]
            return {
                "type": "array",
                "items": item_schemas,
                "minItems": len(item_schemas),
                "maxItems": len(item_schemas),
            }
        else:
            # Generic tuple
            return {"type": "array"}

    # Handle list/array generics
    if origin is list or origin is List:
        if args:
            item_schema = type_to_json_schema(args[0])
            return {"type": "array", "items": item_schema}
        else:
            return {"type": "array", "items": {"type": "string"}}

    # Handle dict/object generics
    if origin is dict or origin is Dict:
        if len(args) >= 2:
            value_schema = type_to_json_schema(args[1])
            return {"type": "object", "additionalProperties": value_schema}
        else:
            return {"type": "object", "additionalProperties": True}

    elif origin is Union:
        # Handle empty Union
        if not args:
            return {}
        # Handle Optional (Union[T, None]) and other unions
        non_none_args = [arg for arg in args if arg is not type(None)]
        if len(non_none_args) == 0:
            # Only NoneType
            return {"type": "null"}
        elif len(non_none_args) == 1:
            # This is Optional[T]
            schema = type_to_json_schema(non_none_args[0])
            # JSON Schema doesn't have a direct "optional" concept, but we can indicate it's nullable
            if isinstance(schema, dict):
                schema = schema.copy()
                schema["nullable"] = True
            return schema
        else:
            # Multiple types union - use anyOf
            return {"anyOf": [type_to_json_schema(arg) for arg in non_none_args]}

    # Handle custom classes (dataclasses, Pydantic models, etc.)
    elif is_dataclass(field_type):
        return dataclass_to_json_schema(field_type)
    elif hasattr(field_type, "model_json_schema"):
        # Pydantic model
        return pydantic_to_json_schema(field_type)

    # Default fallback
    return {"type": "string", "description": f"Unsupported type: {field_type}"}


def pydantic_to_json_schema(model: Type[BaseModel]) -> Dict[str, Any]:
    """Convert a Pydantic model to JSON schema format for MCP"""

    schema = model.model_json_schema()

    # Convert Pydantic schema to MCP-compatible format
    mcp_schema = {
        "type": "object",
        "properties": schema.get("properties", {}),
        "required": schema.get("required", []),
        "additionalProperties": True,
    }

    return mcp_schema


def dataclass_to_json_schema(dataclass_type: Any) -> Dict[str, Any]:
    """Convert a dataclass to JSON schema format for MCP"""

    if not is_dataclass(dataclass_type):
        raise ValueError("Type must be a dataclass")

    properties = {}
    required = []

    for field in fields(dataclass_type):
        field_type = field.type

        # Use the enhanced type conversion
        properties[field.name] = type_to_json_schema(field_type)

        # Check if field is required (no default value)
        if field.default is MISSING and field.default_factory is MISSING:
            required.append(field.name)

    return {
        "type": "object",
        "properties": properties,
        "required": required,
        "additionalProperties": True,
    }


def validate_type(value: object, schema: dict) -> bool:
    # Handle anyOf at the top level
    if "anyOf" in schema:
        return any(validate_type(value, s) for s in schema["anyOf"])

    t = schema.get("type")
    if t == "string":
        return isinstance(value, str)
    elif t == "integer":
        return isinstance(value, int) and not isinstance(value, bool)
    elif t == "number":
        return isinstance(value, (int, float)) and not isinstance(value, bool)
    elif t == "boolean":
        return isinstance(value, bool)
    elif t == "null":
        return value is None
    elif t == "array":
        items = schema.get("items", {"type": "string"})
        # Ensure value is Sized and Iterable before using len() or iterating
        if not (isinstance(value, Sized) and isinstance(value, Iterable)):
            return False
        # Handle tuple validation (items is a list of schemas)
        if isinstance(items, list):
            if len(value) != len(items):
                return False
            for v, item_schema in zip(value, items):
                if not validate_type(v, item_schema):
                    return False
            # Optionally check minItems/maxItems
            if "minItems" in schema and len(value) < schema["minItems"]:
                return False
            if "maxItems" in schema and len(value) > schema["maxItems"]:
                return False
            return True
        else:
            # Regular list validation
            if "minItems" in schema and len(value) < schema["minItems"]:
                return False
            if "maxItems" in schema and len(value) > schema["maxItems"]:
                return False
            for v in value:
                if not validate_type(v, items):
                    return False
            return True
    elif t == "object":
        if not isinstance(value, dict):
            return False
        properties = schema.get("properties", {})
        required = schema.get("required", [])
        additional = schema.get("additionalProperties", True)
        # Check required fields
        for req in required:
            if req not in value:
                return False
        # Check properties
        for prop, prop_schema in properties.items():
            if prop in value and not validate_type(value[prop], prop_schema):
                return False
        # Check additionalProperties
        if not additional:
            # No additional properties allowed
            for k in value:
                if k not in properties:
                    return False
        elif isinstance(additional, dict):
            # additionalProperties is a schema
            for k in value:
                if k not in properties:
                    if not validate_type(value[k], additional):
                        return False
        return True
    # fallback: accept anything
    return True
