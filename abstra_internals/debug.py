import inspect, typing, traceback
from types import TracebackType
from dataclasses import dataclass

from .settings import Settings

Frames = typing.Union[typing.List[inspect.FrameInfo], Exception]


def representations(locals: typing.Dict):
    result = {}
    for key, value in list(locals.items()):
        try:
            result[key] = repr(value)
        except:
            pass
    return result


def traceback_to_infos(
    traceback: typing.Union[TracebackType, None]
) -> typing.List[inspect.FrameInfo]:
    return inspect.getouterframes(traceback.tb_frame) if traceback else []


def _make_debug_item_from_info(info: inspect.FrameInfo):
    return {
        "filename": info.filename,
        "lineno": info.lineno,
        "name": info.function,
        "locals": representations(info.frame.f_locals),
    }


def _make_debug_item_from_stack(frame_summary: traceback.FrameSummary):
    return {
        "filename": frame_summary.filename,
        "lineno": frame_summary.lineno,
        "name": frame_summary.name,
        "locals": representations(frame_summary.locals or {}),
    }


def make_debug_data(frames_or_exception: Frames):
    if isinstance(frames_or_exception, Exception):
        e = frames_or_exception
        frames = traceback.TracebackException(
            type(e), e, e.__traceback__, capture_locals=True
        ).stack
    else:
        frames = frames_or_exception
    root_path = str(Settings.root_path)
    return {
        "debug": {
            "stack": [
                (
                    _make_debug_item_from_info(info)
                    if isinstance(info, inspect.FrameInfo)
                    else _make_debug_item_from_stack(info)
                )
                for info in (frames)
                if root_path in info.filename
            ]
        }
    }


@dataclass
class CloseDTO:
    exit_code: typing.Union[int, None] = None
    exception: typing.Union[str, None] = None
    frames: typing.Optional[Frames] = None
