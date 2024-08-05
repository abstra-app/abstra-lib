from dataclasses import dataclass
from functools import wraps
from typing import Callable, Optional, Protocol

import flask


class CacheControl(Protocol):
    def __str__(self) -> str: ...


@dataclass
class NoCache:
    def __str__(self):
        return ""


@dataclass
class PublicCache:
    max_age: Optional[int] = None

    def __str__(self):
        if self.max_age is None:
            return "public"
        return f"public, max-age={self.max_age}"


@dataclass
class CacheCommand:
    cache_control: CacheControl
    proxy_cache_control: CacheControl


CachePolicy = Callable[[flask.Request, flask.Response], CacheCommand]


def cache_control(policy: CachePolicy):
    def decorator(f):
        @wraps(f)
        def decorated_function(*args, **kwargs):
            @flask.after_this_request
            def set_cache_control_header(response: flask.Response):
                cmd = policy(flask.request, response)
                if cmd.cache_control:
                    response.headers["Cache-Control"] = str(cmd.cache_control)
                if cmd.proxy_cache_control:
                    response.headers["X-Proxy-Cache-Control"] = str(
                        cmd.proxy_cache_control
                    )
                return response

            return f(*args, **kwargs)

        return decorated_function

    return decorator


class Cache:
    def __init__(self, enabled: bool):
        self.enabled = enabled

    def __assets_policy(self, _: flask.Request, __: flask.Response) -> CacheCommand:
        if not self.enabled:
            return CacheCommand(NoCache(), NoCache())

        return CacheCommand(PublicCache(1800), PublicCache())

    def __statics_policy(
        self, request: flask.Request, __: flask.Response
    ) -> CacheCommand:
        if not self.enabled:
            return CacheCommand(NoCache(), NoCache())

        if request.content_type == "text/html":
            return CacheCommand(NoCache(), PublicCache())

        return CacheCommand(PublicCache(86400), PublicCache())

    def assets(self):
        return cache_control(self.__assets_policy)

    def statics(self):
        return cache_control(self.__statics_policy)
