from ....contract import Message
from ....execution.form_execution import get_form_execution_throwable


def send(message: Message):
    execution = get_form_execution_throwable()
    return execution.send(message)


def receive():
    execution = get_form_execution_throwable()
    return execution.receive()
