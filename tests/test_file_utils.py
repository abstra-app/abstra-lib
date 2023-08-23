import unittest
from pathlib import Path
from abstra_cli.utils import remove_filepath_prefix
from .fixtures import init_dir, clear_dir
from abstra.widgets.file_utils import convert_file


class TestFileUtils(unittest.TestCase):
    def setUp(self):
        self.root = init_dir()

    def tearDown(self):
        clear_dir(self.root)

    def test_remove_filepath_prefix_no_dot(self):
        filepath = "folder/file"
        prefix = "folder"
        self.assertEqual(remove_filepath_prefix(filepath, prefix), "file")

    def test_remove_filepath_prefix_dotted_both(self):
        filepath = "./folder/file"
        prefix = "./folder"
        self.assertEqual(remove_filepath_prefix(filepath, prefix), "file")

    def test_remove_filepath_prefix_dotted_filepath(self):
        filepath = "./folder/file"
        prefix = "folder"
        self.assertEqual(remove_filepath_prefix(filepath, prefix), "file")

    def test_remove_filepath_prefix_dotted_prefix(self):
        filepath = "folder/file"
        prefix = "./folder"
        self.assertEqual(remove_filepath_prefix(filepath, prefix), "file")

    def test_convert_file_preserve_file_name(self):
        path = self.root.joinpath("file.txt").absolute()
        path.write_text("test")
        path_str = str(path)
        converted = convert_file(path_str)
        self.assertTrue(converted.endswith("file.txt"))
