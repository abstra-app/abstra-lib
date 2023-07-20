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

        file_path = Path(workspace_root_path, dash.file)

        self.assertTrue(file_path.exists())

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

    def test_updating_file_from_existing_to_non_existing(self):
        # given a dash
        workspace_root_path = Path(tempfile.gettempdir(), f"{uuid()}")
        init_dir(workspace_root_path)
        api = API(root=workspace_root_path)
        dash = api.create_dash()
        old_file = Path(workspace_root_path, dash.file)
        new_file = Path(workspace_root_path, "non-existing-file.py")

        # when updating the file to a non existing file
        api.update_dash(dash.path, dict(file="non-existing-file.py"))

        # then the existing file is renamed
        self.assertFalse(old_file.exists())
        self.assertTrue(new_file.exists())

    def test_updating_file_from_non_existing_to_existing(self):
        # given a dash
        workspace_root_path = Path(tempfile.gettempdir(), f"{uuid()}")
        init_dir(workspace_root_path)
        api = API(root=workspace_root_path)
        dash = api.create_dash()
        old_file = Path(workspace_root_path, dash.file)
        new_file = Path(workspace_root_path, "existing-file.py")
        old_file.unlink()
        new_file.write_text("print('hello')")

        # when updating the file to a non existing file
        api.update_dash(dash.path, dict(file="existing-file.py"))

        # then just the file property is updated
        self.assertFalse(old_file.exists())
        self.assertTrue(new_file.exists())


if __name__ == "__main__":
    unittest.main()
