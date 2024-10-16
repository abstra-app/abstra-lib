from datetime import datetime
from typing import Any, List, Optional, Sequence, Tuple

from pydantic.dataclasses import dataclass

from abstra_internals.repositories.execution_logs import (
    ExecutionLogsRepository,
    LogEntry,
)
from abstra_internals.repositories.project.project import (
    FormStage,
    JobStage,
    ProjectRepository,
    ScriptStage,
    WorkflowStage,
)
from abstra_internals.repositories.stage_run import (
    CountStageRunsByStatus,
    GetStageRunByQueryFilter,
    Pagination,
    StageRun,
    StageRunRepository,
)
from abstra_internals.utils.datetime import to_utc_iso_string


@dataclass
class DataRequestFilter:
    stage: Optional[List[str]]
    status: Optional[List[str]]
    asignee: Optional[str]
    data: Optional[dict]
    search: Optional[str]
    advanced_data_filter: Optional[dict] = None

    @staticmethod
    def from_dict(data: dict) -> "DataRequestFilter":
        return DataRequestFilter(
            stage=data.get("stage", None),
            status=data.get("status", None),
            asignee=data.get("asignee", None),
            data=data.get("data", None),
            search=data.get("search", None),
            advanced_data_filter=data.get("advanced_data_filter", {}),
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


@dataclass
class StageCardContentItem:
    key: str
    value: Any
    type: str = "text"

    def to_dict(self) -> dict:
        return dict(
            key=self.key,
            value=self.value,
            type=self.type,
        )


StageCardContent = List[StageCardContentItem]


@dataclass
class StageRunCard:
    id: str
    created_at: datetime
    updated_at: datetime
    status: str
    content: StageCardContent
    stage: str

    def to_dict(self) -> dict:
        return dict(
            id=self.id,
            created_at=to_utc_iso_string(self.created_at),
            updated_at=to_utc_iso_string(self.updated_at),
            status=self.status,
            content=[item.to_dict() for item in self.content],
            stage=self.stage,
        )


@dataclass
class ColumnStage:
    id: str
    type: str
    path: Optional[str]
    title: str
    can_be_started: bool = False

    @staticmethod
    def create(stage: WorkflowStage) -> "ColumnStage":
        can_be_started = False
        if isinstance(stage, JobStage):
            can_be_started = True
        elif isinstance(stage, FormStage):
            can_be_started = stage.is_initial

        return ColumnStage(
            id=stage.id,
            title=stage.title,
            type=stage.type_name,
            can_be_started=can_be_started,
            path=stage.path if isinstance(stage, FormStage) else None,
        )

    def to_dict(self) -> dict:
        return dict((k, v) for k, v in self.__dict__.items() if v is not None)


@dataclass
class KanbanData:
    stage_run_cards: List[StageRunCard]
    not_found_stages: List[str]
    total_count: int

    def to_dict(self) -> dict:
        return dict(
            stage_run_cards=[column.to_dict() for column in self.stage_run_cards],
            not_found_stages=self.not_found_stages,
            total_count=self.total_count,
        )


class KanbanController:
    def __init__(
        self,
        stage_run_repository: StageRunRepository,
        execution_logs_repository: ExecutionLogsRepository,
        read_only: bool = False,
    ) -> None:
        self.execution_logs_repository = execution_logs_repository
        self.stage_run_repository = stage_run_repository
        self.initial_project = ProjectRepository.load()
        self.read_only = read_only

    def _get_project(self):
        if self.read_only:
            return self.initial_project
        return ProjectRepository.load()

    def get_job(self, id: str):
        stage = self._get_project().get_stage(id)
        if not stage or not isinstance(stage, JobStage):
            return None

        return stage

    def get_script(self, id: str):
        stage = self._get_project().get_stage(id)
        if not stage or not isinstance(stage, ScriptStage):
            return None

        return stage

    def stage_run_content(self, stage_run: StageRun):
        return [
            StageCardContentItem(key=key, value=stage_run.data.get(key))
            for key in sorted(stage_run.data.keys())
        ]

    def _get_stages(self) -> List[ColumnStage]:
        stages = self._get_project().actions
        return [ColumnStage.create(stage) for stage in stages]

    def _get_next_stages(
        self, previous_stage: Optional[str] = None
    ) -> Sequence[WorkflowStage]:
        if previous_stage:
            origin = self._get_project().get_stage(previous_stage)
            if not origin:
                raise Exception(f"Stage {previous_stage} not found")

            next_stages = []
            for next_stage in origin.workflow_transitions:
                stage = self._get_project().get_stage(next_stage.target_id)
                if not stage:
                    raise Exception(f"Stage {next_stage.target_id} not found")
                next_stages.append(stage)

            return next_stages

        else:
            return self._get_project().get_initial_stages()

    def _get_column_stages(self, selected_stages_ids: List[str], column_idx: int):
        if column_idx == 0:
            return self._get_next_stages()
        else:
            return self._get_next_stages(selected_stages_ids[column_idx - 1])

    def get_data(self, request: DataRequest) -> KanbanData:
        stages_not_found = []
        selected_stage_ids = request.filter.stage or []
        request_filter = GetStageRunByQueryFilter.from_dict(
            data=request.filter.to_dict()
        )
        paginated_response = self.stage_run_repository.find_leaves(
            filter=request_filter,
            pagination=Pagination(limit=request.limit, offset=request.offset),
        )
        stage_run_cards = [
            StageRunCard(
                id=stage_run.id,
                status=stage_run.status,
                created_at=stage_run.created_at,
                updated_at=stage_run.updated_at,
                content=self.stage_run_content(stage_run),
                stage=stage_run.stage,
            )
            for stage_run in paginated_response.stage_runs
        ]
        for stage_id in selected_stage_ids:
            exists = self._get_project().get_stage(stage_id)
            if not exists:
                stages_not_found.append(stage_id)

        return KanbanData(
            stage_run_cards=stage_run_cards,
            not_found_stages=stages_not_found,
            total_count=paginated_response.total_count,
        )

    def count_by_status(self) -> List[CountStageRunsByStatus]:
        return self.stage_run_repository.count_leaves_by_status()

    def get_ancestor_logs(
        self, stage_run_id: str
    ) -> List[Tuple[StageRun, List[LogEntry]]]:
        ancestors = self.stage_run_repository.find_ancestors(stage_run_id)
        return [
            (
                ancestor,
                (
                    self.execution_logs_repository.get(
                        execution_id=ancestor.execution_id
                    )
                    if ancestor.execution_id
                    else []
                ),
            )
            for ancestor in ancestors
        ]
