import unittest
from .fixtures import init_dir, clear_dir
from abstra_internals.server.api import API
from abstra_internals.server.apps import create_app
from abstra_internals.server.apps.utils import send_from_dist


class TestFileSending(unittest.TestCase):
    def setUp(self) -> None:
        self.path = init_dir()
        api = API()
        self.app = create_app(api)
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
