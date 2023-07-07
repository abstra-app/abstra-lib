import tempfile
import unittest
from uuid import uuid4 as uuid
from pathlib import Path

from abstra_server.api import API

from .fixtures import init_dir


class TestDashes(unittest.TestCase):
    def test_api_create(self):
        workspace_root_path = Path(tempfile.gettempdir(), f"{uuid()}")
        init_dir(workspace_root_path)

        api = API(root=workspace_root_path)

        dashes_len = len(api.get_dashes())

        dash = api.create_dash()

        self.assertEqual(len(api.get_dashes()), dashes_len + 1)

        self.assertEqual(dash.layout.slot.__dict__, {})

    def test_api_update(self):
        workspace_root_path = Path(tempfile.gettempdir(), f"{uuid()}")
        init_dir(workspace_root_path)

        api = API(root=workspace_root_path)

        dash = api.create_dash()

        new_layout = {
            "version": "0.2",
            "props": {},
            "slot": {
                "75838e71-92cd-4d8c-bfc0-f9ae23c32559": {
                    "events": {},
                    "id": "75838e71-92cd-4d8c-bfc0-f9ae23c32559",
                    "props": {"label": '"Click here!"'},
                    "position": {
                        "rowStart": 8,
                        "rowEnd": 9,
                        "colStart": 8,
                        "colEnd": 9,
                    },
                    "type": "click-input",
                    "variable": None,
                }
            },
        }

        updated_dash = api.update_dash(
            dash.path, dict(title="new title", layout=new_layout)
        )
        self.maxDiff = None
        self.assertEqual(updated_dash.title, "new title")
        self.assertEqual(updated_dash.layout.__dict__, new_layout)


if __name__ == "__main__":
    unittest.main()
