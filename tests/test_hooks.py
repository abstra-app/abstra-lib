import json
import tempfile
from pathlib import Path

import abstra.hooks as hooks


class TestUtils:
    def test_get_request_without_file(self):
        body, query, headers = hooks.get_request()
        assert body is None
        assert query is None
        assert headers is None

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
        assert body == "ABCD"
        assert query == {"q": "pandas"}
        assert headers == {"content-type": "application/json"}

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

        assert response["body"] == "ABCD"
        assert response["status_code"] == 207
        assert response["headers"] == {"Session": 123}

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

        assert response["body"] == '{"ok": true}'
        assert response["status_code"] == 207
        assert response["headers"] == {
            "Session": 123,
            "content-type": "application/json",
        }
