from typing import Dict, Optional

import abstra_internals.interface.contract as contract
from abstra_internals.controllers.execution.connection_protocol import (
    ConnectionProtocol,
)
from abstra_internals.controllers.execution.execution_client import (
    ClientAbandoned,
    ExecutionClient,
)
from abstra_internals.entities.execution_context import FormContext
from abstra_internals.entities.forms.form_entity import ButtonAction, RenderedForm
from abstra_internals.utils import deserialize, serialize


class FormClient(ExecutionClient):
    context: FormContext
    conn: ConnectionProtocol

    def __init__(
        self,
        conn: ConnectionProtocol,
        context: FormContext,
        production_mode: bool,
    ) -> None:
        self.context = context
        self._production_mode = production_mode
        self.conn = conn

    # WEBSOCKET

    def _receive_message(self):
        try:
            str_data = self.conn.recv()
            deserialized = deserialize(str_data)
            if not isinstance(deserialized, dict):
                raise ValueError("Invalid message format")
            return deserialized
        except (EOFError, BrokenPipeError):
            raise ClientAbandoned()

    def _send(self, msg: contract.Message) -> None:
        str_data = serialize(msg.to_json())
        try:
            self.conn.send(str_data)
        except (EOFError, BrokenPipeError):
            pass

    def _user_code_send(self, msg: contract.Message) -> None:
        str_data = serialize(msg.to_json())
        try:
            self.conn.send(str_data)
        except (EOFError, BrokenPipeError):
            raise ClientAbandoned()

    def _wait_for_message(self, *target_types: contract.BrowserMessageTypes) -> Dict:
        ignored_types = ["execution:heartbeat", "debug:close-attempt"]

        while True:
            message = self._receive_message()
            message_type = message.get("type")

            if message_type == "kill":
                raise ClientAbandoned()

            if message_type in ignored_types or message_type not in target_types:
                continue

            return message

    # Inside Target

    ## SDK

    def request_render(self, rendered: RenderedForm, seq: int) -> None:
        actions = list(
            map(
                lambda button: ButtonAction(
                    key=button.safe_get_key(), label=button.label
                ),
                rendered["buttons"],
            )
        )
        self._user_code_send(
            contract.FormRenderMessage(
                widgets=rendered["widgets"],
                end_page=rendered["end_page"],
                steps_info=rendered["steps_info"],
                actions=actions,
                seq=seq,
                production_mode=self._production_mode,
            )
        )

    def request_mount_page(
        self,
        widgets: list,
        actions: list,
        end_program: bool,
        reactive_polling_interval: int,
        steps_info: Optional[contract.StepsInfo],
    ) -> None:
        self._user_code_send(
            contract.FormMountPageMessage(
                widgets,
                actions,
                end_program,
                reactive_polling_interval,
                steps_info,
                self._production_mode,
            )
        )

    def request_page_update(
        self, widgets: list, validation: contract.ValidationResult, event_seq: int
    ) -> None:
        self._user_code_send(
            contract.FormUpdatePageMessage(
                widgets, validation, event_seq, self._production_mode
            )
        )

    def get_query_params(self) -> Dict[str, str]:
        return self.context.request.query_params

    def request_auth(self, refresh: bool = False):
        self._user_code_send(
            contract.AuthRequireInfoMessage(refresh, self._production_mode)
        )
        return self._wait_for_message("auth:saved-jwt")

    def handle_invalid_jwt(self):
        self._user_code_send(contract.AuthInvalidJWTMessage(self._production_mode))

    def handle_valid_jwt(self):
        self._user_code_send(contract.AuthValidJWTMessage(self._production_mode))

    def request_execute_js(self, code: str, context: dict):
        self._user_code_send(
            contract.ExecuteJSRequestMessage(code, context, self._production_mode)
        )
        data = self._wait_for_message("execute-js:response")
        return data.get("value")

    def request_redirect(
        self, url: str, query_params: Optional[Dict[str, str]]
    ) -> None:
        _query_params = query_params if query_params is not None else {}
        self._user_code_send(contract.RedirectRequestMessage(url, _query_params))

    def next_user_message(self) -> Dict:
        return self._wait_for_message("form:navigation", "form:input")

    ## Target controller

    def handle_start(self, execution_id: str):
        self._wait_for_message("execution:start")
        self._send(contract.ExecutionStartedMessage(execution_id))

    def handle_failure(self, e: Exception):
        close_dto = contract.CloseDTO(exit_status="EXCEPTION", exception=e)
        self._send(contract.ExecutionEndedMessage(close_dto, self._production_mode))

    def handle_success(self):
        close_dto = contract.CloseDTO(exit_status="SUCCESS")
        self._send(contract.ExecutionEndedMessage(close_dto, self._production_mode))

    ## Testing

    @property
    def is_test(self):
        return len(self.context.mock_execution.test_answers) > 0

    def get_next_answer(self):
        test_answers = self.context.mock_execution.test_answers
        for i, value in enumerate(test_answers):
            if value is not None:
                self.context.mock_execution.test_answers[i] = None
                return value
        raise ValueError("Not enough test answers")
