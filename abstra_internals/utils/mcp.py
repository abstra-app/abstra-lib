import inspect
from functools import wraps
from typing import (
    Any,
    Callable,
    Dict,
    Optional,
)

from flask import Blueprint, jsonify, request

from .json_schema import get_function_json_schema, get_function_metadata, validate_type


def requires_approval(func: Callable) -> Callable:
    @wraps(func)
    def wrapper(*args, **kwargs):
        return func(*args, **kwargs)

    wrapper._requires_approval = True  # type: ignore
    return wrapper


def register_function(
    blueprint: Blueprint,
    func: Callable,
    tools_registry: Optional[Dict[str, Dict[str, Any]]] = None,
    custom_name: Optional[str] = None,
):
    """Decorator to register a function as an MCP tool with automatic metadata generation"""

    input_schema = get_function_json_schema(func)
    tool_metadata = get_function_metadata(func)

    func_name = custom_name or func.__name__
    parameters = list(inspect.signature(func).parameters.values())

    if tools_registry is not None:
        if custom_name:
            tool_metadata = tool_metadata.copy()
            tool_metadata["name"] = custom_name
        tools_registry[func_name] = tool_metadata

    # Register the function in MCP_TOOLS
    def create_tool_endpoint():
        def tool_endpoint():
            try:
                if parameters:
                    # Function with parameters - extract from JSON and pass as keyword arguments
                    input_data = request.get_json() or {}

                    # Validate input types against input_schema

                    # Validate each property
                    for prop, prop_schema in input_schema.get("properties", {}).items():
                        if prop in input_data:
                            if not validate_type(input_data[prop], prop_schema):
                                return jsonify(
                                    {
                                        "error": f"Invalid type for '{prop}': expected {prop_schema.get('type')}, got {type(input_data[prop]).__name__}"
                                    }
                                ), 400

                    # Convert parameter names and values based on function signature
                    kwargs = {}
                    for param in parameters:
                        param_name = param.name
                        if param_name in input_data:
                            kwargs[param_name] = input_data[param_name]
                        elif param.default != inspect.Parameter.empty:
                            # Use default value if provided
                            kwargs[param_name] = param.default
                        # If parameter is required but not provided, let the function handle the error

                    result = func(**kwargs)
                else:
                    # Function with no parameters - call directly
                    result = func()

                # Return the result as JSON
                if hasattr(result, "dict"):
                    return jsonify(result.dict())
                elif hasattr(result, "__dict__"):
                    return jsonify(result.__dict__)
                else:
                    return jsonify(result)

            except Exception as e:
                return jsonify({"error": str(e)}), 400

        return tool_endpoint

    # Add route with unique endpoint name
    blueprint.add_url_rule(
        f"/tools/{func_name}",
        endpoint=f"tool_{func_name}",
        view_func=create_tool_endpoint(),
        methods=["POST"],
    )


def create_mcp_tool_handler(
    tools_registry: Dict[str, Dict[str, Any]], registered_functions: Dict[str, Callable]
) -> Callable:
    """Create a dynamic tool handler that can call any registered function"""

    def handle_tool_call(tool_name: str, arguments: Dict[str, Any]) -> Dict[str, Any]:
        # Validate tool existence
        if tool_name not in registered_functions:
            raise ValueError(f"Unknown tool: {tool_name}")

        func = registered_functions[tool_name]
        func_signature = inspect.signature(func)
        parameters = list(func_signature.parameters.values())

        # Get input schema for this tool
        input_schema = tools_registry.get(tool_name, {}).get("inputSchema", {})

        # Validate each property in arguments
        for prop, prop_schema in input_schema.get("properties", {}).items():
            if prop in arguments:
                if not validate_type(arguments[prop], prop_schema):
                    raise TypeError(
                        f"Invalid type for '{prop}': expected {prop_schema.get('type')}, got {type(arguments[prop]).__name__}"
                    )

        if parameters:
            # Function with parameters - extract from arguments dict and pass as keyword arguments
            kwargs = {}
            for param in parameters:
                param_name = param.name
                if param_name in arguments:
                    kwargs[param_name] = arguments[param_name]
                elif param.default != inspect.Parameter.empty:
                    # Use default value if provided
                    kwargs[param_name] = param.default
                # If parameter is required but not provided, let the function handle the error

            result = func(**kwargs)
        else:
            # Function with no parameters
            result = func()

        # Handle result serialization
        if hasattr(result, "dict"):
            result_text = str(result.dict())
        elif hasattr(result, "to_dict"):
            result_text = str(result.to_dict())
        elif hasattr(result, "model_dump"):
            result_text = str(result.model_dump())
        elif hasattr(result, "__dict__"):
            result_text = str(result.__dict__)
        else:
            result_text = str(result)

        return {"content": [{"type": "text", "text": result_text}]}

    return handle_tool_call
