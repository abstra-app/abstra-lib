import threading
import traceback


class ExceptionAwareThread(threading.Thread):
    def __init__(self, *a, **kw):
        super().__init__(*a, **kw)
        self.creator_trace = traceback.format_stack()
        self.exception = None

    def run(self):
        try:
            super().run()
        except Exception as e:
            self.exception = e

    def join(self, *a, **kw):
        super().join(*a, **kw)
        if self.exception:
            creator_info = "".join(self.creator_trace)
            exception_type = type(self.exception).__name__
            exception_msg = str(self.exception)

            new_exception = RuntimeError(
                f"Exception in thread (created here):\n"
                f"Original exception: {exception_type}: {exception_msg}\n"
                f"Thread creation stack:\n{creator_info}"
            )
            raise new_exception from self.exception
