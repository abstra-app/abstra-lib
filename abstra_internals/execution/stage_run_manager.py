from abc import ABC, abstractmethod
from typing import List, Optional

from ..repositories.stage_run import (
    StageRun,
    StageRunRepository,
    GetStageRunByQueryFilter,
)

from ..repositories.project.project import ActionStage
from ..repositories.stage_run import StageRun, StageRunRepository


class InvalidStageRunId(Exception):
    pass


class UnsetStageRun(Exception):
    pass


ABSTRA_RUN_KEY = "abstra-run-id"


class StageRunManager(ABC):
    stage_run_repository: StageRunRepository

    def find(self, filter: GetStageRunByQueryFilter) -> List[StageRun]:
        return self.stage_run_repository.find(filter)

    def get(self, stage_run_id: str) -> StageRun:
        return self.stage_run_repository.get(stage_run_id)

    def create_initial(self, stage: str) -> StageRun:
        return self.stage_run_repository.create_initial(stage=stage)

    def change_state(self, stage_run_id: str, status: str, execution_id: str) -> bool:
        return self.stage_run_repository.change_state(
            stage_run_id, status, execution_id
        )

    def get_not_abandoned_stage_run(
        self, stage_run: StageRun, stage_id: str
    ) -> StageRun:
        if stage_run.status != "abandoned":
            return stage_run

        filter = GetStageRunByQueryFilter()
        filter.parent_id = stage_run.id
        filter.stage = stage_id

        next_matches = self.find(filter)

        assert (
            len(next_matches) == 1
        ), "Internal error: abandoned stage run does not have exactly one child"

        return self.get_not_abandoned_stage_run(next_matches[0], stage_id)

    @abstractmethod
    def init_stage_run(
        self, stage: ActionStage, stage_run_id: Optional[str]
    ) -> StageRun:
        raise NotImplementedError()

    @abstractmethod
    def update_data(self, stage_run_id: str, data: dict) -> None:
        raise NotImplementedError()


class AttachedStageRunManager(StageRunManager):
    stage_run_repository: StageRunRepository

    def __init__(
        self,
        stage_run_repository: StageRunRepository,
    ):
        self.stage_run_repository = stage_run_repository

    def init_stage_run(
        self, stage: ActionStage, stage_run_id: Optional[str]
    ) -> StageRun:
        if stage_run_id:
            stage_run_tmp = self.stage_run_repository.get(stage_run_id)
            stage_run = self.get_not_abandoned_stage_run(stage_run_tmp, stage.id)

            if stage_run.stage == stage.id:
                return stage_run

            raise InvalidStageRunId()

        if stage.is_initial:
            return self.stage_run_repository.create_initial(stage=stage.id)

        raise UnsetStageRun()

    def update_data(self, stage_run_id: str, data: dict) -> None:
        self.stage_run_repository.update_data(stage_run_id, data)


class DetachedStageRunManager(StageRunManager):
    stage_run_repository: StageRunRepository
    data: dict = {}

    def __init__(
        self,
        stage_run_repository: StageRunRepository,
        data: dict = {},
    ):
        self.stage_run_repository = stage_run_repository
        self.data = data

    def init_stage_run(
        self, stage: ActionStage, stage_run_id: Optional[str]
    ) -> StageRun:
        return self.stage_run_repository.create_initial(stage=stage.id, data=self.data)

    def update_data(self, stage_run_id: str, data: dict) -> None:
        pass
