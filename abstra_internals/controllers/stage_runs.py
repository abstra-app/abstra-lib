from abstra_internals.controllers.execution import ExecutionController
from abstra_internals.controllers.main import MainController
from abstra_internals.repositories.stage_run import (
    GetStageRunByQueryFilter,
    Pagination,
)


class StageRunsController:
    def __init__(
        self,
        main_controller: MainController,
    ) -> None:
        self.main_controller = main_controller

    def get_leaf_stage_runs(
        self, filter: GetStageRunByQueryFilter, pagination: Pagination
    ):
        return [
            stage_run.to_dto()
            for stage_run in self.main_controller.repositories.stage_run.find_leaves(
                filter=filter, pagination=pagination
            ).stage_runs
        ]

    def get_past_stage_runs(
        self, filter: GetStageRunByQueryFilter, pagination: Pagination
    ):
        return [
            stage_run.to_dto()
            for stage_run in self.main_controller.repositories.stage_run.find_past(
                filter=filter, pagination=pagination
            ).stage_runs
        ]

    def retry(self, stage_run_id: str):
        stage_run = self.main_controller.repositories.stage_run.retry(stage_run_id)
        stage = self.main_controller.get_action(stage_run.stage)
        if stage and stage_run.stage in self.main_controller.get_async_stage_ids():
            ExecutionController(
                repositories=self.main_controller.repositories,
                workflow_engine=self.main_controller.workflow_engine,
            ).submit(stage=stage, target_stage_run_id=stage_run.id)

        return stage_run.to_dto()
