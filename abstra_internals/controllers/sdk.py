import json
from io import BytesIO
from typing import Dict, List, Optional, Tuple, Union

from abstra_internals.contract.forms import ValidationResult
from abstra_internals.controllers.execution_client_hook import HookClient
from abstra_internals.controllers.execution_store import (
    ExecutionNotFound,
    ExecutionStore,
)
from abstra_internals.interface.sdk import user_exceptions
from abstra_internals.jwt_auth import UserClaims
from abstra_internals.repositories.execution import ExecutionRepository
from abstra_internals.repositories.project.project import ProjectRepository
from abstra_internals.repositories.stage_run import StageRun, StageRunRepository
from abstra_internals.repositories.users import UsersRepository
from abstra_internals.utils import is_json_serializable
from abstra_internals.utils.insensitive_dict import CaseInsensitiveDict
from abstra_internals.utils.json import to_json_serializable


class HookSDKController:
    def get_current_client(self) -> HookClient:
        try:
            return ExecutionStore.get_hook_client()
        except ExecutionNotFound:
            raise user_exceptions.UnboundSDK()

    def set_response(self, status: int, body: str, headers: Dict[str, str]):
        self.get_current_client().set_response(status, body, headers)

    def get_raw_request(self) -> Tuple[str, Dict[str, str], CaseInsensitiveDict]:
        request = self.get_current_client().get_request()
        return (
            request["body"],
            request["query_params"],
            CaseInsensitiveDict(request["headers"]),
        )

    def get_request(
        self,
    ) -> Tuple[Union[str, List, Dict], Dict[str, str], CaseInsensitiveDict]:
        body, query, headers = self.get_raw_request()
        try:
            if "application/json" in headers["Content-Type"]:
                return json.loads(body), query, headers
            elif "multipart/form-data" in headers["Content-Type"]:
                return self._multipart_form_parse(body, headers), query, headers
            else:
                return body, query, headers
        except Exception:
            return body, query, headers

    def _multipart_form_parse(self, body: str, headers: dict):
        from multipart import (
            MultipartParser,
            MultipartPart,
            parse_options_header,
            to_bytes,
        )

        _, options = parse_options_header(headers["Content-Type"])
        boundary = options["boundary"].encode("utf-8")
        p = MultipartParser(BytesIO(to_bytes(body)), boundary)  # TODO: direct from fs
        return [
            {"name": i.name, "value": i.value}
            for i in p
            if isinstance(i, MultipartPart)
        ]


class FormSDKController:
    def __init__(self, users_repository: UsersRepository) -> None:
        self.users_repository = users_repository

        try:
            self.client = ExecutionStore.get_form_client()
        except ExecutionNotFound:
            raise user_exceptions.UnboundSDK()

    def get_user(self, force_refresh: bool) -> UserClaims:
        data = self.client.request_auth(force_refresh)
        claims = UserClaims.from_jwt(data["jwt"])

        if not claims:
            self.client.handle_invalid_jwt()
            raise user_exceptions.GetUserFailed()

        if user := self.users_repository.get_user(claims.email):
            claims.add_roles(user.roles)

        self.client.handle_valid_jwt()
        return claims

    def execute_js(self, code: str, context: dict):
        return self.client.request_execute_js(code, context)

    def redirect(self, url: str, query_params: Optional[Dict[str, str]] = None) -> None:
        self.client.request_redirect(url, query_params)

    def get_query_params(self) -> Dict[str, str]:
        return self.client.get_query_params()

    def request_mount_page(
        self,
        widgets: list,
        actions: list,
        end_program: bool,
        reactive_polling_interval: int,
        steps_info: Optional[List],
    ):
        self.client.request_mount_page(
            widgets,
            actions,
            end_program,
            reactive_polling_interval,
            steps_info,
        )

    def request_page_update(
        self, widgets: list, validation: ValidationResult, event_seq: int
    ):
        self.client.request_page_update(widgets, validation, event_seq)

    def next_message(self) -> Dict:
        return self.client.next_message()


class WorkflowSDKController:
    def __init__(
        self,
        stage_run_repository: StageRunRepository,
        execution_repository: ExecutionRepository,
        project_repository: ProjectRepository,
    ) -> None:
        self.stage_run_repo = stage_run_repository
        self.execution_repo = execution_repository
        self.project_repo = project_repository
        self.project = project_repository.load()

    def _get_current_stage_run(self) -> StageRun:
        try:
            execution = ExecutionStore.get_by_thread().execution
            return self.stage_run_repo.get(execution.stage_run_id)
        except ExecutionNotFound:
            raise user_exceptions.UnboundSDK()

    def get_data(self, key: Optional[str]) -> Union[Dict[str, object], object]:
        stage_run = self._get_current_stage_run()
        return stage_run.data if not key else stage_run.data.get(key)

    def set_data(self, key: str, value: object) -> None:
        value = to_json_serializable(value)
        if not is_json_serializable(value):
            raise TypeError()

        stage_run = self._get_current_stage_run()

        stage_run.data[key] = value
        self.stage_run_repo.update_data(stage_run.id, stage_run.data)
