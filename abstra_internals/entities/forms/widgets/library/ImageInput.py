from .FileInput import FileInput


class ImageInput(FileInput):
    """Image upload input widget for handling image file uploads.

    Attributes:
        value (Union[FileResponse, List[FileResponse], None]): The uploaded image file(s).
    """

    type = "image-input"
