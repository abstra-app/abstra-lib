import signal
import typing as t

from abstra_internals.logger import AbstraLogger


class SignalHandlers:
    initialized = False

    @classmethod
    def init(cls):
        if cls.initialized:
            return

        signal.signal(signal.SIGTERM, cls.handle_sigterm)

        cls.initialized = True

    sigterm_callbacks: t.List[t.Callable] = []

    @classmethod
    def register_sigterm_callback(cls, callback: t.Callable):
        cls.sigterm_callbacks.append(callback)

    @classmethod
    def handle_sigterm(cls, signum, frame):
        AbstraLogger.warning("[SIGNALS] SIGTERM received")
        for callback in cls.sigterm_callbacks:
            callback()

    @classmethod
    def clear(cls):
        cls.sigterm_callbacks.clear()
