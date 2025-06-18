import os
import unittest
from pathlib import Path


class TestInitFiles(unittest.TestCase):
    def setUp(self) -> None:
        self.lib_root = Path(__file__).parent.parent

    def collect_all_folders(self, root):
        folders = []
        for dirpath, dirnames, filenames in os.walk(root):
            if any(skip in dirpath for skip in [".git", "__pycache__", ".venv"]):
                continue
            if not filenames and not dirnames:
                continue
            folders.append(dirpath)
        return folders

    def verify_each_folder(self, folders):
        for folder in folders:
            with self.subTest(folder=folder):
                init_file = os.path.join(folder, "__init__.py")

                py_files = [file for file in os.listdir(folder) if file.endswith(".py")]

                if len(py_files) and not os.path.exists(init_file):
                    self.fail(f"Missing __init__.py file in folder '{folder}'")

    def test_init_file_exists_abstra(self):
        folders = self.collect_all_folders(self.lib_root / "abstra")
        self.verify_each_folder(folders)

    def test_init_file_exists_abstra_internals(self):
        folders = self.collect_all_folders(self.lib_root / "abstra_internals")
        self.verify_each_folder(folders)

    def test_init_file_exists_abstra_statics(self):
        folders = self.collect_all_folders(self.lib_root / "abstra_statics")
        self.verify_each_folder(folders)


if __name__ == "__main__":
    unittest.main()
