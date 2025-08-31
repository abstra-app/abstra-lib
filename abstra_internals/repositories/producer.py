import socket
from abc import ABC, abstractmethod
from dataclasses import dataclass
from multiprocessing import Queue
from multiprocessing.connection import Connection, Listener
from uuid import uuid4

import pika

from abstra_internals.entities.execution_context import ClientContext
from abstra_internals.environment import (
    RABBITMQ_DEFAUT_EXCHANGE,
    RABBITMQ_EXECUTION_QUEUE,
)
from abstra_internals.utils.serializable import Serializable


class PreExecution(Serializable):
    stage_id: str
    connection_port: int
    connection_auth_key: str
    context: ClientContext


@dataclass
class QueueMessage:
    preexecution: PreExecution
    delivery_tag: int


class ProducerRepository(ABC):
    @abstractmethod
    def enqueue(self, stage_id: str, context: ClientContext) -> Connection:
        raise NotImplementedError()


class LocalProducerRepository(ProducerRepository):
    def __init__(self, local_queue: Queue):
        self.queue = local_queue

    def enqueue(self, stage_id: str, context: ClientContext) -> Connection:
        auth_key = uuid4().hex
        listener = Listener(("0.0.0.0", 0), authkey=auth_key.encode())
        preexecution = PreExecution(
            stage_id=stage_id,
            context=context,
            connection_port=int(listener.address[1]),
            connection_auth_key=auth_key,
        )
        self.queue.put(
            QueueMessage(
                preexecution=preexecution,
                delivery_tag=0,
            ),
        )
        listener._listener._socket.settimeout(5)  # type: ignore
        try:
            connection = listener.accept()
            return connection
        except socket.timeout:
            raise Exception(
                "Timeout waiting for worker to connect. Are you sure the consumers are set?"
            )
        finally:
            listener.close()


class ProductionProducerRepository(ProducerRepository):
    def __init__(self, connection_uri: str):
        self.connection_uri = connection_uri

    @property
    def conn_params(self):
        return pika.URLParameters(self.connection_uri)

    @property
    def props(self):
        return pika.BasicProperties(
            delivery_mode=pika.DeliveryMode.Persistent,
            content_type="application/json",
        )

    def enqueue(self, stage_id: str, context: ClientContext) -> Connection:
        auth_key = uuid4().hex
        listener = Listener(("0.0.0.0", 0), authkey=auth_key.encode())
        preexecution = PreExecution(
            stage_id=stage_id,
            context=context,
            connection_port=int(listener.address[1]),
            connection_auth_key=auth_key,
        )
        with pika.BlockingConnection(self.conn_params) as connection:
            with connection.channel() as channel:
                channel.queue_declare(queue=RABBITMQ_EXECUTION_QUEUE, durable=True)
                channel.basic_publish(
                    body=preexecution.model_dump_json(),
                    routing_key=RABBITMQ_EXECUTION_QUEUE,
                    exchange=RABBITMQ_DEFAUT_EXCHANGE,
                    properties=self.props,
                )

        listener._listener._socket.settimeout(5)  # type: ignore
        try:
            return listener.accept()
        except socket.timeout:
            raise Exception("Timeout waiting for worker to connect")
