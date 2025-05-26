from typing import List, Optional, Tuple

from abstra_internals.controllers.common.task_executors import TaskExecutor
from abstra_internals.controllers.service.roles.common import RoleCommonController
from abstra_internals.entities.execution import Execution
from abstra_internals.logger import AbstraLogger
from abstra_internals.repositories.project.project import (
    Project,
    Stage,
)
from abstra_internals.repositories.tasks import TaskPayload


class RoleAgentController(RoleCommonController):
    def _get_task_targets(
        self,
        current_stage: Stage,
        type: str,
        task_payload: TaskPayload,
        project: Project,
        show_warning: bool = True,
    ) -> List[Tuple[Stage, dict]]:
        targets = []

        possible_transitions = list(
            filter(
                lambda t: True if not t.task_type else type == t.task_type,
                current_stage.workflow_transitions,
            )
        )

        for transition in possible_transitions:
            target_stage = project.get_stage(transition.target_id)
            if not target_stage:
                continue

            targets.append((target_stage, task_payload))

        if len(targets) == 0 and show_warning:
            AbstraLogger.warning(
                f"Task with payload {task_payload} was deleted, no transitions were satisfied with the type: {type}"
            )

        return targets

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
