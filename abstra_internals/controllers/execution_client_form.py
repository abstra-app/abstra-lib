import time
from dataclasses import dataclass, field
from queue import Empty, PriorityQueue, Queue
from threading import Event, Thread
from typing import Dict, List, Optional

import flask_sock

from abstra_internals.contract import forms_contract
from abstra_internals.contract.forms import BrowserMessageTypes
from abstra_internals.controllers.execution_client import ExecutionClient
from abstra_internals.entities.execution import RequestContext
from abstra_internals.utils import deserialize, serialize

FORM_RECONNECT_WINDOW = 120
POLLING_EGRESS_TIMEOUT = 2
POLLING_WAIT_INTERVAL = 2


class ClientAbandoned(Exception):
    pass


class FormWebsocketReasons:
    FrontendRestart = 4000
    LockFailed = 4101
    UnsetThread = 4102
    ReconnectFailed = 4103
    ReconnectedElsewhere = 4104
    FormNotFound = 4105


@dataclass(order=True)
class PriorityMessage:
    priority: int
    message: forms_contract.Message = field(compare=False)


class FormClient(ExecutionClient):
    _ws: Optional[flask_sock.Server] = None
    _egress_seq = 0

    def __init__(
        self,
        request_context: RequestContext,
        production_mode: bool,
    ) -> None:
        self._request_context = request_context
        self._production_mode = production_mode

        self.egress_queue = PriorityQueue()  # multiprocessing.PriorityQueue
        self.ingress_queue = Queue()  # multiprocessing.JoinableQueue
        self.done_event = Event()  # multiprocessing.Event

    def _receive_message(self):
        try:
            return self.ingress_queue.get(timeout=FORM_RECONNECT_WINDOW)
        except Empty:
            raise ClientAbandoned()

    def _send_message(self, msg: forms_contract.Message) -> None:
        priority_message = PriorityMessage(self._egress_seq, msg)
        self.egress_queue.put(priority_message)
        self._egress_seq += 1

    # INSIDE

    ## SDK

    def request_mount_page(
        self,
        widgets: list,
        actions: list,
        end_program: bool,
        reactive_polling_interval: int,
        steps_info: Optional[List],
    ) -> None:
        self._send_message(
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
        self._send_message(
            forms_contract.FormUpdatePageMessage(
                widgets, validation, event_seq, self._production_mode
            )
        )

    def get_query_params(self) -> Dict[str, str]:
        return self._request_context.get("query_params", {})

    def request_auth(self, refresh: bool = False):
        self._send_message(
            forms_contract.AuthRequireInfoMessage(refresh, self._production_mode)
        )
        return self._wait_for_message("auth:saved-jwt")

    def handle_invalid_jwt(self):
        self._send_message(forms_contract.AuthInvalidJWTMessage(self._production_mode))

    def handle_valid_jwt(self):
        self._send_message(forms_contract.AuthValidJWTMessage(self._production_mode))

    def request_execute_js(self, code: str, context: dict = {}):
        self._send_message(
            forms_contract.ExecuteJSRequestMessage(code, context, self._production_mode)
        )
        data = self._wait_for_message("execute-js:response")
        return data.get("value")

    def request_redirect(
        self, url: str, query_params: Optional[Dict[str, str]]
    ) -> None:
        _query_params = query_params if query_params is not None else {}
        self._send_message(
            forms_contract.RedirectRequestMessage(
                url, _query_params, self._production_mode
            )
        )

    def next_message(self) -> Dict:
        return self._wait_for_message("form:page-response", "form:user-event")

    def _wait_for_message(self, *target_types: BrowserMessageTypes) -> Dict:
        ignored_types = ["execution:heartbeat", "debug:close-attempt"]

        while True:
            message = self._receive_message()
            message_type = message.get("type")

            if message_type in ignored_types or message_type not in target_types:
                continue

            return message

    ## Execution Target

    def handle_start(self, execution_id: str):
        self._send_message(
            forms_contract.ExecutionStartedMessage(execution_id, self._production_mode)
        )

    def _done(self):
        self.done_event.set()

    def _empty_egress(self):
        while True:
            try:
                self.egress_queue.task_done()
            except ValueError:
                break

    def handle_failure(self, e: Exception):
        close_dto = forms_contract.CloseDTO(exit_status="EXCEPTION", exception=e)
        self._send_message(
            forms_contract.ExecutionEndedMessage(close_dto, self._production_mode)
        )
        self._done()
        self._empty_egress()

    def handle_success(self):
        close_dto = forms_contract.CloseDTO(exit_status="SUCCESS")
        self._send_message(
            forms_contract.ExecutionEndedMessage(close_dto, self._production_mode)
        )
        self._done()

    # OUTSIDE

    ## Routes

    def sync_and_wait(self, ws: flask_sock.Server):
        if self._ws:
            if self._ws.connected:
                self._ws.close(reason=FormWebsocketReasons.ReconnectedElsewhere)

            ws.send(
                serialize(
                    forms_contract.ExecutionReconnectedMessage(
                        self._production_mode
                    ).to_dict()
                )
            )

        self._ws = ws
        Thread(target=_egress, name="egress", args=(ws, self)).start()
        Thread(target=_ingress, name="ingress", args=(ws, self)).start()
        _wait(ws, self)


def _egress(ws: flask_sock.Server, client: FormClient):
    while True:
        try:
            p_message: PriorityMessage = client.egress_queue.get(
                timeout=POLLING_EGRESS_TIMEOUT
            )
        except Empty:
            if ws.connected:
                continue
            break

        try:
            ws.send(serialize(p_message.message.to_dict()))
            client.egress_queue.task_done()
        except ValueError:
            break
        except flask_sock.ConnectionClosed:
            client.egress_queue.put(p_message)
            break


def _ingress(ws: flask_sock.Server, client: FormClient):
    while True:
        try:
            message = ws.receive()
        except flask_sock.ConnectionClosed:
            break

        client.ingress_queue.put(deserialize(message))


def _wait(ws: flask_sock.Server, client: FormClient):
    while True:
        if not ws.connected:
            break

        if client.done_event.is_set():
            client.egress_queue.join()
            break

        time.sleep(POLLING_WAIT_INTERVAL)
