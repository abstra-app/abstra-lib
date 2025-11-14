"""
RabbitMQ-based connection that implements the same interface as multiprocessing.Connection
for bidirectional communication between server and worker processes.
"""

import json
import threading
from queue import Empty, Queue
from typing import Any, Optional

import pika
from pika.adapters.blocking_connection import BlockingChannel, BlockingConnection

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
    ):
        self.connection_uri = connection_uri
        self.send_queue = send_queue
        self.recv_queue = recv_queue
        self.execution_id = execution_id
        self._closed = False
        self._recv_buffer: Queue = Queue()
        self._consumer_thread: Optional[threading.Thread] = None

        # Connection and channel for sending
        self._send_connection: Optional[BlockingConnection] = None
        self._send_channel: Optional[BlockingChannel] = None

        # Connection and channel for receiving
        self._recv_connection: Optional[BlockingConnection] = None
        self._recv_channel: Optional[BlockingChannel] = None

        self._setup_connections()
        self._start_consumer()

    def _setup_connections(self):
        """Setup separate connections for sending and receiving."""
        AbstraLogger.debug(
            f"[RabbitMQConnection:{self.execution_id}] Setting up connections. "
            f"Send: {self.send_queue}, Recv: {self.recv_queue}"
        )

        # Setup send connection
        self._send_connection = pika.BlockingConnection(
            pika.URLParameters(self.connection_uri)
        )
        self._send_channel = self._send_connection.channel()
        self._send_channel.queue_declare(
            queue=self.send_queue, durable=False, auto_delete=True
        )

        # Setup receive connection
        self._recv_connection = pika.BlockingConnection(
            pika.URLParameters(self.connection_uri)
        )
        self._recv_channel = self._recv_connection.channel()
        self._recv_channel.queue_declare(
            queue=self.recv_queue, durable=False, auto_delete=True
        )

        AbstraLogger.debug(
            f"[RabbitMQConnection:{self.execution_id}] Connections established"
        )

    def _start_consumer(self):
        """Start a background thread to consume messages from recv_queue."""

        def consumer_loop():
            AbstraLogger.debug(
                f"[RabbitMQConnection:{self.execution_id}] Consumer thread started"
            )
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
                        message = json.loads(body.decode("utf-8"))
                        self._recv_buffer.put(message)
                        AbstraLogger.debug(
                            f"[RabbitMQConnection:{self.execution_id}] Received message"
                        )
                    except Exception as e:
                        AbstraLogger.error(
                            f"[RabbitMQConnection:{self.execution_id}] Error decoding message: {e}"
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
            raise ValueError("Connection is closed")

        if self._send_channel is None:
            raise ValueError("Send channel not initialized")

        try:
            body = json.dumps(obj)
            self._send_channel.basic_publish(
                exchange="",
                routing_key=self.send_queue,
                body=body.encode("utf-8"),
                properties=pika.BasicProperties(
                    delivery_mode=pika.DeliveryMode.Transient,
                    content_type="application/json",
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
        if self._closed:
            raise EOFError("Connection is closed")

        try:
            message = self._recv_buffer.get(timeout=timeout)
            AbstraLogger.debug(
                f"[RabbitMQConnection:{self.execution_id}] Received from buffer"
            )
            return message
        except Empty:
            if self._closed:
                raise EOFError("Connection is closed")
            raise TimeoutError("No message received within timeout")

    def poll(self, timeout: float = 0.0) -> bool:
        """Check if there are messages available (compatible with Connection.poll)."""
        if self._closed:
            return False

        return not self._recv_buffer.empty()

    def close(self):
        """Close the connection and cleanup resources."""
        if self._closed:
            return

        AbstraLogger.debug(
            f"[RabbitMQConnection:{self.execution_id}] Closing connection"
        )
        self._closed = True

        # Wait for consumer thread to finish
        if self._consumer_thread and self._consumer_thread.is_alive():
            self._consumer_thread.join(timeout=2.0)

        # Close channels and connections
        try:
            if self._recv_channel and self._recv_channel.is_open:
                self._recv_channel.cancel()
                self._recv_channel.close()
        except Exception as e:
            AbstraLogger.debug(
                f"[RabbitMQConnection:{self.execution_id}] Error closing recv channel: {e}"
            )

        try:
            if self._recv_connection and self._recv_connection.is_open:
                self._recv_connection.close()
        except Exception as e:
            AbstraLogger.debug(
                f"[RabbitMQConnection:{self.execution_id}] Error closing recv connection: {e}"
            )

        try:
            if self._send_channel and self._send_channel.is_open:
                self._send_channel.close()
        except Exception as e:
            AbstraLogger.debug(
                f"[RabbitMQConnection:{self.execution_id}] Error closing send channel: {e}"
            )

        try:
            if self._send_connection and self._send_connection.is_open:
                self._send_connection.close()
        except Exception as e:
            AbstraLogger.debug(
                f"[RabbitMQConnection:{self.execution_id}] Error closing send connection: {e}"
            )

        AbstraLogger.debug(
            f"[RabbitMQConnection:{self.execution_id}] Connection closed"
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
