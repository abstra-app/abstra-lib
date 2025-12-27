import json
import pickle
import threading
import time
from queue import Empty, Queue
from typing import Any, Optional

import pika
from pika.adapters.blocking_connection import BlockingChannel, BlockingConnection
from pika.exceptions import AMQPConnectionError

from abstra_internals.logger import AbstraLogger


class RabbitMQConnection:
    """
    A Connection-like interface that uses RabbitMQ for bidirectional communication.

    Each RabbitMQConnection uses two queues:
    - send_queue: where this side sends messages
    - recv_queue: where this side receives messages

    For bidirectional communication:
    - Server creates connection with send_queue="server_to_worker", recv_queue="worker_to_server"
    - Worker creates connection with send_queue="worker_to_server", recv_queue="server_to_worker"
    """

    def __init__(
        self,
        connection_uri: str,
        send_queue: str,
        recv_queue: str,
        execution_id: str,
        auto_start_consumer: bool = True,
    ):
        self.connection_uri = connection_uri
        self.send_queue = send_queue
        self.recv_queue = recv_queue
        self.execution_id = execution_id
        self._closed = False
        self._recv_buffer: Queue = Queue()
        self._consumer_thread: Optional[threading.Thread] = None
        self._consumer_started = False
        self._consumer_lock = threading.Lock()
        self._send_lock = threading.Lock()

        self._send_connection: Optional[BlockingConnection] = None
        self._send_channel: Optional[BlockingChannel] = None

        self._recv_connection: Optional[BlockingConnection] = None
        self._recv_channel: Optional[BlockingChannel] = None

        self._setup_connections()

        if auto_start_consumer:
            self._start_consumer()
            self._consumer_started = True

    def _connect_with_retry(self, purpose: str) -> BlockingConnection:
        params = pika.URLParameters(self.connection_uri)
        params.socket_timeout = 10
        params.blocked_connection_timeout = 10
        params.connection_attempts = 1

        delay = 1.0
        max_attempts = 3

        for attempt in range(1, max_attempts + 1):
            try:
                return pika.BlockingConnection(params)
            except AMQPConnectionError as e:
                if attempt == max_attempts:
                    AbstraLogger.error(
                        f"[RabbitMQConnection:{self.execution_id}] Failed to connect for {purpose} "
                        f"after {max_attempts} attempts: {e}"
                    )
                    raise

                AbstraLogger.warning(
                    f"[RabbitMQConnection:{self.execution_id}] Connection failed for {purpose} "
                    f"(attempt {attempt}): {e}. Retrying in {delay}s..."
                )
                time.sleep(delay)
                delay *= 2

        raise AMQPConnectionError(f"Failed to connect for {purpose}/Unreachable code")

    def _setup_connections(self):
        self._send_connection = self._connect_with_retry("sender")

        self._send_channel = self._send_connection.channel()

        self._send_channel.queue_declare(
            queue=self.send_queue,
            durable=False,
            exclusive=False,
            auto_delete=True,
        )

        self._recv_connection = self._connect_with_retry("receiver")
        self._recv_channel = self._recv_connection.channel()

        self._recv_channel.queue_declare(
            queue=self.recv_queue,
            durable=False,
            exclusive=False,
            auto_delete=True,
        )

    def _ensure_consumer_started(self):
        with self._consumer_lock:
            if not self._consumer_started:
                self._start_consumer()
                self._consumer_started = True

    def _start_consumer(self):
        def consumer_loop():
            try:
                assert self._recv_channel is not None, "Receive channel not initialized"
                for method, properties, body in self._recv_channel.consume(
                    queue=self.recv_queue,
                    auto_ack=True,
                    inactivity_timeout=1.0,
                ):
                    if self._closed:
                        break

                    if method is None:
                        continue

                    try:
                        # Try to determine content type from properties
                        content_type = (
                            properties.content_type
                            if properties and hasattr(properties, "content_type")
                            else "application/json"
                        )

                        # Mimic multiprocessing.Connection behavior:
                        # - For pickle: deserialize to Python object
                        # - For JSON: return as string (NOT deserialized dict)
                        # This allows application code to work identically with both connection types
                        if content_type == "application/python-pickle":
                            # Pickle: deserialize and return object (like multiprocessing.Connection)
                            message = pickle.loads(body)
                        else:
                            # JSON: return as string, let application layer deserialize
                            # This matches the behavior of multiprocessing.Connection when
                            # you send a string via conn.send(str)
                            if isinstance(body, bytes):
                                message = body.decode("utf-8")
                            else:
                                message = body

                        self._recv_buffer.put(message)
                    except Exception as e:
                        AbstraLogger.error(
                            f"[RabbitMQConnection:{self.execution_id}] Error processing message: {e}"
                        )
            except Exception as e:
                if not self._closed:
                    AbstraLogger.error(
                        f"[RabbitMQConnection:{self.execution_id}] Consumer error: {e}"
                    )
            finally:
                AbstraLogger.debug(
                    f"[RabbitMQConnection:{self.execution_id}] Consumer thread ended"
                )

        self._consumer_thread = threading.Thread(target=consumer_loop, daemon=True)
        self._consumer_thread.start()

    def send(self, obj: Any):
        """Send a message (compatible with Connection.send)."""
        if self._closed:
            raise EOFError("Connection is closed")

        if self._send_channel is None:
            raise ValueError("Send channel not initialized")

        try:
            # Try JSON serialization first (preferred for compatibility)
            try:
                # If it's already a string (pre-serialized), use it directly
                if isinstance(obj, str):
                    body = obj.encode("utf-8")
                    content_type = "application/json"
                # If it has a dump() method (Pydantic/Serializable), serialize it first
                elif hasattr(obj, "dump") and callable(obj.dump):
                    body = json.dumps(obj.dump()).encode("utf-8")
                    content_type = "application/json"
                # Otherwise, try to serialize as JSON (works for dicts, lists, primitives)
                else:
                    body = json.dumps(obj).encode("utf-8")
                    content_type = "application/json"
            except (TypeError, ValueError):
                # If JSON serialization fails, fall back to pickle (for backwards compatibility)
                AbstraLogger.debug(
                    f"[RabbitMQConnection:{self.execution_id}] JSON serialization failed, using pickle"
                )
                body = pickle.dumps(obj)
                content_type = "application/python-pickle"

            with self._send_lock:
                self._send_channel.basic_publish(
                    exchange="",
                    routing_key=self.send_queue,
                    body=body,
                    properties=pika.BasicProperties(
                        delivery_mode=pika.DeliveryMode.Transient,
                        content_type=content_type,
                    ),
                )
            AbstraLogger.debug(f"[RabbitMQConnection:{self.execution_id}] Sent message")
        except Exception as e:
            AbstraLogger.error(
                f"[RabbitMQConnection:{self.execution_id}] Error sending message: {e}"
            )
            raise

    def recv(self, timeout: Optional[float] = None) -> Any:
        """Receive a message (compatible with Connection.recv)."""
        self._ensure_consumer_started()

        if self._closed:
            raise EOFError("Connection is closed")

        try:
            message = self._recv_buffer.get(timeout=timeout)
            if self._closed:
                raise EOFError("Connection is closed")
            return message
        except Empty:
            if self._closed:
                raise EOFError("Connection is closed")
            raise TimeoutError("No message received within timeout")

    def poll(self, timeout: float = 0.0) -> bool:
        """Check if there are messages available (compatible with Connection.poll)."""
        self._ensure_consumer_started()

        if self._closed:
            return False

        return not self._recv_buffer.empty()

    def close(self):
        if self._closed:
            return

        self._closed = True

        if self._consumer_thread and self._consumer_thread.is_alive():
            self._consumer_thread.join(timeout=2.0)

        try:
            if self._recv_channel and self._recv_channel.is_open:
                self._recv_channel.cancel()
                self._recv_channel.close()
        except Exception as e:
            AbstraLogger.error(
                f"[RabbitMQConnection:{self.execution_id}] Error closing recv channel: {e}"
            )

        try:
            if self._recv_connection and self._recv_connection.is_open:
                self._recv_connection.close()
        except Exception as e:
            AbstraLogger.error(
                f"[RabbitMQConnection:{self.execution_id}] Error closing recv connection: {e}"
            )

        try:
            if self._send_channel and self._send_channel.is_open:
                self._send_channel.close()
        except Exception as e:
            AbstraLogger.error(
                f"[RabbitMQConnection:{self.execution_id}] Error closing send channel: {e}"
            )

        try:
            if self._send_connection and self._send_connection.is_open:
                self._send_connection.close()
        except Exception as e:
            AbstraLogger.error(
                f"[RabbitMQConnection:{self.execution_id}] Error closing send connection: {e}"
            )

    @property
    def closed(self) -> bool:
        """Check if connection is closed."""
        return self._closed

    def __enter__(self):
        return self

    def __exit__(self, exc_type, exc_val, exc_tb):
        self.close()
        return False
