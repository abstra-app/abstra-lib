import io
import unittest

from abstra_internals.server.apps import get_local_app
from abstra_internals.server.controller.main import MainController
from abstra_internals.server.utils import send_from_dist
from abstra_internals.widgets.apis import get_random_filepath
from abstra_internals.widgets.file_utils import convert_file

from .fixtures import clear_dir, get_cloud_client, init_dir


class TestFileSending(unittest.TestCase):
    def setUp(self) -> None:
        self.path = init_dir()
        controller = MainController()

        self.app = get_local_app(controller)
        self.app_context = self.app.app_context()
        self.app_context.push()

    def tearDown(self) -> None:
        self.app_context.pop()
        clear_dir(self.path)

    def test_mime_type(self):
        with self.app.test_request_context("/test.js"):
            js_file = "test.js"
            self.path.joinpath(js_file).write_text("console.log('hello world')")
            html_file = "test.html"
            self.path.joinpath(html_file).write_text("<h1>Hello world</h1>")
            css_file = "test.css"
            self.path.joinpath(css_file).write_text("h1 { color: red; }")

            js_response = send_from_dist(str(js_file), "index.html", self.path)
            self.assertEqual(js_response.mimetype, "application/javascript")
            self.assertEqual(
                js_response.headers["Content-Type"],
                "application/javascript; charset=utf-8",
            )
            html_response = send_from_dist(str(html_file), "index.html", self.path)
            self.assertEqual(html_response.mimetype, "text/html")
            self.assertEqual(
                html_response.headers["Content-Type"], "text/html; charset=utf-8"
            )
            css_response = send_from_dist(str(css_file), "index.html", self.path)
            self.assertEqual(css_response.mimetype, "text/css")
            self.assertEqual(
                css_response.headers["Content-Type"], "text/css; charset=utf-8"
            )


class TestFileUtils(unittest.TestCase):
    def setUp(self) -> None:
        self.path = init_dir()

    def tearDown(self) -> None:
        clear_dir(self.path)

    def test_get_random_filepath(self):
        external_name, _ = get_random_filepath("test.txt")
        self.assertTrue(external_name.endswith("/test.txt"))


class TestFileUpload(unittest.TestCase):
    def setUp(self) -> None:
        self.path = init_dir()
        self.app = get_cloud_client()

    def tearDown(self) -> None:
        clear_dir(self.path)

    def test_convert_file_path(self):
        tmp_file = self.path.joinpath("tmp.txt")
        tmp_file.write_text("hello world")

        external_path = convert_file(tmp_file)

        # assert path format like /_files/uuid/filename
        self.assertTrue(external_path.startswith("/_files/"))
        self.assertTrue(external_path.endswith("/tmp.txt"))

        # assert file exists
        res = self.app.get(external_path)
        self.assertEqual(res.status_code, 200)
        self.assertEqual(res.data, b"hello world")

    def test_convert_file_buffered_reader(self):
        tmp_file = self.path.joinpath("tmp.txt")
        tmp_file.write_text("hello world")

        with open(tmp_file, "rb") as f:
            external_path = convert_file(f)

        # assert path format like /_files/uuid/filename
        self.assertTrue(external_path.startswith("/_files/"))
        self.assertTrue(external_path.endswith("/tmp.txt"))

        # assert file exists
        res = self.app.get(external_path)
        self.assertEqual(res.status_code, 200)
        self.assertEqual(res.data, b"hello world")

    def test_convert_file_io(self):
        external_path = convert_file(io.BytesIO(b"hello world"))

        # assert path format like /_files/uuid
        self.assertTrue(external_path.startswith("/_files/"))

        # assert file exists
        res = self.app.get(external_path)
        self.assertEqual(res.status_code, 200)
        self.assertEqual(res.data, b"hello world")
