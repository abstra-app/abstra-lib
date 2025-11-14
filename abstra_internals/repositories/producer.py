import time
from abc import ABC, abstractmethod
from dataclasses import dataclass
from multiprocessing import Queue
from typing import Optional

import pika
from pika.exceptions import AMQPConnectionError

from abstra_internals.entities.execution_context import ClientContext
from abstra_internals.environment import (
    RABBITMQ_CONNECTION_TIMEOUT_SECONDS,
    RABBITMQ_DEFAUT_EXCHANGE,
    RABBITMQ_EXECUTION_QUEUE,
    RABBITMQ_RETRY_INITIAL_DELAY_SECONDS,
    RABBITMQ_RETRY_MAX_ATTEMPTS,
)
from abstra_internals.logger import AbstraLogger
from abstra_internals.utils.serializable import Serializable


class PreExecution(Serializable):
    stage_id: str
    context: Optional[ClientContext] = None


@dataclass
class QueueMessage:
    preexecution: PreExecution
    delivery_tag: int


class ProducerRepository(ABC):
    @abstractmethod
    def enqueue(self, stage_id: str, context: Optional[ClientContext] = None) -> None:
        raise NotImplementedError()


class LocalProducerRepository(ProducerRepository):
    def __init__(self, local_queue: Queue):
        self.queue = local_queue

    def enqueue(self, stage_id: str, context: Optional[ClientContext] = None) -> None:
        preexecution = PreExecution(stage_id=stage_id, context=context)
        self.queue.put(
            QueueMessage(
                preexecution=preexecution,
                delivery_tag=0,
            ),
        )


class ProductionProducerRepository(ProducerRepository):
    def __init__(self, connection_uri: str):
        self.connection_uri = connection_uri

    @property
    def conn_params(self):
        params = pika.URLParameters(self.connection_uri)
        params.connection_attempts = 1  # Single attempt per retry iteration
        params.socket_timeout = RABBITMQ_CONNECTION_TIMEOUT_SECONDS
        params.blocked_connection_timeout = RABBITMQ_CONNECTION_TIMEOUT_SECONDS
        return params

    @property
    def props(self):
        return pika.BasicProperties(
            delivery_mode=pika.DeliveryMode.Persistent,
            content_type="application/json",
        )

    def _connect_with_retry(self) -> pika.BlockingConnection:
        """
        Establish RabbitMQ connection with exponential backoff retry logic.
        Retries connection attempts with exponential backoff to handle
        transient network issues during pod startup.
        """
        delay = RABBITMQ_RETRY_INITIAL_DELAY_SECONDS
        last_exception = None

        for attempt in range(1, RABBITMQ_RETRY_MAX_ATTEMPTS + 1):
            try:
                AbstraLogger.info(
                    f"[ProductionProducerRepository] Connection attempt {attempt}/{RABBITMQ_RETRY_MAX_ATTEMPTS}"
                )
                connection = pika.BlockingConnection(self.conn_params)
                AbstraLogger.info(
                    "[ProductionProducerRepository] Connection established successfully"
                )
                return connection
            except AMQPConnectionError as e:
                last_exception = e
                if attempt < RABBITMQ_RETRY_MAX_ATTEMPTS:
                    AbstraLogger.warning(
                        f"[ProductionProducerRepository] Connection failed (attempt {attempt}): {e}. "
                        f"Retrying in {delay}s..."
                    )
                    time.sleep(delay)
                    delay = min(delay * 2, 30)  # Exponential backoff, max 30s
                else:
                    AbstraLogger.error(
                        f"[ProductionProducerRepository] All {RABBITMQ_RETRY_MAX_ATTEMPTS} connection attempts failed"
                    )

        raise last_exception or AMQPConnectionError("Failed to connect to RabbitMQ")

    def enqueue(self, stage_id: str, context: Optional[ClientContext] = None) -> None:
        preexecution = PreExecution(stage_id=stage_id, context=context)
        with self._connect_with_retry() as connection:
            with connection.channel() as channel:
                channel.queue_declare(queue=RABBITMQ_EXECUTION_QUEUE, durable=True)
                channel.basic_publish(
                    body=preexecution.model_dump_json(),
                    routing_key=RABBITMQ_EXECUTION_QUEUE,
                    exchange=RABBITMQ_DEFAUT_EXCHANGE,
                    properties=self.props,
                )
