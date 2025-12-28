import time
from abc import ABC, abstractmethod
from dataclasses import dataclass
from multiprocessing import Queue
from queue import Empty
from threading import Event
from typing import Generator, Union

import pika
from pika.adapters.blocking_connection import BlockingChannel, BlockingConnection
from pika.exceptions import AMQPConnectionError, AMQPError

from abstra_internals.environment import (
    EXECUTION_QUEUE_CONCURRENCY,
    RABBITMQ_CONNECTION_TIMEOUT_SECONDS,
    RABBITMQ_EXECUTION_QUEUE,
    RABBITMQ_RETRY_INITIAL_DELAY_SECONDS,
    RABBITMQ_RETRY_MAX_ATTEMPTS,
)
from abstra_internals.logger import AbstraLogger
from abstra_internals.repositories.producer import PreExecution, QueueMessage
from abstra_internals.utils import deserialize
from abstra_internals.utils.serializable import Serializable


class ControlMessage(Serializable):
    type: str
    payload: dict


@dataclass
class ControlQueueMessage:
    message: ControlMessage
    delivery_tag: int


class Consumer(ABC):
    @abstractmethod
    def threadsafe_ack(self, msg: Union[QueueMessage, ControlQueueMessage]):
        raise NotImplementedError

    @abstractmethod
    def threadsafe_nack(self, msg: Union[QueueMessage, ControlQueueMessage]):
        raise NotImplementedError

    @abstractmethod
    def iter(self) -> Generator[Union[QueueMessage, ControlQueueMessage], None, None]:
        raise NotImplementedError

    @abstractmethod
    def stop_iter(self):
        raise NotImplementedError


class RabbitMQConsumer(Consumer):
    """
    Base RabbitMQ consumer that works with any queue.
    Consumes execution requests from a specified queue with configurable concurrency.
    All methods are not thread-safe unless specified otherwise.
    """

    channel: BlockingChannel
    connection: BlockingConnection
    conn_uri: str

    def __init__(
        self,
        conn_uri: str,
        queue_name: str,
        concurrency: int,
        logger_prefix: str = "RabbitMQConsumer",
    ):
        self.concurrency = concurrency
        self.queue = queue_name
        self.conn_uri = conn_uri
        self.stop_evt = Event()
        self.logger_prefix = logger_prefix

        self._connect()

    def _connect(self):
        """
        Establish RabbitMQ connection with exponential backoff retry logic.
        Retries connection attempts with exponential backoff to handle
        transient network issues during pod startup.
        """
        if hasattr(self, "connection") and self.connection:
            try:
                self.connection.close()
            except Exception as e:
                AbstraLogger.error(
                    f"[{self.logger_prefix}] Error closing existing connection: {e}"
                )
                pass

        AbstraLogger.info(f"[{self.logger_prefix}] Connecting...")

        params = pika.URLParameters(self.conn_uri)
        params.connection_attempts = 1  # Single attempt per retry iteration
        params.socket_timeout = RABBITMQ_CONNECTION_TIMEOUT_SECONDS
        params.blocked_connection_timeout = RABBITMQ_CONNECTION_TIMEOUT_SECONDS

        delay = RABBITMQ_RETRY_INITIAL_DELAY_SECONDS
        last_exception = None

        for attempt in range(1, RABBITMQ_RETRY_MAX_ATTEMPTS + 1):
            try:
                self.connection = pika.BlockingConnection(params)
                self.channel = self.connection.channel()
                self.channel.basic_qos(prefetch_count=self.concurrency)
                self.channel.queue_declare(queue=self.queue, durable=True)
                AbstraLogger.info(
                    f"[{self.logger_prefix}] Connection established successfully"
                )
                return
            except AMQPConnectionError as e:
                last_exception = e
                if attempt < RABBITMQ_RETRY_MAX_ATTEMPTS:
                    AbstraLogger.warning(
                        f"[{self.logger_prefix}] Connection failed (attempt {attempt}): {e}. "
                        f"Retrying in {delay}s..."
                    )
                    time.sleep(delay)
                    delay = min(delay * 2, 30)  # Exponential backoff, max 30s
                else:
                    AbstraLogger.error(
                        f"[{self.logger_prefix}] All {RABBITMQ_RETRY_MAX_ATTEMPTS} connection attempts failed"
                    )

        raise last_exception or AMQPConnectionError("Failed to connect to RabbitMQ")

    def threadsafe_ack(self, msg: Union[QueueMessage, ControlQueueMessage]):
        AbstraLogger.debug(
            f"[{self.logger_prefix}] Adding ack callback for [{msg.delivery_tag}]"
        )

        def callback():
            AbstraLogger.debug(
                f"[{self.logger_prefix}] Acknowledging message [{msg.delivery_tag}]"
            )
            try:
                if self.channel.is_open:
                    self.channel.basic_ack(delivery_tag=msg.delivery_tag)
                else:
                    AbstraLogger.warning(
                        f"[{self.logger_prefix}] Channel closed, cannot ack message [{msg.delivery_tag}]"
                    )
            except Exception as e:
                AbstraLogger.error(
                    f"[{self.logger_prefix}] Error acknowledging message [{msg.delivery_tag}]: {e}"
                )

        self.connection.add_callback_threadsafe(callback)

    def threadsafe_nack(self, msg: Union[QueueMessage, ControlQueueMessage]):
        AbstraLogger.debug(
            f"[{self.logger_prefix}] Adding nack callback for [{msg.delivery_tag}]"
        )

        def callback():
            AbstraLogger.debug(
                f"[{self.logger_prefix}] Not acknowledging message [{msg.delivery_tag}]"
            )
            try:
                if self.channel.is_open:
                    self.channel.basic_nack(
                        delivery_tag=msg.delivery_tag, requeue=False
                    )
                else:
                    AbstraLogger.warning(
                        f"[{self.logger_prefix}] Channel closed, cannot nack message [{msg.delivery_tag}]"
                    )
            except Exception as e:
                AbstraLogger.error(
                    f"[{self.logger_prefix}] Error nacking message [{msg.delivery_tag}]: {e}"
                )

        self.connection.add_callback_threadsafe(callback)

    def _deserialize(self, body: bytes) -> Union[QueueMessage, ControlQueueMessage]:
        preexecution_data = PreExecution.model_validate(
            deserialize(body.decode("utf-8"))
        )
        return QueueMessage(
            preexecution=preexecution_data,
            delivery_tag=0,  # This will be overwritten by iter
        )

    def iter(self) -> Generator[Union[QueueMessage, ControlQueueMessage], None, None]:
        AbstraLogger.info(f"[{self.logger_prefix}] Starting consumer iteration")

        while not self.stop_evt.is_set():
            try:
                if not hasattr(self, "connection") or self.connection.is_closed:
                    self._connect()

                for method, _, body in self.channel.consume(
                    queue=self.queue, inactivity_timeout=1, auto_ack=False
                ):
                    if self.stop_evt.is_set():
                        break

                    if not method:
                        continue

                    try:
                        queue_message = self._deserialize(body)
                        queue_message.delivery_tag = method.delivery_tag

                        yield queue_message
                    except Exception as e:
                        AbstraLogger.error(
                            f"[{self.logger_prefix}] Error deserializing message: {e}"
                        )
                        self.channel.basic_nack(
                            delivery_tag=method.delivery_tag, requeue=False
                        )

            except AMQPError as e:
                AbstraLogger.error(f"[{self.logger_prefix}] Connection lost: {e}")
                if not self.stop_evt.is_set():
                    AbstraLogger.info(
                        f"[{self.logger_prefix}] Reconnecting in {RABBITMQ_RETRY_INITIAL_DELAY_SECONDS}s..."
                    )
                    time.sleep(RABBITMQ_RETRY_INITIAL_DELAY_SECONDS)
            except Exception as e:
                AbstraLogger.error(
                    f"[{self.logger_prefix}] Unexpected error in consumer loop: {e}"
                )
                if not self.stop_evt.is_set():
                    time.sleep(RABBITMQ_RETRY_INITIAL_DELAY_SECONDS)

    def stop_iter(self):
        AbstraLogger.warning(f"[{self.logger_prefix}] Setting stop event for consumer")
        self.stop_evt.set()

    def __exit__(self, exc_type, exc_val, exc_tb):
        self.stop_iter()

        AbstraLogger.debug(f"[{self.logger_prefix}] Exiting consumer context manager")
        self.connection.process_data_events(time_limit=60)
        AbstraLogger.warning(f"[{self.logger_prefix}] Data events processed")

        if self.connection.is_open:
            AbstraLogger.warning(f"[{self.logger_prefix}] Cancelling channel")
            self.channel.cancel()
            AbstraLogger.warning(f"[{self.logger_prefix}] Closing channel")
            self.channel.close()
            AbstraLogger.warning(f"[{self.logger_prefix}] Closing connection")
            self.connection.close()

        return False

    def __enter__(self):
        return self


class RabbitConsumer(RabbitMQConsumer):
    """Consumer for production environment using 'executions' queue."""

    def __init__(self, conn_uri: str):
        super().__init__(
            conn_uri,
            RABBITMQ_EXECUTION_QUEUE,
            EXECUTION_QUEUE_CONCURRENCY,
            "RabbitConsumer",
        )


class EditorConsumer(Consumer):
    def __init__(self, queue: Queue) -> None:
        self.stop_evt = Event()
        self.queue = queue

    def threadsafe_nack(self, msg: Union[QueueMessage, ControlQueueMessage]):
        pass

    def threadsafe_ack(self, msg: Union[QueueMessage, ControlQueueMessage]):
        pass

    def stop_iter(self):
        self.stop_evt.set()

    def iter(self) -> Generator[Union[QueueMessage, ControlQueueMessage], None, None]:
        while True:
            if self.stop_evt.is_set():
                break

            try:
                if msg := self.queue.get(timeout=1):
                    yield msg
            except Empty:
                continue
            except (OSError, ValueError):
                # Queue was closed (e.g., after process crash)
                # Stop iteration gracefully
                break


class WebEditorConsumer(RabbitMQConsumer):
    """Consumer for web editor using 'web_editor_executions' queue."""

    def __init__(self, conn_uri: str, queue_name: str = "web_editor_executions"):
        super().__init__(
            conn_uri, queue_name, EXECUTION_QUEUE_CONCURRENCY, "WebEditorConsumer"
        )


class WebEditorControlConsumer(RabbitMQConsumer):
    """Consumer for web editor control messages."""

    def __init__(self, conn_uri: str, queue_name: str = "web_editor_control"):
        super().__init__(conn_uri, queue_name, 1, "WebEditorControlConsumer")

    def _deserialize(self, body: bytes) -> ControlQueueMessage:
        control_message = ControlMessage.model_validate(
            deserialize(body.decode("utf-8"))
        )
        return ControlQueueMessage(
            message=control_message,
            delivery_tag=0,  # This will be overwritten by iter
        )
