import requests

from abstra_internals.contracts_generated import (
    CloudApiCliApiKeyInfoResponse,
    CloudApiCliBuildCreateResponse,
)
from abstra_internals.environment import CLOUD_API_ENDPOINT
from abstra_internals.logger import AbstraLogger


def create_build(headers: dict) -> CloudApiCliBuildCreateResponse:
    url = f"{CLOUD_API_ENDPOINT}/cli/builds"
    data = requests.post(url=url, headers=headers).json()
    return CloudApiCliBuildCreateResponse.from_dict(data)


def update_build(build_id: str, headers: dict):
    url = f"{CLOUD_API_ENDPOINT}/cli/builds/{build_id}"
    requests.patch(url=url, headers=headers)


def get_api_key_info(headers: dict) -> dict:
    url = f"{CLOUD_API_ENDPOINT}/cli/api-keys/info"
    try:
        response = requests.get(url, headers=headers)
    except Exception as e:
        AbstraLogger.capture_exception(e)
        return {"logged": False, "reason": "CONNECTION_ERROR"}
    if response.ok:
        response_data = CloudApiCliApiKeyInfoResponse.from_dict(response.json())
        return {"logged": True, "info": response_data.to_dict()}
    else:
        return {"logged": False, "reason": "INVALID_API_TOKEN"}


def get_ai_messages(messages, stage, thread_id, headers: dict):
    url = f"{CLOUD_API_ENDPOINT}/cli/ai/messages"
    body = {"messages": messages, "runtime": stage, "threadId": thread_id}
    return requests.post(url, headers=headers, json=body, stream=True).iter_content(
        chunk_size=None
    )


def generate_project(prompt: str, abstra_json_version: str, headers: dict):
    url = f"{CLOUD_API_ENDPOINT}/cli/ai/generate"
    body = {"prompt": prompt, "version": abstra_json_version}
    return requests.post(url, headers=headers, json=body).json()


def create_thread(headers: dict):
    url = f"{CLOUD_API_ENDPOINT}/cli/ai/thread"
    return requests.post(url, headers=headers).json()


def get_project_info(headers):
    url = f"{CLOUD_API_ENDPOINT}/cli/project"
    return requests.get(url, headers=headers).json()
