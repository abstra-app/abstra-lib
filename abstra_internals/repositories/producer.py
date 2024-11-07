from abc import ABC, abstractmethod
from dataclasses import dataclass

import pika

from abstra_internals.entities.execution import PreExecution
from abstra_internals.environment import (
    RABBITMQ_DEFAUT_EXCHANGE,
    RABBITMQ_EXECUTION_QUEUE,
)
from abstra_internals.repositories.multiprocessing import MPContext
from abstra_internals.utils import serialize


@dataclass
class QueueMessage:
    preexecution: PreExecution
    delivery_tag: int


class ProducerRepository(ABC):
    @abstractmethod
    def submit(self, preexecution: PreExecution) -> None:
        raise NotImplementedError()


class LocalProducerRepository(ProducerRepository):
    def __init__(self, mp_context: MPContext):
        self.queue = mp_context.Queue()

    def submit(self, preexecution: PreExecution) -> None:
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
        return pika.URLParameters(self.connection_uri)

    @property
    def props(self):
        return pika.BasicProperties(
            delivery_mode=pika.DeliveryMode.Persistent,
            content_type="application/json",
        )

    def submit(self, preexecution: PreExecution) -> None:
        with pika.BlockingConnection(self.conn_params) as connection:
            with connection.channel() as channel:
                channel.queue_declare(queue=RABBITMQ_EXECUTION_QUEUE, durable=True)
                channel.basic_publish(
                    body=serialize(preexecution.__dict__),
                    routing_key=RABBITMQ_EXECUTION_QUEUE,
                    exchange=RABBITMQ_DEFAUT_EXCHANGE,
                    properties=self.props,
                )
