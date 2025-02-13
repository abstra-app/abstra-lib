from typing import TYPE_CHECKING, Dict, List, Optional

from abstra_internals.entities.forms.form_entity import (
    FormEntity,
    Step,
)
from abstra_internals.entities.forms.form_state import State
from abstra_internals.interface.contract.forms_contract import (
    StepsInfo,
    ValidationResult,
)
from abstra_internals.interface.sdk import user_exceptions
from abstra_internals.jwt_auth import UserClaims
from abstra_internals.repositories.users import UsersRepository

if TYPE_CHECKING:
    from abstra_internals.controllers.execution_client_form import FormClient


class FormSDKController:
    def __init__(self, client: "FormClient", users_repository: UsersRepository) -> None:
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

    def next_user_message(self) -> Dict:
        return self.client.next_user_message()

    def run_form(self, steps: List[Step], state: State, hide_steps: bool) -> Dict:
        form = FormEntity(steps, state, hide_steps)
        rendered = None
        seq = 0

        while rendered := form.run():
            self.client.request_render(rendered, seq)

            if rendered["yielding"]:
                continue

            if rendered["end_page"]:
                break

            response = self.client.next_user_message()

            if "seq" in response:
                seq = response["seq"]

            if response["type"] == "form:input":
                form.handle_input(response)
            elif response["type"] == "form:navigation":
                form.handle_navigation(response)
            else:
                raise ValueError(f"Invalid response type: {response['type']}")

        return form.state.value

    def request_mount_page(
        self,
        widgets: list,
        actions: list,
        end_program: bool,
        reactive_polling_interval: int,
        steps_info: Optional[StepsInfo],
    ):
        self.client.request_mount_page(
            widgets,
            actions,
            end_program,
            reactive_polling_interval,
            steps_info,
        )

    # Deprecated by Forms v2
    def request_page_update(
        self, widgets: list, validation: ValidationResult, event_seq: int
    ):
        self.client.request_page_update(widgets, validation, event_seq)
