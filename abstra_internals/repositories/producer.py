import time
from abc import ABC, abstractmethod
from dataclasses import dataclass
from multiprocessing import Pipe, Queue
from multiprocessing.connection import Connection
from typing import Optional
from uuid import uuid4

import pika
from pika.adapters.blocking_connection import BlockingChannel
from pika.exceptions import AMQPConnectionError

from abstra_internals.controllers.execution.connection_protocol import (
    ConnectionProtocol,
)
from abstra_internals.entities.execution_context import ClientContext
from abstra_internals.environment import (
    RABBITMQ_CONNECTION_TIMEOUT_SECONDS,
    RABBITMQ_DEFAUT_EXCHANGE,
    RABBITMQ_EXECUTION_QUEUE,
    RABBITMQ_RETRY_INITIAL_DELAY_SECONDS,
    RABBITMQ_RETRY_MAX_ATTEMPTS,
)
from abstra_internals.logger import AbstraLogger
from abstra_internals.utils.rabbitmq_connection import RabbitMQConnection
from abstra_internals.utils.serializable import Serializable


class PreExecution(Serializable):
    stage_id: str
    context: ClientContext
    execution_id: str


@dataclass
class QueueMessage:
    preexecution: PreExecution
    delivery_tag: int
    connection: Optional[Connection] = None  # For local execution only


class ProducerRepository(ABC):
    queue: Queue

    @abstractmethod
    def enqueue(self, stage_id: str, context: ClientContext) -> ConnectionProtocol:
        raise NotImplementedError()


class LocalProducerRepository(ProducerRepository):
    def __init__(self, local_queue: Queue):
        self.queue = local_queue

    def enqueue(self, stage_id: str, context: ClientContext) -> Connection:
        execution_id = uuid4().__str__()

        parent_conn, child_conn = Pipe()

        preexecution = PreExecution(
            stage_id=stage_id,
            context=context,
            execution_id=execution_id,
        )

        self.queue.put(
            QueueMessage(
                preexecution=preexecution,
                delivery_tag=0,
                connection=child_conn,
            ),
        )

        return parent_conn


class RabbitMQProducerRepository(ProducerRepository):
    """
    Base RabbitMQ producer repository that works with any queue.
    Publishes execution requests to a specified queue and creates bidirectional
    communication channels for real-time interaction with workers.
    """

    def __init__(self, connection_uri: str, queue_name: str):
        self.connection_uri = connection_uri
        self.queue_name = queue_name
        AbstraLogger.info(
            f"[RabbitMQProducerRepository] Initialized with URI: {connection_uri}, Queue: {queue_name}"
        )

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
                    f"[RabbitMQProducerRepository] Connection attempt {attempt}/{RABBITMQ_RETRY_MAX_ATTEMPTS}"
                )
                connection = pika.BlockingConnection(self.conn_params)
                AbstraLogger.info(
                    "[RabbitMQProducerRepository] Connection established successfully"
                )
                return connection
            except AMQPConnectionError as e:
                last_exception = e
                if attempt < RABBITMQ_RETRY_MAX_ATTEMPTS:
                    AbstraLogger.warning(
                        f"[RabbitMQProducerRepository] Connection failed (attempt {attempt}): {e}. "
                        f"Retrying in {delay}s..."
                    )
                    time.sleep(delay)
                    delay = min(delay * 2, 30)  # Exponential backoff, max 30s
                else:
                    AbstraLogger.error(
                        f"[RabbitMQProducerRepository] All {RABBITMQ_RETRY_MAX_ATTEMPTS} connection attempts failed with params {self.conn_params}"
                    )

        raise last_exception or AMQPConnectionError("Failed to connect to RabbitMQ")

    def enqueue(self, stage_id: str, context: ClientContext) -> ConnectionProtocol:
        execution_id = uuid4().__str__()

        preexecution = PreExecution(
            stage_id=stage_id,
            context=context,
            execution_id=execution_id,
        )

        with self._connect_with_retry() as connection:
            with connection.channel() as channel:
                channel: BlockingChannel
                channel.queue_declare(queue=self.queue_name, durable=True)
                channel.basic_publish(
                    body=preexecution.dump_json(),
                    routing_key=self.queue_name,
                    exchange=RABBITMQ_DEFAUT_EXCHANGE,
                    properties=self.props,
                )

        rabbitmq_connection = RabbitMQConnection(
            connection_uri=self.connection_uri,
            send_queue=f"server_to_worker_{execution_id}",
            recv_queue=f"worker_to_server_{execution_id}",
            execution_id=execution_id,
            auto_start_consumer=False,
        )

        return rabbitmq_connection


class ProductionProducerRepository(RabbitMQProducerRepository):
    """Producer repository for production environment using 'executions' queue."""

    def __init__(self, connection_uri: str):
        super().__init__(connection_uri, RABBITMQ_EXECUTION_QUEUE)


class WebEditorProducerRepository(RabbitMQProducerRepository):
    """Producer repository for web editor using 'web_editor_executions' queue."""

    def __init__(self, connection_uri: str, queue_name: str = "web_editor_executions"):
        super().__init__(connection_uri, queue_name)


class WebEditorControlProducerRepository(RabbitMQProducerRepository):
    """Producer repository for web editor control messages."""

    def __init__(self, connection_uri: str):
        super().__init__(connection_uri, "web_editor_control")

    def stop_execution(self, execution_id: str):
        from abstra_internals.repositories.consumer import ControlMessage

        payload = ControlMessage(type="stop", payload={"execution_id": execution_id})

        with self._connect_with_retry() as connection:
            with connection.channel() as channel:
                channel.queue_declare(queue=self.queue_name, durable=True)
                channel.basic_publish(
                    body=payload.dump_json(),
                    routing_key=self.queue_name,
                    exchange=RABBITMQ_DEFAUT_EXCHANGE,
                    properties=self.props,
                )
