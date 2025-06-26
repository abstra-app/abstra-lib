#!/usr/bin/env python3
"""
Test script for Abstra MCP server functionality.
This script tests the MCP blueprint directly using Flask's test client.
"""

from flask import Flask

from abstra_internals.utils.mcp import mcp_bp
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
