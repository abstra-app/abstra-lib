import inspect, typing
from types import TracebackType
from dataclasses import dataclass


Frames = typing.Union[typing.List[inspect.FrameInfo], None]


def representations(locals):
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


def make_debug_data(frames: Frames):
    if not frames:
        return {}
    return {
        "debug": {
            "stack": [
                {
                    "filename": info.filename,
                    "lineno": info.lineno,
                    "name": info.function,
                    "locals": representations(info.frame.f_locals),
                }
                for info in (frames)
            ]
        }
    }


@dataclass
class CloseDTO:
    exit_code: typing.Union[int, None] = None
    exception: typing.Union[str, None] = None
    frames: Frames = None
