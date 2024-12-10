from typing import Dict, List, Union

import flask
from pydantic import Field

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


class HookContext(Serializable):
    request: Request
    response: Response
    sent_tasks: List[str] = Field(default_factory=list)
    legacy_thread_data: dict = Field(default_factory=dict)


class FormContext(Serializable):
    request: Request
    sent_tasks: List[str] = Field(default_factory=list)
    legacy_thread_data: dict = Field(default_factory=dict)


class ScriptContext(Serializable):
    task_id: str
    sent_tasks: List[str] = Field(default_factory=list)
    legacy_thread_data: dict = Field(default_factory=dict)


class JobContext(Serializable):
    sent_tasks: List[str] = Field(default_factory=list)
    legacy_thread_data: dict = Field(default_factory=dict)


ClientContext = Union[HookContext, FormContext, ScriptContext, JobContext]


def extract_flask_request(request: flask.Request) -> Request:
    return Request(
        headers=filter_non_string_values(request.headers),
        body=request.get_data(as_text=True),
        query_params={**request.args},
        method=request.method,
    )
