from typing import Dict, List, Optional

from abstra_internals.contract.forms import ValidationResult
from abstra_internals.controllers.execution_client_form import FormClient
from abstra_internals.interface.sdk import user_exceptions
from abstra_internals.jwt_auth import UserClaims
from abstra_internals.repositories.users import UsersRepository


class FormSDKController:
    def __init__(self, client: FormClient, users_repository: UsersRepository) -> None:
        self.client = client
        self.users_repository = users_repository

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
