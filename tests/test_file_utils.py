from abstra_cli.utils import remove_filepath_prefix


class TestFileUtils:
    def test_remove_filepath_prefix_no_dot(self):
        filepath = "folder/file"
        prefix = "folder"
        assert remove_filepath_prefix(filepath, prefix) == "file"

    def test_remove_filepath_prefix_dotted_both(self):
        filepath = "./folder/file"
        prefix = "./folder"
        assert remove_filepath_prefix(filepath, prefix) == "file"

    def test_remove_filepath_prefix_dotted_filepath(self):
        filepath = "./folder/file"
        prefix = "folder"
        assert remove_filepath_prefix(filepath, prefix) == "file"

    def test_remove_filepath_prefix_dotted_prefix(self):
        filepath = "folder/file"
        prefix = "./folder"
        assert remove_filepath_prefix(filepath, prefix) == "file"
