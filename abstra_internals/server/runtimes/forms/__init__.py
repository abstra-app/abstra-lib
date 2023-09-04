import traceback, flask_sock, typing, pathlib
from pathlib import Path
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
    root_path: Path,
    session_id: typing.Optional[str] = None,
):
    session = LiveSession(conn, "forms", form_json.path)
    if session_id is not None:
        session.id = session_id

    code_file_path = form_json.file
    code = pathlib.Path(code_file_path).read_text()

    namespace: dict = {}
    close_dto = forms_contract.CloseDTO(exit_code=0)
    __wait_start(session)
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
