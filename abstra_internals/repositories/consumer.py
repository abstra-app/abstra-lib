from abc import ABC, abstractmethod
from multiprocessing import Queue
from queue import Empty
from threading import Event
from typing import Generator

import pika
from pika.adapters.blocking_connection import BlockingChannel, BlockingConnection

from abstra_internals.environment import (
    EXECUTION_QUEUE_CONCURRENCY,
    RABBITMQ_EXECUTION_QUEUE,
)
from abstra_internals.logger import AbstraLogger
from abstra_internals.repositories.producer import PreExecution, QueueMessage
from abstra_internals.utils import deserialize


class Consumer(ABC):
    @abstractmethod
    def threadsafe_ack(self, msg: QueueMessage):
        raise NotImplementedError

    @abstractmethod
    def threadsafe_nack(self, msg: QueueMessage):
        raise NotImplementedError

    @abstractmethod
    def iter(self) -> Generator[QueueMessage, None, None]:
        raise NotImplementedError

    @abstractmethod
    def stop_iter(self):
        raise NotImplementedError


class RabbitConsumer(Consumer):
    """All methods are not thread-safe unless specified otherwise."""

    channel: BlockingChannel
    connection: BlockingConnection
    conn_uri: str

    def __init__(self, conn_uri: str):
        self.concurrency = EXECUTION_QUEUE_CONCURRENCY
        self.queue = RABBITMQ_EXECUTION_QUEUE
        self.conn_uri = conn_uri
        self.stop_evt = Event()

        self._connect()

    def _connect(self):
        AbstraLogger.info("[RabbitConsumer] Connecting...")
        self.connection = pika.BlockingConnection(pika.URLParameters(self.conn_uri))
        self.channel = self.connection.channel()
        self.channel.basic_qos(prefetch_count=self.concurrency)
        self.channel.queue_declare(queue=self.queue, durable=True)
        AbstraLogger.info("[RabbitConsumer] Connection established")

    def threadsafe_ack(self, msg: QueueMessage):
        AbstraLogger.debug(
            f"[RabbitConsumer] Adding ack callback for [{msg.delivery_tag}]"
        )

        def callback():
            AbstraLogger.debug(
                f"[RabbitConsumer] Acknowledging message [{msg.delivery_tag}]"
            )
            self.channel.basic_ack(delivery_tag=msg.delivery_tag)

        self.connection.add_callback_threadsafe(callback)

    def threadsafe_nack(self, msg: QueueMessage):
        AbstraLogger.debug(
            f"[RabbitConsumer] Adding nack callback for [{msg.delivery_tag}]"
        )

        def callback():
            AbstraLogger.debug(
                f"[RabbitConsumer] Not acknowledging message [{msg.delivery_tag}]"
            )
            self.channel.basic_nack(delivery_tag=msg.delivery_tag, requeue=False)

        self.connection.add_callback_threadsafe(callback)

    def iter(self) -> Generator[QueueMessage, None, None]:
        AbstraLogger.info("[RabbitConsumer] Starting consumer iteration")

        for method, _, body in self.channel.consume(
            queue=self.queue, inactivity_timeout=10, auto_ack=False
        ):
            if self.stop_evt.is_set():
                break

            if not method:
                AbstraLogger.debug("[RabbitConsumer] Consume returned no messages")
                continue

            yield QueueMessage(
                preexecution=PreExecution(**deserialize(body.decode("utf-8"))),
                delivery_tag=method.delivery_tag,
            )

    def stop_iter(self):
        AbstraLogger.warning("[RabbitConsumer] Setting stop event for consumer")
        self.stop_evt.set()

    def __exit__(self, exc_type, exc_val, exc_tb):
        self.stop_iter()

        AbstraLogger.debug("[RabbitConsumer] Exiting consumer context manager")
        self.connection.process_data_events(time_limit=60)
        AbstraLogger.warning("[RabbitConsumer] Data events processed")

        if self.connection.is_open:
            AbstraLogger.warning("[RabbitConsumer] Cancelling channel")
            self.channel.cancel()
            AbstraLogger.warning("[RabbitConsumer] Closing channel")
            self.channel.close()
            AbstraLogger.warning("[RabbitConsumer] Closing connection")
            self.connection.close()

        return False

    def __enter__(self) -> "RabbitConsumer":
        return self


class EditorConsumer(Consumer):
    def __init__(self, queue: Queue) -> None:
        self.stop_evt = Event()
        self.queue = queue

    def threadsafe_nack(self, msg: QueueMessage):
        pass

    def threadsafe_ack(self, msg: QueueMessage):
        pass

    def stop_iter(self):
        self.stop_evt.set()

    def iter(self) -> Generator[QueueMessage, None, None]:
        while True:
            if self.stop_evt.is_set():
                break

            try:
                if msg := self.queue.get(timeout=1):
                    yield msg
            except Empty:
                continue
