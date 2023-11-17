import unittest

from abstra_internals.server.apps.local import get_local_app
from abstra_internals.server.utils import send_from_dist
from abstra_internals.server.controller import MainController
from abstra_internals.widgets.apis import get_random_filepath, internal_path
from abstra_internals.widgets.file_utils import convert_file

from .fixtures import clear_dir, init_dir


class TestFileSending(unittest.TestCase):
    def setUp(self) -> None:
        self.path = init_dir()
        controller = MainController()
        self.app = get_local_app(controller)
        self.client = self.app.test_client()
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

    def test_convert_file(self):
        tmp_file = self.path.joinpath("tmp.txt")
        tmp_file.write_text("hello world")

        print(tmp_file)

        external_path = convert_file(tmp_file)

        # assert path format like /_files/uuid/filename
        self.assertTrue(external_path.startswith("/_files/"))
        self.assertTrue(external_path.endswith("/tmp.txt"))

        # assert file exists in internal path
        real_path = internal_path(external_path.replace("/_files/", ""))
        print("real_path", real_path)
        self.assertTrue(real_path.exists())

    def test_get_random_filepath(self):
        external_name, _ = get_random_filepath("test.txt")
        self.assertTrue(external_name.endswith("/test.txt"))
