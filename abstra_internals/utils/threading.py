import threading
import traceback


class Thread(threading.Thread):
    def __init__(self, *a, **kw):
        super().__init__(*a, **kw)
        self.creator_trace = traceback.format_stack()
        self.exc = None

    def run(self):
        try:
            super().run()
        except Exception as e:
            self.exc = e

    def join(self, *a, **kw):
        super().join(*a, **kw)
        if self.exc:
            creator_info = "".join(self.creator_trace)
            new_exc = RuntimeError(
                "Exception in thread (created here):\n" + creator_info
            )
            raise new_exc from self.exc
