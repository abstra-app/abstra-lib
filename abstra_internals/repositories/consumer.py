from abc import ABC, abstractmethod
from multiprocessing import Queue
from queue import Empty
from threading import Event
from typing import Generator

import pika
from pika.adapters.blocking_connection import BlockingChannel, BlockingConnection

from abstra_internals.entities.execution import PreExecution
from abstra_internals.environment import QUEUE_CONCURRENCY, RABBITMQ_EXECUTION_QUEUE
from abstra_internals.logger import AbstraLogger
from abstra_internals.repositories.producer import QueueMessage
from abstra_internals.utils import deserialize


class Consumer(ABC):
    @abstractmethod
    def done_callback(self, msg: QueueMessage):
        raise NotImplementedError

    @abstractmethod
    def iter(self) -> Generator[QueueMessage, None, None]:
        raise NotImplementedError

    @abstractmethod
    def stop(self):
        raise NotImplementedError


class RabbitConsumer(Consumer):
    channel: BlockingChannel
    connection: BlockingConnection

    def __init__(self, conn_uri: str):
        self.stop_evt = Event()

        self.concurrency = QUEUE_CONCURRENCY
        self.queue = RABBITMQ_EXECUTION_QUEUE

        conn_params = pika.URLParameters(conn_uri)
        self.connection = pika.BlockingConnection(conn_params)

        self.channel = self.connection.channel()
        self.channel.basic_qos(prefetch_count=self.concurrency)
        self.channel.queue_declare(queue=self.queue, durable=True)

    def _callback_threadsafe(self, msg: QueueMessage):
        if self.channel.is_open:
            AbstraLogger.debug(f"[CONSUMER] ack {msg.delivery_tag}")
            self.channel.basic_ack(msg.delivery_tag)
        else:
            AbstraLogger.capture_exception(
                Exception(f"[CONSUMER] cannot ack {msg.delivery_tag}")
            )

    def done_callback(self, msg: QueueMessage):
        self.connection.add_callback_threadsafe(lambda: self._callback_threadsafe(msg))

    def iter(self) -> Generator[QueueMessage, None, None]:
        AbstraLogger.warning("[CONSUMER] starting")
        while True:
            if self.stop_evt.is_set():
                AbstraLogger.warning("[CONSUMER] exiting iteration")
                break

            for method, properties, body in self.channel.consume(
                queue=self.queue, inactivity_timeout=10
            ):
                if not method:
                    break

                yield QueueMessage(
                    preexecution=PreExecution(**deserialize(body.decode("utf-8"))),
                    delivery_tag=method.delivery_tag,
                )

    def stop(self):
        AbstraLogger.warning("[CONSUMER] stoping")
        self.stop_evt.set()

    def close(self):
        AbstraLogger.warning("[CONSUMER] channel canceling")
        self.channel.cancel()
        AbstraLogger.warning("[CONSUMER] channel closing")
        self.channel.close()
        AbstraLogger.warning("[CONSUMER] connection closing")
        self.connection.close()

    def __exit__(self, exc_type, exc_val, exc_tb):
        self.connection.process_data_events(time_limit=10)
        self.close()
        return False

    def __enter__(self) -> "RabbitConsumer":
        return self


# TODO: move out of repositories
class EditorConsumer(Consumer):
    def __init__(self, queue: Queue) -> None:
        self.stop_evt = Event()
        self.queue = queue

    def done_callback(self, msg: QueueMessage):
        pass

    def stop(self):
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
