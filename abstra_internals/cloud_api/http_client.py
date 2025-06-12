import threading
from concurrent.futures import ThreadPoolExecutor
from typing import Callable, Dict, Optional

import requests
import requests.adapters
import urllib3

from abstra_internals.environment import REQUEST_TIMEOUT

AbstraHTTPResponse = requests.Response


class HTTPClient:
    def __init__(
        self,
        base_url: str,
        base_headers: Optional[Dict[str, str]] = None,
        base_headers_resolver: Optional[Callable[[], Dict[str, str]]] = None,
    ) -> None:
        if base_headers and base_headers_resolver:
            raise ValueError(
                "You cannot provide both base_headers and base_headers_resolver."
            )

        self.base_url = base_url
        self._base_headers = base_headers
        self._base_headers_resolver = base_headers_resolver
        self.retry_strategy = urllib3.Retry(
            total=5,
            backoff_factor=2,
        )
        self.timeout = REQUEST_TIMEOUT  # Default timeout for requests
        self.pool = ThreadPoolExecutor(max_workers=5)
        self._local = threading.local()

    @property
    def base_headers(self) -> Dict[str, str]:
        """
        Returns the base headers for the HTTP client.
        This can be overridden in subclasses to provide custom headers.
        """
        if callable(self._base_headers_resolver):
            return self._base_headers_resolver()
        return self._base_headers or {}

    @property
    def session(self) -> requests.Session:
        if not hasattr(self._local, "session"):
            self._local.session = requests.Session()
            self._local.session.mount(
                "http://", requests.adapters.HTTPAdapter(max_retries=3)
            )
            self._local.session.mount(
                "https://", requests.adapters.HTTPAdapter(max_retries=3)
            )
        return self._local.session

    def request(self, method: str, endpoint: str, **kwargs) -> requests.Response:
        """
        Internal request handler.

        Args:
            method (str): HTTP method (e.g., 'GET', 'POST').
            endpoint (str): The URL endpoint to append to the base URL.
            **kwargs: Additional arguments passed to the requests method.

        Returns:
            requests.Response: The response object.
        """
        kwargs.setdefault("timeout", self.timeout)
        kwargs["headers"] = {**self.base_headers, **kwargs.get("headers", {})}

        return self.session.request(method, endpoint, **kwargs)

    def async_post(self, endpoint: str, **kwargs) -> None:
        """
        Sends a request in the background using a thread pool.

        Args:
            method (str): HTTP method (e.g., 'GET', 'POST').
            endpoint (str): The URL endpoint to append to the base URL.
            **kwargs: Additional arguments passed to the requests method.
        """

        def post(**i_kwargs):
            res = self.post(endpoint, **i_kwargs)
            res.raise_for_status()

        self.pool.submit(post, **kwargs)

    def get(self, endpoint: str, **kwargs) -> requests.Response:
        """Sends a GET request."""
        return self.request("GET", endpoint, **kwargs)

    def post(self, endpoint: str, **kwargs) -> requests.Response:
        """Sends a POST request."""
        return self.request("POST", endpoint, **kwargs)

    def put(self, endpoint: str, **kwargs) -> requests.Response:
        """Sends a PUT request."""
        return self.request("PUT", endpoint, **kwargs)

    def delete(self, endpoint: str, **kwargs) -> requests.Response:
        """Sends a DELETE request."""
        return self.request("DELETE", endpoint, **kwargs)

    def patch(self, endpoint: str, **kwargs) -> requests.Response:
        """Sends a PATCH request."""
        return self.request("PATCH", endpoint, **kwargs)
