import traceback

from ...session import LiveSession
from ...api.classes import FormJSON
from ...contract import forms_contract
from .message_handler import MessageBroker

from abstra.forms.debug_utils import CloseDTO, traceback_to_infos


def run_form(session: LiveSession, formJSON: FormJSON, code: str):
    namespace: dict = {}
    close_dto = CloseDTO(exit_code=0)
    broker = MessageBroker(session)
    session.context.update(broker=broker)
    session.send(forms_contract.SessionIdMessage(session.id))

    try:
        exec(code, namespace, namespace)
    except Exception as e:
        traceback.print_exc()
        close_dto.frames = traceback_to_infos(e.__traceback__)
        close_dto.exception = e.__str__()
        close_dto.exit_code = 1
    finally:
        broker.close(close_dto)
