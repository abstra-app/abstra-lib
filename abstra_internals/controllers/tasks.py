from dataclasses import dataclass
from typing import List, Optional, Tuple

from abstra_internals.interface.sdk import user_exceptions
from abstra_internals.repositories.execution import ExecutionRepository
from abstra_internals.repositories.project.project import ProjectRepository
from abstra_internals.repositories.tasks import TaskDTO, TasksRepository


@dataclass
class DataRequestFilter:
    stage: Optional[List[str]]
    status: Optional[List[str]]

    @staticmethod
    def from_dict(data: dict) -> "DataRequestFilter":
        return DataRequestFilter(
            stage=data.get("stage", None),
            status=data.get("status", None),
        )

    def to_dict(self) -> dict:
        return dict((k, v) for k, v in self.__dict__.items() if v is not None)


@dataclass
class DataRequest:
    filter: DataRequestFilter
    limit: int
    offset: int

    @staticmethod
    def from_dict(data: dict) -> "DataRequest":
        return DataRequest(
            filter=DataRequestFilter.from_dict(data.get("filter", {})),
            limit=data.get("limit", 10),
            offset=data.get("offset", 0),
        )

    def to_dict(self) -> dict:
        return dict((k, v) for k, v in self.__dict__.items() if v is not None)


class ListTasksItem(TaskDTO):
    target_stage_title: str
    target_stage_type: str
    source_stage_title: Optional[str]
    source_stage_type: Optional[str]


class TasksController:
    def __init__(
        self,
        tasks_repo: TasksRepository,
        execution_repo: ExecutionRepository,
    ) -> None:
        self.task_repo = tasks_repo
        self.execution_repo = execution_repo

    def get_stage(self, stage_id: str):
        project = ProjectRepository().load()
        stage = project.get_stage(stage_id)

        if not stage:
            raise Exception(f"Stage {stage_id} not found")

        return {
            "title": stage.title,
            "type_name": "on-task" if stage.type_name == "script" else stage.type_name,
        }

    def get_nullable_stage(self, stage_id: Optional[str]):
        if not stage_id:
            return {
                "title": None,
                "type_name": None,
            }
        return self.get_stage(stage_id)

    def list_tasks(
        self, req: Optional[DataRequest] = None
    ) -> Tuple[List[ListTasksItem], int]:
        items = []
        for task in self.task_repo.get_all_tasks():
            if (
                req
                and req.filter.stage
                and task.target_stage_id not in req.filter.stage
            ):
                continue
            if req and req.filter.status and task.status not in req.filter.status:
                continue

            target_stage = self.get_stage(task.target_stage_id)
            source_stage = self.get_nullable_stage(task.created.by_stage_id)

            items.append(
                ListTasksItem(
                    **task.dump(),
                    target_stage_type=target_stage["type_name"],
                    target_stage_title=target_stage["title"],
                    source_stage_type=source_stage["type_name"],
                    source_stage_title=source_stage["title"],
                )
            )

        if not req:
            return items, len(items)

        return items[req.offset : req.offset + req.limit], len(items)

    def get_stage_tasks(self, stage_id) -> List[ListTasksItem]:
        target_stage = self.get_stage(stage_id)
        tasks = self.task_repo.get_stage_tasks(stage_id)

        if not target_stage["title"]:
            raise Exception(f"Stage {stage_id} not found")

        return [
            ListTasksItem(
                **task.dump(),
                target_stage_title=target_stage["title"],
                target_stage_type=target_stage["type_name"],
                source_stage_title=self.get_nullable_stage(task.created.by_stage_id)[
                    "title"
                ],
                source_stage_type=self.get_nullable_stage(task.created.by_stage_id)[
                    "type_name"
                ],
            )
            for task in tasks
        ]

    def get_sent_tasks(self, stage_id) -> List[ListTasksItem]:
        all_tasks, _ = self.list_tasks()
        tasks_with_executions = [
            (task, self.execution_repo.get(task.created.by_execution_id))
            for task in all_tasks
            if task.created.by_execution_id is not None
        ]

        return [
            ListTasksItem(
                **task.dump(),
                target_stage_title=task.target_stage_title,
                target_stage_type=task.target_stage_title,
                source_stage_title=self.get_nullable_stage(task.created.by_stage_id)[
                    "title"
                ],
                source_stage_type=self.get_nullable_stage(task.created.by_stage_id)[
                    "type_name"
                ],
            )
            for task, execution in tasks_with_executions
            if execution and execution.stage_id == stage_id
        ]

    def update_task_status(self, task_id: str, status: str) -> None:
        if status == "completed":
            self.task_repo.complete_task(task_id, None, None)
        elif status == "pending":
            self.task_repo.set_task_to_pending(task_id)
        else:
            raise user_exceptions.TaskInvalidStatus(status)

    def create_task(self, name: str, stage_id: str, payload: dict) -> TaskDTO:
        task = self.task_repo.send_task(name, payload, stage_id, None, None)
        return task
