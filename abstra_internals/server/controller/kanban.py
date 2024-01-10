import flask
from datetime import datetime
from pydantic.dataclasses import dataclass
from typing import Any, List, Optional, Type, Sequence, Tuple
from ...local_log import LocalLogMessage, get_local_logs
from .workflows import make_stage_dto
from ...repositories.project.project import (
    ProjectRepository,
    WorkflowStage,
    FormStage,
)
from ...repositories.stage_run import (
    get_stage_run_repository,
    StageRunRepository,
    StageRun,
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
    status: str
    content: StageCardContent

    def to_dict(self) -> dict:
        return dict(
            id=self.id,
            created_at=self.created_at.isoformat(),
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

    def to_dict(self) -> dict:
        return dict(
            selected_stage=self.selected_stage.to_dict(),
            stage_run_cards=[card.to_dict() for card in self.stage_run_cards],
            stages=[stage.to_dict() for stage in self.stages],
        )


@dataclass
class KanbanData:
    columns: List[KanbanColumn]
    next_stage_options: List[ColumnStage]

    def to_dict(self) -> dict:
        return dict(
            columns=[column.to_dict() for column in self.columns],
            next_stage_options=[option.to_dict() for option in self.next_stage_options],
        )


class KanbanController:
    def __init__(
        self,
        stage_run_repository: Type[StageRunRepository],
        project_repository: Type[ProjectRepository],
    ) -> None:
        self.stage_run_repository = stage_run_repository
        self.project_repository = project_repository

    def stage_run_content(self, stage_run: StageRun):
        visualization = self.project_repository.load().visualization
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
        project = ProjectRepository.load()
        if previous_stage:
            origin = project.get_stage(previous_stage)
            if not origin:
                raise Exception(f"Stage {previous_stage} not found")

            next_stages = []
            for next_stage in origin.workflow_transitions:
                stage = project.get_stage(next_stage.target_id)
                if not stage:
                    raise Exception(f"Stage {next_stage.target_id} not found")
                next_stages.append(stage)

            return next_stages

        else:
            return project.get_initial_stages()

    def _get_column_stages(self, selected_stages_ids: List[str], column_idx: int):
        if column_idx == 0:
            return self._get_next_stages()
        else:
            return self._get_next_stages(selected_stages_ids[column_idx - 1])

    def get_data(self, selected_stages_ids: List[str]) -> KanbanData:
        project = self.project_repository.load()

        return KanbanData(
            columns=[
                KanbanColumn(
                    selected_stage=ColumnStage.create(
                        project.get_stage_raises(selected_stage)
                    ),
                    stages=[
                        ColumnStage.create(s)
                        for s in self._get_column_stages(
                            selected_stages_ids, column_idx
                        )
                    ],
                    stage_run_cards=[
                        StageRunCard(
                            id=stage_run.id,
                            status=stage_run.status,
                            created_at=stage_run.created_at,
                            content=self.stage_run_content(stage_run),
                        )
                        for stage_run in self.stage_run_repository.find_leaves(
                            {"stage": selected_stage}
                        )
                    ],
                )
                for column_idx, selected_stage in enumerate(selected_stages_ids)
            ],
            next_stage_options=[
                ColumnStage.create(s)
                for s in self._get_column_stages(
                    selected_stages_ids, len(selected_stages_ids)
                )
            ],
        )

    def get_ancestor_logs(
        self, stage_run_id: str
    ) -> List[Tuple[StageRun, List[LocalLogMessage]]]:
        ancestors = self.stage_run_repository.find_ancestors(stage_run_id)
        return [
            (ancestor, get_local_logs(ancestor.execution_id)) for ancestor in ancestors
        ]


def get_editor_bp():
    project_repository = ProjectRepository
    stage_run_repository = get_stage_run_repository()

    controller = KanbanController(stage_run_repository, project_repository)
    bp = flask.Blueprint("kanban", __name__)

    @bp.post("/")
    def _get_kanban():
        if flask.request.json is None:
            flask.abort(400)
        selected_stages_ids = flask.request.json.get("selected_stages_ids", [])
        return controller.get_data(selected_stages_ids).to_dict()

    @bp.get("/logs/<stage_run_id>")
    def _get_ancestor_logs(stage_run_id: str):
        def stage_from_run(stage_run: StageRun):
            stage = project_repository.load().get_stage_raises(stage_run.stage)
            return make_stage_dto(stage)

        return [
            {
                "stage": stage_from_run(stage_run),
                "stage_run": stage_run.to_dto(),
                "logs": [log.json() for log in logs],
            }
            for stage_run, logs in controller.get_ancestor_logs(stage_run_id)
        ]

    return bp
