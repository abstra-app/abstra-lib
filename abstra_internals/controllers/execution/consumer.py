from concurrent.futures import ThreadPoolExecutor
from typing import Optional
from uuid import uuid4

from abstra_internals.controllers.execution.execution import ExecutionController
from abstra_internals.controllers.main import MainController
from abstra_internals.entities.execution import ClientContext
from abstra_internals.environment import (
    EXECUTION_QUEUE_CONCURRENCY,
    set_SERVER_UUID,
    set_WORKER_UUID,
)
from abstra_internals.logger import AbstraLogger, Environment
from abstra_internals.repositories.consumer import Consumer, QueueMessage
from abstra_internals.repositories.project.project import StageWithFile
from abstra_internals.settings import Settings
from abstra_internals.stdio_patcher import StdioPatcher


class StageNotFound(Exception):
    pass


class NonCleanExit(Exception):
    pass


# Should be smaller than the RabbitMQ consumer timeout
# to prevent its termination
PROCESS_TIMEOUT_SECONDS = 60 * 60 * 3


class ConsumerController:
    def __init__(self, main_controller: MainController, consumer: Consumer):
        self.main_controller = main_controller
        self.consumer = consumer
        self.app_id = str(uuid4())

    def tagged_msg(self, msg: str) -> str:
        short_id = self.app_id.split("-")[0]
        return f"[ConsumerController ({short_id})] {msg}"

    def start_loop(self):
        AbstraLogger.debug(
            self.tagged_msg(f"Starting loop with {EXECUTION_QUEUE_CONCURRENCY} threads")
        )

        thread_pool = ThreadPoolExecutor(max_workers=EXECUTION_QUEUE_CONCURRENCY)

        for msg in self.consumer.iter():
            try:
                thread_pool.submit(
                    self.run_subprocess,
                    msg=msg,
                )
            except Exception as e:
                AbstraLogger.error(self.tagged_msg(f"iteration error: {e}"))
                AbstraLogger.capture_exception(e)

        AbstraLogger.debug(
            self.tagged_msg("Consumer main loop exited, waiting for threads to finish")
        )
        thread_pool.shutdown(wait=True)
        AbstraLogger.debug(self.tagged_msg("All threads finished"))

        self.main_controller.app_exit(
            app_id=self.app_id,
            err_msg=self.tagged_msg("Consumer main loop exited"),
        )

        raise Exception("Consumer main loop exited")

    def run_subprocess(self, msg: QueueMessage):
        worker_id = str(uuid4())
        head_id = worker_id.split("-")[0]

        try:
            mp_context = self.main_controller.repositories.mp_context.get_context()
            stage = self.main_controller.get_stage(msg.preexecution.stage_id)
            if stage is None:
                raise StageNotFound(msg.preexecution.stage_id)

            p = mp_context.Process(
                target=subprocess,
                kwargs=dict(
                    stage=stage,
                    controller=self.main_controller,
                    worker_id=worker_id,
                    app_id=self.app_id,
                    root_path=Settings.root_path,
                    server_port=Settings.server_port,
                    request=msg.preexecution.context,
                    environment=AbstraLogger.environment,
                ),
                name=f"Worker-{head_id}",
            )

            p.start()
            p.join(timeout=PROCESS_TIMEOUT_SECONDS)

            # If timeout is reached, the process is still alive
            if p.is_alive():
                p.terminate()
                raise NonCleanExit(
                    f"Worker took too long to complete ({PROCESS_TIMEOUT_SECONDS} seconds)"
                )

            if p.exitcode != 0:
                err_msg = f"Worker exited with status ({p.exitcode})"
                if p.exitcode == -9:
                    err_msg += ": Server reached its memory limit"

                raise NonCleanExit(err_msg)

            self.consumer.done_callback(msg)

        except Exception as e:
            AbstraLogger.error(self.tagged_msg(f"Worker {worker_id} error: {e}"))
            AbstraLogger.capture_exception(e)
            self.main_controller.worker_exit(
                app_id=self.app_id,
                worker_id=worker_id,
                err_msg=self.tagged_msg(f"Worker {worker_id} error: {e}"),
            )


def subprocess(
    *,
    root_path: str,
    server_port: int,
    worker_id: str,
    app_id: str,
    stage: StageWithFile,
    controller: MainController,
    environment: Optional[Environment],
    request: Optional[ClientContext] = None,
):
    AbstraLogger.debug("[ConsumerController Subprocess] Starting...")

    Settings.set_root_path(root_path)
    Settings.set_server_port(server_port, force=True)
    AbstraLogger.init(environment)

    set_SERVER_UUID(app_id)
    set_WORKER_UUID(worker_id)

    StdioPatcher.apply(controller)

    ExecutionController(
        repositories=controller.repositories,
        stage=stage,
        client=None,
        context=request,
    ).run()

    AbstraLogger.debug("[ConsumerController Subprocess] Finished")
