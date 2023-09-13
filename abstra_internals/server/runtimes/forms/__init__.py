import traceback, flask_sock, typing
from ....session import LiveSession
from ...api.classes import FormJSON
from ....contract import forms_contract


def __wait_start(session: LiveSession):
    type = None
    while type != "start":
        type, data = session.recv()
    return data["params"]


def run_form(
    conn: flask_sock.Server,
    form_json: FormJSON,
    session_id: typing.Optional[str] = None,
):
    code = form_json.file_path.read_text(encoding="utf-8")
    session = LiveSession(conn, "forms", form_json.path)
    if session_id is not None:
        session.id = session_id

    namespace: dict = {}
    close_dto = forms_contract.CloseDTO(exit_code=0)
    session.context["query_params"] = __wait_start(session)
    session.send(forms_contract.SessionIdMessage(session.id))

    try:
        exec(code, namespace, namespace)
    except Exception as e:
        traceback.print_exc()
        close_dto.exception = e.__str__()
        close_dto.exit_code = 1
    finally:
        session.send(forms_contract.CloseMessage(close_dto))
        session.close()
