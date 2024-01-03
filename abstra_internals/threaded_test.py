from unittest import TestCase
from .threaded import threaded
from typing import Any


class ThreadedTest(TestCase):
    def test_threaded_with_exception(self):
        @threaded
        def func():
            raise Exception("test")

        thread = func()

        self.assertRaises(Exception, thread.result)

    def test_threaded_with_return(self):
        @threaded
        def func() -> Any:
            return "test"

        thread = func()

        self.assertEqual(thread.result(), "test")
