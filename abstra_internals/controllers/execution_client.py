import abc
from typing import Dict, List, Literal, Optional, TypedDict

import flask_sock

from abstra_internals.compatibility import compat_traceback
from abstra_internals.contract import forms_contract
from abstra_internals.contract.forms import BrowserMessageTypes
from abstra_internals.entities.execution import RequestContext
from abstra_internals.utils import deserialize, serialize
from abstra_internals.utils.pthread_store import PThreadStore


class ClientAbandoned(Exception):
    pass


class Response(TypedDict):
    status: int
    body: str
    headers: Dict[str, str]


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
    def handle_stdio(self, event: Literal["stdout", "stderr"], text: str) -> None:
        raise NotImplementedError()

    @abc.abstractmethod
    def handle_start(self, execution_id: str):
        raise NotImplementedError()

    @abc.abstractmethod
    def handle_unset_thread(self):
        raise NotImplementedError()


class BasicClient(ExecutionClient):
    def handle_lock_failed(self, status: str) -> None:
        pass

    def handle_failure(self, e: Exception) -> None:
        pass

    def handle_success(self) -> None:
        pass

    def handle_stdio(self, event: Literal["stdout", "stderr"], text: str) -> None:
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
        self.response["status"] = status
        self.response["body"] = body
        self.response["headers"] = headers

    def get_request(self) -> RequestContext:
        return self.request_context

    def handle_stdio(self, event: Literal["stdout", "stderr"], text: str) -> None:
        pass

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
        self._ws = ws
        self._request_context = request_context
        self._production_mode = production_mode

    def request_mount_page(
        self,
        widgets: list,
        actions: list,
        end_program: bool,
        reactive_polling_interval: int,
        steps_info: Optional[List],
    ) -> None:
        self._send(
            forms_contract.FormMountPageMessage(
                widgets,
                actions,
                end_program,
                reactive_polling_interval,
                steps_info,
            )
        )

    def request_page_update(
        self, widgets: list, validation: forms_contract.ValidationResult, event_seq: int
    ) -> None:
        self._send(forms_contract.FormUpdatePageMessage(widgets, validation, event_seq))

    def get_query_params(self) -> Dict[str, str]:
        return self._request_context.get("query_params", {})

    def request_auth(self, refresh: bool = False):
        self._send(forms_contract.AuthRequireInfoMessage(refresh=refresh))
        return self.wait_for_message("auth:saved-jwt")

    def handle_invalid_jwt(self):
        self._send(forms_contract.AuthInvalidJWTMessage())

    def handle_valid_jwt(self):
        self._send(forms_contract.AuthValidJWTMessage())

    def request_execute_js(self, code: str, context: dict = {}):
        self._send(forms_contract.ExecuteJSRequestMessage(code, context))
        data = self.wait_for_message("execute-js:response")
        return data.get("value")

    def request_redirect(
        self, url: str, query_params: Optional[Dict[str, str]]
    ) -> None:
        _query_params = query_params if query_params is not None else {}
        self._send(forms_contract.RedirectRequestMessage(url, _query_params))

    def handle_success(self):
        close_dto = forms_contract.CloseDTO(exit_status="SUCCESS")
        try:
            self._send(forms_contract.ExecutionEndedMessage(close_dto))
        except ClientAbandoned:
            pass

    def handle_start(self, execution_id: str):
        self.wait_for_message("execution:start")
        self._send(forms_contract.ExecutionStartedMessage(execution_id))

    def handle_unset_thread(self):
        self.handle_failure(Exception("Thread was unset"))

    def handle_failure(self, e: Exception):
        stdio_msg = forms_contract.ExecutionStdioMessage(
            "stderr",
            "".join(
                compat_traceback.format_exception(e),
            ),
        )
        try:
            self._send(stdio_msg)
            close_dto = forms_contract.CloseDTO(exit_status="EXCEPTION", exception=e)
            self._send(forms_contract.ExecutionEndedMessage(close_dto))
        except ClientAbandoned:
            pass

    def handle_lock_failed(self, status: str) -> None:
        self._send(forms_contract.ExecutionLockFailedMessage(status))

    def handle_stdio(self, event: Literal["stdout", "stderr"], text: str) -> None:
        if self._production_mode:
            return

        self._send(forms_contract.ExecutionStdioMessage(event, text))

    def _receive_message(self):
        try:
            str_data = self._ws.receive()
            deserialized = deserialize(str_data)
            if not isinstance(deserialized, dict):
                raise ValueError("Invalid message format")
            return deserialized
        except flask_sock.ConnectionClosed:
            raise ClientAbandoned()

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

    def _send(self, msg: forms_contract.Message) -> None:
        str_data = serialize(msg.to_json())
        try:
            self._ws.send(str_data)
        except flask_sock.ConnectionClosed:
            raise ClientAbandoned()


class ClientTypeMismatch(Exception):
    pass


class ClientNotFound(Exception):
    pass


class ExecutionClientStore:
    store: PThreadStore[ExecutionClient] = PThreadStore()

    @classmethod
    def set(cls, client: ExecutionClient):
        cls.store.set(client)

    @classmethod
    def get(cls) -> ExecutionClient:
        client = cls.store.get()
        if not client:
            raise ClientNotFound()
        return client

    @classmethod
    def get_hook_client(cls) -> HookClient:
        client = cls.get()
        if not isinstance(client, HookClient):
            raise ClientTypeMismatch
        return client

    @classmethod
    def get_form_client(cls) -> FormClient:
        client = cls.get()
        if not isinstance(client, FormClient):
            raise ClientTypeMismatch
        return client

    @classmethod
    def clear(cls):
        cls.store.clear()
