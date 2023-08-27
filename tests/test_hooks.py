import json
import tempfile
from pathlib import Path
import unittest
import abstra.hooks as hooks
from .fixtures import init_dir, clear_dir


class TestUtils(unittest.TestCase):
    def setUp(self) -> None:
        self.root = init_dir()

    def tearDown(self) -> None:
        clear_dir(self.root)

    def test_get_request_without_file(self):
        body, query, headers = hooks.get_request()
        self.assertIsNone(body)
        self.assertIsNone(query)
        self.assertIsNone(headers)

    def test_get_request_with_local_file(self):
        local_file = Path(tempfile.gettempdir(), "request.json")
        with open(local_file, "w") as f:
            f.write(
                json.dumps(
                    {
                        "body": "ABCD",
                        "query": {"q": "pandas"},
                        "headers": {"content-type": "application/json"},
                    }
                )
            )
        body, query, headers = hooks.get_request(local_file=local_file)
        self.assertEqual(body, "ABCD")
        self.assertEqual(query, {"q": "pandas"})
        self.assertEqual(headers, {"content-type": "application/json"})

    def test_send_response_with_local_file(self):
        local_file = Path(tempfile.gettempdir(), "response.json")
        hooks.send_response(
            body="ABCD",
            status_code=207,
            headers={"Session": 123},
            local_file=local_file,
        )

        with open(local_file) as f:
            content = f.read()
            response = json.loads(content)

        self.assertEqual(response["body"], "ABCD")
        self.assertEqual(response["status_code"], 207)
        self.assertEqual(response["headers"], {"Session": 123})

    def test_send_json_with_local_file(self):
        local_file = Path(tempfile.gettempdir(), "response.json")
        hooks.send_json(
            data={"ok": True},
            status_code=207,
            headers={"Session": 123},
            local_file=local_file,
        )

        with open(local_file) as f:
            content = f.read()
            response = json.loads(content)

        self.assertEqual(response["body"], '{"ok": true}')
        self.assertEqual(response["status_code"], 207)
        self.assertEqual(
            response["headers"],
            {
                "Session": 123,
                "content-type": "application/json",
            },
        )
