import abc
from typing import Dict, List, Optional, TypedDict

import flask_sock

from abstra_internals.contract import forms_contract
from abstra_internals.contract.forms import BrowserMessageTypes
from abstra_internals.entities.execution import RequestContext
from abstra_internals.utils import deserialize, serialize


class ClientAbandoned(Exception):
    pass


class Response(TypedDict):
    headers: Dict[str, str]
    status: int
    body: str


class ExecutionClient(abc.ABC):
    @abc.abstractmethod
    def handle_lock_failed(self, status: str) -> None:
        raise NotImplementedError()

    @abc.abstractmethod
    def handle_failure(self, e: Exception) -> None:
        raise NotImplementedError()

    @abc.abstractmethod
    def handle_success(self) -> None:
        raise NotImplementedError()

    @abc.abstractmethod
    def handle_start(self, execution_id: str):
        raise NotImplementedError()

    @abc.abstractmethod
    def handle_unset_thread(self):
        raise NotImplementedError()


# TODO: inherit all clients from BasicClient - same constructor
class BasicClient(ExecutionClient):
    def handle_lock_failed(self, status: str) -> None:
        pass

    def handle_failure(self, e: Exception) -> None:
        pass

    def handle_success(self) -> None:
        pass

    def handle_start(self, execution_id: str):
        pass

    def handle_unset_thread(self):
        pass


class HookClient(ExecutionClient):
    def __init__(self, request_context: RequestContext) -> None:
        self.response = Response(status=200, body="", headers={})
        self.request_context = request_context

    def handle_lock_failed(self, status: str) -> None:
        self.response["status"] = 423
        pass

    def handle_failure(self, e: Exception) -> None:
        self.response["status"] = 500
        self.response["body"] = "An exception occurred during execution."
        pass

    def handle_success(self) -> None:
        pass

    def set_response(self, status: int, body: str, headers: Dict[str, str]) -> None:
        self.response["headers"] = headers
        self.response["status"] = status
        self.response["body"] = body

    def get_request(self) -> RequestContext:
        return self.request_context

    def handle_start(self, execution_id: str):
        pass

    def handle_unset_thread(self):
        self.response["status"] = 423


class FormClient(ExecutionClient):
    def __init__(
        self,
        ws: flask_sock.Server,
        request_context: RequestContext,
        production_mode: bool,
    ) -> None:
        self._request_context = request_context
        self._production_mode = production_mode
        self._ws = ws

    def request_mount_page(
        self,
        widgets: list,
        actions: list,
        end_program: bool,
        reactive_polling_interval: int,
        steps_info: Optional[List],
    ) -> None:
        self._user_code_send(
            forms_contract.FormMountPageMessage(
                widgets,
                actions,
                end_program,
                reactive_polling_interval,
                steps_info,
                self._production_mode,
            )
        )

    def request_page_update(
        self, widgets: list, validation: forms_contract.ValidationResult, event_seq: int
    ) -> None:
        self._user_code_send(
            forms_contract.FormUpdatePageMessage(
                widgets, validation, event_seq, self._production_mode
            )
        )

    def get_query_params(self) -> Dict[str, str]:
        return self._request_context.get("query_params", {})

    def request_auth(self, refresh: bool = False):
        self._user_code_send(
            forms_contract.AuthRequireInfoMessage(refresh, self._production_mode)
        )
        return self.wait_for_message("auth:saved-jwt")

    def handle_invalid_jwt(self):
        self._user_code_send(
            forms_contract.AuthInvalidJWTMessage(self._production_mode)
        )

    def handle_valid_jwt(self):
        self._user_code_send(forms_contract.AuthValidJWTMessage(self._production_mode))

    def request_execute_js(self, code: str, context: dict = {}):
        self._user_code_send(
            forms_contract.ExecuteJSRequestMessage(code, context, self._production_mode)
        )
        data = self.wait_for_message("execute-js:response")
        return data.get("value")

    def request_redirect(
        self, url: str, query_params: Optional[Dict[str, str]]
    ) -> None:
        _query_params = query_params if query_params is not None else {}
        self._user_code_send(
            forms_contract.RedirectRequestMessage(
                url, _query_params, self._production_mode
            )
        )

    def handle_success(self):
        close_dto = forms_contract.CloseDTO(exit_status="SUCCESS")
        self._send(
            forms_contract.ExecutionEndedMessage(close_dto, self._production_mode)
        )

    def handle_start(self, execution_id: str):
        self.wait_for_message("execution:start")
        self._send(
            forms_contract.ExecutionStartedMessage(execution_id, self._production_mode)
        )

    def handle_unset_thread(self):
        self.handle_failure(Exception("Thread was unset"))

    def handle_failure(self, e: Exception):
        close_dto = forms_contract.CloseDTO(exit_status="EXCEPTION", exception=e)
        self._send(
            forms_contract.ExecutionEndedMessage(close_dto, self._production_mode)
        )

    def handle_lock_failed(self, status: str) -> None:
        self._send(
            forms_contract.ExecutionLockFailedMessage(status, self._production_mode)
        )

    def wait_for_message(
        self, target_type: Optional[BrowserMessageTypes] = None
    ) -> Dict:
        ignored_types = ["execution:heartbeat", "debug:close-attempt"]

        while True:
            message = self._receive_message()
            message_type = message.get("type")

            if message_type in ignored_types:
                continue
            if target_type and message_type != target_type:
                continue

            return message

    # WEBSOCKET

    def _receive_message(self):
        try:
            str_data = self._ws.receive()
            deserialized = deserialize(str_data)
            if not isinstance(deserialized, dict):
                raise ValueError("Invalid message format")
            return deserialized
        except flask_sock.ConnectionClosed:
            raise ClientAbandoned()

    def _send(self, msg: forms_contract.Message) -> None:
        str_data = serialize(msg.to_json())
        try:
            self._ws.send(str_data)
        except flask_sock.ConnectionClosed:
            pass

    def _user_code_send(self, msg: forms_contract.Message) -> None:
        str_data = serialize(msg.to_json())
        try:
            self._ws.send(str_data)
        except flask_sock.ConnectionClosed:
            raise ClientAbandoned()
