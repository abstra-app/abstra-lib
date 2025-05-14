from typing import Any, Callable

from abstra_internals.controllers.sdk.sdk_context import SDKContextStore


class ReuseCacheInterface:
    def __init__(self) -> None:
        self.controller = SDKContextStore.get_by_thread().form_sdk
        self.seq = 0

    def reuse(self, func: Callable[..., Any], *args: Any, **kwargs: Any) -> Any:
        """
        Reuse the result of a function call with the given arguments.

        Args:
            func (Callable): The function to reuse.
            *args (Any): Variable length argument list to pass to the function.
            **kwargs (Any): Arbitrary keyword arguments to pass to the function.

        Returns:
            Any: The result of the function call.
        """
        return self.controller.reuse(func, *args, **kwargs)


def reuse(func: Callable[..., Any], *args: Any, **kwargs: Any) -> Any:
    """
    Reuse the result of a function call with the given arguments.

    Args:
        func (Callable): The function to reuse.
        args (Any): Variable length argument list to pass to the function.
        kwargs (Any): Arbitrary keyword arguments to pass to the function.

    Returns:
        Any: The result of the function call.
    """
    return ReuseCacheInterface().reuse(func, *args, **kwargs)
