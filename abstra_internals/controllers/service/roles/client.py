import time
from threading import Thread
from typing import List, Optional

from abstra_internals.controllers.common.task_executors import TaskExecutor
from abstra_internals.controllers.service.roles.common import RoleCommonController
from abstra_internals.entities.execution import Execution
from abstra_internals.settings import Settings


class RoleClientController(RoleCommonController):
    def entrypoints(self, project_id: str) -> List[dict]:
        return [
            e.to_camel() for e in self.repos.role_clients.get_entrypoints(project_id)
        ]

    def create_foreign_task(
        self,
        task_type: str,
        task_payload: dict,
        target_stage_id: str,
        execution: Optional[Execution] = None,
    ):
        executor = TaskExecutor(self.repos)
        project = self.repos.project.load(include_disabled_stages=False)
        executor.send_task(
            type=task_type,
            current_stage=project.get_stage_raises(target_stage_id),
            payload=task_payload,
            execution=execution,
        )

    def sync_connection_pool(self):
        self.repos.role_clients.sync_connections()

    def safe_sync_connection_pool(self):
        try:
            self.sync_connection_pool()
        except Exception as e:
            print(e)

    def loop_sync_connection_pool(self):
        def loop():
            while True:
                if Settings.has_public_url():
                    try:
                        self.sync_connection_pool()
                        time.sleep(60 * 5)
                    except Exception as e:
                        print(e)
                        time.sleep(10)  # Delay retry to avoid spamming server
                        pass
                else:
                    time.sleep(10)

        Thread(target=loop, daemon=True).start()
