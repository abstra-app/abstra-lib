from typing import Any, Protocol


class ConnectionProtocol(Protocol):
    """Protocol for connection-like objects that support bidirectional communication."""

    def send(self, obj: Any) -> None:
        """Send an object through the connection."""
        ...

    def recv(self) -> Any:
        """Receive an object from the connection."""
        ...

    def poll(self, timeout: float = 0.0) -> bool:
        """Check if there are messages available to receive."""
        ...

    def close(self) -> None:
        """Close the connection."""
        ...

    @property
    def closed(self) -> bool:
        """Check if the connection is closed."""
        ...
