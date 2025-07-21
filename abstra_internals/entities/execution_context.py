from typing import Dict, List, Optional, Union

import flask
from pydantic import Field

from abstra_internals.repositories.tasks import TaskDTO
from abstra_internals.utils.dict import filter_non_string_values
from abstra_internals.utils.serializable import Serializable


class Request(Serializable):
    query_params: Dict[str, str]
    headers: Dict[str, str]
    method: str
    body: str


class Response(Serializable):
    headers: Dict[str, str]
    status: int
    body: str


class ExecutionMock(Serializable):
    test_pending_tasks: List[TaskDTO] = Field(default_factory=list)


class HookExecutionMock(ExecutionMock):
    test_request: Optional[Request] = None


class FormExecutionMock(ExecutionMock):
    test_answers: List[Union[str, None]] = Field(default_factory=list)


class ScriptExecutionMock(ExecutionMock):
    test_trigger_task: Optional[TaskDTO] = None


class JobExecutionMock(ExecutionMock):
    pass


class HookContext(Serializable):
    request: Request
    response: Response
    sent_tasks: List[str] = Field(default_factory=list)
    legacy_thread_data: dict = Field(default_factory=dict)
    mock_execution: HookExecutionMock = Field(default_factory=HookExecutionMock)


class FormContext(Serializable):
    request: Request
    sent_tasks: List[str] = Field(default_factory=list)
    legacy_thread_data: dict = Field(default_factory=dict)
    mock_execution: FormExecutionMock = Field(default_factory=FormExecutionMock)


class ScriptContext(Serializable):
    task_id: str
    sent_tasks: List[str] = Field(default_factory=list)
    legacy_thread_data: dict = Field(default_factory=dict)
    mock_execution: ScriptExecutionMock = Field(default_factory=ScriptExecutionMock)


class JobContext(Serializable):
    sent_tasks: List[str] = Field(default_factory=list)
    legacy_thread_data: dict = Field(default_factory=dict)
    mock_execution: JobExecutionMock = Field(default_factory=JobExecutionMock)


ClientContext = Union[HookContext, FormContext, ScriptContext, JobContext]


def extract_flask_request(request: flask.Request) -> Request:
    return Request(
        headers=filter_non_string_values(request.headers),
        body=request.get_data(as_text=True),
        query_params={**request.args},
        method=request.method,
    )
