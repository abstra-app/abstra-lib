import inspect
import traceback
import typing
from dataclasses import dataclass

from abstra_internals.settings import Settings
from abstra_internals.utils.file import is_relative_path

Frames = typing.Union[typing.List[inspect.FrameInfo], Exception]


def representations(locals: typing.Dict):
    result = {}
    for key, value in list(locals.items()):
        try:
            result[key] = repr(value)
        except Exception:
            pass
    return result


def _make_debug_item_from_info(info: inspect.FrameInfo):
    return {
        "filename": info.filename,
        "lineno": info.lineno,
        "name": info.function,
        "locals": representations(info.frame.f_locals),
    }


def _make_debug_item_from_stack(
    frame_summary: traceback.FrameSummary, legacy_filename: str
):
    return {
        "filename": legacy_filename
        if frame_summary.filename == "<string>"
        else frame_summary.filename,
        "lineno": frame_summary.lineno,
        "name": frame_summary.name,
        "locals": representations(frame_summary.locals or {}),
    }


def make_frame_debug_data(frames: typing.List[inspect.FrameInfo]):
    root_path = str(Settings.root_path)
    return {
        "debug": {
            "stack": [
                _make_debug_item_from_info(info)
                for info in (frames)
                if root_path in info.filename or is_relative_path(info.filename)
            ]
        }
    }


def make_exception_debug_data(e: Exception):
    frames = traceback.TracebackException(
        type(e), e, e.__traceback__, capture_locals=True
    ).stack
    root_path = str(Settings.root_path)

    # TODO: remove this when we remove the legacy threads
    filename = ""
    frame_names = [frame.name for frame in frames]
    if "use_legacy_threads" in frame_names:
        first_legacy_index = frame_names.index("use_legacy_threads")
        filename = frames[first_legacy_index - 1].filename

    return {
        "debug": {
            "stack": [
                _make_debug_item_from_stack(info, filename)
                for info in (frames)
                if root_path in info.filename
                or is_relative_path(info.filename)
                or info.filename == "<string>"
            ]
        }
    }


@dataclass
class CloseDTO:
    exit_code: typing.Union[int, None] = None
    exception: typing.Union[str, None] = None
    frames: typing.Optional[Frames] = None
