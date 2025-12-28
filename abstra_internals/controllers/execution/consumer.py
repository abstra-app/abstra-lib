from concurrent.futures import ThreadPoolExecutor
from multiprocessing.process import BaseProcess
from threading import Thread
from typing import Dict, Optional, cast
from uuid import uuid4

from abstra_internals.controllers.execution.executor_config import ExecutorConfig
from abstra_internals.controllers.execution.executor_pool import ExecutorPool
from abstra_internals.controllers.execution.executor_process import RabbitMQParams
from abstra_internals.controllers.main import MainController
from abstra_internals.environment import (
    EXECUTION_QUEUE_CONCURRENCY,
    IS_PRODUCTION,
    RABBITMQ_CONNECTION_URI,
)
from abstra_internals.logger import AbstraLogger
from abstra_internals.repositories.consumer import (
    Consumer,
    ControlQueueMessage,
    QueueMessage,
)
from abstra_internals.repositories.producer import LocalProducerRepository
from abstra_internals.repositories.project.project import StageWithFile
from abstra_internals.settings import Settings


class StageNotFound(Exception):
    pass


class NonCleanExit(Exception):
    pass


class ConsumerController:
    def __init__(
        self,
        main_controller: MainController,
        consumer: Consumer,
        control_consumer: Optional[Consumer] = None,
    ):
        self.main_controller = main_controller
        self.consumer = consumer
        self.control_consumer = control_consumer
        self.app_id = str(uuid4())
        self.concurrency = EXECUTION_QUEUE_CONCURRENCY
        self.executor: Optional[ThreadPoolExecutor] = None

        self.active_processes: Dict[int, BaseProcess] = {}

        config = ExecutorConfig.from_environment()
        config.validate()

        local_queue = None
        if isinstance(main_controller.repositories.producer, LocalProducerRepository):
            local_queue = main_controller.repositories.producer.queue

        self.executor_pool = ExecutorPool(
            config=config,
            mp_context=main_controller.repositories.mp_context.get_context(),
            root_path=str(Settings.root_path),
            server_port=Settings.server_port,
            parent_executions_queue=local_queue,
            verbose=IS_PRODUCTION,
        )

    def _control_loop(self):
        if not self.control_consumer:
            return

        AbstraLogger.info("[ConsumerController] Starting control loop")
        for msg in self.control_consumer.iter():
            try:
                if isinstance(msg, ControlQueueMessage):
                    control_msg = msg.message
                    if control_msg.type == "stop":
                        execution_id = control_msg.payload.get("execution_id")
                        if execution_id:
                            AbstraLogger.info(
                                f"[ConsumerController] Received stop request for execution {execution_id}"
                            )
                            self.executor_pool.kill_execution(execution_id)

                    self.control_consumer.threadsafe_ack(msg)
                else:
                    AbstraLogger.warning(
                        f"[ConsumerController] Received unknown message type in control loop: {type(msg)}"
                    )
                    self.control_consumer.threadsafe_ack(msg)
            except Exception as e:
                AbstraLogger.error(f"[ConsumerController] Error in control loop: {e}")
                self.control_consumer.threadsafe_nack(msg)

    def start_loop(self):
        if self.executor_pool:
            self.executor_pool.start()

        if self.control_consumer:
            self.control_thread = Thread(target=self._control_loop, daemon=True)
            self.control_thread.start()

        try:
            self.executor = ThreadPoolExecutor(
                thread_name_prefix="ExecutionConsumer",
            )

            for msg in self.consumer.iter():
                if self.executor._shutdown:
                    break

                if isinstance(msg, ControlQueueMessage):
                    continue

                self.executor.submit(
                    self.run_subprocess,
                    msg=msg,
                )

            self.main_controller.fail_app_executions(
                app_id=self.app_id,
                reason="Failed to set status",
            )
        finally:
            if self.executor:
                self.executor.shutdown(wait=True)
                self.executor = None
            if self.executor_pool:
                self.executor_pool.shutdown()

    def shutdown(self):
        if self.executor:
            self.executor.shutdown(wait=True)
            self.executor = None

    def run_subprocess(self, msg: QueueMessage) -> None:
        worker_id = str(uuid4())

        connection = None
        rabbitmq_params = None

        try:
            stage = self.main_controller.get_stage(msg.preexecution.stage_id)

            if stage is None:
                AbstraLogger.error(
                    f"[ConsumerController] Stage not found: {msg.preexecution.stage_id}."
                    f"Aborting execution. Message [{msg.delivery_tag}] will be acknowledged."
                )
                self.consumer.threadsafe_ack(msg)
                return

            if isinstance(
                self.main_controller.repositories.producer, LocalProducerRepository
            ):
                assert msg.connection is not None, "Connection is None in local mode"
                connection = msg.connection
            else:
                assert RABBITMQ_CONNECTION_URI is not None, (
                    "RABBITMQ_CONNECTION_URI is None in production mode"
                )
                rabbitmq_params = RabbitMQParams(
                    connection_uri=RABBITMQ_CONNECTION_URI,
                    execution_id=msg.preexecution.execution_id,
                )

            response = self.executor_pool.execute(
                stage=cast(StageWithFile, stage),
                worker_id=worker_id,
                app_id=self.app_id,
                execution_id=msg.preexecution.execution_id,
                request=msg.preexecution.context,
                connection=connection,
                rabbitmq_params=rabbitmq_params,
            )

            if not response.success:
                raise NonCleanExit(f"Execution failed: {response.error}")

            self.consumer.threadsafe_ack(msg)

        except Exception as e:
            AbstraLogger.error(
                f"[ConsumerController] Error processing message [{msg.delivery_tag}]: {e}"
            )

            AbstraLogger.capture_exception(e)

            self.main_controller.fail_worker_executions(
                app_id=self.app_id,
                worker_id=worker_id,
                reason=f"{e}",
            )

            self.main_controller.fail_execution(
                execution_id=msg.preexecution.execution_id,
                reason=f"{e}",
            )

            self.consumer.threadsafe_nack(msg)
