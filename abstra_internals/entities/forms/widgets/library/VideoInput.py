from .FileInput import FileInput


class VideoInput(FileInput):
    """Video upload input widget for handling video file uploads.

    Attributes:
        value (Union[FileResponse, List[FileResponse], None]): FileResponse is a dictionary-like object: `{'name': str, 'path': pathlib.Path}`. If `multiple` is True, will be a list, otherwise a single FileResponse object.
    """

    type = "video-input"
