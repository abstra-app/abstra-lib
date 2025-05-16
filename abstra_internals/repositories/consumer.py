from abc import ABC, abstractmethod
from multiprocessing import Queue
from queue import Empty
from threading import Event, Lock
from typing import Generator

import pika
from pika.adapters.blocking_connection import BlockingChannel, BlockingConnection
from pika.exceptions import AMQPError, ChannelError

from abstra_internals.environment import (
    EXECUTION_QUEUE_CONCURRENCY,
    RABBITMQ_EXECUTION_QUEUE,
    RABBITMQ_QUEUE_RECONNECT_ATTEMPTS,
    RABBITMQ_QUEUE_RECONNECT_BACKOFF_TIME,
)
from abstra_internals.logger import AbstraLogger
from abstra_internals.repositories.producer import PreExecution, QueueMessage
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
    conn_uri: str
    is_connected: bool = False
    __connection_lock: Lock = Lock()

    def _create_params(self) -> pika.URLParameters:
        params = pika.URLParameters(self.conn_uri)
        params.retry_delay = RABBITMQ_QUEUE_RECONNECT_BACKOFF_TIME
        params.connection_attempts = RABBITMQ_QUEUE_RECONNECT_ATTEMPTS
        return params

    def __init__(self, conn_uri: str):
        self.conn_uri = conn_uri

        self.stop_evt = Event()
        self.concurrency = EXECUTION_QUEUE_CONCURRENCY
        self.queue = RABBITMQ_EXECUTION_QUEUE
        self._connect()

    def _connect(self):
        """Establish connection with retry logic"""
        with self.__connection_lock:
            while not self.stop_evt.is_set() and not self.is_connected:
                try:
                    params = self._create_params()
                    self.connection = pika.BlockingConnection(params)
                    self.channel = self.connection.channel()
                    self.channel.basic_qos(prefetch_count=self.concurrency)
                    self.channel.queue_declare(queue=self.queue, durable=True)
                    self.is_connected = True
                    AbstraLogger.info("Connected to RabbitMQ")
                    return
                except Exception as e:
                    AbstraLogger.error(f"Connection failed: {e}.")

    def _callback_threadsafe(self, msg: QueueMessage):
        with self.__connection_lock:
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
                break

            try:
                for method, properties, body in self.channel.consume(
                    queue=self.queue, inactivity_timeout=10, auto_ack=False
                ):
                    if self.stop_evt.is_set():
                        break

                    if not method:
                        continue

                    yield QueueMessage(
                        preexecution=PreExecution(**deserialize(body.decode("utf-8"))),
                        delivery_tag=method.delivery_tag,
                    )

            except (ChannelError, AMQPError) as e:
                self.is_connected = False
                AbstraLogger.error(f"Unexpected error: {e}. Reconnecting...")
                self._connect()

    def stop(self):
        AbstraLogger.warning("[CONSUMER] stoping")
        self.stop_evt.set()
        try:
            with self.__connection_lock:
                if self.connection.is_open:
                    AbstraLogger.warning("[CONSUMER] channel canceling")
                    self.channel.cancel()
                    AbstraLogger.warning("[CONSUMER] channel closing")
                    self.channel.close()
                    AbstraLogger.warning("[CONSUMER] connection closing")
                    self.connection.close()
        except Exception as e:
            AbstraLogger.error(f"Shutdown error: {e}")

    def __exit__(self, exc_type, exc_val, exc_tb):
        self.connection.process_data_events(time_limit=10)
        self.stop()
        return False

    def __enter__(self) -> "RabbitConsumer":
        return self


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
