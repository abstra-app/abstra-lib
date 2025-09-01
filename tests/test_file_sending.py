import io

from abstra_internals.interface.sdk.forms.deprecated.widgets.file_utils import (
    upload_widget_file,
)
from abstra_internals.server.apps import get_local_app
from abstra_internals.server.utils import send_from_dist
from abstra_internals.utils.file import make_random_tmp_path
from tests.fixtures import BaseTest, clear_dir


class TestFileSending(BaseTest):
    def setUp(self) -> None:
        super().setUp()
        self.app = get_local_app(self.controller)
        self.app_context = self.app.app_context()
        self.app_context.push()

    def tearDown(self) -> None:
        self.app_context.pop()
        clear_dir(self.root)

    def test_mime_type(self):
        with self.app.test_request_context("/test.js"):
            js_file = "test.js"
            self.root.joinpath(js_file).write_text("console.log('hello world')")
            html_file = "test.html"
            self.root.joinpath(html_file).write_text("<h1>Hello world</h1>")
            css_file = "test.css"
            self.root.joinpath(css_file).write_text("h1 { color: red; }")

            js_response = send_from_dist(str(js_file), "index.html", self.root)
            self.assertEqual(js_response.mimetype, "application/javascript")
            self.assertEqual(
                js_response.headers["Content-Type"],
                "application/javascript; charset=utf-8",
            )
            html_response = send_from_dist(str(html_file), "index.html", self.root)
            self.assertEqual(html_response.mimetype, "text/html")
            self.assertEqual(
                html_response.headers["Content-Type"], "text/html; charset=utf-8"
            )
            css_response = send_from_dist(str(css_file), "index.html", self.root)
            self.assertEqual(css_response.mimetype, "text/css")
            self.assertEqual(
                css_response.headers["Content-Type"], "text/css; charset=utf-8"
            )


class TestFileUtils(BaseTest):
    def test_make_random_tmp_path(self):
        path = make_random_tmp_path("test.txt")
        self.assertEqual(path.name, "test.txt")


class TestFileUpload(BaseTest):
    def test_upload_widget_file_path(self):
        tmp_file = self.root.joinpath("tmp.txt")
        tmp_file.write_text("hello world")

        external_path = upload_widget_file(tmp_file)

        # assert path format like /_files/uuid/filename
        self.assertTrue(external_path.startswith("/_files/"))
        self.assertTrue(external_path.endswith("/tmp.txt"))

        # assert file exists
        res = self.get_cloud_flask_client().get(external_path)
        self.assertEqual(res.status_code, 200)
        self.assertEqual(res.data, b"hello world")

    def test_upload_widget_file_buffered_reader(self):
        tmp_file = self.root.joinpath("tmp.txt")
        tmp_file.write_text("hello world")

        with open(tmp_file, "rb") as f:
            external_path = upload_widget_file(f)

        # assert path format like /_files/uuid/filename
        self.assertTrue(external_path.startswith("/_files/"))
        self.assertTrue(external_path.endswith("/tmp.txt"))

        # assert file exists
        res = self.get_cloud_flask_client().get(external_path)
        self.assertEqual(res.status_code, 200)
        self.assertEqual(res.data, b"hello world")

    def test_upload_widget_file_io(self):
        external_path = upload_widget_file(io.BytesIO(b"hello world"))

        # assert path format like /_files/uuid
        self.assertTrue(external_path.startswith("/_files/"))

        # assert file exists
        res = self.get_cloud_flask_client().get(external_path)
        self.assertEqual(res.status_code, 200)
        self.assertEqual(res.data, b"hello world")
