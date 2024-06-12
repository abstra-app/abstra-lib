from inspect import stack
from pathlib import Path
from unittest import TestCase, mock

from abstra_internals.debug import make_exception_debug_data, make_frame_debug_data
from abstra_internals.settings import Settings
from tests.resources.make_debug.module import func


class TestDebug(TestCase):
    def setUp(self) -> None:
        Settings.set_root_path(str(Path(__file__).parent))

    def test_make_debug_data_from_exception(self):
        try:
            raise Exception("test")
        except Exception as exc:
            debug_data = make_exception_debug_data(exc)

        self.maxDiff = None

        self.assertEqual(
            debug_data,
            dict(
                debug=dict(
                    stack=[
                        dict(
                            filename=__file__,
                            lineno=16,
                            name="test_make_debug_data_from_exception",
                            locals=mock.ANY,
                        )
                    ]
                )
            ),
        )

    def test_make_debug_data_from_frames(self):
        debug_data = make_frame_debug_data(stack())

        self.assertEqual(
            debug_data,
            dict(
                debug=dict(
                    stack=[
                        dict(
                            filename=__file__,
                            lineno=39,
                            name="test_make_debug_data_from_frames",
                            locals=mock.ANY,
                        )
                    ]
                )
            ),
        )

    def test_make_debug_data_nested(self):
        def outer_func():
            raise Exception("test")

        try:
            func(outer_func)
            debug_data = None
        except Exception as exc:
            debug_data = make_exception_debug_data(exc)

        self.maxDiff = None

        self.assertEqual(
            debug_data,
            dict(
                debug=dict(
                    stack=[
                        dict(
                            filename=__file__,
                            lineno=62,
                            name="test_make_debug_data_nested",
                            locals=mock.ANY,
                        ),
                        dict(
                            filename=str(
                                (
                                    Path(__file__) / "../resources/make_debug/module.py"
                                ).resolve()
                            ),
                            lineno=2,
                            name="func",
                            locals=mock.ANY,
                        ),
                        dict(
                            filename=__file__,
                            lineno=59,
                            name="outer_func",
                            locals=mock.ANY,
                        ),
                    ]
                )
            ),
        )

    def test_make_debug_data_nested_other_dir(self):
        Settings.set_root_path("./resources")

        def outer_func():
            raise Exception("test")

        try:
            func(outer_func)
            debug_data = None
        except Exception as exc:
            debug_data = make_exception_debug_data(exc)

        self.maxDiff = None

        self.assertEqual(
            debug_data,
            dict(
                debug=dict(
                    stack=[
                        dict(
                            filename=str(
                                (
                                    Path(__file__) / "../resources/make_debug/module.py"
                                ).resolve()
                            ),
                            lineno=2,
                            name="func",
                            locals=mock.ANY,
                        ),
                    ]
                )
            ),
        )
