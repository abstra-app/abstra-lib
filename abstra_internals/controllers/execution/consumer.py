from concurrent.futures import ThreadPoolExecutor
from uuid import uuid4

from abstra_internals.controllers.execution.worker_process import process_main
from abstra_internals.controllers.main import MainController
from abstra_internals.environment import (
    EXECUTION_QUEUE_CONCURRENCY,
    PROCESS_TIMEOUT_SECONDS,
)
from abstra_internals.logger import AbstraLogger
from abstra_internals.repositories.consumer import Consumer, QueueMessage
from abstra_internals.repositories.producer import LocalProducerRepository
from abstra_internals.settings import Settings


class StageNotFound(Exception):
    pass


class NonCleanExit(Exception):
    pass


class ConsumerController:
    def __init__(self, main_controller: MainController, consumer: Consumer):
        self.main_controller = main_controller
        self.consumer = consumer
        self.app_id = str(uuid4())
        self.concurrency = EXECUTION_QUEUE_CONCURRENCY

    def start_loop(self):
        AbstraLogger.debug(
            f"[ConsumerController] Starting loop with {self.concurrency} threads"
        )

        thread_pool = ThreadPoolExecutor(
            max_workers=self.concurrency,
            thread_name_prefix="ExecutionConsumer",
        )

        try:
            for msg in self.consumer.iter():
                AbstraLogger.debug(
                    f"[ConsumerController] Submitting message [{msg.delivery_tag}] for processing"
                )
                thread_pool.submit(
                    self.run_subprocess,
                    msg=msg,
                )
        finally:
            AbstraLogger.warning(
                "[ConsumerController] Consumer main loop exited, waiting for threads to finish"
            )
            thread_pool.shutdown(wait=True)
            AbstraLogger.warning("[ConsumerController] All threads finished")

            # If the loop exits and there are running executions, gracefull shutdown has failed
            self.main_controller.fail_app_executions(
                app_id=self.app_id,
                reason="Failed to set status",
            )

    def run_subprocess(self, msg: QueueMessage):
        worker_id = str(uuid4())
        head_id = worker_id.split("-")[0]

        try:
            mp_context = self.main_controller.repositories.mp_context.get_context()
            stage = self.main_controller.get_stage(msg.preexecution.stage_id)

            if stage is None:
                AbstraLogger.warning(
                    f"[ConsumerController] Stage not found: {msg.preexecution.stage_id}. Message [{msg.delivery_tag}] will be acknowledged."
                )
                self.consumer.threadsafe_ack(msg)
                return

            local_queue = None
            if isinstance(
                self.main_controller.repositories.producer, LocalProducerRepository
            ):
                local_queue = self.main_controller.repositories.producer.queue

            p = mp_context.Process(
                target=process_main,
                name=f"Worker-{head_id}",
                kwargs=dict(
                    stage=stage,
                    worker_id=worker_id,
                    app_id=self.app_id,
                    root_path=Settings.root_path,
                    server_port=Settings.server_port,
                    request=msg.preexecution.context,
                    local_queue=local_queue,
                ),
            )

            p.start()
            p.join(timeout=PROCESS_TIMEOUT_SECONDS)

            # If timeout is reached, the process is still alive
            if p.is_alive():
                p.terminate()
                raise NonCleanExit(
                    f"Run took too long to complete ({PROCESS_TIMEOUT_SECONDS} secs) and was terminated. Please make sure all your requests calls have a timeout set."
                )

            if p.exitcode != 0:
                err_msg = f"Run failed with status '{p.exitcode}'"
                if p.exitcode == -9:
                    err_msg += ": memory limit reached."

                raise NonCleanExit(err_msg)

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

            self.consumer.threadsafe_nack(msg)

            AbstraLogger.warning(
                f"[ConsumerController] Message [{msg.delivery_tag}] has been negatively acknowledged"
            )
