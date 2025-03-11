from abstra_internals.controllers.sdk_context import SDKContextStore


class ReuseCacheInterface:
    def __init__(self) -> None:
        self.controller = SDKContextStore.get_by_thread().form_sdk
        self.seq = 0

    def reuse(self, func, *args, **kwargs):
        self.controller.reuse(func, *args, **kwargs)


def reuse(func, *args, **kwargs):
    ReuseCacheInterface().reuse(func, *args, **kwargs)
