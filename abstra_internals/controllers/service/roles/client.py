import time
from threading import Thread
from typing import List, Optional

from abstra_internals.controllers.common.task_executors import TaskExecutor
from abstra_internals.controllers.service.roles.common import RoleCommonController
from abstra_internals.entities.execution import Execution
from abstra_internals.repositories.project.project import ProjectRepository
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
        project = ProjectRepository.load()
        executor.send_task(
            type=task_type,
            current_stage=project.get_stage_raises(target_stage_id),
            payload=task_payload,
            execution=execution,
        )

    def sync_connection_pool(self):
        if Settings.public_url is None:
            return

        project = ProjectRepository.load()
        connections = self.repos.role_clients.get_connections()

        for connection in connections:
            for agent in project.agents:
                if agent.id == connection.client_stage_id:
                    break
            else:
                self.repos.role_clients.delete_connection(connection)

        for agent in project.agents:
            if not agent.client_stage_id or not agent.project_id:
                continue

            for connection in connections:
                if (
                    connection.agent_stage_id == agent.client_stage_id
                    and connection.agent_project_id == agent.project_id
                    and connection.client_stage_id == agent.id
                ):
                    self.repos.role_clients.update_or_create_connection(
                        connection=connection
                    )
                    break

            else:
                self.repos.role_clients.connect_to_agent(
                    agent_stage_id=agent.client_stage_id,
                    agent_project_id=agent.project_id,
                    client_stage_id=agent.id,
                )

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
