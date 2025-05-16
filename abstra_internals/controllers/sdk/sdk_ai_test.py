import unittest
from io import BytesIO
from pathlib import Path
from unittest.mock import MagicMock, patch

from PIL import Image

from abstra_internals.controllers.sdk.sdk_ai import AiSDKController
from abstra_internals.entities.forms.widgets.response_types import FileResponse
from abstra_internals.interface.sdk.forms.deprecated.widgets.response_types import (
    FileResponse as DeprecatedFileResponse,
)


class TestAiSDKController(unittest.TestCase):
    def setUp(self):
        # Mock the AiApiHttpClient to isolate tests from external API calls
        self.mock_ai_client = MagicMock()
        self.controller = AiSDKController(self.mock_ai_client)

    def test_extract_pdf_images(self):
        # Mock pdfium.PdfDocument to return a mock page
        mock_page = MagicMock()
        mock_page.render.return_value.to_pil.return_value = Image.new("RGB", (100, 100))
        mock_pdf = MagicMock()
        mock_pdf.__iter__.return_value = [mock_page]

        with patch("pypdfium2.PdfDocument", return_value=mock_pdf):
            images = self.controller._extract_pdf_images(mock_pdf)

        self.assertEqual(len(images), 1)  # One image is expected
        self.assertTrue(
            isinstance(images[0], BytesIO)
        )  # Image should be in BytesIO format

    def test_make_image_url_message(self):
        url = "http://example.com/image.png"
        expected_message = {
            "role": "user",
            "content": [
                {
                    "type": "image_url",
                    "image_url": {
                        "url": url,
                    },
                },
            ],
        }

        result = self.controller._make_image_url_message(url)
        self.assertEqual(result, expected_message)

    def test_make_text_message(self):
        text = "Some text"
        expected_message = {
            "role": "user",
            "content": text,
        }

        result = self.controller._make_text_message(text)
        self.assertEqual(result, expected_message)

    def test_make_messages_from_str(self):
        text = "This is a prompt"
        result = self.controller._make_messages(text)
        self.assertEqual(len(result), 1)
        self.assertEqual(result[0]["role"], "user")
        self.assertEqual(result[0]["content"], text)

    def test_make_messages_from_image(self):
        # Create a dummy image to simulate the prompt
        img = Image.new("RGB", (100, 100))
        image_io = BytesIO()
        img.save(image_io, format="PNG")
        image_io.seek(0)

        result = self.controller._make_messages(image_io)
        self.assertEqual(len(result), 1)
        self.assertIn("type", result[0]["content"][0])
        self.assertEqual(result[0]["content"][0]["type"], "image_url")

    def test_make_messages_from_path(self):
        file_path = Path("test.pdf")
        file_path.write_text("dummy content")  # Creating a dummy file

        with patch("builtins.open", MagicMock(return_value=BytesIO(b"fake content"))):
            result = self.controller._make_messages(file_path)

        self.assertEqual(len(result), 1)
        self.assertIn("type", result[0]["content"][0])

    def test_make_message_from_txt_path(self):
        # Create a dummy txt
        file_path = Path("test.txt")
        file_path.write_text(content := "dummy content")

        result = self.controller._make_messages(file_path)

        self.assertEqual(result, [{"role": "user", "content": content}])

    def test_make_messages_with_txt_file_response(self):
        # Create a dummy txt
        file_path = Path("test.txt")
        file_path.write_text(content := "dummy content")

        class MockFileResponse(FileResponse):
            def __init__(self, url):
                self._url = url

            @property
            def name(self):
                return self.path.name

            @property
            def content(self):
                return self.path.read_bytes()

            @property
            def file(self):
                return self.path.open("rb")

            @property
            def path(self):
                return file_path

        # Mock FileResponse
        file_response = MockFileResponse(url=file_path.as_posix())

        result = self.controller._make_messages(file_response)

        self.assertEqual(result, [{"role": "user", "content": content}])

    def test_make_messages_with_txt_deprecated_file_response(self):
        # Create a dummy txt
        file_path = Path("test.txt")
        file_path.write_text(content := "dummy content")

        class MockFileResponse(DeprecatedFileResponse):
            def __init__(self, url):
                self._url = url

            @property
            def name(self):
                return self.path.name

            @property
            def content(self):
                return self.path.read_bytes()

            @property
            def file(self):
                return self.path.open("rb")

            @property
            def path(self):
                return file_path

        # Mock FileResponse
        file_response = MockFileResponse(url=file_path.as_posix())

        result = self.controller._make_messages(file_response)

        self.assertEqual(result, [{"role": "user", "content": content}])

    def test_prompt_with_image_file(self):
        # Mock AI client response
        self.mock_ai_client.prompt.return_value = {"content": "Mocked AI response"}

        # Create a dummy image
        img = Image.new("RGB", (100, 100))
        image_io = BytesIO()
        img.save(image_io, format="PNG")
        image_io.seek(0)

        result = self.controller.prompt(
            prompts=[image_io],
            instructions=["This is a test instruction."],
            format=None,
            temperature=0.7,
        )

        self.assertEqual(result, "Mocked AI response")

    def test_prompt_with_file_response(self):
        # Mock AI client response
        self.mock_ai_client.prompt.return_value = {"content": "Mocked AI response"}

        # save dummy file
        file_path = Path("test.pdf")
        file_path.write_text("dummy content")

        class MockFileResponse(FileResponse):
            def __init__(self, url):
                self._url = url

            @property
            def name(self):
                return self.path.name

            @property
            def content(self):
                return self.path.read_bytes()

            @property
            def file(self):
                return self.path.open("rb")

            @property
            def path(self):
                return file_path

        # Mock FileResponse
        file_response = MockFileResponse(url=file_path.as_posix())

        result = self.controller.prompt(
            prompts=[file_response],
            instructions=["Test instruction."],
            format=None,
            temperature=0.7,
        )

        self.assertEqual(result, "Mocked AI response")

    def test_prompt_with_deprecated_file_response(self):
        # Mock AI client response
        self.mock_ai_client.prompt.return_value = {"content": "Mocked AI response"}

        # save dummy file
        file_path = Path("test.pdf")
        file_path.write_text("dummy content")

        class MockFileResponse(DeprecatedFileResponse):
            def __init__(self, url):
                self._url = url

            @property
            def name(self):
                return self.path.name

            @property
            def content(self):
                return self.path.read_bytes()

            @property
            def file(self):
                return self.path.open("rb")

            @property
            def path(self):
                return file_path

        # Mock FileResponse
        file_response = MockFileResponse(url=file_path.as_posix())

        result = self.controller.prompt(
            prompts=[file_response],
            instructions=["Test instruction."],
            format=None,
            temperature=0.7,
        )

        self.assertEqual(result, "Mocked AI response")
