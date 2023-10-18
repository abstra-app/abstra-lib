import flask_sock, typing, copy

from ..repositories.stage_run import StageRun
from ..repositories import StageRunRepository
from .live_execution import LiveExecution
from ..contract import forms_contract
from .execution import RequestData


class FormExecution(LiveExecution):
    def _wait_start(self):
        type = None
        data = None

        type, data = self.recv()

        if type != "start":
            return self._wait_start()

        return data["params"]

    def _handle_abandoned_middle_form(
        self, initial_abandoned_stage_run: StageRun, parent_id: str
    ):
        child_runs = StageRunRepository.find({"parent_id": parent_id})

        assert len(child_runs) == 1, "Expected 1 child run for abandoned stage run"
        child_run = child_runs[0]

        assert (
            child_run.stage == initial_abandoned_stage_run.stage
        ), "Expected child run to have same stage as initial abandoned stage run"
        assert (
            child_run.assignee == initial_abandoned_stage_run.assignee
        ), "Expected child run to have same assignee as initial abandoned stage run"

        if child_run.is_abandoned:
            return self._handle_abandoned_middle_form(
                initial_abandoned_stage_run, child_run.id
            )

        self.stage_run = child_run

    def init_stage_run(self, id: typing.Optional[str] = None):
        super().init_stage_run(id)
        if self.stage_run and not self.is_initial and self.stage_run.is_abandoned:
            return self._handle_abandoned_middle_form(self.stage_run, self.stage_run.id)

    def setup_context(self, request: RequestData):
        self.query_params = self._wait_start()
        self.send(forms_contract.ExecutionIdMessage(self.id))
        self.init_stage_run(self.query_params.get(self.abstra_run_key))

    def handle_success(self) -> str:
        close_dto = forms_contract.CloseDTO(exit_status="SUCCESS")
        self.send(forms_contract.CloseMessage(close_dto))
        return super().handle_success()

    def _handle_ws_exception_1001(self, exception: flask_sock.ConnectionClosed) -> str:
        self.log(
            "connection-closed",
            {"message": "Client went away - probably closed the tab."},
        )

        if self.stage_run and self.stage_run_freezed and not self.is_initial:
            StageRunRepository.create_next(
                self.stage_run,
                [
                    dict(
                        assignee=self.stage_run_freezed.assignee,
                        stage=self.stage_run_freezed.stage,
                        data=self.stage_run.data,
                    )
                ],
            )

        return "abandoned"

    def _handle_ws_exception_other(self, exception: flask_sock.ConnectionClosed) -> str:
        self.log(
            "connection-closed",
            {
                "message": f"[ERROR] Connection closed with code {exception.reason}: {exception.message}\n",
                "reason": exception.reason,
            },
        )
        return super().handle_failure(exception)

    def _handle_ws_exception(self, exception: flask_sock.ConnectionClosed) -> str:
        if exception.reason == 1000:
            return super().handle_success()  # missing advanve steps?

        if exception.reason == 1001:
            return self._handle_ws_exception_1001(exception)

        return self._handle_ws_exception_other(exception)

    def handle_failure(self, exception: Exception) -> str:
        if isinstance(exception, flask_sock.ConnectionClosed):
            return self._handle_ws_exception(exception)

        close_dto = forms_contract.CloseDTO(
            exit_status="GENERIC_EXCEPTION",
            exception=exception.__str__(),
        )
        self.send(forms_contract.CloseMessage(close_dto))

        return super().handle_failure(exception)

    def handle_finish(self):
        self.close()
