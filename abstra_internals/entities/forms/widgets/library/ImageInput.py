from .FileInput import FileInput


class ImageInput(FileInput):
    """Image upload input widget for handling image file uploads.

    Attributes:
        value (Union[FileResponse, List[FileResponse], None]): The uploaded image file(s). FileResponse is a dictionary-like object: `{'name': str, 'path': pathlib.Path}`. If `multiple` is True, will be a list, otherwise a single FileResponse object.
    """

    type = "image-input"
