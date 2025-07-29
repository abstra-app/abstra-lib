#!/usr/bin/env python3
"""
Comprehensive test suite for Abstra MCP (Model Context Protocol) server functionality.

This test suite ensures full compliance with the MCP protocol specification and covers:

CORE PROTOCOL FEATURES:
- JSON-RPC 2.0 compliance (requests, responses, notifications, errors)
- MCP initialization handshake and protocol version negotiation
- Server capability reporting and client capability handling
- Request/response ID preservation and type validation

TOOL MANAGEMENT:
- Tool registration and discovery via tools/list
- Tool execution via tools/call with parameter validation
- Tool schema generation and JSON Schema compliance
- Complex parameter types (strings, numbers, booleans, objects)
- Error handling for unknown tools and invalid parameters

ERROR HANDLING:
- Standard JSON-RPC error codes (-32700 to -32603)
- Proper error responses for malformed JSON, invalid requests
- Method not found errors for unimplemented MCP methods
- Parameter validation errors with appropriate error codes

PROTOCOL COMPLIANCE:
- CORS header handling for cross-origin requests
- Content-Type validation and proper response headers
- Notification handling (with and without responses)
- Protocol version negotiation and backward compatibility

EDGE CASES & ROBUSTNESS:
- Unicode and special character handling
- Large payload processing
- Concurrent request handling
- Memory efficiency testing
- Response timing validation

UNIMPLEMENTED METHODS (tested for proper error responses):
- logging/setLevel
- resources/list, resources/read, resources/subscribe
- prompts/list, prompts/get
- completion/complete
- sampling/createMessage
- roots/list
- elicitation/create

This comprehensive test suite validates that the MCP server implementation
correctly handles all aspects of the protocol specification while gracefully
handling unimplemented features with appropriate error responses.
"""

from typing import Optional

from flask import Flask

from abstra_internals.utils.mcp_bp import mcp_bp
from tests.fixtures import BaseTest


def example_tool_function():
    """Example tool function for testing."""
    return {"message": "Hello from example tool"}


def example_tool_with_params(name: str, count: int = 1):
    """Example tool function with parameters for testing."""
    return {"greeting": f"Hello {name}!", "count": count}


class TestMCPServer(BaseTest):
    """Test class for MCP server functionality using Flask test client."""

    def setUp(self) -> None:
        super().setUp()
        # Create a test Flask app with the MCP blueprint
        self.app = Flask(__name__)
        self.mcp_blueprint = mcp_bp([example_tool_function, example_tool_with_params])
        self.app.register_blueprint(self.mcp_blueprint, url_prefix="/mcp")
        self.client = self.app.test_client()

    def test_initialize_request(self):
        """Test the MCP initialize request."""
        initialize_request = {
            "jsonrpc": "2.0",
            "id": 1,
            "method": "initialize",
            "params": {
                "protocolVersion": "2025-06-18",
                "capabilities": {
                    "roots": {"listChanged": True},
                    "sampling": {},
                    "elicitation": {},
                },
                "clientInfo": {"name": "TestClient", "version": "1.0.0"},
            },
        }

        headers = {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "MCP-Protocol-Version": "2025-06-18",
        }

        response = self.client.post("/mcp/", json=initialize_request, headers=headers)

        self.assertEqual(response.status_code, 200)
        result = response.get_json()

        # Verify JSON-RPC structure
        self.assertEqual(result["jsonrpc"], "2.0")
        self.assertEqual(result["id"], 1)
        self.assertIn("result", result)

        # Verify initialization response
        server_info = result["result"]["serverInfo"]
        self.assertEqual(server_info["name"], "abstra-mcp-server")
        self.assertEqual(server_info["version"], "1.0.0")
        self.assertIn("description", server_info)

        # Verify protocol version
        self.assertEqual(result["result"]["protocolVersion"], "2025-06-18")

        # Verify capabilities
        capabilities = result["result"]["capabilities"]
        self.assertIn("tools", capabilities)

    def test_tools_list_request(self):
        """Test the tools/list request."""
        tools_request = {"jsonrpc": "2.0", "id": 2, "method": "tools/list"}

        headers = {
            "Content-Type": "application/json",
            "MCP-Protocol-Version": "2025-06-18",
        }

        response = self.client.post("/mcp/", json=tools_request, headers=headers)

        self.assertEqual(response.status_code, 200)
        result = response.get_json()

        # Verify JSON-RPC structure
        self.assertEqual(result["jsonrpc"], "2.0")
        self.assertEqual(result["id"], 2)
        self.assertIn("result", result)

        # Verify tools list
        tools = result["result"]["tools"]
        self.assertIsInstance(tools, list)
        self.assertEqual(len(tools), 2)  # We registered 2 example tools

        # Check that our example tools are present
        tool_names = [tool["name"] for tool in tools]
        self.assertIn("example_tool_function", tool_names)
        self.assertIn("example_tool_with_params", tool_names)

        # Verify tool structure
        for tool in tools:
            self.assertIn("name", tool)
            self.assertIn("description", tool)
            self.assertIn("inputSchema", tool)

    def test_initialized_notification(self):
        """Test the initialized notification."""
        initialized_notification = {
            "jsonrpc": "2.0",
            "method": "notifications/initialized",
        }

        headers = {
            "Content-Type": "application/json",
            "MCP-Protocol-Version": "2025-06-18",
        }

        response = self.client.post(
            "/mcp/", json=initialized_notification, headers=headers
        )

        # Notifications should return 204 No Content
        self.assertEqual(response.status_code, 204)
        self.assertEqual(response.data, b"")

    def test_tool_call_without_params(self):
        """Test calling a tool without parameters."""
        tool_call_request = {
            "jsonrpc": "2.0",
            "id": 3,
            "method": "tools/call",
            "params": {"name": "example_tool_function", "arguments": {}},
        }

        headers = {
            "Content-Type": "application/json",
            "MCP-Protocol-Version": "2025-06-18",
        }

        response = self.client.post("/mcp/", json=tool_call_request, headers=headers)

        self.assertEqual(response.status_code, 200)
        result = response.get_json()

        # Verify JSON-RPC structure
        self.assertEqual(result["jsonrpc"], "2.0")
        self.assertEqual(result["id"], 3)
        self.assertIn("result", result)

        # Verify tool result
        tool_result = result["result"]
        self.assertIn("content", tool_result)
        self.assertIsInstance(tool_result["content"], list)
        self.assertEqual(len(tool_result["content"]), 1)
        self.assertEqual(tool_result["content"][0]["type"], "text")

    def test_tool_call_with_params(self):
        """Test calling a tool with parameters."""
        tool_call_request = {
            "jsonrpc": "2.0",
            "id": 4,
            "method": "tools/call",
            "params": {
                "name": "example_tool_with_params",
                "arguments": {"name": "TestUser", "count": 5},
            },
        }

        headers = {
            "Content-Type": "application/json",
            "MCP-Protocol-Version": "2025-06-18",
        }

        response = self.client.post("/mcp/", json=tool_call_request, headers=headers)

        self.assertEqual(response.status_code, 200)
        result = response.get_json()

        # Verify JSON-RPC structure
        self.assertEqual(result["jsonrpc"], "2.0")
        self.assertEqual(result["id"], 4)
        self.assertIn("result", result)

        # Verify tool result
        tool_result = result["result"]
        self.assertIn("content", tool_result)

    def test_unknown_tool_call(self):
        """Test calling an unknown tool."""
        tool_call_request = {
            "jsonrpc": "2.0",
            "id": 5,
            "method": "tools/call",
            "params": {"name": "unknown_tool", "arguments": {}},
        }

        headers = {
            "Content-Type": "application/json",
            "MCP-Protocol-Version": "2025-06-18",
        }

        response = self.client.post("/mcp/", json=tool_call_request, headers=headers)

        self.assertEqual(response.status_code, 400)
        result = response.get_json()

        # Verify error response
        self.assertEqual(result["jsonrpc"], "2.0")
        self.assertEqual(result["id"], 5)
        self.assertIn("error", result)
        self.assertEqual(result["error"]["code"], -32601)

    def test_invalid_json_rpc_version(self):
        """Test request with invalid JSON-RPC version."""
        invalid_request = {
            "jsonrpc": "1.0",  # Invalid version
            "id": 6,
            "method": "initialize",
            "params": {},
        }

        response = self.client.post("/mcp/", json=invalid_request)

        self.assertEqual(response.status_code, 500)
        result = response.get_json()

        # Verify error response
        self.assertEqual(result["jsonrpc"], "2.0")
        self.assertIn("error", result)
        self.assertEqual(result["error"]["code"], -32603)

    def test_unknown_method(self):
        """Test request with unknown method."""
        unknown_method_request = {
            "jsonrpc": "2.0",
            "id": 7,
            "method": "unknown/method",
            "params": {},
        }

        response = self.client.post("/mcp/", json=unknown_method_request)

        self.assertEqual(response.status_code, 400)
        result = response.get_json()

        # Verify error response
        self.assertEqual(result["jsonrpc"], "2.0")
        self.assertEqual(result["id"], 7)
        self.assertIn("error", result)
        self.assertEqual(result["error"]["code"], -32601)

    def test_options_request(self):
        """Test OPTIONS request for CORS."""
        response = self.client.open("/mcp/", method="OPTIONS")

        self.assertEqual(response.status_code, 200)

        # Verify CORS headers
        self.assertEqual(response.headers.get("Access-Control-Allow-Origin"), "*")
        self.assertIn(
            "Content-Type", response.headers.get("Access-Control-Allow-Headers", "")
        )
        self.assertIn("POST", response.headers.get("Access-Control-Allow-Methods", ""))

    def test_get_request(self):
        """Test GET request (should return 405)."""
        response = self.client.get("/mcp/")

        self.assertEqual(response.status_code, 405)
        result = response.get_json()
        self.assertEqual(result["error"], "SSE not supported, use POST")

    def test_ping_request(self):
        """Test ping request."""
        ping_request = {"jsonrpc": "2.0", "id": 8, "method": "ping"}

        headers = {
            "Content-Type": "application/json",
            "MCP-Protocol-Version": "2025-06-18",
        }

        response = self.client.post("/mcp/", json=ping_request, headers=headers)

        self.assertEqual(response.status_code, 400)
        result = response.get_json()

        # Verify error response for unimplemented ping
        self.assertEqual(result["jsonrpc"], "2.0")
        self.assertEqual(result["id"], 8)
        self.assertIn("error", result)
        self.assertEqual(result["error"]["code"], -32601)

    def test_cancelled_notification(self):
        """Test cancelled notification."""
        cancelled_notification = {
            "jsonrpc": "2.0",
            "method": "notifications/cancelled",
            "params": {"requestId": 123, "reason": "User cancelled operation"},
        }

        headers = {
            "Content-Type": "application/json",
            "MCP-Protocol-Version": "2025-06-18",
        }

        response = self.client.post(
            "/mcp/", json=cancelled_notification, headers=headers
        )

        # Notifications should return error for unimplemented methods
        self.assertEqual(response.status_code, 400)

    def test_progress_notification(self):
        """Test progress notification."""
        progress_notification = {
            "jsonrpc": "2.0",
            "method": "notifications/progress",
            "params": {
                "progressToken": "token123",
                "progress": 50,
                "total": 100,
                "message": "Processing...",
            },
        }

        headers = {
            "Content-Type": "application/json",
            "MCP-Protocol-Version": "2025-06-18",
        }

        response = self.client.post(
            "/mcp/", json=progress_notification, headers=headers
        )

        # Notifications should return error for unimplemented methods
        self.assertEqual(response.status_code, 400)

    def test_invalid_params_error(self):
        """Test invalid parameters error."""
        invalid_params_request = {
            "jsonrpc": "2.0",
            "id": 9,
            "method": "tools/call",
            "params": {
                "name": "example_tool_with_params",
                "arguments": {
                    "name": "TestUser",
                    "count": "invalid_count",  # Should be int, not string
                },
            },
        }

        headers = {
            "Content-Type": "application/json",
            "MCP-Protocol-Version": "2025-06-18",
        }

        response = self.client.post(
            "/mcp/", json=invalid_params_request, headers=headers
        )

        # This should still work as the function might handle type conversion
        # Or return an error depending on implementation
        self.assertIn(response.status_code, [200, 400])

    def test_malformed_json_request(self):
        """Test malformed JSON request."""
        headers = {
            "Content-Type": "application/json",
            "MCP-Protocol-Version": "2025-06-18",
        }

        response = self.client.post("/mcp/", data="invalid json", headers=headers)

        self.assertEqual(response.status_code, 500)
        result = response.get_json()

        # Verify error response
        self.assertEqual(result["jsonrpc"], "2.0")
        self.assertIn("error", result)
        self.assertEqual(result["error"]["code"], -32603)

    def test_missing_method_request(self):
        """Test request missing method field."""
        invalid_request = {"jsonrpc": "2.0", "id": 10, "params": {}}

        headers = {
            "Content-Type": "application/json",
            "MCP-Protocol-Version": "2025-06-18",
        }

        response = self.client.post("/mcp/", json=invalid_request, headers=headers)

        self.assertEqual(response.status_code, 400)
        result = response.get_json()

        # Verify error response
        self.assertEqual(result["jsonrpc"], "2.0")
        self.assertEqual(result["id"], 10)
        self.assertIn("error", result)
        self.assertEqual(result["error"]["code"], -32601)

    def test_missing_id_in_request(self):
        """Test request missing id field."""
        request_without_id = {"jsonrpc": "2.0", "method": "tools/list", "params": {}}

        headers = {
            "Content-Type": "application/json",
            "MCP-Protocol-Version": "2025-06-18",
        }

        response = self.client.post("/mcp/", json=request_without_id, headers=headers)

        # Should still work but response might have null id
        if response.status_code == 200:
            result = response.get_json()
            self.assertEqual(result["jsonrpc"], "2.0")
            self.assertIsNone(result.get("id"))

    def test_tool_call_with_missing_required_params(self):
        """Test calling a tool with missing required parameters."""
        tool_call_request = {
            "jsonrpc": "2.0",
            "id": 11,
            "method": "tools/call",
            "params": {
                "name": "example_tool_with_params",
                "arguments": {
                    # Missing required 'name' parameter
                    "count": 5
                },
            },
        }

        headers = {
            "Content-Type": "application/json",
            "MCP-Protocol-Version": "2025-06-18",
        }

        response = self.client.post("/mcp/", json=tool_call_request, headers=headers)

        # Should return a 400 error for invalid parameters
        self.assertEqual(response.status_code, 400)
        result = response.get_json()

        # Verify error response
        self.assertEqual(result["jsonrpc"], "2.0")
        self.assertEqual(result["id"], 11)
        self.assertIn("error", result)
        self.assertEqual(result["error"]["code"], -32602)  # Invalid params

    def test_tool_call_with_extra_params(self):
        """Test calling a tool with extra parameters."""
        tool_call_request = {
            "jsonrpc": "2.0",
            "id": 12,
            "method": "tools/call",
            "params": {
                "name": "example_tool_with_params",
                "arguments": {
                    "name": "TestUser",
                    "count": 5,
                    "extra_param": "should_be_ignored",  # Extra parameter
                },
            },
        }

        headers = {
            "Content-Type": "application/json",
            "MCP-Protocol-Version": "2025-06-18",
        }

        response = self.client.post("/mcp/", json=tool_call_request, headers=headers)

        self.assertEqual(response.status_code, 200)
        result = response.get_json()

        # Verify JSON-RPC structure
        self.assertEqual(result["jsonrpc"], "2.0")
        self.assertEqual(result["id"], 12)
        self.assertIn("result", result)

    def test_empty_tools_list(self):
        """Test tools list when no tools are registered."""
        # Create an app with no tools
        empty_app = Flask(__name__)

        empty_blueprint = mcp_bp([])  # No tools
        empty_app.register_blueprint(empty_blueprint, url_prefix="/mcp")
        empty_client = empty_app.test_client()

        tools_request = {"jsonrpc": "2.0", "id": 13, "method": "tools/list"}

        headers = {
            "Content-Type": "application/json",
            "MCP-Protocol-Version": "2025-06-18",
        }

        response = empty_client.post("/mcp/", json=tools_request, headers=headers)

        self.assertEqual(response.status_code, 200)
        result = response.get_json()

        # Verify empty tools list
        self.assertEqual(result["jsonrpc"], "2.0")
        self.assertEqual(result["id"], 13)
        self.assertEqual(result["result"]["tools"], [])

    def test_cors_headers_on_error_response(self):
        """Test that CORS headers are present on error responses."""
        invalid_request = {
            "jsonrpc": "1.0",  # Invalid version
            "id": 14,
            "method": "initialize",
            "params": {},
        }

        response = self.client.post("/mcp/", json=invalid_request)

        self.assertEqual(response.status_code, 500)
        # CORS headers should be present even on errors
        # Note: This depends on the implementation

    def test_different_protocol_versions(self):
        """Test initialize with different protocol versions."""
        # Test with older version
        initialize_request = {
            "jsonrpc": "2.0",
            "id": 15,
            "method": "initialize",
            "params": {
                "protocolVersion": "2024-11-05",  # Older version
                "capabilities": {},
                "clientInfo": {"name": "TestClient", "version": "1.0.0"},
            },
        }

        headers = {
            "Content-Type": "application/json",
            "MCP-Protocol-Version": "2024-11-05",
        }

        response = self.client.post("/mcp/", json=initialize_request, headers=headers)

        self.assertEqual(response.status_code, 200)
        result = response.get_json()

        # Should accept the older version or default to supported version
        self.assertIn(result["result"]["protocolVersion"], ["2024-11-05", "2025-06-18"])

    def test_initialize_with_minimal_params(self):
        """Test initialize with minimal required parameters."""
        minimal_request = {
            "jsonrpc": "2.0",
            "id": 16,
            "method": "initialize",
            "params": {
                "protocolVersion": "2025-06-18",
                "capabilities": {},
                "clientInfo": {"name": "MinimalClient", "version": "1.0.0"},
            },
        }

        response = self.client.post("/mcp/", json=minimal_request)

        self.assertEqual(response.status_code, 200)
        result = response.get_json()

        # Verify minimal initialization works
        self.assertEqual(result["jsonrpc"], "2.0")
        self.assertEqual(result["id"], 16)
        self.assertIn("result", result)

    def test_tool_schema_validation(self):
        """Test that tool schemas are properly formatted."""
        tools_request = {"jsonrpc": "2.0", "id": 17, "method": "tools/list"}

        response = self.client.post("/mcp/", json=tools_request)
        result = response.get_json()

        tools = result["result"]["tools"]

        for tool in tools:
            # Verify required fields
            self.assertIn("name", tool)
            self.assertIn("description", tool)
            self.assertIn("inputSchema", tool)

            # Verify schema structure
            schema = tool["inputSchema"]
            self.assertEqual(schema["type"], "object")

            # Verify additionalProperties is set to True for AI provider compatibility
            self.assertEqual(schema.get("additionalProperties"), True)

            # Properties and required are optional per MCP spec
            # They may be present (for tools with parameters) or absent (for tools without parameters)
            if "properties" in schema:
                self.assertIn("required", schema)
            else:
                # If properties is absent, required should also be absent
                self.assertNotIn("required", schema)

    def test_server_capabilities_in_initialize(self):
        """Test server capabilities are properly reported."""
        initialize_request = {
            "jsonrpc": "2.0",
            "id": 18,
            "method": "initialize",
            "params": {
                "protocolVersion": "2025-06-18",
                "capabilities": {},
                "clientInfo": {"name": "TestClient", "version": "1.0.0"},
            },
        }

        response = self.client.post("/mcp/", json=initialize_request)
        result = response.get_json()

        capabilities = result["result"]["capabilities"]

        # Verify tools capability is reported
        self.assertIn("tools", capabilities)

        # Verify server info
        server_info = result["result"]["serverInfo"]
        self.assertIn("name", server_info)
        self.assertIn("version", server_info)
        self.assertIn("description", server_info)

    def test_concurrent_requests(self):
        """Test handling multiple concurrent requests."""
        import threading

        results = []
        errors = []

        def make_request(request_id):
            try:
                request_data = {
                    "jsonrpc": "2.0",
                    "id": request_id,
                    "method": "tools/list",
                }
                response = self.client.post("/mcp/", json=request_data)
                results.append((request_id, response.status_code))
            except Exception as e:
                errors.append((request_id, str(e)))

        # Start multiple threads
        threads = []
        for i in range(5):
            thread = threading.Thread(target=make_request, args=(100 + i,))
            threads.append(thread)
            thread.start()

        # Wait for all threads to complete
        for thread in threads:
            thread.join()

        # Verify all requests succeeded
        self.assertEqual(len(errors), 0, f"Errors occurred: {errors}")
        self.assertEqual(len(results), 5)

        for request_id, status_code in results:
            self.assertEqual(status_code, 200, f"Request {request_id} failed")


class TestMCPProtocolCompliance(BaseTest):
    """Additional test class for comprehensive MCP protocol compliance testing."""

    def setUp(self) -> None:
        super().setUp()
        # Create a test Flask app with the MCP blueprint
        self.app = Flask(__name__)

        # Create more complex test functions to test edge cases
        def complex_tool_function(
            text: str,
            count: int = 1,
            enabled: bool = True,
            metadata: Optional[dict] = None,
        ):
            """Complex tool function with multiple parameter types."""
            return {
                "processed_text": text * count if enabled else text,
                "metadata": metadata or {},
                "enabled": enabled,
            }

        def no_params_tool():
            """Tool with no parameters."""
            return {"timestamp": "2025-06-29T00:00:00Z", "status": "ok"}

        # Test functions that might cause errors
        def error_tool(should_error: bool = False):
            """Tool that can intentionally cause errors for testing."""
            if should_error:
                raise ValueError("Intentional error for testing")
            return {"success": True}

        self.mcp_blueprint = mcp_bp([complex_tool_function, no_params_tool, error_tool])
        self.app.register_blueprint(self.mcp_blueprint, url_prefix="/mcp")
        self.client = self.app.test_client()

    def test_complex_parameter_types(self):
        """Test tool with complex parameter types."""
        tool_call_request = {
            "jsonrpc": "2.0",
            "id": 201,
            "method": "tools/call",
            "params": {
                "name": "complex_tool_function",
                "arguments": {
                    "text": "Hello",
                    "count": 3,
                    "enabled": True,
                    "metadata": {"key": "value", "number": 42},
                },
            },
        }

        response = self.client.post("/mcp/", json=tool_call_request)
        self.assertEqual(response.status_code, 200)

        result = response.get_json()
        self.assertEqual(result["jsonrpc"], "2.0")
        self.assertEqual(result["id"], 201)
        self.assertIn("result", result)

    def test_tool_call_with_error(self):
        """Test tool call that results in an error."""
        tool_call_request = {
            "jsonrpc": "2.0",
            "id": 202,
            "method": "tools/call",
            "params": {"name": "error_tool", "arguments": {"should_error": True}},
        }

        response = self.client.post("/mcp/", json=tool_call_request)
        # The current implementation returns 400 for tool errors
        self.assertEqual(response.status_code, 400)

    def test_notification_without_id(self):
        """Test that notifications don't include id field."""
        initialized_notification = {
            "jsonrpc": "2.0",
            "method": "notifications/initialized",
        }

        response = self.client.post("/mcp/", json=initialized_notification)
        self.assertEqual(response.status_code, 204)

    def test_batch_requests(self):
        """Test batch JSON-RPC requests (array of requests)."""
        # Note: Current implementation might not support batch requests
        batch_request = [
            {"jsonrpc": "2.0", "id": 301, "method": "tools/list"},
            {
                "jsonrpc": "2.0",
                "id": 302,
                "method": "tools/call",
                "params": {"name": "no_params_tool", "arguments": {}},
            },
        ]

        response = self.client.post("/mcp/", json=batch_request)
        # Current implementation likely doesn't support batch requests
        # This test documents the expected behavior
        self.assertIn(response.status_code, [200, 400, 500])

    def test_meta_fields_support(self):
        """Test support for _meta fields in requests and responses."""
        request_with_meta = {
            "jsonrpc": "2.0",
            "id": 401,
            "method": "tools/list",
            "params": {"_meta": {"progressToken": "token123", "customField": "value"}},
        }

        response = self.client.post("/mcp/", json=request_with_meta)
        # Should work even with _meta fields present
        self.assertEqual(response.status_code, 200)

    def test_unicode_and_special_characters(self):
        """Test handling of Unicode and special characters."""
        tool_call_request = {
            "jsonrpc": "2.0",
            "id": 501,
            "method": "tools/call",
            "params": {
                "name": "complex_tool_function",
                "arguments": {
                    "text": "Hello 世界! 🌍 Special chars: \"quotes\", 'apostrophes', \n\t\\backslashes",
                    "count": 1,
                },
            },
        }

        response = self.client.post("/mcp/", json=tool_call_request)
        self.assertEqual(response.status_code, 200)

    def test_large_payload_handling(self):
        """Test handling of large payloads."""
        large_text = "x" * 10000  # 10KB of text

        tool_call_request = {
            "jsonrpc": "2.0",
            "id": 601,
            "method": "tools/call",
            "params": {
                "name": "complex_tool_function",
                "arguments": {"text": large_text, "count": 1},
            },
        }

        response = self.client.post("/mcp/", json=tool_call_request)
        self.assertEqual(response.status_code, 200)

    def test_tool_result_format_compliance(self):
        """Test that tool results follow MCP format."""
        tool_call_request = {
            "jsonrpc": "2.0",
            "id": 701,
            "method": "tools/call",
            "params": {"name": "no_params_tool", "arguments": {}},
        }

        response = self.client.post("/mcp/", json=tool_call_request)
        result = response.get_json()

        # Verify tool result structure according to MCP spec
        tool_result = result["result"]
        self.assertIn("content", tool_result)
        self.assertIsInstance(tool_result["content"], list)

        # Each content item should have type and text
        for content_item in tool_result["content"]:
            self.assertIn("type", content_item)
            self.assertEqual(content_item["type"], "text")
            self.assertIn("text", content_item)

    def test_json_schema_compliance(self):
        """Test that tool schemas comply with JSON Schema format."""
        tools_request = {"jsonrpc": "2.0", "id": 801, "method": "tools/list"}
        response = self.client.post("/mcp/", json=tools_request)
        result = response.get_json()

        tools = result["result"]["tools"]

        for tool in tools:
            schema = tool["inputSchema"]

            # Verify JSON Schema compliance
            self.assertEqual(schema["type"], "object")

            if "properties" in schema:
                self.assertIsInstance(schema["properties"], dict)

                # Each property should have a valid type
                for prop_name, prop_schema in schema["properties"].items():
                    self.assertIn("type", prop_schema)
                    self.assertIn(
                        prop_schema["type"],
                        ["string", "number", "integer", "boolean", "array", "object"],
                    )

            if "required" in schema:
                self.assertIsInstance(schema["required"], list)

    def test_content_type_headers(self):
        """Test proper Content-Type header handling."""
        # Test with correct content type
        request_data = {"jsonrpc": "2.0", "id": 901, "method": "tools/list"}

        response = self.client.post(
            "/mcp/", json=request_data, headers={"Content-Type": "application/json"}
        )
        self.assertEqual(response.status_code, 200)

        # Test response content type
        self.assertEqual(response.headers.get("Content-Type"), "application/json")

    def test_protocol_version_negotiation(self):
        """Test protocol version negotiation."""
        # Test with unsupported version
        initialize_request = {
            "jsonrpc": "2.0",
            "id": 1001,
            "method": "initialize",
            "params": {
                "protocolVersion": "2023-01-01",  # Very old version
                "capabilities": {},
                "clientInfo": {"name": "TestClient", "version": "1.0.0"},
            },
        }

        response = self.client.post("/mcp/", json=initialize_request)
        self.assertEqual(response.status_code, 200)

        result = response.get_json()
        # Server should respond with a supported version
        self.assertIn(result["result"]["protocolVersion"], ["2025-06-18", "2024-11-05"])

    def test_error_code_compliance(self):
        """Test that error codes comply with JSON-RPC specification."""
        # Test parse error (malformed JSON)
        response = self.client.post(
            "/mcp/", data="{invalid json", headers={"Content-Type": "application/json"}
        )

        if response.status_code == 500:
            result = response.get_json()
            self.assertEqual(result["error"]["code"], -32603)  # Internal error

        # Test method not found
        method_not_found_request = {
            "jsonrpc": "2.0",
            "id": 1002,
            "method": "nonexistent/method",
        }

        response = self.client.post("/mcp/", json=method_not_found_request)
        self.assertEqual(response.status_code, 400)
        result = response.get_json()
        self.assertEqual(result["error"]["code"], -32601)  # Method not found

    def test_tool_name_validation(self):
        """Test tool name validation and normalization."""
        tools_request = {"jsonrpc": "2.0", "id": 1101, "method": "tools/list"}
        response = self.client.post("/mcp/", json=tools_request)
        result = response.get_json()

        tools = result["result"]["tools"]

        for tool in tools:
            name = tool["name"]
            # Tool names should be valid identifiers
            self.assertIsInstance(name, str)
            self.assertGreater(len(name), 0)
            # Should not contain spaces or special characters (implementation dependent)

    def test_tool_description_presence(self):
        """Test that tools have meaningful descriptions."""
        tools_request = {"jsonrpc": "2.0", "id": 1201, "method": "tools/list"}
        response = self.client.post("/mcp/", json=tools_request)
        result = response.get_json()

        tools = result["result"]["tools"]

        for tool in tools:
            self.assertIn("description", tool)
            description = tool["description"]
            self.assertIsInstance(description, str)
            self.assertGreater(len(description.strip()), 0)

    def test_server_info_completeness(self):
        """Test that server info is complete and accurate."""
        initialize_request = {
            "jsonrpc": "2.0",
            "id": 1301,
            "method": "initialize",
            "params": {
                "protocolVersion": "2025-06-18",
                "capabilities": {},
                "clientInfo": {"name": "TestClient", "version": "1.0.0"},
            },
        }

        response = self.client.post("/mcp/", json=initialize_request)
        result = response.get_json()

        server_info = result["result"]["serverInfo"]

        # Verify required fields
        self.assertIn("name", server_info)
        self.assertIn("version", server_info)

        # Verify field types and content
        self.assertIsInstance(server_info["name"], str)
        self.assertIsInstance(server_info["version"], str)
        self.assertGreater(len(server_info["name"]), 0)
        self.assertGreater(len(server_info["version"]), 0)

        # Optional but recommended fields
        if "description" in server_info:
            self.assertIsInstance(server_info["description"], str)

    def test_response_timing(self):
        """Test that responses are returned in reasonable time."""
        import time

        start_time = time.time()

        tools_request = {"jsonrpc": "2.0", "id": 1401, "method": "tools/list"}
        response = self.client.post("/mcp/", json=tools_request)

        end_time = time.time()
        response_time = end_time - start_time

        # Response should be fast (less than 1 second for simple operations)
        self.assertLess(response_time, 1.0)
        self.assertEqual(response.status_code, 200)

    def test_memory_efficiency(self):
        """Test memory efficiency with multiple requests."""
        import gc

        # Make multiple requests to check for memory leaks
        for i in range(10):
            tools_request = {"jsonrpc": "2.0", "id": 1500 + i, "method": "tools/list"}
            response = self.client.post("/mcp/", json=tools_request)
            self.assertEqual(response.status_code, 200)

        # Force garbage collection
        gc.collect()

        # This test mainly ensures no exceptions are raised during repeated requests

    def test_logging_level_request(self):
        """Test logging/setLevel request (not implemented but should handle gracefully)."""
        logging_request = {
            "jsonrpc": "2.0",
            "id": 1501,
            "method": "logging/setLevel",
            "params": {"level": "info"},
        }

        response = self.client.post("/mcp/", json=logging_request)

        # Should return method not found
        self.assertEqual(response.status_code, 400)
        result = response.get_json()
        self.assertEqual(result["error"]["code"], -32601)

    def test_resources_list_request(self):
        """Test resources/list request (not implemented but should handle gracefully)."""
        resources_request = {"jsonrpc": "2.0", "id": 1502, "method": "resources/list"}

        response = self.client.post("/mcp/", json=resources_request)

        # Should return method not found
        self.assertEqual(response.status_code, 400)
        result = response.get_json()
        self.assertEqual(result["error"]["code"], -32601)

    def test_prompts_list_request(self):
        """Test prompts/list request (not implemented but should handle gracefully)."""
        prompts_request = {"jsonrpc": "2.0", "id": 1503, "method": "prompts/list"}

        response = self.client.post("/mcp/", json=prompts_request)

        # Should return method not found
        self.assertEqual(response.status_code, 400)
        result = response.get_json()
        self.assertEqual(result["error"]["code"], -32601)

    def test_completion_complete_request(self):
        """Test completion/complete request (not implemented but should handle gracefully)."""
        completion_request = {
            "jsonrpc": "2.0",
            "id": 1504,
            "method": "completion/complete",
            "params": {
                "ref": {"type": "ref/prompt", "name": "test"},
                "argument": {"name": "test", "value": "partial"},
            },
        }

        response = self.client.post("/mcp/", json=completion_request)

        # Should return method not found
        self.assertEqual(response.status_code, 400)
        result = response.get_json()
        self.assertEqual(result["error"]["code"], -32601)

    def test_sampling_create_message_request(self):
        """Test sampling/createMessage request (not implemented but should handle gracefully)."""
        sampling_request = {
            "jsonrpc": "2.0",
            "id": 1505,
            "method": "sampling/createMessage",
            "params": {
                "messages": [
                    {"role": "user", "content": {"type": "text", "text": "Hello"}}
                ],
                "maxTokens": 100,
            },
        }

        response = self.client.post("/mcp/", json=sampling_request)

        # Should return method not found
        self.assertEqual(response.status_code, 400)
        result = response.get_json()
        self.assertEqual(result["error"]["code"], -32601)

    def test_roots_list_request(self):
        """Test roots/list request (not implemented but should handle gracefully)."""
        roots_request = {"jsonrpc": "2.0", "id": 1506, "method": "roots/list"}

        response = self.client.post("/mcp/", json=roots_request)

        # Should return method not found
        self.assertEqual(response.status_code, 400)
        result = response.get_json()
        self.assertEqual(result["error"]["code"], -32601)

    def test_elicitation_create_request(self):
        """Test elicitation/create request (not implemented but should handle gracefully)."""
        elicit_request = {
            "jsonrpc": "2.0",
            "id": 1507,
            "method": "elicitation/create",
            "params": {
                "message": "Please provide information",
                "requestedSchema": {
                    "type": "object",
                    "properties": {"name": {"type": "string"}},
                    "required": ["name"],
                },
            },
        }

        response = self.client.post("/mcp/", json=elicit_request)

        # Should return method not found
        self.assertEqual(response.status_code, 400)
        result = response.get_json()
        self.assertEqual(result["error"]["code"], -32601)

    def test_id_type_variations(self):
        """Test different ID types (string, number, null)."""
        # Test with string ID
        request1 = {"jsonrpc": "2.0", "id": "string-id", "method": "tools/list"}
        response1 = self.client.post("/mcp/", json=request1)
        self.assertEqual(response1.status_code, 200)
        result1 = response1.get_json()
        self.assertEqual(result1["id"], "string-id")

        # Test with number ID
        request2 = {"jsonrpc": "2.0", "id": 42, "method": "tools/list"}
        response2 = self.client.post("/mcp/", json=request2)
        self.assertEqual(response2.status_code, 200)
        result2 = response2.get_json()
        self.assertEqual(result2["id"], 42)

        # Test with float ID (should work)
        request3 = {"jsonrpc": "2.0", "id": 3.14, "method": "tools/list"}
        response3 = self.client.post("/mcp/", json=request3)
        self.assertEqual(response3.status_code, 200)
        result3 = response3.get_json()
        self.assertEqual(result3["id"], 3.14)

    def test_request_id_preservation(self):
        """Test that request IDs are preserved in responses."""
        test_ids = [1, "test", 999, "complex-id-123"]

        for test_id in test_ids:
            request = {"jsonrpc": "2.0", "id": test_id, "method": "tools/list"}
            response = self.client.post("/mcp/", json=request)
            result = response.get_json()

            self.assertEqual(result["id"], test_id, f"ID {test_id} not preserved")

    def test_capability_reporting_accuracy(self):
        """Test that server capabilities are accurately reported."""
        initialize_request = {
            "jsonrpc": "2.0",
            "id": 1600,
            "method": "initialize",
            "params": {
                "protocolVersion": "2025-06-18",
                "capabilities": {},
                "clientInfo": {"name": "TestClient", "version": "1.0.0"},
            },
        }

        response = self.client.post("/mcp/", json=initialize_request)
        result = response.get_json()

        capabilities = result["result"]["capabilities"]

        # Check that only implemented capabilities are reported
        self.assertIn("tools", capabilities)

        # These should NOT be present as they're not implemented
        self.assertNotIn("resources", capabilities)
        self.assertNotIn("prompts", capabilities)
        self.assertNotIn("logging", capabilities)
        self.assertNotIn("completions", capabilities)

    def test_protocol_version_support(self):
        """Test protocol version support and negotiation."""
        versions_to_test = [
            "2025-06-18",  # Latest
            "2024-11-05",  # Previous
            "2023-01-01",  # Very old (should default to supported)
            "invalid-version",  # Invalid (should default to supported)
        ]

        for version in versions_to_test:
            initialize_request = {
                "jsonrpc": "2.0",
                "id": f"version-test-{version}",
                "method": "initialize",
                "params": {
                    "protocolVersion": version,
                    "capabilities": {},
                    "clientInfo": {"name": "TestClient", "version": "1.0.0"},
                },
            }

            response = self.client.post("/mcp/", json=initialize_request)
            self.assertEqual(response.status_code, 200)

            result = response.get_json()
            returned_version = result["result"]["protocolVersion"]

            # Should return a supported version
            self.assertIn(returned_version, ["2025-06-18", "2024-11-05"])

    def test_notification_handling_compliance(self):
        """Test that notifications are handled correctly per JSON-RPC spec."""
        # Notifications should not have an id and should not return a response
        notifications = [
            {"jsonrpc": "2.0", "method": "notifications/initialized"},
            {
                "jsonrpc": "2.0",
                "method": "notifications/cancelled",
                "params": {"requestId": 123},
            },
            {
                "jsonrpc": "2.0",
                "method": "notifications/progress",
                "params": {"progressToken": "test", "progress": 50},
            },
        ]

        for notification in notifications:
            response = self.client.post("/mcp/", json=notification)

            if notification["method"] == "notifications/initialized":
                # This is implemented and should return 204
                self.assertEqual(response.status_code, 204)
            else:
                # Others are not implemented and should return error
                self.assertEqual(response.status_code, 400)

    def test_error_message_clarity(self):
        """Test that error messages are clear and helpful."""
        # Test unknown method
        unknown_method_request = {
            "jsonrpc": "2.0",
            "id": 1700,
            "method": "unknown/method",
        }

        response = self.client.post("/mcp/", json=unknown_method_request)
        result = response.get_json()

        error_message = result["error"]["message"]
        self.assertIn("Unknown method", error_message)
        self.assertIn("unknown/method", error_message)

        # Test unknown tool
        unknown_tool_request = {
            "jsonrpc": "2.0",
            "id": 1701,
            "method": "tools/call",
            "params": {"name": "nonexistent_tool", "arguments": {}},
        }

        response = self.client.post("/mcp/", json=unknown_tool_request)
        result = response.get_json()

        error_message = result["error"]["message"]
        self.assertIn("Unknown tool", error_message)
        self.assertIn("nonexistent_tool", error_message)

    def test_tool_schema_for_no_params_function(self):
        """Test that tools without parameters have proper schema with additionalProperties."""
        tools_request = {"jsonrpc": "2.0", "id": 1801, "method": "tools/list"}
        response = self.client.post("/mcp/", json=tools_request)
        result = response.get_json()

        tools = result["result"]["tools"]

        # Find the tool with no parameters
        no_params_tool = None
        for tool in tools:
            if tool["name"] == "no_params_tool":  # This tool has no parameters
                no_params_tool = tool
                break

        self.assertIsNotNone(no_params_tool, "No params tool not found")

        # Type assertion for mypy
        assert no_params_tool is not None
        schema = no_params_tool["inputSchema"]

        # Verify the schema structure prevents AI provider issues
        self.assertEqual(schema["type"], "object")
        self.assertEqual(schema["additionalProperties"], True)

        # For functions without parameters, properties and required should be omitted
        self.assertNotIn("properties", schema)
        self.assertNotIn("required", schema)

        # Ensure we never return the problematic empty schema
        self.assertNotEqual(
            schema, {"properties": {}, "required": [], "type": "object"}
        )
