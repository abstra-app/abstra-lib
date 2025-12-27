import sys
from typing import TYPE_CHECKING, Dict, List, Optional

from abstra_internals.entities.forms.form_entity import FormEntity, Step
from abstra_internals.entities.forms.form_state import State
from abstra_internals.environment import IS_DEVELOPMENT
from abstra_internals.interface.contract import StepsInfo, ValidationResult
from abstra_internals.interface.sdk import user_exceptions
from abstra_internals.repositories.users import UsersRepository
from abstra_internals.services.jwt import UserClaims

if TYPE_CHECKING:
    from abstra_internals.controllers.execution.execution_client_form import FormClient


class FormSDKController:
    def __init__(self, client: "FormClient", users_repository: UsersRepository) -> None:
        self.client = client
        self.users_repository = users_repository
        self.seq = 0
        self.reuse_cache = {}

    def get_user(self, force_refresh: bool) -> UserClaims:
        data = self.client.request_auth(force_refresh)
        claims = UserClaims.from_jwt(data["jwt"], skip_verify=IS_DEVELOPMENT)

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

    def run_form(self, *, steps: List[Step], state: State, hide_steps: bool) -> State:
        form = FormEntity(steps=steps, state=state, force_hide_steps=hide_steps)
        rendered = None

        while rendered := form.run():
            self.client.request_render(rendered, self.seq)

            if rendered["yielding"]:
                continue

            if rendered["end_page"]:
                sys.exit(0)

            response = self.client.next_user_message()

            self.seq = response.get("seq", self.seq)

            if response["type"] == "form:input":
                form.handle_input(response)
            elif response["type"] == "form:navigation":
                form.handle_navigation(response)
            else:
                raise ValueError(f"Invalid response type: {response['type']}")

        return form.state

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

    def reuse(self, func, *args, **kwargs):
        key = (func.__name__, args, frozenset(kwargs.items()))

        if key in self.reuse_cache:
            return self.reuse_cache[key]

        result = func(*args, **kwargs)
        self.reuse_cache[key] = result
        return result
