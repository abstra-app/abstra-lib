import inspect
from dataclasses import MISSING, fields, is_dataclass
from functools import wraps
from typing import (
    Any,
    Callable,
    Dict,
    List,
    Optional,
    Type,
    Union,
    get_args,
    get_origin,
)

from flask import Blueprint, jsonify, make_response, request
from pydantic import BaseModel


def type_to_json_schema(field_type: Any) -> Dict[str, Any]:
    """Convert a Python type to JSON schema format"""
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
        return {"type": "object"}

    # Handle typing module types
    origin = get_origin(field_type)
    args = get_args(field_type)

    if origin is list or origin is List:
        if args:
            # List with specific item type
            item_schema = type_to_json_schema(args[0])
            return {"type": "array", "items": item_schema}
        else:
            # Generic list
            return {"type": "array", "items": {"type": "string"}}

    elif origin is dict or origin is Dict:
        if len(args) >= 2:
            # Dict with specific value type
            value_schema = type_to_json_schema(args[1])
            return {"type": "object", "additionalProperties": value_schema}
        else:
            # Generic dict
            return {"type": "object"}

    elif origin is Union:
        # Handle Optional (Union[T, None]) and other unions
        non_none_args = [arg for arg in args if arg is not type(None)]
        if len(non_none_args) == 1:
            # This is Optional[T]
            schema = type_to_json_schema(non_none_args[0])
            # JSON Schema doesn't have a direct "optional" concept,
            # but we can indicate it's nullable
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

    return {"type": "object", "properties": properties, "required": required}


def register_function(
    blueprint: Blueprint,
    func: Callable,
    tools_registry: Optional[Dict[str, Dict[str, Any]]] = None,
) -> Callable:
    """Decorator to register a function as an MCP tool with automatic metadata generation"""

    @wraps(func)
    def wrapper(*args, **kwargs):
        return func(*args, **kwargs)

    # Extract function name and signature
    func_name = func.__name__
    func_signature = inspect.signature(func)
    parameters = list(func_signature.parameters.values())

    # Generate tool metadata automatically from function signature - always use dict format
    properties = {}
    required = []

    # Process each parameter in the function signature
    for param in parameters:
        param_name = param.name
        param_type = param.annotation

        # Convert parameter type to JSON schema
        if param_type == inspect.Parameter.empty:
            # No type annotation - default to string
            param_schema = {"type": "string"}
        else:
            param_schema = type_to_json_schema(param_type)

        properties[param_name] = param_schema

        # Check if parameter is required (no default value)
        if param.default == inspect.Parameter.empty:
            required.append(param_name)

    # Always use object format with properties for each parameter
    input_schema = {"type": "object", "properties": properties, "required": required}

    tool_metadata = {
        "name": func_name,
        "description": func.__doc__.strip() if func.__doc__ else f"Tool: {func_name}",
        "inputSchema": input_schema,
    }

    # Register the tool metadata if registry is provided
    if tools_registry is not None:
        tools_registry[func_name] = tool_metadata

    # Register the function in MCP_TOOLS
    def create_tool_endpoint():
        def tool_endpoint():
            try:
                if parameters:
                    # Function with parameters - extract from JSON and pass as keyword arguments
                    input_data = request.get_json() or {}

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

    return wrapper


def create_mcp_tool_handler(
    tools_registry: Dict[str, Dict[str, Any]], registered_functions: Dict[str, Callable]
) -> Callable:
    """Create a dynamic tool handler that can call any registered function"""

    def handle_tool_call(tool_name: str, arguments: Dict[str, Any]) -> Dict[str, Any]:
        if tool_name not in registered_functions:
            raise ValueError(f"Unknown tool: {tool_name}")

        func = registered_functions[tool_name]
        func_signature = inspect.signature(func)
        parameters = list(func_signature.parameters.values())

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
        elif hasattr(result, "__dict__"):
            result_text = str(result.__dict__)
        else:
            result_text = str(result)

        return {"content": [{"type": "text", "text": result_text}]}

    return handle_tool_call


def mcp_bp(functions: List[Callable]) -> Blueprint:
    """Get the editor blueprint with registered MCP tools."""
    editor_bp = Blueprint("mcp", __name__)

    # Store registered tools for MCP discovery - automatically populated
    _registered_tools = {}
    _registered_functions = {}

    # Register tools - metadata is generated automatically
    for func in functions:
        if not callable(func):
            raise TypeError(f"Function {func} is not callable")
        register_function(editor_bp, func, _registered_tools)
        _registered_functions[f"{func.__name__}"] = func

    # Create dynamic tool handler
    tool_handler = create_mcp_tool_handler(_registered_tools, _registered_functions)

    # Root MCP endpoint for the main protocol communication
    @editor_bp.route("/", methods=["POST", "GET", "OPTIONS"])
    def mcp_root():
        """Main MCP protocol endpoint following JSON-RPC 2.0 and Streamable HTTP"""
        # Handle preflight OPTIONS request
        if request.method == "OPTIONS":
            response = make_response()
            response.headers.add("Access-Control-Allow-Origin", "*")
            response.headers.add(
                "Access-Control-Allow-Headers",
                "Content-Type, Accept, MCP-Protocol-Version, Mcp-Session-Id, Last-Event-ID",
            )
            response.headers.add("Access-Control-Allow-Methods", "POST, GET, OPTIONS")
            response.headers.add("Access-Control-Max-Age", "3600")
            return response

        # Handle GET request for SSE (not implemented but required by spec)
        if request.method == "GET":
            # VS Code might try GET for SSE streams, return 405 as we don't support SSE
            return jsonify({"error": "SSE not supported, use POST"}), 405

        # Handle POST request
        try:
            data = request.get_json(force=True)
            if not data:
                raise ValueError("No JSON data provided")

            # Validate JSON-RPC 2.0 format
            if data.get("jsonrpc") != "2.0":
                raise ValueError("Invalid JSON-RPC version")

            # Handle different MCP method calls
            method = data.get("method")
            request_id = data.get("id")

            if method == "initialize":
                # Check protocol version
                protocol_version = data.get("params", {}).get(
                    "protocolVersion", "2025-06-18"
                )
                supported_versions = ["2025-06-18", "2024-11-05"]

                if protocol_version not in supported_versions:
                    protocol_version = "2025-06-18"  # Default to latest

                response = {
                    "jsonrpc": "2.0",
                    "id": request_id,
                    "result": {
                        "protocolVersion": protocol_version,
                        "capabilities": {"tools": {"listChanged": False}},
                        "serverInfo": {
                            "name": "abstra-mcp-server",
                            "version": "1.0.0",
                            "description": "Abstra workflow management server providing comprehensive tools to inspect, analyze, and debug workflow projects. Supports project structure analysis, stage management, task tracking, and execution monitoring.",
                        },
                        "instructions": "Use the available tools to inspect and analyze Abstra workflow projects. Tools provide comprehensive access to project structure, stages, tasks, executions, and analytics.",
                    },
                }

                # Add proper headers for MCP
                response_obj = jsonify(response)
                response_obj.headers["Content-Type"] = "application/json"
                response_obj.headers["Access-Control-Allow-Origin"] = "*"
                return response_obj

            elif method == "tools/list":
                response = {
                    "jsonrpc": "2.0",
                    "id": request_id,
                    "result": {"tools": list(_registered_tools.values())},
                }
                response_obj = jsonify(response)
                response_obj.headers["Access-Control-Allow-Origin"] = "*"
                return response_obj

            elif method == "notifications/initialized":
                # Handle the initialized notification (no response needed)
                response = make_response("", 204)
                response.headers["Access-Control-Allow-Origin"] = "*"
                return response

            elif method == "tools/call":
                params = data.get("params", {})
                tool_name = params.get("name")
                arguments = params.get("arguments", {})

                try:
                    # Use dynamic tool handler
                    result = tool_handler(tool_name, arguments)

                    response = {"jsonrpc": "2.0", "id": request_id, "result": result}
                    return jsonify(response)
                except ValueError as e:
                    error_response = {
                        "jsonrpc": "2.0",
                        "id": request_id,
                        "error": {"code": -32601, "message": str(e)},
                    }
                    return jsonify(error_response), 400

            else:
                error_response = {
                    "jsonrpc": "2.0",
                    "id": request_id,
                    "error": {"code": -32601, "message": f"Unknown method: {method}"},
                }
                return jsonify(error_response), 400

        except Exception as e:
            try:
                data = request.get_json() or {}
            except Exception:
                data = {}
            error_response = {
                "jsonrpc": "2.0",
                "id": data.get("id"),
                "error": {"code": -32603, "message": str(e)},
            }
            return jsonify(error_response), 500

    # MCP protocol endpoints
    @editor_bp.route("/initialize", methods=["POST"])
    def initialize():
        """MCP initialize endpoint"""
        return jsonify(
            {
                "capabilities": {"tools": {}},
                "serverInfo": {
                    "name": "abstra-mcp-server",
                    "version": "1.0.0",
                    "description": "Abstra workflow management server providing comprehensive tools to inspect, analyze, and debug workflow projects. Supports project structure analysis, stage management, task tracking, and execution monitoring.",
                    "capabilities_description": "Provides read access to all project entities: stages, workflows, tasks, execution logs, and analytics. Enables workflow debugging, task flow analysis, and comprehensive project introspection.",
                },
            }
        )

    @editor_bp.route("/tools/list", methods=["POST"])
    def list_tools():
        """List available MCP tools"""
        return jsonify({"tools": list(_registered_tools.values())})

    @editor_bp.route("/tools/call", methods=["POST"])
    def call_tool():
        """Call an MCP tool"""
        try:
            data = request.get_json()
            tool_name = data.get("name")
            arguments = data.get("arguments", {})

            # Use dynamic tool handler
            result = tool_handler(tool_name, arguments)
            return jsonify(result)

        except ValueError as e:
            return jsonify({"error": str(e)}), 400
        except Exception as e:
            return jsonify({"error": str(e)}), 400

    return editor_bp
