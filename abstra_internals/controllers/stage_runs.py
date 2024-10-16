from typing import Optional

from abstra_internals.repositories.project.project import ProjectRepository
from abstra_internals.repositories.stage_run import (
    GetStageRunByQueryFilter,
    Pagination,
    StageRunRepository,
)


class StageRunsController:
    def __init__(
        self,
        stage_run_repository: StageRunRepository,
    ) -> None:
        self.stage_run_repository = stage_run_repository

    def get_leaf_stage_runs(
        self, filter: GetStageRunByQueryFilter, pagination: Pagination
    ):
        return [
            stage_run.to_dto()
            for stage_run in self.stage_run_repository.find_leaves(
                filter=filter, pagination=pagination
            ).stage_runs
        ]

    def get_past_stage_runs(
        self, filter: GetStageRunByQueryFilter, pagination: Pagination
    ):
        return [
            stage_run.to_dto()
            for stage_run in self.stage_run_repository.find_past(
                filter=filter, pagination=pagination
            ).stage_runs
        ]

    def fork(self, stage_run_id: str, custom_thread_data: Optional[str]):
        stage_run = self.stage_run_repository.get(stage_run_id)
        project = ProjectRepository.load()
        parent_is_iterator = False
        previous_stages = project.get_previous_stages_ids(stage_run.stage)
        some_is_iterator = False
        for previous_stage in previous_stages:
            previous_stage = project.get_stage(previous_stage)
            if previous_stage and previous_stage.type_name == "iterator":
                some_is_iterator = True
        if some_is_iterator and "item" in stage_run.data:
            parent_is_iterator = True
        return self.stage_run_repository.fork(
            stage_run, parent_is_iterator, custom_thread_data
        ).to_dto()

    def retry(self, stage_run_id: str):
        return self.stage_run_repository.retry(stage_run_id).to_dto()
