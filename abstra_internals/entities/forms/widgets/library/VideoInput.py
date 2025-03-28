from .FileInput import FileInput


class VideoInput(FileInput):
    """Video upload input widget for handling video file uploads.

    Attributes:
        value (Union[FileResponse, List[FileResponse], None]): The uploaded video file(s).
    """

    type = "video-input"
