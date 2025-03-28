from .FileInput import FileInput


class CameraInput(FileInput):
    """Camera input widget for capturing images or videos directly from a camera.

    Attributes:
        value (Union[FileResponse, List[FileResponse], None]): The captured image or video file(s).
    """

    type = "camera-input"
