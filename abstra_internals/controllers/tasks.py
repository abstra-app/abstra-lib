from dataclasses import dataclass
from typing import List, Optional, Tuple

from abstra_internals.interface.sdk import user_exceptions
from abstra_internals.repositories.factory import Repositories
from abstra_internals.repositories.tasks import TaskDTO
from abstra_internals.utils.datetime import from_utc_iso_string


@dataclass
class DataRequestFilter:
    stage: Optional[List[str]]
    status: Optional[List[str]]
    start_date: Optional[str]
    end_date: Optional[str]

    @staticmethod
    def from_dict(data: dict) -> "DataRequestFilter":
        return DataRequestFilter(
            stage=data.get("stage", None),
            status=data.get("status", None),
            start_date=data.get("startDate", None),
            end_date=data.get("endDate", None),
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
        repositories: Repositories,
    ) -> None:
        self.repos = repositories

    def get_stage(self, stage_id: str):
        project = self.repos.project.load(include_disabled_stages=True)
        stage = project.get_stage(stage_id)

        if not stage:
            raise Exception(f"Stage {stage_id} not found")

        return {
            "title": stage.title,
            "type_name": "tasklet" if stage.type_name == "script" else stage.type_name,
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
        for task in self.repos.tasks.get_all_tasks():
            if (
                req
                and req.filter.stage
                and task.target_stage_id not in req.filter.stage
            ):
                continue
            if req and req.filter.status and task.status not in req.filter.status:
                continue
            if req and (
                req.filter.start_date
                and from_utc_iso_string(task.created.at)
                < from_utc_iso_string(req.filter.start_date)
            ):
                continue
            if req and (
                req.filter.end_date
                and from_utc_iso_string(task.created.at)
                > from_utc_iso_string(req.filter.end_date)
            ):
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
        tasks = self.repos.tasks.get_stage_tasks(stage_id)

        tasks.sort(
            key=lambda task: from_utc_iso_string(task.created.at),
            reverse=True,
        )

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
            (task, self.repos.execution.get(task.created.by_execution_id))
            for task in all_tasks
            if task.created.by_execution_id is not None
        ]

        tasks_with_executions.sort(
            key=lambda task: from_utc_iso_string(task[0].created.at),
            reverse=True,
        )

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
            self.repos.tasks.complete_task(task_id, None, None)
        elif status == "pending":
            self.repos.tasks.set_task_to_pending(task_id)
        else:
            raise user_exceptions.TaskInvalidStatus(status)

    def create_task(
        self,
        name: str,
        stage_id: str,
        payload: dict,
        source_stage_id: Optional[str] = None,
        execution_id: Optional[str] = None,
    ) -> TaskDTO:
        task = self.repos.tasks.send_task(
            name, payload, stage_id, source_stage_id, execution_id
        )
        return task

    def clear_tasks(self) -> None:
        self.repos.tasks.clear()
