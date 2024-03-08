from datetime import datetime
from pydantic.dataclasses import dataclass
from typing import Any, List, Optional, Type, Sequence, Tuple
from .workflows import make_stage_dto
from ...repositories.project.project import (
    ProjectRepository,
    WorkflowStage,
    FormStage,
)
from ...repositories.stage_run import (
    StageRunRepository,
    StageRun,
    GetStageRunByQueryFilter,
    Pagination,
    stage_run_repository_factory,
)

from ...repositories.members import members_repository_factory
from ..guards.role_guard import RoleGuardFactory
from typing import Any, List, Optional, Sequence, Tuple, Type

import flask

from ...repositories import execution_logs_repository, stage_run_repository
from ...repositories.execution_logs import (
    LogEntry,
    StdioLogEntry,
    UnhandledExceptionLogEntry,
)
from ...repositories.project.project import FormStage, ProjectRepository, WorkflowStage
from ...repositories.stage_run import StageRun, StageRunRepository
from ...utils.datetime import to_utc_iso_string
from .workflows import make_stage_dto


@dataclass
class DataRequestSelection:
    stage_id: str
    limit: int
    offset: int

    @staticmethod
    def from_dict(data: dict) -> "DataRequestSelection":
        return DataRequestSelection(
            stage_id=data["stage_id"],
            offset=data.get("offset", 0),
            limit=data.get("limit", 10),
        )

    def to_dict(self) -> dict:
        return dict(stage_id=self.stage_id, offset=self.offset, limit=self.limit)


@dataclass
class DataRequestFilter:
    status: Optional[str]
    asignee: Optional[str]
    data: Optional[dict]

    @staticmethod
    def from_dict(data: dict) -> "DataRequestFilter":
        return DataRequestFilter(
            status=data.get("status", None),
            asignee=data.get("asignee", None),
            data=data.get("data", None),
        )

    def to_dict(self) -> dict:
        return dict((k, v) for k, v in self.__dict__.items() if v is not None)


@dataclass
class DataRequest:
    selection: List[DataRequestSelection]
    filter: DataRequestFilter

    @staticmethod
    def from_dict(data: dict) -> "DataRequest":
        return DataRequest(
            selection=[
                DataRequestSelection.from_dict(s) for s in data.get("selection", [])
            ],
            filter=DataRequestFilter.from_dict(data.get("filter", {})),
        )

    def to_dict(self) -> dict:
        return dict(
            selection=[s.to_dict() for s in self.selection],
            filter=self.filter.to_dict(),
        )


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

    def to_dict(self) -> dict:
        return dict(
            id=self.id,
            created_at=to_utc_iso_string(self.created_at),
            updated_at=to_utc_iso_string(self.updated_at),
            status=self.status,
            content=[item.to_dict() for item in self.content],
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
        return ColumnStage(
            id=stage.id,
            type=stage.type_name,
            title=stage.title,
            path=stage.path if isinstance(stage, FormStage) else None,
            can_be_started=isinstance(stage, FormStage) and stage.is_initial,
        )

    def to_dict(self) -> dict:
        return dict(
            id=self.id,
            type=self.type,
            title=self.title,
            path=self.path,
            can_be_started=self.can_be_started,
        )


@dataclass
class KanbanColumn:
    selected_stage: ColumnStage
    stage_run_cards: List[StageRunCard]
    stages: List[ColumnStage]
    total_count: int

    def to_dict(self) -> dict:
        return dict(
            selected_stage=self.selected_stage.to_dict(),
            stage_run_cards=[card.to_dict() for card in self.stage_run_cards],
            stages=[stage.to_dict() for stage in self.stages],
            total_count=self.total_count,
        )


@dataclass
class KanbanData:
    columns: List[KanbanColumn]
    next_stage_options: List[ColumnStage]
    not_found_stages: List[str]

    def to_dict(self) -> dict:
        return dict(
            columns=[column.to_dict() for column in self.columns],
            next_stage_options=[option.to_dict() for option in self.next_stage_options],
            not_found_stages=self.not_found_stages,
        )


class KanbanController:
    def __init__(
        self,
        stage_run_repository: StageRunRepository,
        project_repository: Type[ProjectRepository],
        read_only: bool = False,
    ) -> None:
        self.stage_run_repository = stage_run_repository
        self.project_repository = project_repository
        self.read_only = read_only
        self.initial_project = self.project_repository.load()

    def _get_project(self):
        if self.read_only:
            return self.initial_project
        return self.project_repository.load()

    def stage_run_content(self, stage_run: StageRun):
        visualization = self._get_project().visualization
        visualization_defined_data = [
            StageCardContentItem(
                key=v.name,
                value=stage_run.data.get(v.name),
                type=v.type,
            )
            for v in visualization.items
        ]
        visualization_defined_keys = [v.name for v in visualization.items]
        extra_data = [
            StageCardContentItem(key=key, value=stage_run.data.get(key))
            for key in sorted(stage_run.data.keys())
            if key not in visualization_defined_keys
        ]
        return visualization_defined_data + extra_data

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
        selected_stage_ids = [s.stage_id for s in request.selection]
        non_selected_stages_column = [
            ColumnStage.create(c)
            for c in self._get_project().workflow_stages
            if c.id not in selected_stage_ids
        ]

        columns: List[KanbanColumn] = []
        for selection in request.selection:
            request_filter = GetStageRunByQueryFilter.from_dict(
                data=request.filter.to_dict()
            )
            request_filter.stage = selection.stage_id
            paginated_response = self.stage_run_repository.find_leaves(
                filter=request_filter,
                pagination=Pagination(limit=selection.limit, offset=selection.offset),
            )
            stage_run_cards = [
                StageRunCard(
                    id=stage_run.id,
                    status=stage_run.status,
                    created_at=stage_run.created_at,
                    updated_at=stage_run.updated_at,
                    content=self.stage_run_content(stage_run),
                )
                for stage_run in paginated_response.stage_runs
            ]
            selected_stage = self._get_project().get_stage(selection.stage_id)
            if not selected_stage:
                stages_not_found.append(selection.stage_id)
                continue
            selected_stage_run = ColumnStage.create(selected_stage)

            columns.append(
                KanbanColumn(
                    selected_stage=selected_stage_run,
                    stage_run_cards=stage_run_cards,
                    stages=non_selected_stages_column + [selected_stage_run],
                    total_count=paginated_response.total_count,
                )
            )

        return KanbanData(
            columns=columns,
            next_stage_options=non_selected_stages_column,
            not_found_stages=stages_not_found,
        )

    def get_ancestor_logs(
        self, stage_run_id: str
    ) -> List[Tuple[StageRun, List[LogEntry]]]:
        ancestors = self.stage_run_repository.find_ancestors(stage_run_id)
        return [
            (
                ancestor,
                (
                    execution_logs_repository.get(execution_id=ancestor.execution_id)
                    if ancestor.execution_id
                    else []
                ),
            )
            for ancestor in ancestors
        ]


def get_editor_bp():
    project_repository = ProjectRepository

    controller = KanbanController(stage_run_repository, project_repository)
    bp = flask.Blueprint("kanban", __name__)

    # 1s pooling in this route
    @bp.post("/")
    def _get_kanban():
        if flask.request.json is None:
            flask.abort(400)
        req = DataRequest.from_dict(flask.request.json)
        return controller.get_data(req).to_dict()

    # 1s pooling in this route
    @bp.get("/logs/<stage_run_id>")
    def _get_ancestor_logs(stage_run_id: str):
        project = project_repository.load()

        def player_log_filter(log: LogEntry):
            return (
                isinstance(log, StdioLogEntry)
                or isinstance(log, UnhandledExceptionLogEntry)
            ) and log.payload["text"].strip() != ""

        def entry_from_run(stage_run: StageRun, logs: List[LogEntry]):
            stage = project.get_stage(stage_run.stage)

            return {
                "stage_run": stage_run.to_dto(),
                "stage": make_stage_dto(stage) if stage else None,
                "logs": [log.to_dto() for log in logs if player_log_filter(log)],
            }

        return [
            entry_from_run(stage_run, logs)
            for stage_run, logs in controller.get_ancestor_logs(stage_run_id)
        ]

    return bp


def get_player_bp():
    project_repository = ProjectRepository
    stage_run_repository = stage_run_repository_factory()

    members_repository = members_repository_factory()
    guard = RoleGuardFactory(members_repository)

    controller = KanbanController(
        stage_run_repository, project_repository, read_only=True
    )
    bp = flask.Blueprint("kanban", __name__)

    @bp.post("/")
    @guard.requires("workflow_viewer")
    def _get_kanban():
        if flask.request.json is None:
            flask.abort(400)
        req = DataRequest.from_dict(flask.request.json)
        return controller.get_data(req).to_dict()

    @bp.get("/logs/<stage_run_id>")
    @guard.requires("workflow_viewer")
    def _get_ancestor_logs(stage_run_id: str):
        project = project_repository.load()

        def entry_from_run(stage_run: StageRun, logs: List[LogEntry]):
            stage = project.get_stage(stage_run.stage)

            return {
                "stage_run": stage_run.to_dto(),
                "stage": make_stage_dto(stage) if stage else None,
                "logs": [log.to_dto() for log in logs],
            }

        return [
            entry_from_run(stage_run, logs)
            for stage_run, logs in controller.get_ancestor_logs(stage_run_id)
        ]

    return bp
