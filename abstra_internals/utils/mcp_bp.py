from typing import (
    Callable,
    List,
)

from flask import Blueprint, jsonify, make_response, request

from .mcp import create_mcp_tool_handler, register_function


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
        func_name = func.__name__
        if hasattr(func, "_requires_approval"):
            func_name += "__req_approval__"
        register_function(editor_bp, func, _registered_tools, func_name)
        _registered_functions[f"{func_name}"] = func

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
                    # Unknown tool or invalid tool call
                    error_response = {
                        "jsonrpc": "2.0",
                        "id": request_id,
                        "error": {"code": -32601, "message": str(e)},
                    }
                    return jsonify(error_response), 400
                except TypeError as e:
                    # Invalid parameters (missing required params, wrong types, etc.)
                    error_response = {
                        "jsonrpc": "2.0",
                        "id": request_id,
                        "error": {"code": -32602, "message": str(e)},
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
            print(f"Error processing MCP request: {e}")
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
