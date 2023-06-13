import os
import shutil
from uuid import uuid4
from pathlib import PosixPath
from abstra_cli.utils import files_from_directory


def generate_random_folder():
    name = "dir-" + uuid4().hex
    path = "/tmp/" + name
    os.mkdir(path)
    return path


class TestListing:
    def add_file(self, name, content, path=None):
        filepath = (path or self.path) + "/" + name
        with open(filepath, "w", encoding="utf-8") as f:
            f.write(content)
        return filepath

    def add_folder(self, name, path=None):
        folderpath = (path or self.path) + "/" + name
        os.mkdir(folderpath)
        return folderpath

    def setup_method(self):
        self.path = generate_random_folder()
        os.chdir(self.path)

    def teardown_method(self):
        os.chdir("/tmp")
        shutil.rmtree(self.path)

    def test_empty_directory(self):
        files = files_from_directory(self.path)
        assert files == []

    def test_no_ignore(self):
        filepath = self.add_file("foo", "bar")
        files = files_from_directory(self.path)
        assert files == [PosixPath(filepath)]

    def test_ignore_file(self):
        self.add_file(".abstraignore", "ignored")
        self.add_file("ignored", "foo")
        tracked = self.add_file("tracked", "bar")
        files = files_from_directory(self.path)
        assert files == [PosixPath(tracked)]

    def test_ignore_empty(self):
        self.add_folder("ignored")
        self.add_folder("empty")
        self.add_file(".abstraignore", "ignored")
        files = files_from_directory(self.path)
        assert files == []

    def test_ignore_folder(self):
        ignored = self.add_folder("ignored")
        self.add_file("abc", "foo", path=ignored)
        ignored2 = self.add_folder("ignored2")
        self.add_file("xyz", "foo", path=ignored2)
        folder = self.add_folder("tracked")
        tracked = self.add_file("tracked", "tracked", path=folder)
        self.add_file(".abstraignore", "ignored\nignored2/")
        files = files_from_directory(self.path)
        assert files == [PosixPath(tracked)]

    def test_ignore_wildcard(self):
        self.add_file("ignored.ipynb", "foo")
        tracked = self.add_file("tracked", "bar")
        self.add_file(".abstraignore", "*.ipynb")
        files = files_from_directory(self.path)
        assert files == [PosixPath(tracked)]

    def test_ignore_abstra_folder(self):
        abstra = self.add_folder(".abstra")
        self.add_file("credentials", "SECRET", path=abstra)
        files = files_from_directory(self.path)
        assert files == []

    def test_ignore_git_folder(self):
        git = self.add_folder(".git")
        self.add_file("somefile", "somecontent", path=git)
        files = files_from_directory(self.path)
        assert files == []

    def test_ignore_abstra_ignore_file(self):
        self.add_file(".abstraignore", "ignored")
        files = files_from_directory(self.path)
        assert files == []

    def test_ignore_git_ignore_file(self):
        self.add_file(".gitignore", "ignored")
        files = files_from_directory(self.path)
        assert files == []
