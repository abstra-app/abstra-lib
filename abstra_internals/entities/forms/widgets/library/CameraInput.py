from .FileInput import FileInput


class CameraInput(FileInput):
    """Camera input widget for capturing images or videos directly from a camera.

    Attributes:
        value (Union[FileResponse, List[FileResponse], None]): The captured image or video file(s). FileResponse is a dictionary-like object: `{'name': str, 'path': pathlib.Path}`. If `multiple` is True, will be a list, otherwise a single FileResponse object.
    """

    type = "camera-input"
