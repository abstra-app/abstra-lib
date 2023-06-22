import sys
from abstra import dashes as abstra_dashes
from abstra import hooks as abstra_hooks
from abstra import forms as abstra_forms

from abstra.forms.overloads import overload_to_widgets

from . import flows
from .contract import dashes_contract
from .session import LiveSession, StaticSession, Execution
from .runtimes.forms.message_handler import MessageBroker


def get_live_session_throwable() -> LiveSession:
    session = LiveSession.get_session()
    if not session:
        raise Exception("No session found")
    return session


def get_static_session_throwable() -> StaticSession:
    session = StaticSession.get_session()
    if not session:
        raise Exception("No session found")
    return session


def __overload_abstra_dashes_sdk():
    def get_user():
        session = get_live_session_throwable()
        return flows.get_user(session)

    def redirect(url, query_params=None):
        session = get_live_session_throwable()
        query_params = query_params or session.context.get("query_params", {})
        session.send(dashes_contract.RedirectMessage(url, query_params))

    def get_query_params():
        session = get_live_session_throwable()
        return session.context.get("query_params", {})

    def alert(message, severity="info"):
        session = get_live_session_throwable()

        if severity not in ["info", "warn", "error", "success"]:
            severity = "info"

        session.send(dashes_contract.AlertMessage(message, severity))

    def execute_js(code, context={}):
        session = get_live_session_throwable()
        session.send(dashes_contract.ExecuteJSRequestMessage(code, context))

        while True:
            type, data = session.recv()
            if type != "execute-js:response":
                continue

            return data.get("value")

    abstra_dashes.get_user = get_user
    abstra_dashes.redirect = redirect
    abstra_dashes.get_query_params = get_query_params
    abstra_dashes.alert = alert
    abstra_dashes.execute_js = execute_js


def __overload_abstra_hooks_sdk():
    def get_raw_request(_file=None):
        session = get_static_session_throwable()
        raw, args, headers = session.context.get("request")
        return raw, args, headers

    def send_response(body="", status_code=200, headers={}, local_file=None):
        session = get_static_session_throwable()
        session.context["response"] = (
            body,
            status_code,
            headers,
        )

    abstra_hooks.get_raw_request = get_raw_request
    abstra_hooks.send_response = send_response


def __overload_abstra_forms_sdk():
    def get_connection() -> MessageBroker:
        session = get_live_session_throwable()
        broker = session.context.get("broker")
        if not broker:
            raise Exception("No broker found")

        return broker

    def get_user():
        session = get_live_session_throwable()
        return flows.get_user(session)

    abstra_forms.socket.get_connection = get_connection
    abstra_forms.auth.get_user = get_user


def __overload_stdio():
    def writeWraper(type, write, text):
        try:
            write(text)
            execution = Execution.get_execution()
            if execution:
                execution.stdio(type, text)
        finally:
            return len(text)

    stdout_write = sys.stdout.write
    stderr_write = sys.stderr.write

    sys.stdout.write = lambda text: writeWraper("stdout", stdout_write, text)
    sys.stderr.write = lambda text: writeWraper("stderr", stderr_write, text)


def overloads():
    overload_to_widgets()
    __overload_stdio()

    # TODO: remove overloads from sdk and just put the code there
    __overload_abstra_dashes_sdk()
    __overload_abstra_hooks_sdk()
    __overload_abstra_forms_sdk()
